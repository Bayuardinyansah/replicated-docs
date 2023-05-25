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
    'intro-replicated',
    {
      type: 'category',
      label: 'Getting Started Tutorials',
      items: [
        {
          type: 'category',
          label: 'UI Tutorial',
          items: [
            'vendor/tutorial-ui-setup',
            'vendor/tutorial-ui-create-app',
            'vendor/tutorial-ui-create-release',
            'vendor/tutorial-ui-create-customer',
            'vendor/tutorial-ui-install-app-manager',
            'vendor/tutorial-ui-deploy-app',
            'vendor/tutorial-ui-create-new-version',
            'vendor/tutorial-ui-update-app',
          ],
        },
        {
          type: 'category',
          label: 'CLI Tutorial',
          items: [
            'vendor/tutorial-cli-setup',
            'vendor/tutorial-cli-install-cli',
            'vendor/tutorial-cli-create-app',
            'vendor/tutorial-cli-manifests',
            'vendor/tutorial-cli-create-release',
            'vendor/tutorial-cli-create-customer',
            'vendor/tutorial-cli-install-app-manager',
            'vendor/tutorial-cli-deploy-app',
            'vendor/tutorial-cli-create-new-version',
            'vendor/tutorial-cli-update-app',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Vendor Portal Team Management',
      items: [
        'vendor/vendor-portal-creating-account',
        'vendor/team-management',
        'vendor/team-management-github-username',
        {
           type: 'category',
           label: 'Configuring Role-based Access Control',
           items: [
              'vendor/team-management-rbac-configuring',
              'vendor/team-management-rbac-resource-names',
          ],
        },
        {
          type: 'category',
          label: 'Configuring Authentication',
          items: [
            'vendor/team-management-two-factor-auth',
            'vendor/team-management-google-auth',
            'vendor/team-management-saml-auth',
         ],
       },
        'vendor/custom-domains',
      ],
    },
    {
      type: 'category',
      label: 'Channels and Releases',
      items: [
        'vendor/releases-about',
        'vendor/releases-about-channels',
        'vendor/releases-creating-channels',
        'vendor/helm-release-creating-package',
        'vendor/releases-creating-releases',
        'vendor/releases-creating-cli',
        {
          type: 'category',
          label: 'Integrating with CI/CD',
          items: [
            'vendor/repository-workflow-and-tagging-releases',
            'vendor/tutorial-ci-cd-integration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Helm Chart Deployment',
      items: [
        'vendor/helm-overview',
        'vendor/helm-install',
        'vendor/helm-release',
        'vendor/helm-native-helm-install-order',
        'vendor/helm-optional-charts',
        'vendor/helm-optional-value-keys',
      ],
    },
    {
      type: 'category',
      label: 'Packaging an Application',
      items: [
        {
            type: 'category',
            label: 'Customizing the Configuration Screen',
            items: [
              'vendor/config-screen-about',
              'vendor/admin-console-customize-config-screen',
              'vendor/config-screen-map-inputs',
              'vendor/helm-mapping-example',
          ],
        },
        {
          type: 'category',
          label: 'Adding Persistent Data Stores',
          items: [
            'vendor/database-config-adding-options',
            'vendor/tutorial-adding-db-config',
          ],
        },
        {
          type: 'category',
          label: 'Customizing the Admin Console and Download Portal',
          items: [
            'vendor/admin-console-customize-app-icon',
            'vendor/admin-console-display-app-status',
            'vendor/admin-console-adding-buttons-links',
            'vendor/admin-console-prometheus-monitoring',
          ],
        },
        'vendor/packaging-ingress',
        'vendor/packaging-kots-versions',    
        'vendor/namespaces',
        'vendor/packaging-rbac',
        'vendor/packaging-using-tls-certs',
      ],
    },  
    {
      type: 'category',
      label: 'Private Registries',
      items: [
        'vendor/private-images-about',
        'vendor/packaging-private-images',
        'vendor/private-images-replicated',
        'vendor/helm-image-registry',
        'vendor/private-images-tags-digests',
        'vendor/packaging-private-registry-security',
        'vendor/tutorial-ecr-private-images',
      ],
    },
    {
      type: 'category',
      label: 'Preflights and Support Bundles',
      items: [
        'vendor/preflight-support-bundle-creating',
        'vendor/support-modular-support-bundle-specs',
        'vendor/support-online-support-bundle-specs',
      ],
    },
    {
      type: 'category',
      label: 'Backup and Restore',
      items: [
        'vendor/snapshots-overview',
        'vendor/snapshots-configuring-backups',
        'vendor/snapshots-hooks',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes Installers',
      items: [
        'vendor/packaging-embedded-kubernetes',
        'vendor/packaging-installer-storage',
        'vendor/preflight-host-preflights',
        'vendor/installer-history',
      ],
    },
    {
      type: 'category',
      label: 'Customer Licenses',
      items: [
        'vendor/licenses-about',
        'vendor/licenses-about-types',
        'vendor/releases-creating-customer',
        'vendor/licenses-using-builtin-fields',
        'vendor/licenses-adding-custom-fields',
        'vendor/licenses-referencing-fields',
      ],
    },
    {
      type: 'category',
      label: 'Managing Resources and Objects',
      items: [
        'vendor/packaging-include-resources',
        'vendor/packaging-cleaning-up-jobs',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes Operators',
      items: [
        'vendor/operator-packaging-about',
        'vendor/operator-defining-additional-images',
        'vendor/operator-referencing-images',
        'vendor/operator-defining-additional-namespaces',
      ],
    },
    {
      type: 'category',
      label: 'Distribute Your Application',
      items: [
        'vendor/distributing-workflow',
        'vendor/planning-questionnaire',
        'vendor/releases-sharing-license-install-script',
        'vendor/packaging-air-gap-excluding-minio',
        'vendor/releases-configvalues',
      ],
    },
    {
      type: 'category',
      label: 'Insights and Reporting',
      items: [
         'vendor/instance-insights-event-data',
         'vendor/customer-adoption',
         'vendor/customer-reporting',
         'vendor/instance-insights-details',
       ],
    },
    {
      type: 'category',
      label: 'Replicated Data Storage',
      items: [
        'vendor/data-availability',
        'vendor/offsite-backup'
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'vendor/support-inspecting-support-bundles',
        'vendor/support-submit-request',
        'vendor/support-host-support-bundles',
      ],
    },
    {
      type: 'category',
      label: 'Policies',
      items: [
        'vendor/policies-vulnerability-patch',
        'vendor/policies-support-lifecycle',
        'vendor/policies-data-transmission',
        'vendor/policies-infrastructure-and-subprocessors',
        {
          type: 'link',
          label: 'Security at Replicated',
          href: 'https://www.replicated.com/security/'
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/cron-expressions',
        {
          type: 'category',
          label: 'Custom Resources',
          items: [
            'reference/custom-resource-about',
            'reference/custom-resource-application',
            'reference/custom-resource-backup',
            'reference/custom-resource-config',
            'reference/custom-resource-helmchart-v2',
            'reference/custom-resource-helmchart',
            'reference/custom-resource-lintconfig',
            'reference/custom-resource-preflight',
            'reference/custom-resource-redactor',
            'reference/custom-resource-sig-application',  
          ],
        },
        {
          type: 'category',
          label: 'kots CLI',
          items: [
            'reference/kots-cli-getting-started',
            'reference/kots-cli-global-flags',
            {
                type: 'category',
                label: 'admin console',
                items: [
                  'reference/kots-cli-admin-console-index',
                  'reference/kots-cli-admin-console-garbage-collect-images',
                  'reference/kots-cli-admin-console-generate-manifests',
                  'reference/kots-cli-admin-console-push-images',
                  'reference/kots-cli-admin-console-upgrade',
              ],
            },
            {
              type: 'category',
              label: 'backup',
              items: [
                'reference/kots-cli-backup-index',
                'reference/kots-cli-backup-ls',
              ],
            },
            {
              type: 'category',
              label: 'docker',
              items: [
                'reference/kots-cli-docker-index',
                'reference/kots-cli-docker-ensure-secret',
              ],
            },
            'reference/kots-cli-download',
            'reference/kots-cli-enable-ha',
            {
              type: 'category',
              label: 'get',
              items: [
                'reference/kots-cli-get-index',
                'reference/kots-cli-get-apps',
                'reference/kots-cli-get-backups',
                'reference/kots-cli-get-config',
                'reference/kots-cli-get-restores',
                'reference/kots-cli-get-versions',
              ],
            },
            {
              type: 'category',
              label: 'identity-service',
              items: [
                'reference/kots-cli-identity-service-index',
                'reference/kots-cli-identity-service-enable-shared-password',
              ],
            },
            'reference/kots-cli-install',
            'reference/kots-cli-pull',
            'reference/kots-cli-remove',
            'reference/kots-cli-reset-password',
            'reference/kots-cli-reset-tls',
            {
              type: 'category',
              label: 'restore',
              items: [
                'reference/kots-cli-restore-index',
                'reference/kots-cli-restore-ls',
              ],
            },
            {
                type: 'category',
                label: 'set',
                items: [
                  'reference/kots-cli-set-index',
                  'reference/kots-cli-set-config',
              ],
            },
            'reference/kots-cli-upload',
            {
                type: 'category',
                label: 'upstream',
                items: [
                  'reference/kots-cli-upstream',
                  'reference/kots-cli-upstream-download',
                  'reference/kots-cli-upstream-upgrade',
              ],
            },
            {
                type: 'category',
                label: 'velero',
                items: [
                  
                  'reference/kots-cli-velero-configure-aws-s3',
                  'reference/kots-cli-velero-configure-azure',
                  'reference/kots-cli-velero-configure-gcp',
                  'reference/kots-cli-velero-configure-hostpath',
                  'reference/kots-cli-velero-configure-internal',
                  'reference/kots-cli-velero-configure-nfs',
                  'reference/kots-cli-velero-configure-other-s3',
                  'reference/kots-cli-velero-ensure-permissions',
                  'reference/kots-cli-velero-index',
                  'reference/kots-cli-velero-print-fs-instructions',
              ],
            },
          ],
        },
        'reference/linter',
        {
          type: 'category',
          label: 'replicated CLI',
          items: [
            'reference/replicated-cli-installing',
            'reference/replicated-cli-tokens',
            'reference/replicated-cli-app-create',
            'reference/replicated-cli-app-delete',
            'reference/replicated-cli-app-ls',
            'reference/replicated-cli-channel-create',
            'reference/replicated-cli-channel-delete',
            'reference/replicated-cli-channel-disable-semver',
            'reference/replicated-cli-channel-enable-semver',
            'reference/replicated-cli-channel-inspect',
            'reference/replicated-cli-channel-ls',
            'reference/replicated-cli-customer-create',
            'reference/replicated-cli-customer-download-license',
            'reference/replicated-cli-customer-ls',
            'reference/replicated-cli-installer-create',
            'reference/replicated-cli-installer-ls',
            'reference/replicated-cli-registry-add',
            'reference/replicated-cli-registry-add-dockerhub',
            'reference/replicated-cli-registry-add-ecr',
            'reference/replicated-cli-registry-add-gcr',
            'reference/replicated-cli-registry-add-ghcr',
            'reference/replicated-cli-registry-add-other',
            'reference/replicated-cli-registry-add-quay',
            'reference/replicated-cli-registry-logs',
            'reference/replicated-cli-registry-ls',
            'reference/replicated-cli-registry-rm',
            'reference/replicated-cli-registry-test',
            'reference/replicated-cli-release-create',
            'reference/replicated-cli-release-download',
            'reference/replicated-cli-release-lint',
            'reference/replicated-cli-release-ls',
            'reference/replicated-cli-release-promote',
            'reference/replicated-cli-release-update',
          ],
        },
        {
          type: 'category',
          label: 'Template Functions',
          items: [
            'reference/template-functions-about',
            'reference/template-functions-config-context',
            'reference/template-functions-identity-context',
            'reference/template-functions-kurl-context',
            'reference/template-functions-license-context',
            'reference/template-functions-static-context',
          ],
        },
        {
          type: 'category',
          label: 'Vendor API v3',
          items: [
            {
              type: 'doc',
              id: 'reference/vendor-api-using'
            },
            {
              type: 'link',
              label: 'Vendor API v3 Documentation',
              href: 'https://replicated-vendor-api.readme.io/v3/'
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      className: 'main-section',
      label: 'Release Notes',
      items: [
        'release-notes/rn-whats-new',
        'release-notes/rn-app-manager',
        'release-notes/rn-kubernetes-installer'
      ],
    },
    {
      type: 'category',
      label: 'Enterprise User Documentation',
      items: [
        {
          type: 'category',
          label: 'Installing an Application',
          items: [
            'enterprise/installing-overview',
            'enterprise/installing-general-requirements',
            'enterprise/sbom-validating',
            {
              type: 'category',
              label: 'Installing in Existing Clusters',
              items: [
                'enterprise/installing-existing-cluster',
                'enterprise/installing-existing-cluster-airgapped',
              ],
            },
            {
              type: 'category',
              label: 'Installing with kURL',
              items: [
                'enterprise/installing-embedded-cluster',
                'enterprise/installing-embedded-airgapped',
                'enterprise/cluster-management-add-nodes',
              ],
            },
            
            'enterprise/installing-existing-cluster-automation',
            'enterprise/installing-stateful-component-requirements',
          ],
        },
        {
          type: 'category',
          label: 'Private Registries',
          items: [
            'enterprise/image-registry-settings',
            'enterprise/image-registry-embedded-cluster',
            'enterprise/image-registry-rate-limits',
          ],
        },
        'enterprise/updating-patching-with-kustomize',
        {
          type: 'category',
          label: 'Updating',
          items: [
            'enterprise/updating-apps',
            'enterprise/updating-app-manager',
            'enterprise/updating-embedded-cluster',
            'enterprise/updating-licenses',
            'enterprise/updating-tls-cert',
          ],
        },
        {
          type: 'category',
          label: 'GitOps',
          items: [
            'enterprise/gitops-workflow',
            'enterprise/gitops-managing-secrets',
          ],
        },
        {
          type: 'category',
          label: 'Managing User Access',
          items: [
            'enterprise/auth-changing-passwords',
            'enterprise/auth-identity-provider',
            'enterprise/auth-configuring-rbac',
          ],
        },
        {
          type: 'category',
          label: 'Monitoring',
          items: [
             'enterprise/monitoring-applications',
             'enterprise/monitoring-external-prometheus',
          ],   
        },
        {
          type: 'category',
          label: 'Backup and Restore',
          items: [
            'enterprise/snapshots-understanding',
            {
              type: 'category',
              label: 'Configuring Backup Storage',
              items: [
                'enterprise/snapshots-velero-cli-installing',
                'enterprise/snapshots-configuring-hostpath',
                'enterprise/snapshots-configuring-nfs',
                'enterprise/snapshots-storage-destinations',
                'enterprise/snapshots-velero-installing-config',
              ],
            },
            'enterprise/snapshots-creating',
            'enterprise/snapshots-restoring-full',
            'enterprise/snapshots-updating-with-admin-console',
            'enterprise/snapshots-troubleshooting-backup-restore',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'enterprise/status-viewing-details',
            'enterprise/troubleshooting-an-app',
            'enterprise/delete-admin-console',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
