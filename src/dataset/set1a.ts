// AZ-900 Study Dataset
// Covers concepts tested in Microsoft Azure Fundamentals (AZ-900)

export type FlashcardTerm = {
  term: string
  category: string
}

export type StudyTerm = {
  term: string
  category: string
  shortDefinition: string
  explanation: string
  example: string
  difficulty: "easy" | "medium" | "hard"
}

//////////////////////////////////////////////////////////
// FLASHCARD DATASET (350+ TERMS)
//////////////////////////////////////////////////////////

export const AZ900_FLASHCARDS: FlashcardTerm[] = [

//////////////////////////////
// CLOUD CONCEPTS
//////////////////////////////

...[
"Cloud Computing",
"Public Cloud",
"Private Cloud",
"Hybrid Cloud",
"Multi Cloud",
"Scalability",
"Elasticity",
"High Availability",
"Fault Tolerance",
"Disaster Recovery",
"Horizontal Scaling",
"Vertical Scaling",
"CapEx",
"OpEx",
"Cloud Migration",
"Lift and Shift",
"Cloud Native",
"Serverless Computing",
"Shared Responsibility Model",
"Cloud Bursting"
].map(term => ({ term, category: "Cloud Concepts" })),

//////////////////////////////
// CORE AZURE ARCHITECTURE
//////////////////////////////

...[
"Azure Region",
"Availability Zone",
"Region Pair",
"Azure Datacenter",
"Edge Location",
"Azure Resource Manager",
"Resource Group",
"Azure Subscription",
"Management Group",
"Azure Tenant",
"Azure Portal",
"Azure CLI",
"Azure PowerShell",
"ARM Template",
"Bicep",
"Azure Marketplace",
"Azure Resource Provider",
"Azure Policy",
"Azure Blueprint",
"Azure Tags"
].map(term => ({ term, category: "Azure Architecture" })),

//////////////////////////////
// COMPUTE
//////////////////////////////

...[
"Azure Virtual Machines",
"VM Scale Sets",
"Azure App Service",
"Azure Functions",
"Azure Kubernetes Service",
"Azure Container Instances",
"Azure Batch",
"Azure Service Fabric",
"Azure Spring Apps",
"Azure Dedicated Host",
"Azure Spot VMs",
"Azure Automanage",
"Azure VM Extensions",
"Azure Image",
"Azure Compute Gallery",
"Custom Script Extension",
"Availability Sets",
"Autoscaling",
"Serverless Functions",
"Azure Logic Apps"
].map(term => ({ term, category: "Compute" })),

//////////////////////////////
// STORAGE
//////////////////////////////

...[
"Azure Storage Account",
"Blob Storage",
"File Storage",
"Queue Storage",
"Table Storage",
"Disk Storage",
"Managed Disks",
"Unmanaged Disks",
"Storage Tier Hot",
"Storage Tier Cool",
"Storage Tier Archive",
"Locally Redundant Storage",
"Zone Redundant Storage",
"Geo Redundant Storage",
"Read Access Geo Redundant Storage",
"Azure Data Lake",
"Azure Files",
"Azure NetApp Files",
"Azure Blob Lifecycle",
"Immutable Blob Storage"
].map(term => ({ term, category: "Storage" })),

//////////////////////////////
// NETWORKING
//////////////////////////////

...[
"Virtual Network",
"Subnet",
"Network Security Group",
"Application Security Group",
"Azure Load Balancer",
"Application Gateway",
"Azure Front Door",
"Azure Traffic Manager",
"Azure DNS",
"Azure Private DNS",
"VPN Gateway",
"Point to Site VPN",
"Site to Site VPN",
"ExpressRoute",
"Azure Firewall",
"DDoS Protection",
"Service Endpoint",
"Private Endpoint",
"Network Watcher",
"Virtual Network Peering"
].map(term => ({ term, category: "Networking" })),

//////////////////////////////
// IDENTITY
//////////////////////////////

...[
"Azure Active Directory",
"Microsoft Entra ID",
"Tenant",
"User Identity",
"Managed Identity",
"Service Principal",
"Single Sign On",
"Multi Factor Authentication",
"Conditional Access",
"Role Based Access Control",
"Privileged Identity Management",
"Azure AD Connect",
"Hybrid Identity",
"Security Defaults",
"Access Review",
"Identity Protection",
"Directory Role",
"Application Registration",
"Enterprise Application",
"External Identity"
].map(term => ({ term, category: "Identity" })),

//////////////////////////////
// SECURITY
//////////////////////////////

...[
"Azure Key Vault",
"Secrets",
"Certificates",
"Encryption at Rest",
"Encryption in Transit",
"Disk Encryption",
"Azure Defender",
"Microsoft Defender for Cloud",
"Security Center",
"Just in Time VM Access",
"Security Posture",
"Security Baseline",
"Threat Protection",
"Compliance Manager",
"Azure Sentinel",
"Security Recommendation",
"Zero Trust",
"Secure Score",
"Network Isolation",
"Security Policy"
].map(term => ({ term, category: "Security" })),

//////////////////////////////
// GOVERNANCE
//////////////////////////////

...[
"Azure Policy",
"Azure Blueprint",
"Resource Lock",
"Tagging Strategy",
"Cost Allocation Tags",
"Management Hierarchy",
"Subscription Limits",
"Azure Landing Zone",
"Governance Model",
"Policy Initiative",
"Compliance Report",
"Resource Organization",
"Cost Governance",
"Naming Convention",
"Audit Policy",
"Policy Assignment",
"Policy Definition",
"Blueprint Artifact",
"Blueprint Assignment",
"Resource Compliance"
].map(term => ({ term, category: "Governance" })),

//////////////////////////////
// MONITORING
//////////////////////////////

...[
"Azure Monitor",
"Log Analytics",
"Application Insights",
"Metrics",
"Logs",
"Alert Rule",
"Action Group",
"Diagnostic Settings",
"Azure Advisor",
"Health Alerts",
"Service Health",
"Resource Health",
"Azure Dashboard",
"Query Language",
"Telemetry",
"Monitoring Agent",
"Insights",
"Performance Metrics",
"Log Query",
"Usage Analytics"
].map(term => ({ term, category: "Monitoring" })),

//////////////////////////////
// COST MANAGEMENT
//////////////////////////////

...[
"Pay As You Go",
"Reserved Instance",
"Spot Pricing",
"Azure Pricing Calculator",
"Azure Total Cost of Ownership Calculator",
"Cost Management",
"Budgets",
"Cost Alerts",
"Cost Analysis",
"Cost Forecast",
"Azure Marketplace Pricing",
"Consumption Model",
"Azure Savings Plan",
"Azure Billing",
"Invoice",
"Cost Optimization",
"Cost Allocation",
"Azure Offer",
"Billing Account",
"Billing Profile"
].map(term => ({ term, category: "Pricing" })),

//////////////////////////////
// SLA
//////////////////////////////

...[
"Service Level Agreement",
"Composite SLA",
"Downtime",
"Uptime Guarantee",
"Service Credits",
"SLA Percentage",
"Recovery Time Objective",
"Recovery Point Objective",
"Availability Set SLA",
"Zone SLA",
"Multi Region SLA",
"Fault Domain",
"Update Domain",
"Availability Architecture",
"Resilience Strategy"
].map(term => ({ term, category: "SLA" }))

]

