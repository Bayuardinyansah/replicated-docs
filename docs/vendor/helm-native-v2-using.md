import KotsHelmCrDescription from "../partials/helm/_kots-helm-cr-description.mdx"

# Configuring the HelmChart Custom Resource v2

This topic describes how to configure the Replicated HelmChart custom resource version `kots.io/v1beta2` to support Helm chart installations with Replicated KOTS.

## Overview

<KotsHelmCrDescription/>

For more information about the HelmChart custom resource, including the unique requirements and limitations for the keys described in this topic, see [HelmChart v2](/reference/custom-resource-helmchart-v2).

After you complete the tasks in this topic to configure the `kots.io/v1beta2` HelmChart custom resource, you can migrate any existing installations that were deployed with `kots.io/v1beta1` with `useHelmInstall: true` to use `kots.io/v1beta2` instead. For more information, see [Migrating Existing Installations to HelmChart v2](helm-v2-migrate).

## Workflow

To support installations with the `kots.io/v1beta2` HelmChart custom resource, do the following:
* Rewrite image names so that images can be located in your private registry or in the user's local private registry. See [Rewrite Image Names](#rewrite-image-names).
* Inject a KOTS-generated image pull secret that grants access to private images. See [Inject Image Pull Secrets](#inject-image-pull-secrets).
* Add a pull secret for any Docker Hub images that could be rate limited. See [Add Pull Secret for Rate-Limited Docker Hub Images](#docker-secret).
* Add backup labels to your resources to support backup and restore with the snapshots feature. See [Add Backup Labels for Snapshots](#add-backup-labels-for-snapshots).
* Configure the `builder` key to allow your users to push images to local private registries. The `builder` key is required to support air gap installations. See [Support Local Image Registries](#local-registries).

### Rewrite Image Names

During installation or upgrade with KOTS, any application images in the software vendor's private registry are accessed through the [Replicated proxy registry](private-images-about) at `proxy.replicated.com`. Additionally, KOTS allows enterprise users to push images to their own registry.

To ensure that images are discovered in either your registry or in the enterprise user's local registry, you must configure the HelmChart custom resource so that image names are rewritten in your Helm chart during deployment. You can do this using the KOTS [HasLocalRegistry](/reference/template-functions-config-context#haslocalregistry), [LocalRegistryHost](/reference/template-functions-config-context#localregistryhost), and [LocalRegistryNamespace](/reference/template-functions-config-context#localregistrynamespace) template functions: 
* **HasLocalRegistry**: Returns true if the environment is configured to rewrite images to a local registry. HasLocalRegistry is always true for air gapped installations and optionally true for online installations.
* **LocalRegistryHost**: Returns the host of the local registry that the user configured.
* **LocalRegistryNamespace**: Returns the namespace of the local registry that the user configured.

These template functions can be used to conditionally rewrite images names so that KOTS uses the host and namespace of the enterprise user's local registry _only_ when a local registry is configured. For example, if the user configured a local registry and used the namespace `example-namespace`, then the template function `'{{repl HasLocalRegistry | ternary LocalRegistryNamespace "my-org" }}/mariadb'` evaluates to `example-namespace/mariadb`. If the user did _not_ configure a local registry, then the template function evaluates to `my-org/maridb`. For examples, see [Example: Rewrite private image names](#local-proxy-example) or [Example: Rewrite public images names](#local-public-example) below. 

#### Example: Rewrite private image names {#local-proxy-example}

The following example shows a field in the `values` key that rewrites the registry domain to `proxy.replicated.com` unless the user configured a local registry. Similarly, it shows a field that rewrites the image repository to the path of the image on `proxy.replicated.com` or in the user's local registry:

```yaml
# kots.io/v1beta2 HelmChart custom resource

apiVersion: kots.io/v1beta2
kind: HelmChart
metadata:
  name: samplechart
spec:
  ...
  values:
    image:
      registry: '{{repl HasLocalRegistry | ternary LocalRegistryHost "proxy.replicated.com" }}'
      repository: '{{repl HasLocalRegistry | ternary LocalRegistryNamespace "proxy/my-app/quay.io/my-org" }}/nginx'
      tag: v1.0.1
```

The `spec.values.image.registry` and `spec.values.image.repository` fields in the HelmChart custom resource correspond to `image.registry` and `image.repository` fields in the Helm chart `values.yaml` file, as shown in the example below:

```yaml
# Helm chart values.yaml file

image:
  registry: quay.io
  repository: my-org/nginx
  tag: v1.0.1
```

During installation, KOTS renders the template functions and sets the `image.registry` and `image.repository` fields in your Helm chart `values.yaml` file based on the value of the corresponding fields in the HelmChart custom resource. Any templates in the Helm chart that access the `image.registry` and `image.repository` fields are updated to use the appropriate value, as shown in the example below:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: 
    image: {{ .Values.image.registry }}/{{ .Values.image.repository }}:{{ .Values.image.tag }}
```

#### Example: Rewrite public image names {#local-public-example}

The following example shows a field in the `values` key that rewrites the registry domain to `docker.io` unless the user configured a local registry. Similarly, it shows a field that rewrites the image repository to the path of the public image on `docker.io` or in the user's local registry:

```yaml
# kots.io/v1beta2 HelmChart custom resource

apiVersion: kots.io/v1beta2
kind: HelmChart
metadata:
  name: samplechart
spec:
  ...
  values:
    image: 
      registry: '{{repl HasLocalRegistry | ternary LocalRegistryHost "docker.io" }}' 
      repository: '{{repl HasLocalRegistry | ternary LocalRegistryNamespace "bitnami" }}/mariadb'
      tag: v1.0.1
```

The `spec.values.image.registry` and `spec.values.image.repository` fields in the HelmChart custom resource correspond to `image.registry` and `image.repository` fields in the Helm chart `values.yaml` file, as shown in the example below:

```yaml
# Helm chart values.yaml file

image:
  registry: docker.io
  repository: docker.io/bitnami/mariadb
  tag: v1.0.1
```

During installation, KOTS renders the template functions and sets the `image.registry` and `image.repository` fields in your Helm chart `values.yaml` file based on the value of the corresponding fields in the HelmChart custom resource. Any templates in the Helm chart that access the `image.registry` and `image.repository` fields are updated to use the appropriate value, as shown in the example below:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mariadb
spec:
  containers:
  - name: 
    image: {{ .Values.image.registry }}/{{ .Values.image.repository }}:{{ .Values.image.tag }}
```

### Inject Image Pull Secrets

Kubernetes requires a Secret of type `kubernetes.io/dockerconfigjson` to authenticate with a registry and pull a private image. When you reference a private image in a Pod definition, you also provide the name of the Secret in a `imagePullSecrets` key in the Pod definition. For more information, see [Specifying imagePullSecrets on a Pod](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) in the Kubernetes documentation.

During installation, KOTS creates a `kubernetes.io/dockerconfigjson` type Secret that is based on the customer license. This pull secret grants access to the private image through the Replicated proxy registry or in the Replicated registry. Additionally, if the user configured a local image registry, then the pull secret contains the credentials for the local registry. You must provide the name of this KOTS-generated pull secret in any Pod definitions that reference the private image.

You can inject the name of this pull secret into a field in the HelmChart custom resource using the Replicated ImagePullSecretName template function. During installation, KOTS sets the value of the corresponding field in your Helm chart `values.yaml` file with the rendered value of the ImagePullSecretName template function. 

**Example**

The following example shows a `spec.values.image.pullSecrets` array in the HelmChart custom resource that uses the ImagePullSecretName template function to inject the name of the KOTS-generated pull secret:

```yaml
# kots.io/v1beta2 HelmChart custom resource

apiVersion: kots.io/v1beta2
kind: HelmChart
metadata:
  name: samplechart
spec:
  values:
    image:
      registry: '{{repl HasLocalRegistry | ternary LocalRegistryHost "proxy.replicated.com" }}'
      repository: '{{repl HasLocalRegistry | ternary LocalRegistryNamespace "proxy/my-app/ecr.us-east-1.amazonaws.com/my-org" }}/api'
      pullSecrets:
      - name: '{{repl ImagePullSecretName }}'
```

The `spec.values.image.pullSecrets` array in the HelmChart custom resource corresponds to a `image.pullSecrets` array in the Helm chart `values.yaml` file, as shown in the example below:

```yaml
# Helm chart values.yaml file

image:
  registry: ecr.us-east-1.amazonaws.com
  repository: my-org/api/nginx
  pullSecrets:
  - name: my-org-secret
```

During installation, KOTS renders the ImagePullSecretName template function and adds the rendered pull secret name to the `image.pullSecrets` array in the Helm chart `values.yaml` file. Any templates in the Helm chart that access the `image.pullSecrets` field are updated to use the name of the KOTS-generated pull secret, as shown in the example below:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: {{ .Values.image.registry }}/{{ .Values.image.repository }}
  {{- with .Values.image.pullSecrets }}
  imagePullSecrets:
  {{- toYaml . | nindent 2 }}
  {{- end }}
```

### Add Pull Secret for Rate-Limited Docker Hub Images {#docker-secret}

Docker Hub enforces rate limits for Anonymous and Free users. To avoid errors caused by reaching the rate limit, your users can run the `kots docker ensure-secret` command, which creates an `<app-slug>-kotsadm-dockerhub` secret for pulling Docker Hub images and applies the secret to Kubernetes manifests that have images. For more information, see [Avoiding Docker Hub Rate Limits](/enterprise/image-registry-rate-limits).

If you are deploying a Helm chart with Docker Hub images that could be rate limited, to support the use of the `kots docker ensure-secret` command, any Pod definitions in your Helm chart templates that reference the rate-limited image must be updated to access the `<app-slug>-kotsadm-dockerhub` pull secret, where `<app-slug>` is your application slug. For more information, see [Get the Application Slug](/vendor/vendor-portal-manage-app#slug).

You can do this by adding the `<app-slug>-kotsadm-dockerhub` pull secret to a field in the `values` key of the HelmChart custom resource, along with a matching field in your Helm chart `values.yaml` file. During installation, KOTS sets the value of the matching field in the `values.yaml` file with the `<app-slug>-kotsadm-dockerhub` pull secret, and any Helm chart templates that access the value are updated.

For more information about Docker Hub rate limiting, see [Understanding Docker Hub rate limiting](https://www.docker.com/increase-rate-limits) on the Docker website.

**Example**

The following Helm chart `values.yaml` file includes `image.registry`, `image.repository`, and `image.pullSecrets` for a rate-limited Docker Hub image:

```yaml
# Helm chart values.yaml file

image:
  registry: docker.io
  repository: my-org/example-docker-hub-image
  pullSecrets: []
```

The following HelmChart custom resource includes `spec.values.image.registry`, `spec.values.image.repository`, and `spec.values.image.pullSecrets`, which correspond to those in the Helm chart `values.yaml` file above.

The `spec.values.image.pullSecrets` array lists the `<app-slug>-kotsadm-dockerhub` pull secret, where the slug for the application is `example-app-slug`:

```yaml
# kots.io/v1beta2 HelmChart custom resource

apiVersion: kots.io/v1beta2
kind: HelmChart
metadata:
  name: samplechart
spec:
  values:
    image:
      registry: docker.io
      repository: my-org/example-docker-hub-image
      pullSecrets:
      - name: example-app-slug-kotsadm-dockerhub
```

During installation, KOTS adds the `example-app-slug-kotsadm-dockerhub` secret to the `image.pullSecrets` array in the Helm chart `values.yaml` file. Any templates in the Helm chart that access `image.pullSecrets` are updated to use `example-app-slug-kotsadm-dockerhub`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: example
spec:
  containers:
  - name: example
    image: {{ .Values.image.registry }}/{{ .Values.image.repository }}
  {{- with .Values.image.pullSecrets }}
  imagePullSecrets:
  {{- toYaml . | nindent 2 }}
  {{- end }}
```

### Add Backup Labels for Snapshots

:::note
The Replicated [snapshots](snapshots-overview) feature for backup and restsore is supported only for existing cluster installations with KOTS. Snapshots are not support for installations with Embedded Cluster. For more information about disaster recovery for installations with Embedded Cluster, see [Disaster Recovery for Embedded Cluster](/vendor/embedded-disaster-recovery.mdx).
:::

The snapshots feature requires the following labels on all resources in your Helm chart that you want to be included in the backup:
* `kots.io/backup: velero`
* `kots.io/app-slug: APP_SLUG`, where `APP_SLUG` is the slug of your Replicated application.

For more information about snapshots, see [Understanding Backup and Restore](snapshots-overview).

To support backup and restore with snapshots, add the `kots.io/backup: velero` and `kots.io/app-slug: APP_SLUG` labels to fields under the HelmChart custom resource `optionalValues` key. Add a `when` statement that evaluates to true only when the customer license has the `isSnapshotSupported` entitlement.

The fields that you create under the `optionalValues` key must map to fields in your Helm chart `values.yaml` file. For more information about working with the `optionalValues` key, see [optionalValues](/reference/custom-resource-helmchart-v2#optionalvalues) in _HelmChart v2_.

**Example**

The following example shows how to add backup labels for snapshots in the `optionalValues` key of the HelmChart custom resource:

```yaml
# kots.io/v1beta2 HelmChart custom resource

apiVersion: kots.io/v1beta2
kind: HelmChart
metadata:
  name: samplechart
spec:
  ...
  optionalValues:
  # add backup labels only if the license supports snapshots
  - when: "repl{{ LicenseFieldValue `isSnapshotSupported` }}"
    recursiveMerge: true
    values:
      mariadb:
        commonLabels:
          kots.io/backup: velero
          kots.io/app-slug: repl{{ LicenseFieldValue "appSlug" }}
        podLabels:
          kots.io/backup: velero
          kots.io/app-slug: repl{{ LicenseFieldValue "appSlug" }}
```

### Support Local Image Registries {#local-registries}

Local image registries are required for KOTS installations in air gapped environments. Also, users in online environments can optionally push images to a local registry. For more information about how users configure a local image registry with KOTS, see [Using Private Registries](/enterprise/image-registry-settings).

To support the use of local registries with version `kots.io/v1beta2` of the HelmChart custom resource, provide the necessary values in the builder field to render the Helm chart with all of the necessary images so that KOTS knows where to pull the images from to push them into the local registry.

For more information about how to configure the `builder` key, see [Packaging Air Gap Bundles for Helm Charts](/vendor/helm-packaging-airgap-bundles) and [`builder`](/reference/custom-resource-helmchart-v2#builder) in _HelmChart v2_.

## HelmChart v1 and v2 Differences

The `kots.io/v1beta2` HelmChart custom resource has the following differences from `kots.io/v1beta1`:

<table>
  <tr>
    <th>HelmChart v1beta2</th>
    <th>HelmChart v1beta1</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>apiVersion: kots.io/v1beta2</code></td>
    <td><code>apiVersion: kots.io/v1beta1</code></td>
    <td><code>apiVersion</code> is updated to <code>kots.io/v1beta2</code></td>
  </tr>
  <tr>
    <td><code>releaseName</code></td>
    <td><code>chart.releaseName</code></td>
    <td><code>releaseName</code> is a top level field under <code>spec</code></td>
  </tr>
  <tr>
    <td>N/A</td>
    <td><code>helmVersion</code></td>
    <td><code>helmVersion</code> field is removed</td>
  </tr>
  <tr>
    <td>N/A</td>
    <td><code>useHelmInstall</code></td>
    <td><code>useHelmInstall</code> field is removed</td>
  </tr>
</table>