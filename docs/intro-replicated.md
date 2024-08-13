---
pagination_prev: null
---

import ApiAbout from "/docs/partials/vendor-api/_api-about.mdx"

# Introduction to Replicated

This topic provides an introduction to working with the Replicated Platform, including key features, supported application installation options, and interfaces.

## Overview

The Replicated Platform is a commercial software distribution platform. Independent software vendors (ISVs) can use features of the Replicated Platform to distribute modern enterprise software into complex, customer-controlled environments, including on-prem and air gap.

Replicated Platform features are designed to support ISVs in each phase of the commercial software distribution life cycle, as shown below:

![software distribution life cycle wheel](/images/software-dev-lifecycle.png)

[View a larger version of this image](/images/software-dev-lifecycle.png)

The following describes the phases of the software distribution life cycle:

* **[Develop](#develop)**: Application design and architecture decisions align with customer needs, and development teams can quickly iterate on new features.
* **[Test](#test)**: Run automated tests in several customer-representative environments as part of continuous integration and continuous delivery (CI/CD) workflows.
* **[Release](#release)**: Use a single, automated release process to share new releases with both on-prem and SaaS customers.
* **[License](#license)**: Licenses are customized to each customer and are easy to issue, manage, and update.
* **[Install](#install)**: Provide unique installation options depending on customers' preferences and experience levels.
* **[Report](#report)**: Make more informed prioritization decisions by collecting adoption and performance data for application instances running in customer environments.
* **[Support](#support)**: Diagnose and resolve support issues quickly.

For more information about the Replicated features that support each of these phases, see the sections below.

### Develop

The Replicated SDK exposes an in-cluster API that can be developed against to quickly integrate and test core functionality with an application. For example, when the SDK is installed alongside an application in a customer environment, the in-cluster API can be used to send custom metrics from the instance to the Replicated vendor platform. 

For more information about using the Replicated SDK, see [About the Replicated SDK](/vendor/replicated-sdk-overview).

### Test

The Replicated Compatibility Matrix rapidly provisions ephemeral Kubernetes clusters, including multi-node and OpenShift clusters. When integrated into existing CI/CD pipelines for an application, the Compatibility Matrix can be used to automatically create a variety of customer-representative environments for testing code changes.

For more information, see [About Compatibility Matrix](/vendor/testing-about).

### Release

Release channels in the Replicated Vendor Portal allow ISVs to make different application versions available to different customers, without needing to maintain separate code bases. For example, a "Beta" channel can be used to share beta releases of an application with only a certain subset of customers. 

For more information about working with channels, see [About Channels and Releases](/vendor/releases-about).

Additionally, the Replicated proxy service grants proxy access to private application images using the customers' license. This ensures that customers have the right access to images based on the channel they are assigned. For more information about using the proxy registry, see [About the Replicated Proxy Service](/vendor/private-images-about).

### License

Create customers in the Replicated Vendor Portal to handle licensing for your application in both online and air gap environments. For example:
* License free trials and different tiers of product plans
* Create and manage custom license entitlements
* Automatically restrict access to expired accounts
* Verify license entitlements both before installation and during runtime

For more information about working with customers and custom license fields, see [About Customers](/vendor/licenses-about).

### Install

Applications distributed with the Replicated Platform can support multiple different installation methods from the same application release.

The primary recommended installation methods include:
* **Replicated Embedded Cluster**: With Embedded Cluster, ISVs can deliver Kubernetes and their application together as a single appliance, allowing customers to install on VMs or bare metal servers. Embedded Cluster uses Replicated KOTS to install the application and supports installation in online and air gap environments. For more information, see [Using Emebdded Cluster](/vendor/embedded-overview).
* **Helm CLI**: ISVs can also support Helm installations, enhanced with Replicated features like the Replicated SDK and the Replicated proxy service. For more information, see [Installing with Helm](/vendor/install-with-helm).

### Report

When installed alongside an application, the Replicated SDK and Replicated KOTS automatically send instance data from the customer environment to the Replicated Vendor Portal. This instance data includes health and status indicators, adoption metrics, and performance metrics. For more information, see [About Instance and Event Data](/vendor/instance-insights-event-data).

ISVs can also set up email and Slack notifications to get alerted of important instance issues or performance trends. For more information, see [Configuring Instance Notifications](/vendor/instance-notifications-config).

### Support

Support teams can use Replicated features to more quickly diagnose and resolve application issues. For example:

- Customize and generate support bundles, which collect and analyze redacted information from the customer's cluster, environment, and application instance. See [About Preflights Checks and Support Bundles](/vendor/preflight-support-bundle-about).
- Provision customer-representative environments with Compatibility Matrix to recreate and diagnose issues. See [About Compatibility Matrix](/vendor/testing-about).
- Get insights into an instance's status by accessing telemetry data, which covers the health of the application, the current application version, and details about the infrastructure and cluster where the application is running. For more information, see [Customer Reporting](/vendor/customer-reporting). For more information, see [Customer Reporting](/vendor/customer-reporting).

## Vendor Platform Interfaces

This section describes the GUI, CLI, and API that software vendors use to interact with the vendor platform.

### Vendor Portal

The Replicated Vendor Portal is the web-based user interface that you can use to configure and manage all of the Replicated features for distributing and managing application releases, supporting your release, viewing customer insights and reporting, and managing teams.

The following shows an example of the **Reporting** page for a customer:

![Customer reporting page showing two active instances](/images/customer-reporting-page.png)

[View a larger version of this image](/images/customer-reporting-page.png)

### Replicated CLI

The Replicated command-line interface (CLI) is the CLI for the Vendor Portal. The Replicated CLI can be used to complete tasks programmatically, including all tasks for packaging and managing applications, and managing artifacts such as teams, license files, and so on. For more information, see [Installing the Replicated CLI](/reference/replicated-cli-installing).

![terminal with Replicated CLI commands](/images/replicated-cli.gif)

### Vendor API v3

<ApiAbout/>

For more information, see [Using the Vendor API V3](/reference/vendor-api-using).

![landing page of the vendor api documentation site](/images/vendor-api-docs.png)
