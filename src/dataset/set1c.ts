export interface AZ900ScenarioQuestionSetC {
    id: number;
    scenario: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: string;
    difficulty: "easy" | "medium" | "hard";
}

export const AZ900_SCENARIO_QUESTIONS_SETC: AZ900ScenarioQuestionSetC[] = [
    // --- DOMAIN 1: CLOUD CONCEPTS (25-30%) ---
    {
        id: 1,
        scenario: "A company wants to migrate to the cloud to avoid high upfront costs for hardware and only pay for what they use.",
        question: "Which expenditure model does this describe?",
        options: ["Capital Expenditure (CapEx)", "Operational Expenditure (OpEx)", "Fixed Cost Model", "Deferred Expenditure"],
        correctAnswer: 1,
        explanation: "OpEx is a 'pay-as-you-go' model where costs are treated as day-to-day operating expenses, avoiding large upfront investment.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 2,
        scenario: "You are deploying a solution where the cloud provider manages the OS, middleware, and runtime, but you manage the application code.",
        question: "Which service category are you using?",
        options: ["IaaS", "PaaS", "SaaS", "Serverless"],
        correctAnswer: 1,
        explanation: "Platform as a Service (PaaS) removes the need for the user to manage the underlying infrastructure (OS/hardware), allowing focus on application development.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 3,
        scenario: "An organization needs to scale its web app automatically as user traffic increases to ensure performance remains stable.",
        question: "Which cloud benefit is being described?",
        options: ["High Availability", "Agility", "Elasticity", "Reliability"],
        correctAnswer: 2,
        explanation: "Elasticity is the ability to automatically scale resources (up or out) to meet changing demand.",
        category: "Cloud Concepts",
        difficulty: "medium"
    },
    {
        id: 4,
        scenario: "A legal firm requires total control over their data and hardware due to strict regulatory requirements but wants cloud-like management.",
        question: "Which cloud model should they implement?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Multi-cloud"],
        correctAnswer: 1,
        explanation: "A Private Cloud is dedicated to a single organization and can be hosted on-premises, providing the highest level of control and security.",
        category: "Cloud Concepts",
        difficulty: "medium"
    },
    {
        id: 5,
        scenario: "You are reviewing the Shared Responsibility Model for a Software as a Service (SaaS) application.",
        question: "Who is responsible for managing the physical security of the network?",
        options: ["The Customer", "Microsoft", "Both Customer and Microsoft", "The Internet Service Provider"],
        correctAnswer: 1,
        explanation: "In all cloud models, the cloud provider (Microsoft) is always responsible for physical security and physical hosts.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },

    // --- DOMAIN 2: AZURE ARCHITECTURE AND SERVICES (35-40%) ---
    {
        id: 6,
        scenario: "You need to ensure that your application remains available even if an entire Azure data center fails.",
        question: "Which feature provides this level of redundancy within a single region?",
        options: ["Availability Sets", "Availability Zones", "Resource Groups", "Region Pairs"],
        correctAnswer: 1,
        explanation: "Availability Zones are physically separate data centers within an Azure region, protecting against data center outages.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 7,
        scenario: "A developer wants to run a small piece of code in response to an HTTP request without managing any servers.",
        question: "Which Azure service is best suited for this?",
        options: ["Azure Virtual Machines", "Azure App Service", "Azure Functions", "Azure Container Instances"],
        correctAnswer: 2,
        explanation: "Azure Functions is a serverless compute service that lets you run event-triggered code without explicitly provisioning infrastructure.",
        category: "Azure Architecture",
        difficulty: "easy"
    },
    {
        id: 8,
        scenario: "You need to connect your on-premises network to Azure via a dedicated, private connection that does not use the public internet.",
        question: "Which service should you use?",
        options: ["Azure VPN Gateway", "Azure ExpressRoute", "Azure Peering", "Azure Bastion"],
        correctAnswer: 1,
        explanation: "ExpressRoute provides a private, high-speed connection between on-premises and Azure, bypassing the public internet.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 9,
        scenario: "A company needs to store millions of small files (unstructured data) like images and videos.",
        question: "Which Azure Storage service is specifically designed for this?",
        options: ["Azure Files", "Azure SQL Database", "Azure Blob Storage", "Azure Queue Storage"],
        correctAnswer: 2,
        explanation: "Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data.",
        category: "Azure Architecture",
        difficulty: "easy"
    },
    {
        id: 10,
        scenario: "You want to organize 50 Azure subscriptions into a single hierarchy for unified policy application.",
        question: "Which component should you use?",
        options: ["Resource Groups", "Management Groups", "Azure Active Directory", "Azure DevTest Labs"],
        correctAnswer: 1,
        explanation: "Management Groups provide a level of scope above subscriptions, allowing you to manage access, policies, and compliance across multiple subscriptions.",
        category: "Azure Architecture",
        difficulty: "hard"
    },

    // --- DOMAIN 3: MANAGEMENT AND GOVERNANCE (30-35%) ---
    {
        id: 11,
        scenario: "You need to prevent any user from accidentally deleting a critical production database.",
        question: "Which feature should you implement?",
        options: ["Azure Policy", "RBAC Role", "Resource Lock", "Azure Blueprint"],
        correctAnswer: 2,
        explanation: "A 'CanNotDelete' Resource Lock prevents resources from being deleted, even by users with Owner permissions.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 12,
        scenario: "An administrator wants to ensure that all new resources created in a subscription must have a 'Department' tag.",
        question: "Which tool can enforce this rule automatically?",
        options: ["Azure Advisor", "Azure Policy", "Azure Monitor", "Role-Based Access Control (RBAC)"],
        correctAnswer: 1,
        explanation: "Azure Policy is used to enforce rules and effects over your resources, ensuring they stay compliant with corporate standards.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 13,
        scenario: "You need to manage several Linux servers located in your own on-premises data center using the Azure Portal.",
        question: "Which service enables this hybrid management?",
        options: ["Azure Arc", "Azure Bastion", "Azure Virtual Desktop", "Azure Migrate"],
        correctAnswer: 0,
        explanation: "Azure Arc allows you to manage your on-premises, multi-cloud, and edge resources as if they were running in Azure.",
        category: "Management and Governance",
        difficulty: "hard"
    },
    {
        id: 14,
        scenario: "A manager wants a report that provides recommendations on how to reduce Azure costs by identifying underutilized resources.",
        question: "Which tool should they consult?",
        options: ["Azure Service Health", "Azure Monitor", "Azure Advisor", "Azure TCO Calculator"],
        correctAnswer: 2,
        explanation: "Azure Advisor analyzes your configurations and usage telemetry and offers personalized recommendations for cost, security, and performance.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 15,
        scenario: "You need to implement a security strategy that assumes every request is a breach and verifies it as if it originated from an untrusted network.",
        question: "Which security model is this?",
        options: ["Defense in Depth", "Zero Trust", "Shared Responsibility", "Least Privilege"],
        correctAnswer: 1,
        explanation: "Zero Trust is a security framework that requires all users to be authenticated, authorized, and continuously validated before being granted access.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 16,
        scenario: "You need to host a simple website that only consists of HTML, CSS, and JavaScript files with minimal cost.",
        question: "Which Azure storage feature is most cost-effective for hosting this static website?",
        options: ["Azure Files", "Azure Blob Storage", "Azure Disk Storage", "Azure SQL Database"],
        correctAnswer: 1,
        explanation: "Azure Blob Storage allows you to serve static content (HTML, JS, CSS) directly from a storage container, which is cheaper than running a VM or App Service.",
        category: "Azure Architecture",
        difficulty: "easy"
    },
    {
        id: 17,
        scenario: "An organization needs a cloud-based solution to store and process billions of events per second from IoT devices.",
        question: "Which service is best suited for this big data streaming requirement?",
        options: ["Azure Event Hubs", "Azure Service Bus", "Azure ExpressRoute", "Azure Firewall"],
        correctAnswer: 0,
        explanation: "Azure Event Hubs is a big data streaming platform and event ingestion service capable of receiving and processing millions of events per second.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 18,
        scenario: "You want to deploy multiple instances of an application across different regions but manage them as a single entity.",
        question: "Which feature allows you to manage resources globally across different subscriptions and regions?",
        options: ["Resource Groups", "Azure Regions", "Azure Management Groups", "Availability Sets"],
        correctAnswer: 2,
        explanation: "Management Groups provide a level of scope above subscriptions to manage policy, compliance, and access across multiple subscriptions efficiently.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 19,
        scenario: "You need to ensure that your Azure SQL Database is automatically replicated to a different geographical region for disaster recovery.",
        question: "Which storage redundancy option or feature facilitates this?",
        options: ["LRS", "ZRS", "Geo-redundancy (GRS)", "Snapshotting"],
        correctAnswer: 2,
        explanation: "Geo-redundant storage (GRS) copies your data synchronously three times within a single physical location in the primary region, then copies it asynchronously to a single physical location in the secondary region.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 20,
        scenario: "A team needs a temporary environment to test a new application for 2 hours and then delete it.",
        question: "Which Azure service is specifically designed to provide on-demand, self-service environments for development and testing?",
        options: ["Azure DevTest Labs", "Azure App Service", "Azure Bastion", "Azure Monitor"],
        correctAnswer: 0,
        explanation: "Azure DevTest Labs allows developers to efficiently self-manage VMs and PaaS resources while minimizing waste and controlling costs.",
        category: "Azure Architecture",
        difficulty: "medium"
    },

    // --- DOMAIN 3: IDENTITY, ACCESS, AND SECURITY ---
    {
        id: 21,
        scenario: "Your company wants to transition from using passwords to a more secure, biometric-based login system for Azure resources.",
        question: "Which Microsoft Entra ID feature supports this requirement?",
        options: ["Single Sign-On (SSO)", "Passwordless Authentication", "Conditional Access", "Role-Based Access Control (RBAC)"],
        correctAnswer: 1,
        explanation: "Passwordless authentication, such as Windows Hello for Business or FIDO2 security keys, replaces the password with biometric or hardware-based verification.",
        category: "Identity and Security",
        difficulty: "easy"
    },
    {
        id: 22,
        scenario: "You want to ensure that users can only access the Azure Portal if they are logging in from a corporate-owned device.",
        question: "Which feature of Microsoft Entra ID should you use?",
        options: ["RBAC", "Azure Policy", "Conditional Access", "Identity Protection"],
        correctAnswer: 2,
        explanation: "Conditional Access is the tool used by Microsoft Entra ID to allow (or block) access based on signals like device compliance, location, or user risk.",
        category: "Identity and Security",
        difficulty: "hard"
    },
    {
        id: 23,
        scenario: "You need to give a specific user the ability to restart Virtual Machines, but not delete them or create new ones.",
        question: "Which Azure mechanism should you use to assign these specific permissions?",
        options: ["Azure Policy", "Resource Locks", "Role-Based Access Control (RBAC)", "Management Groups"],
        correctAnswer: 2,
        explanation: "RBAC allows for fine-grained access management, permitting you to grant only the amount of access that users need to perform their jobs (Least Privilege).",
        category: "Identity and Security",
        difficulty: "easy"
    },
    {
        id: 24,
        scenario: "A security admin wants a single dashboard to view security recommendations and threats across all Azure, on-premises, and multi-cloud workloads.",
        question: "Which service provides this centralized security management?",
        options: ["Microsoft Defender for Cloud", "Azure Sentinel", "Azure Key Vault", "Azure Dedicated Host"],
        correctAnswer: 0,
        explanation: "Microsoft Defender for Cloud is a Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWP) solution for all your resources.",
        category: "Identity and Security",
        difficulty: "medium"
    },
    {
        id: 25,
        scenario: "You need to store application secrets, like database connection strings and API keys, securely.",
        question: "Which Azure service is designed for this purpose?",
        options: ["Azure Storage", "Azure Key Vault", "Azure Information Protection", "Azure Bastion"],
        correctAnswer: 1,
        explanation: "Azure Key Vault is used to securely store and tightly control access to tokens, passwords, certificates, API keys, and other secrets.",
        category: "Identity and Security",
        difficulty: "easy"
    },

    // --- DOMAIN 4: MANAGEMENT AND GOVERNANCE ---
    {
        id: 26,
        scenario: "You are tasked with discovering and governing data across your entire organization, including on-premises and other clouds.",
        question: "Which Azure service should you use for data map and data catalog capabilities?",
        options: ["Azure Advisor", "Azure Policy", "Microsoft Purview", "Azure Blueprints"],
        correctAnswer: 2,
        explanation: "Microsoft Purview is a unified data governance solution that helps you manage and govern your on-premises, multi-cloud, and SaaS data.",
        category: "Management and Governance",
        difficulty: "hard"
    },
    {
        id: 27,
        scenario: "You need to see if a scheduled maintenance event will affect your specific Azure resources next week.",
        question: "Where should you check for this information?",
        options: ["Azure Monitor", "Azure Advisor", "Azure Service Health", "Azure Support"],
        correctAnswer: 2,
        explanation: "Azure Service Health provides personalized alerts and guidance when Azure service issues or maintenance affect you.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 28,
        scenario: "You want to automate the creation of a 'compliant' environment that includes specific RBAC roles, policies, and ARM templates.",
        question: "Which service allows you to define these repeatable sets of Azure resources?",
        options: ["Azure Blueprints", "Azure Policy", "Azure Arc", "Azure DevTest Labs"],
        correctAnswer: 0,
        explanation: "Azure Blueprints enables cloud architects to define a repeatable set of Azure resources that implements and adheres to an organization's standards.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 29,
        scenario: "Your finance department needs to receive an email notification whenever the monthly Azure spend exceeds $5,000.",
        question: "Which feature of Azure Cost Management should you configure?",
        options: ["Pricing Calculator", "TCO Calculator", "Budgets", "Tags"],
        correctAnswer: 2,
        explanation: "Budgets in Azure Cost Management allow you to set spending limits and trigger alerts based on actual or forecasted costs.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 30,
        scenario: "You are using the Azure Command Line Interface (CLI) to manage resources.",
        question: "Which tool provides a browser-based shell experience for running Azure CLI or PowerShell commands?",
        options: ["Azure Portal", "Azure Cloud Shell", "Azure Arc", "Visual Studio Code"],
        correctAnswer: 1,
        explanation: "Azure Cloud Shell is an interactive, authenticated, browser-accessible shell for managing Azure resources.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 31,
        scenario: "A company uses a 'Pay-as-you-go' model for their cloud services.",
        question: "Which of the following is an advantage of this consumption-based model?",
        options: ["High upfront costs", "Predictable monthly bills regardless of usage", "No need to pay for unused resources", "Limited scalability"],
        correctAnswer: 2,
        explanation: "In a consumption-based model, you only pay for the resources you use, which eliminates the waste of paying for idle capacity.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 32,
        scenario: "You need to deploy a set of identical virtual machines to ensure high availability for a web application.",
        question: "Which Azure compute service automatically manages the number of VM instances based on demand?",
        options: ["Virtual Machine Scale Sets", "Availability Sets", "Azure Functions", "Azure Batch"],
        correctAnswer: 0,
        explanation: "VM Scale Sets allow you to create and manage a group of load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 33,
        scenario: "A large enterprise wants to use their existing Windows Server licenses to reduce costs in Azure.",
        question: "What is the name of this benefit?",
        options: ["Azure Hybrid Benefit", "Azure Reserved Instances", "Azure Spot Instances", "Azure Cost Management"],
        correctAnswer: 0,
        explanation: "Azure Hybrid Benefit is a licensing benefit that lets you bring your on-premises Windows Server and SQL Server licenses to Azure.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 34,
        scenario: "You need to connect two Azure Virtual Networks (VNets) together so they can communicate using private IP addresses.",
        question: "Which feature should you use?",
        options: ["VNet Peering", "VPN Gateway", "ExpressRoute", "Azure Firewall"],
        correctAnswer: 0,
        explanation: "VNet Peering connects two Azure virtual networks, allowing traffic to be routed between them privately through the Microsoft backbone network.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 35,
        scenario: "A company wants to host their application in the cloud but must keep the physical hardware in their own local data center for data sovereignty.",
        question: "Which cloud model is being used if they use Azure services on-premises via Azure Stack?",
        options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "SaaS"],
        correctAnswer: 2,
        explanation: "Hybrid Cloud combines public cloud services with on-premises infrastructure, such as using Azure Stack to run Azure services in a local data center.",
        category: "Cloud Concepts",
        difficulty: "medium"
    },
    {
        id: 36,
        scenario: "You need to analyze logs from multiple sources and create a visual dashboard for monitoring performance.",
        question: "Which part of Azure Monitor is used specifically for querying and analyzing log data?",
        options: ["Application Insights", "Log Analytics", "Azure Advisor", "Azure Service Health"],
        correctAnswer: 1,
        explanation: "Log Analytics is a tool in the Azure portal used to edit and run log queries with data collected by Azure Monitor.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 37,
        scenario: "An administrator needs to quickly deploy 100 identical VMs with a specific configuration using a JSON file.",
        question: "Which Azure deployment technology is based on JSON files?",
        options: ["Azure CLI", "PowerShell", "ARM Templates", "Azure Portal"],
        correctAnswer: 2,
        explanation: "Azure Resource Manager (ARM) templates are JavaScript Object Notation (JSON) files that define the infrastructure and configuration for your project.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 38,
        scenario: "A company needs to ensure that their cloud environment complies with ISO 27001 standards.",
        question: "Which Azure tool provides a 'Compliance Score' and tracks regulatory progress?",
        options: ["Azure Policy", "Microsoft Defender for Cloud", "Microsoft Purview", "Azure Monitor"],
        correctAnswer: 1,
        explanation: "Microsoft Defender for Cloud includes a regulatory compliance dashboard that tracks your progress against various standards like ISO 27001.",
        category: "Management and Governance",
        difficulty: "hard"
    },
    {
        id: 39,
        scenario: "You are setting up a network and want to filter traffic to and from specific Azure resources within a Virtual Network.",
        question: "Which resource acts as a basic firewall for controlling traffic at the subnet or NIC level?",
        options: ["Azure Firewall", "Network Security Group (NSG)", "Azure Bastion", "Application Gateway"],
        correctAnswer: 1,
        explanation: "An NSG contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, several types of Azure resources.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 40,
        scenario: "You need to move a large amount of data (50 TB) from your on-premises data center to Azure, but your internet connection is too slow.",
        question: "Which physical appliance should you request from Microsoft to facilitate this transfer?",
        options: ["Azure Data Box", "Azure ExpressRoute", "Azure Migrate", "Azure File Sync"],
        correctAnswer: 0,
        explanation: "Azure Data Box is a physical device provided by Microsoft that you can use to transfer large amounts of data to Azure offline.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 41,
        scenario: "You want to find out how much money you could save over 3 years by moving your on-premises data center to Azure.",
        question: "Which tool should you use for this pre-migration comparison?",
        options: ["Pricing Calculator", "TCO (Total Cost of Ownership) Calculator", "Azure Advisor", "Cost Management"],
        correctAnswer: 1,
        explanation: "The TCO Calculator helps you estimate the cost savings you can realize by migrating your workloads to Azure compared to keeping them on-premises.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 42,
        scenario: "Which of the following is a characteristic of 'High Availability' in the cloud?",
        question: "What does High Availability focus on?",
        options: ["Scaling resources to meet demand", "Ensuring services are accessible even during a component failure", "Encrypting data at rest", "Reducing the cost of virtual machines"],
        correctAnswer: 1,
        explanation: "High Availability (HA) ensures that a system remains operational and accessible for a high percentage of time, even if individual components fail.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 43,
        scenario: "A developer wants to deploy a containerized application without managing any virtual machines.",
        question: "Which service offers the fastest and simplest way to run a single container in Azure?",
        options: ["Azure Kubernetes Service (AKS)", "Azure Container Instances (ACI)", "Azure App Service", "Virtual Machines"],
        correctAnswer: 1,
        explanation: "ACI is the fastest and simplest way to run a container in Azure, without having to manage any virtual machines or adopt a higher-level service.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 44,
        scenario: "You need to manage your Azure resources using a command-line tool that is cross-platform (runs on Windows, macOS, and Linux).",
        question: "Which tool should you install?",
        options: ["Azure PowerShell", "Azure CLI", "Azure Portal", "ARM Templates"],
        correctAnswer: 1,
        explanation: "The Azure CLI is a cross-platform command-line tool that can be installed locally on Windows, macOS, or Linux.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 45,
        scenario: "A company wants to ensure that their data is always encrypted while it is being stored in Azure.",
        question: "Which feature provides automatic encryption for data at rest across all Azure Storage accounts?",
        options: ["Azure Disk Encryption", "Storage Service Encryption (SSE)", "Azure Key Vault", "Transparent Data Encryption (TDE)"],
        correctAnswer: 1,
        explanation: "Azure Storage Service Encryption (SSE) automatically encrypts your data before persisting it to the Azure Storage backend.",
        category: "Identity and Security",
        difficulty: "medium"
    },
    {
        id: 46,
        scenario: "You need to give a partner company access to your Azure resources without creating a new identity in your own directory.",
        question: "Which feature of Microsoft Entra ID allows for this 'Guest User' access?",
        options: ["Entra ID B2C", "Entra ID B2B", "SSO", "Conditional Access"],
        correctAnswer: 1,
        explanation: "Microsoft Entra B2B (Business-to-Business) collaboration allows you to share your company's applications and services with guest users from any other organization.",
        category: "Identity and Security",
        difficulty: "medium"
    },
    {
        id: 47,
        scenario: "Which cloud characteristic allows you to deploy resources globally in minutes?",
        question: "What benefit is this describing?",
        options: ["High Availability", "Agility", "Disaster Recovery", "Predictability"],
        correctAnswer: 1,
        explanation: "Agility is the ability to rapidly develop, test, and launch software applications that drive business value.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 48,
        scenario: "You want to receive a monthly summary of recommendations for improving the security and performance of your environment.",
        question: "Which service provides these proactive best-practice recommendations?",
        options: ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Defender for Cloud"],
        correctAnswer: 2,
        explanation: "Azure Advisor analyzes your resource configuration and usage telemetry to provide recommendations for high availability, security, performance, and cost.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 49,
        scenario: "A developer wants to execute a piece of logic every time an image is uploaded to a storage container.",
        question: "Which serverless service is the best choice for this event-driven task?",
        options: ["Azure Functions", "Azure Logic Apps", "Azure App Service", "Azure Batch"],
        correctAnswer: 0,
        explanation: "Azure Functions is an event-driven serverless compute platform that can run code in response to triggers like a storage upload.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 50,
        scenario: "You need to manage a workflow between different SaaS applications (like Twitter and Email) without writing any code.",
        question: "Which Azure service is a low-code/no-code service for creating automated workflows?",
        options: ["Azure Functions", "Azure Logic Apps", "Azure App Service", "Azure DevOps"],
        correctAnswer: 1,
        explanation: "Azure Logic Apps is a cloud-based platform for creating and running automated workflows that integrate your apps, data, services, and systems.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 51,
        scenario: "A company wants to strictly control which Azure regions can be used for resource deployment to ensure data stays within Europe.",
        question: "Which governance tool should they use to enforce this?",
        options: ["RBAC", "Azure Policy", "Resource Locks", "Management Groups"],
        correctAnswer: 1,
        explanation: "Azure Policy can be used to enforce specific rules, such as restricting the locations (regions) where resources can be deployed.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 52,
        scenario: "Which service provides a cloud-based managed database service with near-instant scaling and 99.999% availability?",
        question: "Identify the service.",
        options: ["Azure SQL Database", "SQL Server on VM", "Azure Cosmos DB", "Azure Data Lake"],
        correctAnswer: 2,
        explanation: "Azure Cosmos DB is a globally distributed, multi-model database service that offers high availability and low latency.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 53,
        scenario: "An organization is using multiple cloud providers (Azure and AWS) and wants to apply Azure security policies to their AWS servers.",
        question: "Which service makes this possible?",
        options: ["Azure Arc", "Azure Bastion", "Azure VPN Gateway", "Azure Policy"],
        correctAnswer: 0,
        explanation: "Azure Arc allows you to extend Azure management and security to resources running on-premises, at the edge, or in other clouds (like AWS or GCP).",
        category: "Management and Governance",
        difficulty: "hard"
    },
    {
        id: 54,
        scenario: "Which storage tier is the most cost-effective for data that is rarely accessed and can tolerate a retrieval latency of several hours?",
        question: "Identify the tier.",
        options: ["Hot tier", "Cool tier", "Archive tier", "Premium tier"],
        correctAnswer: 2,
        explanation: "The Archive tier has the lowest storage costs but higher data retrieval costs and latency compared to the Hot and Cool tiers.",
        category: "Azure Architecture",
        difficulty: "easy"
    },
    {
        id: 55,
        scenario: "You need to provide a secure way for administrators to connect to a Virtual Machine over the internet without exposing the VM's RDP/SSH ports to the public internet.",
        question: "Which service should you use?",
        options: ["Azure Bastion", "Azure VPN Gateway", "Azure Firewall", "Azure ExpressRoute"],
        correctAnswer: 0,
        explanation: "Azure Bastion provides secure and seamless RDP/SSH connectivity to your virtual machines directly in the Azure portal over SSL.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 56,
        scenario: "You are explaining the difference between Horizontal and Vertical scaling.",
        question: "Which of the following is an example of 'Horizontal Scaling'?",
        options: ["Adding more RAM to an existing VM", "Upgrading a VM to a faster CPU", "Adding three additional VMs to a web farm", "Moving a database to a larger instance"],
        correctAnswer: 2,
        explanation: "Horizontal scaling (scaling out) involves adding more instances of a resource (like more VMs), whereas vertical scaling (scaling up) involves adding more power to an existing instance.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 57,
        scenario: "A company wants to identify which users have been logging in from unusual geographic locations.",
        question: "Which Microsoft Entra ID feature provides this risk-based reporting?",
        options: ["Conditional Access", "Identity Protection", "Privileged Identity Management (PIM)", "Multi-Factor Authentication (MFA)"],
        correctAnswer: 1,
        explanation: "Microsoft Entra ID Identity Protection allows organizations to detect, investgate, and remediate identity-based risks like 'unfamiliar sign-in properties'.",
        category: "Identity and Security",
        difficulty: "hard"
    },
    {
        id: 58,
        scenario: "You need to manage a fleet of IoT devices and send messages back and forth between the devices and the cloud.",
        question: "Which service is specifically designed for bidirectional communication with IoT devices?",
        options: ["Azure IoT Hub", "Azure Event Hubs", "Azure Notification Hubs", "Azure Service Bus"],
        correctAnswer: 0,
        explanation: "Azure IoT Hub is a managed service that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 59,
        scenario: "Which Azure service is a globally distributed data platform that can handle multiple data models including Document, Key-Value, and Graph?",
        question: "Identify the service.",
        options: ["Azure SQL Database", "Azure Cosmos DB", "Azure Table Storage", "Azure Synapse Analytics"],
        correctAnswer: 1,
        explanation: "Azure Cosmos DB is a fully managed NoSQL database for modern app development, supporting multiple APIs like MongoDB, Cassandra, and Gremlin.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 60,
        scenario: "You want to find the official documents that describe Microsoft's compliance with data protection laws like GDPR.",
        question: "Where can you find this information?",
        options: ["Azure Portal", "Microsoft Service Trust Portal", "Azure Advisor", "Azure Monitor"],
        correctAnswer: 1,
        explanation: "The Microsoft Service Trust Portal provides access to audit reports, compliance guides, and trust documents regarding Microsoft Cloud services.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    // --- COST AND BILLING ---
    {
        id: 61,
        scenario: "A company wants to compare the cost of running their current on-premises data center against the cost of running those same workloads in Azure over 3 years.",
        question: "Which tool should they use for this pre-migration assessment?",
        options: ["Azure Pricing Calculator", "TCO (Total Cost of Ownership) Calculator", "Azure Advisor", "Cost Management + Billing"],
        correctAnswer: 1,
        explanation: "The TCO Calculator is specifically designed to compare on-premises costs with Azure costs to justify cloud migration.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 62,
        scenario: "You need to estimate the monthly cost of a new multi-tier application involving VMs, SQL databases, and a Load Balancer before you deploy it.",
        question: "Which tool is best for this estimation?",
        options: ["Azure Pricing Calculator", "TCO Calculator", "Azure Monitor", "Azure Budgets"],
        correctAnswer: 0,
        explanation: "The Azure Pricing Calculator provides a 'shopping cart' style estimate for Azure services based on selected configurations.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 63,
        scenario: "An organization wants to categorize their Azure costs by 'Department' and 'Project' to simplify internal chargebacks.",
        question: "Which feature should they use to label their resources?",
        options: ["Resource Groups", "Subscriptions", "Tags", "Management Groups"],
        correctAnswer: 2,
        explanation: "Tags are name/value pairs that allow you to categorize resources and view consolidated billing for those metadata labels.",
        category: "Management and Governance",
        difficulty: "easy"
    },

    // --- IDENTITY AND SECURITY (2026 FOCUS) ---
    {
        id: 64,
        scenario: "You want to ensure that a user can only manage Azure resources from a specific geographic location and only if their device is healthy.",
        question: "Which Microsoft Entra ID feature provides this 'If-Then' logic?",
        options: ["RBAC", "Conditional Access", "Identity Protection", "Privileged Identity Management (PIM)"],
        correctAnswer: 1,
        explanation: "Conditional Access is the 'Zero Trust' policy engine that evaluates signals (location, device, user) before granting access.",
        category: "Identity and Security",
        difficulty: "medium"
    },
    {
        id: 65,
        scenario: "You need to give a contractor temporary 'Owner' access to a subscription for exactly 4 hours, requiring them to justify the request.",
        question: "Which service should you use?",
        options: ["Azure RBAC", "Microsoft Entra PIM (Privileged Identity Management)", "Resource Locks", "Azure Policy"],
        correctAnswer: 1,
        explanation: "PIM provides 'just-in-time' (JIT) privileged access, allowing you to limit the time a user has high-level permissions.",
        category: "Identity and Security",
        difficulty: "hard"
    },
    {
        id: 66,
        scenario: "A security admin needs a single tool to monitor security across Azure, AWS, and on-premises servers from one dashboard.",
        question: "Which service provides this multi-cloud security posture management?",
        options: ["Microsoft Defender for Cloud", "Azure Firewall", "Azure Sentinel", "Azure Bastion"],
        correctAnswer: 0,
        explanation: "Microsoft Defender for Cloud (formerly Security Center) protects hybrid and multi-cloud environments.",
        category: "Identity and Security",
        difficulty: "medium"
    },

    // --- GOVERNANCE AND TOOLS ---
    {
        id: 67,
        scenario: "You need to ensure that no one in the company can deploy a Virtual Machine larger than a specific size (e.g., G-Series) to control costs.",
        question: "Which governance tool should you use?",
        options: ["Azure RBAC", "Azure Policy", "Resource Locks", "Azure Blueprint"],
        correctAnswer: 1,
        explanation: "Azure Policy enforces rules across your resources. Unlike RBAC (which controls WHO), Policy controls WHAT properties a resource can have.",
        category: "Management and Governance",
        difficulty: "medium"
    },
    {
        id: 68,
        scenario: "You need to prevent the accidental deletion of a production storage account, even by an administrator with full permissions.",
        question: "What should you apply to the storage account?",
        options: ["A 'ReadOnly' Lock", "A 'CanNotDelete' Lock", "A Deny Policy", "An RBAC Deny Assignment"],
        correctAnswer: 1,
        explanation: "A 'CanNotDelete' lock allows authorized users to read and modify a resource, but not delete it.",
        category: "Management and Governance",
        difficulty: "easy"
    },
    {
        id: 69,
        scenario: "You want to create a standard, repeatable environment that includes resource groups, policies, and specific role assignments.",
        question: "Which service allows you to package these artifacts for rapid deployment?",
        options: ["ARM Templates", "Azure Blueprints", "Azure Arc", "Azure DevTest Labs"],
        correctAnswer: 1,
        explanation: "Azure Blueprints allows architects to define a repeatable set of Azure resources that implement an organization's standards and requirements.",
        category: "Management and Governance",
        difficulty: "hard"
    },
    {
        id: 70,
        scenario: "You are looking for official Microsoft documentation regarding how Azure complies with the GDPR privacy regulation.",
        question: "Where is this information located?",
        options: ["Azure Portal", "Azure Advisor", "Service Trust Portal", "Microsoft Entra ID"],
        correctAnswer: 2,
        explanation: "The Service Trust Portal is the central location for Microsoft's compliance reports, audit results, and trust-related documentation.",
        category: "Management and Governance",
        difficulty: "easy"
    },

    // --- ARCHITECTURE AND NETWORKING ---
    {
        id: 71,
        scenario: "You need to connect an on-premises site to an Azure VNet. You require a fast, reliable connection that does not travel over the public internet.",
        question: "Which service fits this requirement?",
        options: ["Azure VPN Gateway", "Azure ExpressRoute", "Azure Peering", "Azure Bastion"],
        correctAnswer: 1,
        explanation: "ExpressRoute provides a private, dedicated connection between your on-premises infrastructure and Azure data centers.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 72,
        scenario: "You want to distribute incoming HTTP requests across a pool of web servers based on the URL path (e.g., /images vs /videos).",
        question: "Which load-balancing service is 'application-aware' and works at Layer 7?",
        options: ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
        correctAnswer: 1,
        explanation: "Application Gateway is a web traffic load balancer that can make routing decisions based on attributes of an HTTP request.",
        category: "Azure Architecture",
        difficulty: "medium"
    },
    {
        id: 73,
        scenario: "You have several virtual machines and want to ensure they can communicate with each other privately.",
        question: "What is the fundamental building block for your private network in Azure?",
        options: ["Subnet", "Virtual Network (VNet)", "Network Security Group", "Public IP Address"],
        correctAnswer: 1,
        explanation: "Azure VNet is the fundamental building block for your private network in Azure, providing isolation and segmentation.",
        category: "Azure Architecture",
        difficulty: "easy"
    },

    // --- STORAGE AND DATA ---
    {
        id: 74,
        scenario: "You need to store large amounts of unstructured data, such as video files, that will be accessed frequently.",
        question: "Which storage service and tier should you choose?",
        options: ["Blob Storage, Archive Tier", "Blob Storage, Hot Tier", "File Storage, Cool Tier", "Disk Storage, Premium"],
        correctAnswer: 1,
        explanation: "Blob storage is for unstructured data; the Hot tier is optimized for data that is accessed frequently.",
        category: "Azure Architecture",
        difficulty: "easy"
    },
    {
        id: 75,
        scenario: "A team needs a cloud-based shared folder that can be mounted simultaneously by multiple VMs using the SMB protocol.",
        question: "Which service should you use?",
        options: ["Azure Blob Storage", "Azure Files", "Azure Table Storage", "Azure Queue Storage"],
        correctAnswer: 1,
        explanation: "Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard SMB or NFS protocols.",
        category: "Azure Architecture",
        difficulty: "medium"
    },

    // --- CLOUD CONCEPTS (RECAP) ---
    {
        id: 76,
        scenario: "Which cloud concept refers to the ability of a system to recover from failures and continue to function?",
        question: "Identify the concept.",
        options: ["Scalability", "Elasticity", "Reliability", "Predictability"],
        correctAnswer: 2,
        explanation: "Reliability is the ability of a system to recover from failures and continue to function, often through redundancy.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 77,
        scenario: "You are running a web application on a single VM. Traffic increases, so you change the VM size from 'Basic' to 'Ultra' (more CPU/RAM).",
        question: "This is an example of what type of scaling?",
        options: ["Horizontal Scaling (Scaling Out)", "Vertical Scaling (Scaling Up)", "Elastic Scaling", "High Availability"],
        correctAnswer: 1,
        explanation: "Vertical scaling (Scaling Up) means increasing the capacity of an existing resource, such as adding more RAM/CPU to a VM.",
        category: "Cloud Concepts",
        difficulty: "easy"
    },
    {
        id: 78,
        scenario: "In the Shared Responsibility Model, who is responsible for the 'Information and Data' regardless of the cloud service type (IaaS, PaaS, SaaS)?",
        question: "Identify the responsible party.",
        options: ["The Cloud Provider (Microsoft)", "The Customer", "Shared Responsibility", "A third-party auditor"],
        correctAnswer: 1,
        explanation: "In every cloud model, the customer always retains responsibility for their data and information.",
        category: "Cloud Concepts",
        difficulty: "medium"
    },

    // --- MODERN SERVICES (2026 UPDATE) ---
    {
        id: 79,
        scenario: "A data analyst needs to find, classify, and track the lineage of data across multiple SQL databases and Excel files.",
        question: "Which service provides these unified data governance capabilities?",
        options: ["Azure Advisor", "Microsoft Purview", "Azure Monitor", "Azure Arc"],
        correctAnswer: 1,
        explanation: "Microsoft Purview is the primary service for data governance, discovery, and lineage across the enterprise.",
        category: "Management and Governance",
        difficulty: "hard"
    },
    {
        id: 80,
        scenario: "You want to use the same security policies you have in Azure on your Google Cloud Platform (GCP) resources.",
        question: "Which Azure service enables this 'bridge' between clouds?",
        options: ["Azure Bastion", "Azure Arc", "Azure ExpressRoute", "Azure Front Door"],
        correctAnswer: 1,
        explanation: "Azure Arc allows you to extend Azure management and security to resources outside of Azure, including on-premises and other clouds.",
        category: "Management and Governance",
        difficulty: "hard"
    }


]