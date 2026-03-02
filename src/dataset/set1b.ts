export interface AZ900ScenarioQuestion {
  id: number
  scenario: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: "easy" | "medium" | "hard"
}

export const AZ900_SCENARIO_QUESTIONS: AZ900ScenarioQuestion[] = [

  {
    id: 1,
    scenario: "A startup wants to host a web application without managing servers or operating systems.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Kubernetes Service",
      "Azure Container Instances"
    ],
    correctAnswer: 1,
    explanation: "Azure App Service is a fully managed platform for hosting web applications without managing infrastructure.",
    category: "Compute",
    difficulty: "easy"
  },

  {
    id: 2,
    scenario: "A company needs to store millions of images uploaded by users for a mobile app.",
    question: "Which Azure storage service is most appropriate?",
    options: [
      "Azure Blob Storage",
      "Azure File Storage",
      "Azure Table Storage",
      "Azure Disk Storage"
    ],
    correctAnswer: 0,
    explanation: "Blob storage is optimized for storing large amounts of unstructured data such as images and videos.",
    category: "Storage",
    difficulty: "easy"
  },

  {
    id: 3,
    scenario: "An organization wants to ensure that its applications remain available even if a datacenter within a region fails.",
    question: "Which Azure feature should they use?",
    options: [
      "Availability Zones",
      "Resource Groups",
      "Azure Policy",
      "Azure Monitor"
    ],
    correctAnswer: 0,
    explanation: "Availability zones provide physically separate datacenters within a region to protect against failures.",
    category: "Architecture",
    difficulty: "medium"
  },

  {
    id: 4,
    scenario: "A company wants employees to sign in using their corporate accounts to access cloud applications.",
    question: "Which Azure service provides identity and authentication?",
    options: [
      "Azure Active Directory",
      "Azure Monitor",
      "Azure Firewall",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Azure Active Directory manages identities and authentication for users and applications.",
    category: "Identity",
    difficulty: "easy"
  },

  {
    id: 5,
    scenario: "An administrator wants to restrict deployment of resources to only approved Azure regions.",
    question: "Which Azure feature should be used?",
    options: [
      "Azure Policy",
      "Azure Advisor",
      "Azure DNS",
      "Azure Monitor"
    ],
    correctAnswer: 0,
    explanation: "Azure Policy allows administrators to enforce organizational standards such as allowed regions.",
    category: "Governance",
    difficulty: "medium"
  },

  {
    id: 6,
    scenario: "A development team wants to run a Linux server in the cloud where they can install custom software.",
    question: "Which Azure service should they choose?",
    options: [
      "Azure Virtual Machines",
      "Azure Functions",
      "Azure App Service",
      "Azure Logic Apps"
    ],
    correctAnswer: 0,
    explanation: "Azure Virtual Machines provide full control over the operating system and installed software.",
    category: "Compute",
    difficulty: "easy"
  },

  {
    id: 7,
    scenario: "A company wants to monitor CPU usage and receive alerts when it exceeds a threshold.",
    question: "Which Azure service should be used?",
    options: [
      "Azure Monitor",
      "Azure Policy",
      "Azure DNS",
      "Azure Key Vault"
    ],
    correctAnswer: 0,
    explanation: "Azure Monitor collects metrics and can trigger alerts when thresholds are exceeded.",
    category: "Monitoring",
    difficulty: "easy"
  },

  {
    id: 8,
    scenario: "A company needs to securely store database passwords and API keys used by applications.",
    question: "Which Azure service should they implement?",
    options: [
      "Azure Key Vault",
      "Azure Monitor",
      "Azure Firewall",
      "Azure Storage"
    ],
    correctAnswer: 0,
    explanation: "Azure Key Vault securely stores secrets, keys, and certificates.",
    category: "Security",
    difficulty: "easy"
  },

  {
    id: 9,
    scenario: "An organization wants to assign permissions to users based on job roles such as Developer or Administrator.",
    question: "Which Azure feature enables this?",
    options: [
      "Role-Based Access Control",
      "Azure Firewall",
      "Azure Monitor",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "RBAC allows administrators to grant permissions based on roles rather than individual permissions.",
    category: "Security",
    difficulty: "medium"
  },

  {
    id: 10,
    scenario: "A company wants to distribute incoming traffic across multiple virtual machines hosting the same application.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Load Balancer",
      "Azure DNS",
      "Azure Policy",
      "Azure Key Vault"
    ],
    correctAnswer: 0,
    explanation: "Azure Load Balancer distributes traffic across multiple servers to improve availability and performance.",
    category: "Networking",
    difficulty: "easy"
  },

  {
    id: 11,
    scenario: "An organization wants a private network environment in Azure where VMs can communicate securely.",
    question: "Which Azure service should they deploy?",
    options: [
      "Virtual Network",
      "Azure DNS",
      "Azure Policy",
      "Azure Monitor"
    ],
    correctAnswer: 0,
    explanation: "Virtual networks allow Azure resources to communicate privately with each other.",
    category: "Networking",
    difficulty: "easy"
  },

  {
    id: 12,
    scenario: "A company wants to pay only for the resources they use with no upfront infrastructure cost.",
    question: "Which cloud financial model supports this?",
    options: [
      "CapEx",
      "OpEx",
      "Reserved Pricing",
      "Enterprise Agreement"
    ],
    correctAnswer: 1,
    explanation: "Operational expenditure allows organizations to pay only for the resources they consume.",
    category: "Cloud Concepts",
    difficulty: "easy"
  },

  {
    id: 13,
    scenario: "An administrator wants to prevent accidental deletion of critical Azure resources.",
    question: "Which Azure feature should be applied?",
    options: [
      "Resource Locks",
      "Azure Monitor",
      "Azure Advisor",
      "Azure DNS"
    ],
    correctAnswer: 0,
    explanation: "Resource locks prevent accidental modification or deletion of resources.",
    category: "Governance",
    difficulty: "medium"
  },

  {
    id: 14,
    scenario: "A company wants to automatically run code in response to an event such as a file upload.",
    question: "Which Azure compute service should be used?",
    options: [
      "Azure Functions",
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure SQL Database"
    ],
    correctAnswer: 0,
    explanation: "Azure Functions is a serverless compute service triggered by events.",
    category: "Compute",
    difficulty: "medium"
  },

  {
    id: 15,
    scenario: "A company wants to estimate the monthly cost of running Azure resources before deployment.",
    question: "Which tool should they use?",
    options: [
      "Azure Pricing Calculator",
      "Azure Monitor",
      "Azure Advisor",
      "Azure Portal Dashboard"
    ],
    correctAnswer: 0,
    explanation: "The Azure Pricing Calculator estimates the cost of Azure services before deployment.",
    category: "Pricing",
    difficulty: "easy"
  },

  {
    id: 16,
    scenario: "A company wants to connect its on-premises network securely to Azure over the internet.",
    question: "Which Azure service should be used?",
    options: [
      "VPN Gateway",
      "Azure DNS",
      "Azure Monitor",
      "Azure App Service"
    ],
    correctAnswer: 0,
    explanation: "VPN Gateway allows secure site-to-site connectivity between on-premises networks and Azure.",
    category: "Networking",
    difficulty: "medium"
  },

  {
    id: 17,
    scenario: "A company wants to commit to using Azure VMs for three years to reduce costs.",
    question: "Which pricing option should they choose?",
    options: [
      "Reserved Instances",
      "Pay-As-You-Go",
      "Spot Pricing",
      "Free Tier"
    ],
    correctAnswer: 0,
    explanation: "Reserved instances provide significant cost savings for long-term resource usage commitments.",
    category: "Pricing",
    difficulty: "medium"
  },

  {
    id: 18,
    scenario: "A company wants to store structured NoSQL data for a simple application.",
    question: "Which Azure service is appropriate?",
    options: [
      "Azure Table Storage",
      "Azure Blob Storage",
      "Azure File Storage",
      "Azure Disk Storage"
    ],
    correctAnswer: 0,
    explanation: "Azure Table Storage stores structured NoSQL data in key-value format.",
    category: "Storage",
    difficulty: "medium"
  },

  {
    id: 19,
    scenario: "An administrator wants to filter inbound and outbound traffic to a virtual machine.",
    question: "Which Azure feature should they configure?",
    options: [
      "Network Security Group",
      "Azure Monitor",
      "Azure DNS",
      "Azure Policy"
    ],
    correctAnswer: 0,
    explanation: "Network Security Groups allow administrators to define traffic filtering rules.",
    category: "Networking",
    difficulty: "medium"
  },

  {
    id: 20,
    scenario: "A company wants to receive recommendations to improve security, performance, and cost efficiency.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Advisor",
      "Azure Monitor",
      "Azure Policy",
      "Azure Firewall"
    ],
    correctAnswer: 0,
    explanation: "Azure Advisor analyzes resources and provides optimization recommendations.",
    category: "Monitoring",
    difficulty: "easy"
  },

  {
    id: 21,
    scenario: "A company wants to automatically scale the number of servers based on demand.",
    question: "Which cloud capability enables this?",
    options: [
      "Elasticity",
      "Fault Tolerance",
      "Latency",
      "CapEx"
    ],
    correctAnswer: 0,
    explanation: "Elasticity allows cloud systems to automatically scale resources based on demand.",
    category: "Cloud Concepts",
    difficulty: "medium"
  },

  {
    id: 22,
    scenario: "An organization wants to group related Azure resources together for easier management.",
    question: "Which Azure feature should be used?",
    options: [
      "Resource Group",
      "Subscription",
      "Tenant",
      "Region"
    ],
    correctAnswer: 0,
    explanation: "Resource groups organize related Azure resources together.",
    category: "Architecture",
    difficulty: "easy"
  },

  {
    id: 23,
    scenario: "A company wants to translate domain names into IP addresses for its applications.",
    question: "Which Azure service should be used?",
    options: [
      "Azure DNS",
      "Azure Monitor",
      "Azure Policy",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Azure DNS provides domain name resolution using Azure infrastructure.",
    category: "Networking",
    difficulty: "easy"
  },

  {
    id: 24,
    scenario: "A company wants to ensure data remains accessible even if a storage node fails.",
    question: "Which Azure storage redundancy option supports this?",
    options: [
      "Locally Redundant Storage",
      "Azure DNS",
      "Azure Advisor",
      "Azure Firewall"
    ],
    correctAnswer: 0,
    explanation: "Locally Redundant Storage replicates data within a single datacenter to protect against hardware failures.",
    category: "Storage",
    difficulty: "medium"
  },

  {
    id: 25,
    scenario: "An organization wants to enforce multi-factor authentication for all employees.",
    question: "Which security feature should they enable?",
    options: [
      "Multi-Factor Authentication",
      "Azure Policy",
      "Azure Monitor",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Multi-factor authentication adds an extra layer of security by requiring multiple verification methods.",
    category: "Security",
    difficulty: "easy"
  },

  {
    id: 26,
    scenario: "A company wants to track the health status of Azure services affecting its subscription.",
    question: "Which Azure tool provides this information?",
    options: [
      "Azure Service Health",
      "Azure Policy",
      "Azure DNS",
      "Azure Firewall"
    ],
    correctAnswer: 0,
    explanation: "Azure Service Health provides information about service outages and planned maintenance.",
    category: "Monitoring",
    difficulty: "medium"
  },

  {
    id: 27,
    scenario: "A company wants to deploy containerized applications without managing Kubernetes infrastructure.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Container Instances",
      "Azure Kubernetes Service",
      "Azure Virtual Machines",
      "Azure Batch"
    ],
    correctAnswer: 0,
    explanation: "Azure Container Instances allow running containers without managing servers or orchestration.",
    category: "Compute",
    difficulty: "medium"
  },

  {
    id: 28,
    scenario: "A company wants to host microservices using container orchestration.",
    question: "Which Azure service should they choose?",
    options: [
      "Azure Kubernetes Service",
      "Azure Functions",
      "Azure Monitor",
      "Azure App Service"
    ],
    correctAnswer: 0,
    explanation: "Azure Kubernetes Service provides managed container orchestration.",
    category: "Compute",
    difficulty: "medium"
  },

  {
    id: 29,
    scenario: "A company wants to organize subscriptions under a hierarchy to apply policies across multiple teams.",
    question: "Which Azure feature enables this?",
    options: [
      "Management Groups",
      "Resource Groups",
      "Availability Zones",
      "Virtual Networks"
    ],
    correctAnswer: 0,
    explanation: "Management groups allow centralized policy management across subscriptions.",
    category: "Architecture",
    difficulty: "medium"
  },

  {
    id: 30,
    scenario: "A company wants to store files that can be accessed by multiple virtual machines using SMB.",
    question: "Which Azure service should be used?",
    options: [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Disk Storage"
    ],
    correctAnswer: 0,
    explanation: "Azure Files provides fully managed SMB file shares accessible from multiple machines.",
    category: "Storage",
    difficulty: "medium"
  },
  {
    id: 31,
    scenario: "A startup wants to deploy a Windows Server environment quickly without purchasing physical servers.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Functions",
      "Azure Logic Apps"
    ],
    correctAnswer: 0,
    explanation: "Azure Virtual Machines provide Infrastructure as a Service allowing users to run full operating systems in the cloud.",
    category: "Compute",
    difficulty: "easy"
  },

  {
    id: 32,
    scenario: "A developer wants to deploy a web application but does not want to manage the underlying operating system.",
    question: "Which Azure service should the developer use?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Kubernetes Service",
      "Azure Batch"
    ],
    correctAnswer: 1,
    explanation: "Azure App Service is a Platform as a Service offering designed for hosting web apps without managing infrastructure.",
    category: "Compute",
    difficulty: "easy"
  },

  {
    id: 33,
    scenario: "A company needs to store millions of images and video files that will be accessed through the internet.",
    question: "Which Azure storage solution is best suited?",
    options: [
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Queue Storage",
      "Azure Disk Storage"
    ],
    correctAnswer: 0,
    explanation: "Blob Storage is optimized for unstructured data like images, media files, and backups.",
    category: "Storage",
    difficulty: "easy"
  },

  {
    id: 34,
    scenario: "An application must execute small pieces of code automatically whenever a file is uploaded.",
    question: "Which Azure service supports event-driven execution?",
    options: [
      "Azure Functions",
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure DevTest Labs"
    ],
    correctAnswer: 0,
    explanation: "Azure Functions enables serverless event-driven code execution triggered by events like file uploads.",
    category: "Serverless",
    difficulty: "medium"
  },

  {
    id: 35,
    scenario: "A company needs to assign specific permissions to users so they can manage certain Azure resources but not others.",
    question: "Which Azure feature should be used?",
    options: [
      "Azure RBAC",
      "Azure Policy",
      "Azure Monitor",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Role-Based Access Control allows granular permission assignments for Azure resources.",
    category: "Security",
    difficulty: "easy"
  },

  {
    id: 36,
    scenario: "An organization wants to enforce rules such as allowing only approved VM sizes to be deployed.",
    question: "Which Azure feature should be used?",
    options: [
      "Azure RBAC",
      "Azure Policy",
      "Azure Advisor",
      "Azure Monitor"
    ],
    correctAnswer: 1,
    explanation: "Azure Policy enforces governance rules and compliance requirements across resources.",
    category: "Governance",
    difficulty: "medium"
  },

  {
    id: 37,
    scenario: "A company wants to monitor resource health, collect metrics, and generate alerts when CPU usage is high.",
    question: "Which service should be used?",
    options: [
      "Azure Monitor",
      "Azure Advisor",
      "Azure Policy",
      "Azure DevOps"
    ],
    correctAnswer: 0,
    explanation: "Azure Monitor collects telemetry data and supports alerting and performance monitoring.",
    category: "Monitoring",
    difficulty: "easy"
  },

  {
    id: 38,
    scenario: "A company wants automated recommendations to improve performance, reliability, and reduce Azure costs.",
    question: "Which Azure service provides these recommendations?",
    options: [
      "Azure Advisor",
      "Azure Monitor",
      "Azure Sentinel",
      "Azure Policy"
    ],
    correctAnswer: 0,
    explanation: "Azure Advisor analyzes deployments and suggests improvements for cost, performance, and security.",
    category: "Cost Management",
    difficulty: "easy"
  },

  {
    id: 39,
    scenario: "A business wants to connect its on-premises network to Azure securely using the public internet.",
    question: "Which Azure networking service should be used?",
    options: [
      "Azure VPN Gateway",
      "Azure ExpressRoute",
      "Azure Traffic Manager",
      "Azure Front Door"
    ],
    correctAnswer: 0,
    explanation: "VPN Gateway enables encrypted site-to-site connections over the internet.",
    category: "Networking",
    difficulty: "medium"
  },

  {
    id: 40,
    scenario: "A financial institution requires a private dedicated connection between its datacenter and Azure.",
    question: "Which Azure service should be used?",
    options: [
      "Azure VPN Gateway",
      "Azure ExpressRoute",
      "Azure Front Door",
      "Azure CDN"
    ],
    correctAnswer: 1,
    explanation: "ExpressRoute provides private connectivity that bypasses the public internet.",
    category: "Networking",
    difficulty: "medium"
  },

  {
    id: 41,
    scenario: "A DevOps engineer wants to deploy infrastructure repeatedly using templates.",
    question: "Which Azure technology should they use?",
    options: [
      "ARM Templates",
      "Azure Policy",
      "Azure Monitor",
      "Azure Bastion"
    ],
    correctAnswer: 0,
    explanation: "Azure Resource Manager templates allow infrastructure to be defined and deployed as code.",
    category: "Deployment",
    difficulty: "medium"
  },

  {
    id: 42,
    scenario: "A developer wants to run containers without managing virtual machines or Kubernetes clusters.",
    question: "Which service should be used?",
    options: [
      "Azure Container Instances",
      "Azure Virtual Machines",
      "Azure Kubernetes Service",
      "Azure DevOps"
    ],
    correctAnswer: 0,
    explanation: "Azure Container Instances allow container deployment without infrastructure management.",
    category: "Containers",
    difficulty: "easy"
  },

  {
    id: 43,
    scenario: "A company wants to orchestrate containers using Kubernetes with minimal management overhead.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Kubernetes Service",
      "Azure Container Instances",
      "Azure App Service",
      "Azure Batch"
    ],
    correctAnswer: 0,
    explanation: "Azure Kubernetes Service provides managed Kubernetes clusters.",
    category: "Containers",
    difficulty: "medium"
  },

  {
    id: 44,
    scenario: "A company wants centralized identity management for employees accessing cloud resources.",
    question: "Which Azure identity service should be used?",
    options: [
      "Microsoft Entra ID",
      "Azure Policy",
      "Azure Firewall",
      "Azure Bastion"
    ],
    correctAnswer: 0,
    explanation: "Microsoft Entra ID manages authentication and identity services for Azure resources.",
    category: "Identity",
    difficulty: "easy"
  },

  {
    id: 45,
    scenario: "An application must securely store secrets such as API keys and certificates.",
    question: "Which Azure service should be used?",
    options: [
      "Azure Key Vault",
      "Azure Blob Storage",
      "Azure Monitor",
      "Azure Policy"
    ],
    correctAnswer: 0,
    explanation: "Azure Key Vault securely stores keys, secrets, and certificates.",
    category: "Security",
    difficulty: "easy"
  },

  {
    id: 46,
    scenario: "An application must automatically increase compute resources during peak traffic hours.",
    question: "Which Azure capability supports this requirement?",
    options: [
      "Autoscale",
      "Azure Policy",
      "Azure Advisor",
      "Azure Sentinel"
    ],
    correctAnswer: 0,
    explanation: "Autoscale automatically adjusts resource capacity based on usage metrics.",
    category: "Compute",
    difficulty: "easy"
  },

  {
    id: 47,
    scenario: "A global application must route users to the closest Azure region and provide automatic failover.",
    question: "Which Azure service provides this functionality?",
    options: [
      "Azure Traffic Manager",
      "Azure Virtual Network",
      "Azure Bastion",
      "Azure VPN Gateway"
    ],
    correctAnswer: 0,
    explanation: "Traffic Manager distributes traffic across global endpoints with failover capabilities.",
    category: "Networking",
    difficulty: "medium"
  },

  {
    id: 48,
    scenario: "A company wants to track cloud spending and create alerts when budgets are exceeded.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Cost Management",
      "Azure Monitor",
      "Azure Policy",
      "Azure Sentinel"
    ],
    correctAnswer: 0,
    explanation: "Azure Cost Management helps monitor spending and enforce budget limits.",
    category: "Cost Management",
    difficulty: "easy"
  },

  {
    id: 49,
    scenario: "A security team wants threat detection and security posture monitoring for Azure resources.",
    question: "Which service should they use?",
    options: [
      "Microsoft Defender for Cloud",
      "Azure Advisor",
      "Azure Monitor",
      "Azure DevOps"
    ],
    correctAnswer: 0,
    explanation: "Defender for Cloud provides security monitoring and threat protection.",
    category: "Security",
    difficulty: "medium"
  },

  {
    id: 50,
    scenario: "An application needs isolated networking for multiple Azure resources.",
    question: "Which Azure service provides this capability?",
    options: [
      "Azure Virtual Network",
      "Azure Monitor",
      "Azure DevOps",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Virtual Networks allow Azure resources to communicate within isolated networks.",
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 51,
    scenario: "A company wants to ensure its Azure resources automatically shut down after business hours to reduce costs.",
    question: "Which Azure feature can help automate this process?",
    options: [
      "Azure Automation",
      "Azure Bastion",
      "Azure Sentinel",
      "Azure Traffic Manager"
    ],
    correctAnswer: 0,
    explanation: "Azure Automation allows scheduled runbooks that can start or stop resources automatically.",
    category: "Automation",
    difficulty: "medium"
  },

  {
    id: 52,
    scenario: "An organization wants to ensure that all storage accounts are encrypted automatically.",
    question: "Which Azure capability helps enforce this requirement?",
    options: [
      "Azure Policy",
      "Azure Monitor",
      "Azure DevOps",
      "Azure Bastion"
    ],
    correctAnswer: 0,
    explanation: "Azure Policy can enforce compliance rules such as requiring encryption for storage accounts.",
    category: "Governance",
    difficulty: "easy"
  },

  {
    id: 53,
    scenario: "A development team needs a temporary environment to test applications without affecting production workloads.",
    question: "Which Azure service is designed specifically for this scenario?",
    options: [
      "Azure DevTest Labs",
      "Azure Sentinel",
      "Azure Firewall",
      "Azure CDN"
    ],
    correctAnswer: 0,
    explanation: "Azure DevTest Labs helps teams quickly create and manage development and testing environments.",
    category: "Development",
    difficulty: "easy"
  },

  {
    id: 54,
    scenario: "A company wants to distribute website content to users globally with low latency.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Content Delivery Network",
      "Azure Virtual Network",
      "Azure Bastion",
      "Azure VPN Gateway"
    ],
    correctAnswer: 0,
    explanation: "Azure CDN caches content at edge locations worldwide to improve performance.",
    category: "Networking",
    difficulty: "easy"
  },

  {
    id: 55,
    scenario: "An application must process thousands of batch computing jobs simultaneously.",
    question: "Which Azure service is designed for large-scale parallel workloads?",
    options: [
      "Azure Batch",
      "Azure App Service",
      "Azure Functions",
      "Azure Monitor"
    ],
    correctAnswer: 0,
    explanation: "Azure Batch is designed for large-scale parallel and batch computing workloads.",
    category: "Compute",
    difficulty: "medium"
  },

  {
    id: 56,
    scenario: "A company wants to analyze telemetry data collected from applications to gain insights.",
    question: "Which Azure monitoring feature provides detailed application performance metrics?",
    options: [
      "Application Insights",
      "Azure Bastion",
      "Azure Traffic Manager",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Application Insights monitors application performance and user behavior.",
    category: "Monitoring",
    difficulty: "medium"
  },

  {
    id: 57,
    scenario: "A security administrator wants to restrict network traffic to specific ports and IP addresses.",
    question: "Which Azure networking feature should be used?",
    options: [
      "Network Security Groups",
      "Azure Monitor",
      "Azure Policy",
      "Azure CDN"
    ],
    correctAnswer: 0,
    explanation: "Network Security Groups control inbound and outbound traffic rules for Azure resources.",
    category: "Networking",
    difficulty: "easy"
  },

  {
    id: 58,
    scenario: "A company wants to centrally manage multiple Azure subscriptions across departments.",
    question: "Which Azure structure should they use?",
    options: [
      "Management Groups",
      "Resource Groups",
      "Availability Sets",
      "Azure Monitor"
    ],
    correctAnswer: 0,
    explanation: "Management Groups allow governance across multiple subscriptions.",
    category: "Governance",
    difficulty: "easy"
  },

  {
    id: 59,
    scenario: "A team wants to ensure applications remain available during hardware failures within a datacenter.",
    question: "Which Azure feature provides redundancy within a datacenter?",
    options: [
      "Availability Sets",
      "Resource Groups",
      "Azure Policy",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Availability Sets distribute VMs across multiple fault and update domains.",
    category: "Reliability",
    difficulty: "medium"
  },

  {
    id: 60,
    scenario: "A developer needs a globally distributed database with automatic replication.",
    question: "Which Azure service meets this requirement?",
    options: [
      "Azure Cosmos DB",
      "Azure SQL Managed Instance",
      "Azure Blob Storage",
      "Azure Queue Storage"
    ],
    correctAnswer: 0,
    explanation: "Cosmos DB provides global distribution and automatic replication across regions.",
    category: "Databases",
    difficulty: "medium"
  },

  {
    id: 61,
    scenario: "A company wants to prevent accidental deletion of critical Azure resources.",
    question: "Which feature should they use?",
    options: [
      "Resource Locks",
      "Azure Monitor",
      "Azure Advisor",
      "Azure CDN"
    ],
    correctAnswer: 0,
    explanation: "Resource locks prevent deletion or modification of critical resources.",
    category: "Governance",
    difficulty: "easy"
  },

  {
    id: 62,
    scenario: "An administrator needs to access a Linux VM through SSH directly from the Azure portal without opening public ports.",
    question: "Which Azure service provides this capability?",
    options: [
      "Azure Bastion",
      "Azure Firewall",
      "Azure CDN",
      "Azure Sentinel"
    ],
    correctAnswer: 0,
    explanation: "Azure Bastion allows secure SSH and RDP connections via the Azure portal.",
    category: "Networking",
    difficulty: "easy"
  },

  {
    id: 63,
    scenario: "A company wants to store large files used by virtual machines such as operating system disks.",
    question: "Which storage option should be used?",
    options: [
      "Azure Managed Disks",
      "Azure Queue Storage",
      "Azure Table Storage",
      "Azure Files"
    ],
    correctAnswer: 0,
    explanation: "Managed Disks provide persistent storage for Azure virtual machines.",
    category: "Storage",
    difficulty: "easy"
  },

  {
    id: 64,
    scenario: "A team wants to share files across multiple virtual machines using a managed file system.",
    question: "Which Azure service should they use?",
    options: [
      "Azure Files",
      "Azure Disk Storage",
      "Azure Table Storage",
      "Azure Cosmos DB"
    ],
    correctAnswer: 0,
    explanation: "Azure Files provides fully managed file shares accessible via SMB.",
    category: "Storage",
    difficulty: "easy"
  },

  {
    id: 65,
    scenario: "An organization wants to automate infrastructure deployment pipelines integrated with source control.",
    question: "Which Azure platform should they use?",
    options: [
      "Azure DevOps",
      "Azure Monitor",
      "Azure Policy",
      "Azure Firewall"
    ],
    correctAnswer: 0,
    explanation: "Azure DevOps provides CI/CD pipelines integrated with Git repositories.",
    category: "DevOps",
    difficulty: "medium"
  },

  {
    id: 66,
    scenario: "A company needs to store structured relational data with automatic backups and patching.",
    question: "Which Azure service provides this?",
    options: [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Table Storage",
      "Azure Blob Storage"
    ],
    correctAnswer: 0,
    explanation: "Azure SQL Database is a fully managed relational database service.",
    category: "Databases",
    difficulty: "easy"
  },

  {
    id: 67,
    scenario: "An organization wants to detect suspicious login activity in its Azure environment.",
    question: "Which Azure service helps analyze security data and detect threats?",
    options: [
      "Microsoft Sentinel",
      "Azure Advisor",
      "Azure DevTest Labs",
      "Azure Traffic Manager"
    ],
    correctAnswer: 0,
    explanation: "Microsoft Sentinel is a cloud-native SIEM for detecting threats.",
    category: "Security",
    difficulty: "medium"
  },

  {
    id: 68,
    scenario: "A business wants to scale web application instances automatically when traffic increases.",
    question: "Which Azure feature enables this behavior?",
    options: [
      "Autoscale",
      "Azure Advisor",
      "Azure Policy",
      "Azure Bastion"
    ],
    correctAnswer: 0,
    explanation: "Autoscale adjusts compute resources automatically based on metrics.",
    category: "Compute",
    difficulty: "easy"
  },

  {
    id: 69,
    scenario: "A company needs to route web traffic to the nearest regional endpoint based on DNS.",
    question: "Which Azure service supports DNS-based traffic routing?",
    options: [
      "Azure Traffic Manager",
      "Azure Firewall",
      "Azure Monitor",
      "Azure CDN"
    ],
    correctAnswer: 0,
    explanation: "Traffic Manager uses DNS to route users to the nearest available endpoint.",
    category: "Networking",
    difficulty: "medium"
  },

  {
    id: 70,
    scenario: "An organization wants recommendations to optimize Azure deployments for reliability and cost.",
    question: "Which Azure service should they consult?",
    options: [
      "Azure Advisor",
      "Azure Sentinel",
      "Azure DevOps",
      "Azure CDN"
    ],
    correctAnswer: 0,
    explanation: "Azure Advisor provides best practice recommendations for Azure resources.",
    category: "Cost Management",
    difficulty: "easy"
  }
]




