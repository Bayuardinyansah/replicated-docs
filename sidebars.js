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

  main: [
    'intro',
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/rn-whats-new',
        'release-notes/rn-app-manager',
        'release-notes/rn-kubernetes-installer',
        'release-notes/rn-replicated-sdk',
        'release-notes/rn-vendor-platform',
      ],
    },

    //GET STARTED
    {type: 'html', value: '<h5>getting started</h5>', defaultStyle: true},
    'intro-replicated',
    'vendor/replicated-onboarding',
    // {
    //   type: 'category',
    //   label: 'Planning',
    //   items: [
    //     'vendor/planning-questionnaire',
    //     'vendor/namespaces',
    //   ],
    // },
    {
      type: 'category',
      label: 'Labs',
      items:
      [
        {type: 'link', href: 'https://play.instruqt.com/embed/replicated/tracks/distributing-with-replicated?token=em_VHOEfNnBgU3auAnN', label: 'Distributing Your Application with Replicated'},
        {type: 'link', href: 'https://play.instruqt.com/embed/replicated/tracks/avoiding-installation-pitfalls?token=em_gJjtIzzTTtdd5RFG', label: 'Avoiding Installation Pitfalls'},
        {type: 'link', href: 'https://play.instruqt.com/embed/replicated/tracks/closing-information-gap?token=em_MO2XXCz3bAgwtEca', label: 'Closing the Support Information Gap'},

      ],

    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Deploy a Helm Chart with KOTS and the Helm CLI',
          items: [
            'vendor/tutorial-kots-helm-setup',
            'vendor/tutorial-kots-helm-get-chart',
            'vendor/tutorial-kots-helm-create-app',
            'vendor/tutorial-kots-helm-package-chart',
            'vendor/tutorial-kots-helm-create-release',
            'vendor/tutorial-kots-helm-create-customer',
            'vendor/tutorial-kots-helm-install-kots',
            'vendor/tutorial-kots-helm-install-helm',
          ],
        },
        {
          type: 'category',
          label: 'KOTS Tutorial (UI)',
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
          label: 'KOTS Tutorial (CLI)',
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
    'vendor/distributing-overview',
    // PRODUCT DOCS
    {type: 'html', value: '<h5>product docs</h5>', defaultStyle: true},
    {
      type: 'category',
      label: 'Vendor Portal Teams and Accounts',
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
        'vendor/team-management-slack-config',
        'vendor/replicated-api-tokens',

      ],
    },
    {
      type: 'category',
      label: 'Applications',
      items: [
        'vendor/vendor-portal-manage-app',
        'vendor/vendor-portal-application-settings',
      ],
    },
    {
      type: 'category',
      label: 'Channels and Releases',
      items: [
        'vendor/releases-about',
        'vendor/releases-creating-channels',
        'vendor/releases-creating-releases',
        'vendor/releases-creating-cli',
        'vendor/helm-install-release',
        'reference/linter',
      ],
    },
    {
      type: 'category',
      label: 'Customer Licenses',
      items: [
        'vendor/licenses-about',
        'vendor/releases-creating-customer',
        'vendor/licenses-adding-custom-fields',
        'vendor/licenses-using-builtin-fields',
        'vendor/licenses-about-types',
        'vendor/licenses-referencing-fields',
        'vendor/licenses-reference-helm',
        'vendor/licenses-verify-fields-sdk-api',
      ],
    },
    {
      type: 'category',
      label: 'Distributing and Installing with KOTS',
      items: [
        'intro-kots',
        'vendor/kots-faq',
        'vendor/distributing-workflow',
            {
              type: 'category',
              label: 'Distributing Helm Charts with KOTS',
              items: [
                'vendor/helm-native-about',
                'vendor/helm-native-v2-using',
                'vendor/helm-v2-migrate',
                'vendor/helm-optional-value-keys',
              ],
            },
            {
              type: 'category',
              label: 'Distributing Embedded Kubernetes',
              items: [
                'vendor/embedded-kubernetes-overview',
                {
                  type: 'category',
                  label: 'Embedded Cluster (Beta)',
                  items: [
                    'vendor/embedded-overview',
                    'reference/embedded-config',
                  ],
                },
                {
                  type: 'category',
                  label: 'kURL',
                  items: [
                    'vendor/kurl-about',
                    'vendor/packaging-embedded-kubernetes',
                    'vendor/packaging-installer-storage',
                    'vendor/kurl-nodeport-services',
                    'vendor/preflight-host-preflights',
                    'vendor/installer-history',
                    'vendor/packaging-using-tls-certs',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Admin Console and Download Portal Customization',
              items: [
                'vendor/admin-console-customize-app-icon',
                'vendor/admin-console-port-forward',
                'vendor/admin-console-adding-buttons-links',
                'vendor/admin-console-prometheus-monitoring',
              ],
            },
            {
                type: 'category',
                label: 'Admin Console Config Screen',
                items: [
                  'vendor/config-screen-about',
                  'vendor/admin-console-customize-config-screen',
                  'vendor/config-screen-map-inputs',
                  'vendor/config-screen-conditional',
                  {
                    type: 'category',
                    label: 'Tutorial: Set Helm Chart Values with KOTS',
                    items: [
                      'vendor/tutorial-config-setup',
                      'vendor/tutorial-config-get-chart',
                      'vendor/tutorial-config-create-app',
                      'vendor/tutorial-config-package-chart',
                      'vendor/tutorial-config-create-release',
                      'vendor/tutorial-config-create-customer',
                      'vendor/tutorial-config-install-kots',
                    ],
                  },
              ],
            },
            {
              type: 'category',
              label: 'Configuring Backup and Restore',
              items: [
                'vendor/snapshots-overview',
                'vendor/snapshots-configuring-backups',
                'vendor/snapshots-hooks',
                'reference/custom-resource-backup',
              ],
            },
            {
              type: 'category',
              label: 'Managing KOTS',
              items: [
                'vendor/packaging-kots-versions',
                'vendor/packaging-rbac',
                'vendor/packaging-air-gap-excluding-minio',
              ],
            },
            {
              type: 'category',
              label: 'Managing Resources and Objects',
              items: [
                'vendor/admin-console-display-app-status',
                {
                  type: 'category',
                    label: 'Conditionally Deploying Resources',
                    items: [
                      'vendor/packaging-include-resources',
                      'vendor/helm-optional-charts',
                      'vendor/tutorial-adding-db-config',
                    ],
                },
                'vendor/resources-annotations-templating',
                'vendor/orchestrating-resource-deployment',
                'vendor/database-config-adding-options',
                'vendor/packaging-cleaning-up-jobs',
                'vendor/packaging-ingress',
              ],
            },
            {
              type: 'category',
              label: 'Packaging Kubernetes Operators',
              items: [
                'vendor/operator-packaging-about',
                'vendor/operator-defining-additional-images',
                'vendor/operator-referencing-images',
                'vendor/operator-defining-additional-namespaces',
              ],
            },
            {
              type: 'category',
              label: 'Downloading Assets and Getting Commands for KOTS Installations',
              items: [
                'vendor/releases-sharing-license-install-script',
                'vendor/licenses-download',
                'vendor/releases-download-airgap-bundles',
                'vendor/releases-share-download-portal',
                'vendor/releases-configvalues',
              ],
            },
        // KOTS ENTERPRISE USER DOCS
        {
          type: 'category',
          label: 'Installing and Managing Applications with KOTS',
          items: [
          {
            type: 'category',
            label: 'Installing',
            items: [
              {
                type: 'category',
                label: 'Preparing to Install',
                items: [
                  'enterprise/installing-overview',
                  'enterprise/installing-general-requirements',
                  'enterprise/sbom-validating',
                ],
              },
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
            label: 'Image Registries',
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
            label: 'Using a GitOps Workflow',
            items: [
              'enterprise/gitops-workflow',
              'enterprise/gitops-managing-secrets',
            ],
          },
          {
            type: 'category',
            label: 'Managing Admin Console User Access',
            items: [
              'enterprise/auth-changing-passwords',
              'enterprise/auth-identity-provider',
              'enterprise/auth-configuring-rbac',
            ],
          },
          {
            type: 'category',
            label: 'Monitoring Applications',
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
      {
        type: 'category',
        label: 'KOTS Custom Resources',
        items: [
          'reference/custom-resource-about',
          'reference/custom-resource-application',
          'reference/custom-resource-config',
          'reference/custom-resource-helmchart-v2',
          'reference/custom-resource-helmchart',
          'reference/custom-resource-lintconfig',
        ],
      },
      {
        type: 'category',
        label: 'KOTS Template Functions',
        items: [
          'reference/template-functions-about',
          'reference/template-functions-examples',
          'reference/template-functions-config-context',
          'reference/template-functions-identity-context',
          'reference/template-functions-kurl-context',
          'reference/template-functions-license-context',
          'reference/template-functions-static-context',
        ],
      },
    ],
  },
  'vendor/install-with-helm',
  {
    type: 'category',
    label: 'Replicated SDK (Beta)',
    items: [
      'vendor/replicated-sdk-overview',
      'vendor/replicated-sdk-installing',
      'vendor/replicated-sdk-customizing',
    ],
  },
  {
    type: 'category',
    label: 'Proxying Private Images',
    items: [
      'vendor/private-images-about',
      'vendor/packaging-private-images',
      'vendor/helm-image-registry',
      'vendor/private-images-tags-digests',
      'vendor/private-images-replicated',
      'vendor/packaging-private-registry-security',
      'vendor/tutorial-ecr-private-images',
    ],
  },
  {
    type: 'category',
    label: 'Using Custom Domains',
    items: [
      'vendor/custom-domains',
      'vendor/custom-domains-using',
    ],
  },
  {
    type: 'category',
    label: 'Preflight Checks and Support Bundles',
    items: [
      'vendor/preflight-support-bundle-about',
      {
        type: 'category',
        label: 'Preflight Checks',
        items: [
            'vendor/preflight-defining',
            'vendor/preflight-running',
            {
            type: 'category',
            label: 'Tutorial: Add Preflight Checks to a Helm Chart',
            items: [
              'vendor/tutorial-preflight-helm-setup',
              'vendor/tutorial-preflight-helm-get-chart',
              'vendor/tutorial-preflight-helm-add-spec',
              'vendor/tutorial-preflight-helm-create-release',
              'vendor/tutorial-preflight-helm-create-customer',
              'vendor/tutorial-preflight-helm-install',
              'vendor/tutorial-preflight-helm-install-kots',
            ],
          },
          ],
      },
      {
        type: 'category',
        label: 'Support Bundles',
        items: [
          'vendor/support-bundle-customizing',
          'vendor/support-host-support-bundles',
          'vendor/support-bundle-generating',
          'vendor/support-inspecting-support-bundles',
          'vendor/support-submit-request',
          'vendor/support-online-support-bundle-specs',
          'vendor/support-modular-support-bundle-specs',
        ],
      },
      'vendor/preflight-sb-helm-templates-about',
      {
        type: 'category',
        label: 'Troubleshoot Custom Resources',
        items: [
          'reference/custom-resource-preflight',
          'reference/custom-resource-redactor',
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Testing with Compatibility Matrix',
    items: [
      'vendor/testing-about',
      'vendor/testing-supported-clusters',
      'vendor/testing-cluster-addons',
      'vendor/testing-how-to',
      'vendor/testing-ingress',
    ],
  },
  {
    type: 'category',
    label: 'Integrating with CI/CD',
    items: [
      'vendor/ci-overview',
      'vendor/ci-workflows',
      'vendor/ci-workflows-github-actions',
      'vendor/tutorial-ci-cd-integration',
    ],
  },
  {
    type: 'category',
    label: 'Insights and Telemetry',
    items: [
        'vendor/instance-insights-event-data',
        'vendor/insights-app-status',
        'vendor/customer-adoption',
        'vendor/customer-reporting',
        'vendor/instance-insights-details',
        'vendor/instance-notifications-config',
        'vendor/custom-metrics',
        'vendor/instance-data-export',
      ],
  },

  // DEVELOPER TOOLS
  {type: 'html', value: '<h5>Developer tools</h5>', defaultStyle: true},
  {
    type: 'category',
    label: 'Replicated SDK API (Beta)',
    items: [
      'reference/replicated-sdk-apis',
      'vendor/replicated-sdk-development',
    ],
  },
  {
    type: 'category',
    label: 'replicated CLI',
    items: [
      'reference/replicated-cli-installing',
      'reference/replicated-cli-api',
      'reference/replicated-cli-app-create',
      'reference/replicated-cli-app-delete',
      'reference/replicated-cli-app-ls',
      'reference/replicated-cli-channel-create',
      'reference/replicated-cli-channel-delete',
      'reference/replicated-cli-channel-disable-semver',
      'reference/replicated-cli-channel-enable-semver',
      'reference/replicated-cli-channel-inspect',
      'reference/replicated-cli-channel-ls',
      'reference/replicated-cli-cluster-create',
      'reference/replicated-cli-cluster-kubeconfig',
      'reference/replicated-cli-cluster-ls',
      'reference/replicated-cli-cluster-nodegroup-ls',
      'reference/replicated-cli-cluster-prepare',
      'reference/replicated-cli-cluster-rm',
      'reference/replicated-cli-cluster-update-ttl',
      'reference/replicated-cli-cluster-upgrade',
      'reference/replicated-cli-cluster-versions',
      'reference/replicated-cli-cluster-addon-ls',
      'reference/replicated-cli-cluster-addon-rm',
      'reference/replicated-cli-cluster-addon-create',
      'reference/replicated-cli-cluster-addon-create-object-store',
      'reference/replicated-cli-completion',
      'reference/replicated-cli-completion-bash',
      'reference/replicated-cli-completion-fish',
      'reference/replicated-cli-completion-powershell',
      'reference/replicated-cli-completion-zsh',
      'reference/replicated-cli-customer-create',
      'reference/replicated-cli-customer-download-license',
      'reference/replicated-cli-customer-ls',
      'reference/replicated-cli-installer-create',
      'reference/replicated-cli-installer-ls',
      'reference/replicated-cli-instance-inspect',
      'reference/replicated-cli-instance-ls',
      'reference/replicated-cli-instance-tag',
      'reference/replicated-cli-login',
      'reference/replicated-cli-logout',
      'reference/replicated-cli-registry-add',
      'reference/replicated-cli-registry-add-dockerhub',
      'reference/replicated-cli-registry-add-ecr',
      'reference/replicated-cli-registry-add-gar',
      'reference/replicated-cli-registry-add-gcr',
      'reference/replicated-cli-registry-add-ghcr',
      'reference/replicated-cli-registry-add-other',
      'reference/replicated-cli-registry-add-quay',
      'reference/replicated-cli-registry-logs',
      'reference/replicated-cli-registry-ls',
      'reference/replicated-cli-registry-rm',
      'reference/replicated-cli-registry-test',
      'reference/replicated-cli-release-create',
      'reference/replicated-cli-release-compatibility',
      'reference/replicated-cli-release-download',
      'reference/replicated-cli-release-inspect',
      'reference/replicated-cli-release-lint',
      'reference/replicated-cli-release-ls',
      'reference/replicated-cli-release-promote',
      'reference/replicated-cli-release-update',
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

  //OPEN SOURCE DOCS
  {type: 'html', value: '<h5>open source docs</h5>', defaultStyle: true},
  {type: 'link', href: 'https://kurl.sh/docs/introduction/', label: 'kURL.sh'},
  {type: 'link', href: 'https://troubleshoot.sh/docs/collect/', label: 'Troubleshoot.sh'},
  // POLICIES
  {type: 'html', value: '<h5>policies</h5>', defaultStyle: true},
  {
    type: 'category',
    label: 'Replicated Policies',
    items: [
      'vendor/policies-vulnerability-patch',
      'vendor/policies-support-lifecycle',
      'vendor/policies-data-transmission',
      'vendor/policies-infrastructure-and-subprocessors',
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
    type: 'link',
    label: 'Security at Replicated',
    href: 'https://www.replicated.com/security/'
  },
 ],
};

module.exports = sidebars;
