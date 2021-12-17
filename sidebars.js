/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Vendor',
      items: [
        {
          type: 'category',
          label: 'Quickstarts',
          items: [
            'vendor/quickstart-without-existing-cluster',
            'vendor/quickstart-existing-cluster',
            'vendor/quickstart-cli',
          ],
        },
        {
          type: 'category',
          label: 'Getting started',
          items: [
            'vendor/getting-started-how-to-use-replicated',
            'vendor/getting-started-creating-vendor-account',
            'vendor/vendor-cli-installing',
          ],
        },
        {
          type: 'category',
          label: 'Planning and packaging an application',
          items: [
            'vendor/planning-checklist',
            'vendor/packaging-an-app',
            'vendor/packaging-custom-resources',
            'vendor/packaging-embedded-kubernetes',
            'vendor/packaging-private-images',
            'vendor/packaging-template-functions',
            'vendor/packaging-include-resources',
            'vendor/packaging-ingress',
            'vendor/packaging-using-tls-certs',
            'vendor/packaging-cleaning-up-jobs',
            'vendor/packaging-rbac',
            'vendor/packaging-vulnerability-patch-policy',
            'vendor/identity-service-configuring',
            'vendor/preflight-support-bundle-creating',
            {
              type: 'category',
              label: 'Helm',
              items: [
                'vendor/helm-overview',
                'vendor/helm-chart-components',
                'vendor/helm-applications',
                'vendor/helm-optional-charts',
                'vendor/helm-optional-value-keys',
                'vendor/helm-airgap-builder',
                'vendor/helm-installing-native-helm',
                'vendor/helm-native-helm-install-order',
                'vendor/helm-installing-replicated-helm',
                'vendor/helm-processing',
              ],
            },
            {
                type: 'category',
                label: 'Snapshots',
                items: [
                  'vendor/snapshots-overview',
                  'vendor/snapshots-configuring-backups',
                  'vendor/snapshots-backup-hooks',
              ],
            },
            {
              type: 'category',
              label: 'Customizing the admin console',
              items: [
                'vendor/admin-console-customize-config-screen',
                'vendor/admin-console-customize-app-icon',
                'vendor/admin-console-display-app-status',
                'vendor/admin-console-port-forwarding',
                'vendor/admin-console-prometheus-monitoring',
              ],
            },
            {
              type: 'category',
              label: 'Packaging a Kubernetes Operator application',
              items: [
                'vendor/operator-packaging-about',
                'vendor/operator-defining-additional-images',
                'vendor/operator-referencing-images',
                'vendor/operator-defining-additional-namespaces',
              ],
            },
            ],
          },
        {
          type: 'category',
          label: 'Releasing an application',
          items: [
            'vendor/releases-workflow',
            'vendor/releases-creating-channels',
            'vendor/releases-creating-releases',
            'vendor/releases-promoting',
            'vendor/entitlements-creating-new',
            'vendor/releases-creating-customer',
            'vendor/releases-configuring-download-portal',
            'vendor/releases-updating',
            'vendor/releases-understanding',
            'vendor/licenses-and-entitlements-about',
            'vendor/entitlements-built-in-using',
            'vendor/entitlements-community-using',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'vendor/tutorial-existing-cluster',
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            {
              type: 'category',
              label: 'Custom resources',
              items: [
                'vendor/custom-resource-about',
                'vendor/custom-resource-application',
                'vendor/custom-resource-backup',
                'vendor/custom-resource-config',
                'vendor/custom-resource-helmchart',
                'vendor/custom-resource-identity',
                'vendor/custom-resource-preflight',
                'vendor/custom-resource-redactor',
                'vendor/custom-resource-sig-application',
                'vendor/custom-resource-support-bundle',
              ],
            },
            {
              type: 'category',
              label: 'Template functions',
              items: [
                'vendor/template-functions-about',
                'vendor/template-functions-config-context',
                'vendor/template-functions-identity-context',
                'vendor/template-functions-kurl-context',
                'vendor/template-functions-license-context',
                'vendor/template-functions-static-context',
              ],
            },
          ],
        },
        {
          type: 'link',
          label: 'KOTS CLI Documentation',
          href: 'https://kots.io/kots-cli/getting-started/'
        },
      ],
    },
    {
      type: 'category',
      label: 'Enterprise',
      items: [
        {
          type: 'category',
          label: 'Installing an application',
          items: [
            'enterprise/installing-overview',
            'enterprise/installing-general-requirements',
            {
              type: 'category',
              label: 'Installing on an existing cluster',
              items: [
                'enterprise/installing-existing-cluster-requirements',
                'enterprise/installing-existing-cluster-persistent-storage',
                'enterprise/installing-existing-cluster-online',
                'enterprise/installing-existing-cluster-airgapped',
                'enterprise/installing-existing-cluster-automation',
              ],
            },
            {
              type: 'category',
              label: 'Installing on an embedded cluster with the Kubernetes installer',
              items: [
                'enterprise/installing-embedded-cluster-requirements',
                'enterprise/installing-embedded-cluster',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Updating',
          items: [
            'enterprise/updating-kots-apps',
            'enterprise/updating-admin-console',
            'enterprise/updating-embedded-cluster',
            'enterprise/updating-patching-with-kustomize',
            'enterprise/updating-licenses',
          ],
        },
        {
          type: 'category',
          label: 'Managing user access',
          items: [
            'enterprise/auth-identity-provider',
            'enterprise/auth-configuring-rbac',
          ],
        },
        {
          type: 'doc',
          id: 'enterprise/monitoring-prometheus'
        },
        {
          type: 'category',
          label: 'Snapshots',
          items: [
            'enterprise/snapshots-understanding',
            'enterprise/snapshots-storage-destinations',
            'enterprise/snapshots-configuring-nfs',
            'enterprise/snapshots-configuring-hostpath',
            'enterprise/snapshots-scheduling',
            'enterprise/snapshots-restoring-partial',
            'enterprise/snapshots-configuring-disaster-recovery',
            'enterprise/snapshots-troubleshooting-backup-restore',
          ],
        },
        {
          type: 'doc',
          id: 'enterprise/troubleshooting-an-app'
        },
      ],
    },
  ],
};

module.exports = sidebars;