//////////////////////////////////////////////////////////
// FULL STUDY DATASET FOR APPS
//////////////////////////////////////////////////////////

export const AZ900_STUDY_DATASET: StudyTerm[] = [

{
term: "Cloud Computing",
category: "Cloud Concepts",
shortDefinition: "Delivery of computing services over the internet.",
explanation: "Cloud computing allows organizations to use servers, storage, databases, networking, analytics, and software hosted in remote datacenters instead of owning physical infrastructure.",
example: "A company hosts its website using Azure instead of maintaining its own servers.",
difficulty: "easy"
},

{
term: "Public Cloud",
category: "Cloud Concepts",
shortDefinition: "Cloud services delivered over the public internet.",
explanation: "Public cloud resources are owned and operated by a cloud provider and shared across multiple customers.",
example: "Using Microsoft Azure to host applications.",
difficulty: "easy"
},

{
term: "Hybrid Cloud",
category: "Cloud Concepts",
shortDefinition: "Combination of on-premises infrastructure and cloud services.",
explanation: "Hybrid cloud allows organizations to keep sensitive workloads on-premises while running other workloads in the cloud.",
example: "A company keeps its database locally but runs web apps in Azure.",
difficulty: "easy"
},

{
term: "Azure Region",
category: "Architecture",
shortDefinition: "Geographic area containing Azure datacenters.",
explanation: "Each Azure region contains multiple datacenters connected through low latency networks. Regions allow customers to deploy resources close to users.",
example: "East US or Southeast Asia region.",
difficulty: "easy"
},

{
term: "Availability Zone",
category: "Architecture",
shortDefinition: "Physically separate datacenter inside a region.",
explanation: "Availability zones provide redundancy by isolating failures across separate datacenters within the same region.",
example: "Deploying VMs across 3 zones to increase uptime.",
difficulty: "medium"
},

{
term: "Resource Group",
category: "Architecture",
shortDefinition: "Logical container for Azure resources.",
explanation: "A resource group helps organize related resources for an application or service.",
example: "A resource group containing VM, database, and storage resources for a web app.",
difficulty: "easy"
},

{
term: "Azure Virtual Machine",
category: "Compute",
shortDefinition: "On-demand virtual server in Azure.",
explanation: "Azure VMs provide full control of the operating system and environment similar to physical servers.",
example: "Running a Windows Server VM in Azure.",
difficulty: "easy"
},

{
term: "Azure App Service",
category: "Compute",
shortDefinition: "Platform for hosting web apps.",
explanation: "App Service allows developers to deploy web applications without managing infrastructure.",
example: "Hosting a Node.js website using Azure App Service.",
difficulty: "easy"
},

{
term: "Azure Blob Storage",
category: "Storage",
shortDefinition: "Object storage for unstructured data.",
explanation: "Blob storage is optimized for storing large amounts of data like images, videos, and backups.",
example: "Storing user uploaded photos in blob storage.",
difficulty: "easy"
},

{
term: "Virtual Network",
category: "Networking",
shortDefinition: "Private network in Azure.",
explanation: "Virtual networks allow Azure resources to securely communicate with each other, the internet, and on-premises networks.",
example: "Connecting multiple VMs within the same virtual network.",
difficulty: "easy"
},

{
term: "Azure Active Directory",
category: "Identity",
shortDefinition: "Cloud identity and access management service.",
explanation: "Azure AD manages users, groups, and authentication across Microsoft cloud services.",
example: "Employees logging into Microsoft 365 using Azure AD.",
difficulty: "easy"
},

{
term: "Role Based Access Control",
category: "Security",
shortDefinition: "Access permissions based on roles.",
explanation: "RBAC allows administrators to assign permissions to users based on job roles instead of individual permissions.",
example: "A developer gets read access while an admin gets full control.",
difficulty: "medium"
},

{
term: "Azure Policy",
category: "Governance",
shortDefinition: "Service that enforces resource rules.",
explanation: "Azure Policy helps enforce organizational standards such as restricting allowed VM sizes or regions.",
example: "Blocking deployment of resources outside approved regions.",
difficulty: "medium"
},

{
term: "Azure Monitor",
category: "Monitoring",
shortDefinition: "Service for monitoring Azure resources.",
explanation: "Azure Monitor collects metrics and logs from applications and infrastructure to detect issues and optimize performance.",
example: "Alert triggered when CPU usage exceeds 80%.",
difficulty: "medium"
},

{
term: "Pay As You Go",
category: "Pricing",
shortDefinition: "Billing model based on usage.",
explanation: "Customers only pay for the resources they consume without long-term commitments.",
example: "Paying hourly for a virtual machine.",
difficulty: "easy"
},

{
term: "Service Level Agreement",
category: "SLA",
shortDefinition: "Guaranteed uptime commitment.",
explanation: "Azure SLAs define the percentage of uptime Microsoft guarantees for each service.",
example: "99.9% uptime SLA for certain services.",
difficulty: "easy"
}

]