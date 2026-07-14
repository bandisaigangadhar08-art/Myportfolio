import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Sai Gangadhar Bandi",
  title: "SharePoint & Microsoft Power Platform Developer",
  location: "Hyderabad, TG, India",
  phone: "+91 7780153129",
  email: "sai.gangadhar03@gmail.com",
  linkedin: "linkedin.com/in/sai-gangadhar-bandi-617976243",
  linkedinUrl: "https://linkedin.com/in/sai-gangadhar-bandi-617976243",
  summary: "SharePoint & Microsoft Power Platform Developer with around 4 years of experience in designing, developing, and supporting enterprise business applications using SharePoint Online, Power Apps, Power Automate, Power BI, SQL Server, and Microsoft 365 technologies. Experienced in business process automation, workflow design, requirements gathering, stakeholder collaboration, application lifecycle management, UAT, documentation, and production support.",
  
  skills: [
    {
      category: "Power Platform Core",
      skills: [
        "SharePoint Online (Lists & Libraries)",
        "Power Apps (Canvas & Model-Driven)",
        "Power Automate (Cloud & Desktop)",
        "Power BI (Dashboards & Dax)",
        "Copilot Studio (AI Agents)",
        "Dataverse & SQL Server"
      ]
    },
    {
      category: "Programming & Web",
      skills: [
        "PowerFx",
        "Python",
        "SQL",
        "REST APIs & Webhooks",
        "JSON Schema Customization",
        "JavaScript / HTML5 / CSS3"
      ]
    },
    {
      category: "Integrations & Cloud",
      skills: [
        "Microsoft Graph API",
        "Azure Services & AD",
        "Freshservice ITSM API",
        "Salesforce Integration",
        "SAP Data Gateways",
        "Microsoft 365 Administration"
      ]
    },
    {
      category: "Process & Methodologies",
      skills: [
        "Requirements Gathering",
        "Workflow Architecture",
        "ALM & Solution Deployment",
        "User Acceptance Testing (UAT)",
        "Technical Documentation (FSD)",
        "M365 Governance Practices"
      ]
    }
  ],

  experience: [
    {
      id: "exp1",
      role: "Senior Software Developer",
      company: "MYK LATICRETE Pvt. Ltd.",
      location: "Hyderabad",
      period: "Mar 2026 – Present",
      isCurrent: true,
      bullets: [
        "Leading the design, development, and enhancement of enterprise business applications using SharePoint Online, Power Apps, Power Automate, and Power BI to support Finance and other business functions.",
        "Collaborating with business stakeholders to gather requirements, conduct solution reviews, and translate business needs into scalable digital solutions.",
        "Architecting and implementing complex workflow automation, including multi-level approval processes, notifications, document routing, and business process optimization.",
        "Managing the complete application lifecycle, including solution design, development, testing, deployment, User Acceptance Testing (UAT), production support, and continuous enhancements.",
        "Preparing technical documentation, user guides, knowledge transfer documents, and ensuring adherence to Power Platform governance and development best practices."
      ]
    },
    {
      id: "exp2",
      role: "Associate Software Developer",
      company: "MYK LATICRETE Pvt. Ltd.",
      location: "Hyderabad",
      period: "Mar 2024 – Mar 2026",
      isCurrent: false,
      bullets: [
        "Designed and developed 10+ enterprise business applications using SharePoint Online, Power Apps, and Power Automate for Finance, HR, Procurement, Sales, and Operations teams.",
        "Built SharePoint Online sites, lists, libraries, permission structures, and document management solutions to centralize and secure business information.",
        "Developed responsive Canvas Apps integrated with SharePoint, SQL Server, Dataverse, Microsoft 365, REST APIs, Microsoft Graph API, and SAP business data.",
        "Developed Power Automate workflows for approval processes, notifications, reminders, document routing, and business process automation, significantly reducing manual effort.",
        "Created AI-powered Copilot Agents using Microsoft Copilot Studio to automate business queries, SharePoint data retrieval, and self-service support for end users.",
        "Developed Copilot-triggered workflows by integrating Copilot Studio with Power Automate to automate approvals, update SharePoint records, send notifications, and execute business actions.",
        "Collaborated with business stakeholders to gather requirements, conduct solution demonstrations, support UAT and deliver production-ready business applications.",
        "Prepared Functional Specification Documents (FSD), Technical Documentation, User Guides, Release Notes, and supported production deployments and application enhancements."
      ]
    },
    {
      id: "exp3",
      role: "Software Developer Trainee",
      company: "MYK LATICRETE Pvt. Ltd.",
      location: "Hyderabad",
      period: "Mar 2023 – Mar 2024",
      isCurrent: false,
      bullets: [
        "Assisted in developing and maintaining business applications using Power Apps, SharePoint Online, and Power Automate under the guidance of senior developers.",
        "Created and maintained SharePoint Online lists, libraries, forms, and data structures to support applications.",
        "Developed basic workflow automations, approval processes, email notifications, and data integrations.",
        "Performed application testing, defect fixing, data validation, and supported production issue resolution.",
        "Participated in requirement discussions, documentation, user support, and learned Microsoft Power Platform development best practices."
      ]
    }
  ],

  projects: [
    {
      id: "proj1",
      title: "Document Management System (DMS)",
      category: "Operations & Admin",
      description: "A centralized, highly secure document control and storage system built on SharePoint Online to handle enterprise paperwork, versioning, and secure sharing protocols.",
      technologies: ["SharePoint Online", "Power Apps", "Power Automate", "JSON Formatting"],
      impact: "Centralized and secured 10,000+ files with automated retention policies.",
      highlights: [
        "Configured custom folder hierarchies, metadata terms, and advanced search indices in SharePoint.",
        "Engineered automatic versioning, audit logging, and role-based folder permission matrices.",
        "Built a responsive interface for administrative document upload, keyword tagging, and instant document search."
      ]
    },
    {
      id: "proj2",
      title: "Sales Projections & Market Analysis System",
      category: "Sales & Planning",
      description: "A forecasting application allowing the sales leadership team to track market trends, enter sales estimations, and compare real-time metrics with historic figures.",
      technologies: ["Power Apps", "Power BI", "SQL Server", "Power Automate"],
      impact: "Boosted forecasting accuracy by 25% for quarterly sales planning.",
      highlights: [
        "Built dynamic data entry screens for regional managers to submit seasonal forecasts.",
        "Modeled SQL Server database schemas to store transactional sales data with clean relationships.",
        "Created rich, interactive Power BI dashboards projecting variance analysis and region-by-region performance."
      ]
    },
    {
      id: "proj3",
      title: "Stage Gate Process Management System (NPD)",
      category: "Operations & Admin",
      description: "An enterprise workflow application managing the Complete New Product Development (NPD) lifecycle through a structured stage-gate governance framework.",
      technologies: ["Power Apps (Canvas & Model)", "Power Automate", "SharePoint Online", "Power BI"],
      impact: "Accelerated product time-to-market by 30% via synchronized approvals.",
      highlights: [
        "Designed and built distinct visual steps for ideation, feasibility, testing, and launch stages.",
        "Configured strict multi-department sign-offs where progress is gated until R&D, Finance, and Quality departments approve.",
        "Implemented a master dashboard summarizing project statuses, bottlenecks, and planned timelines."
      ]
    },
    {
      id: "proj4",
      title: "Meeting Room Booking System",
      category: "Operations & Admin",
      description: "A corporate workplace scheduling tool allowing employees to reserve shared meeting rooms, request catering/utilities, and synchronize calendars.",
      technologies: ["Power Apps", "Office 365 Outlook API", "Power Automate", "SharePoint"],
      impact: "Eliminated room booking conflicts entirely for 400+ daily desk employees.",
      highlights: [
        "Developed a modern, interactive calendar UI showing live room availability status.",
        "Integrated deeply with Office 365 Outlook to send automated .ics calendar invites and schedule updates.",
        "Structured validation logic in PowerFx to prevent double-bookings or reservation overlaps."
      ]
    },
    {
      id: "proj5",
      title: "Visitor Management System (VMS)",
      category: "Operations & Admin",
      description: "An administrative reception tool to register on-site visitors, manage host approvals, and generate digital security passes.",
      technologies: ["Power Apps", "Power Automate", "SharePoint Online", "M365 Email"],
      impact: "Enhanced facility security and reduced visitor check-in times by 60%.",
      highlights: [
        "Created an intuitive tablet layout for guest self-registration and digital signature signing.",
        "Automated immediate email/teams notifications to internal hosts upon guest arrival.",
        "Structured automated check-out flows and real-time lobby analytics."
      ]
    },
    {
      id: "proj6",
      title: "Request Management Dashboard",
      category: "Operations & Admin",
      description: "A centralized hub consolidating support, maintenance, and administrative requests from diverse departments into a unified view for team queues.",
      technologies: ["Power Apps", "SharePoint Online", "Power BI", "Power Automate"],
      impact: "Improved SLA compliance for internal support tickets from 72% to 94%.",
      highlights: [
        "Designed dynamic task queues with sorting, filtering, and priority color-coding.",
        "Developed escalations triggers using Power Automate to flag overdue tickets.",
        "Configured automated feedback loops on case closures."
      ]
    },
    {
      id: "proj7",
      title: "Invoice Tracking System",
      category: "Finance & ERP",
      description: "An accounts payable pipeline to manage invoices, extract file details, process division approvals, and submit clean records for payments.",
      technologies: ["Power Apps", "Power Automate (AI Builder)", "SharePoint Online", "Dataverse"],
      impact: "Halved manual invoice processing times for the finance department.",
      highlights: [
        "Leveraged AI Builder within Power Automate to automatically extract vendor name, totals, and line items from PDFs.",
        "Created multi-tier routing workflows mapping invoices to appropriate budget managers based on value thresholds.",
        "Integrated check status logging to prevent duplicate invoice processing."
      ]
    },
    {
      id: "proj8",
      title: "Sales Daily Route Planning System",
      category: "Sales & Planning",
      description: "A field utility helping sales personnel optimize their daily travel itineraries, schedule client visits, and log real-time meeting updates.",
      technologies: ["Power Apps", "Bing Maps API", "Power Automate", "SharePoint Online"],
      impact: "Reduced travel costs and increased sales call volume by 20%.",
      highlights: [
        "Implemented geofenced client locator using Bing Maps SDK within Power Apps.",
        "Created responsive mobile check-in buttons capturing accurate GPS coordinates of the salesperson.",
        "Automated the compilation of daily route reports and syncs to team leaders."
      ]
    },
    {
      id: "proj9",
      title: "Sales Phase Planning System",
      category: "Sales & Planning",
      description: "A planning framework designed to map sales cycles, target territories, allocate targets, and monitor rollouts across quarterly phases.",
      technologies: ["Power Apps", "Power BI", "SharePoint Online", "Power Automate"],
      impact: "Supported seamless cross-regional sales strategy alignments.",
      highlights: [
        "Configured phase-gate forms supporting multi-regional targets entries.",
        "Built synchronized workflow routines to distribute regional goals automatically.",
        "Designed comparative visualization screens analyzing phase objectives vs actual acquisitions."
      ]
    },
    {
      id: "proj10",
      title: "AI-Powered Auto-Routing Copilot Agent",
      category: "AI & Automation",
      description: "An advanced conversational agent deployed to interpret internal user requests, extract target context, and trigger backend processes using LLMs.",
      technologies: ["Copilot Studio", "Power Automate", "SharePoint", "AI Prompts"],
      impact: "Automated 40% of standard helpdesk route dispatch tasks.",
      highlights: [
        "Configured Natural Language processing in Copilot Studio to categorize incoming requests.",
        "Developed Copilot-triggered Power Automate flows that execute real-time search queries on SharePoint Lists.",
        "Implemented dynamic fallback models to hand off complex requests to human agents seamlessly."
      ]
    },
    {
      id: "proj11",
      title: "Freshservice ITSM Implementation",
      category: "AI & Automation",
      description: "A customized IT Service Management solution tailored to streamline helpdesk ticketing, service catalogs, asset assignments, and SLA reports.",
      technologies: ["Freshservice API", "Power Apps", "Power Automate", "JSON"],
      impact: "Successfully migrated 1,500+ employees to a modern, responsive ITSM service portal.",
      highlights: [
        "Designed custom forms, workflows, and catalog items matching internal guidelines.",
        "Established automated incident dispatching based on keyword matches and technician loads.",
        "Configured automated satisfaction surveys and SLA status alerts."
      ]
    },
    {
      id: "proj12",
      title: "SharePoint & Freshservice Integration",
      category: "AI & Automation",
      description: "A dual-sync connector system mapping SharePoint-based assets and employee records directly to the Freshservice ITSM platform.",
      technologies: ["Power Automate", "REST APIs", "Freshservice API", "SharePoint Online"],
      impact: "Eliminated data disparities between HR SharePoint databases and IT directories.",
      highlights: [
        "Engineered webhooks capturing updates in SharePoint employee lists and triggering immediate API syncs.",
        "Designed JSON request bodies mapping complex data arrays to custom fields in Freshservice.",
        "Built robust error-handling mechanisms logging failed syncs with retry routines."
      ]
    },
    {
      id: "proj13",
      title: "Salesforce & Power Apps Integration",
      category: "Sales & Planning",
      description: "A unified application pulling CRM contact pipelines, accounts, and opportunities into native Power Apps structures for operations staff.",
      technologies: ["Power Apps", "Salesforce API", "Power Automate", "Dataverse"],
      impact: "Provided back-office teams with instant CRM access without requiring full Salesforce licenses.",
      highlights: [
        "Created secure custom connections in Power Apps using OAuth authentication to query Salesforce APIs.",
        "Designed a client pipeline synchronizer populating Dataverse tables during off-peak hours.",
        "Structured mobile-friendly dashboards with read-write capabilities back to Salesforce."
      ]
    },
    {
      id: "proj14",
      title: "SAP Master Data Request Management System",
      category: "Finance & ERP",
      description: "A strict compliance workflow application managing requests to create or modify critical master data parameters within SAP ERP.",
      technologies: ["Power Apps", "Power Automate", "SAP Gateway API", "SharePoint Online"],
      impact: "Secured audit-compliant approval paths and minimized master data error rates.",
      highlights: [
        "Enforced strict form validations ensuring accurate fields length, types, and financial codes before submission.",
        "Designed complex hierarchical loops routing approvals to executive level based on company codes and ledger segments.",
        "Integrated automated email attachments of validated data tables to ERP loaders."
      ]
    },
    {
      id: "proj15",
      title: "New Sample Request Management System (R&D)",
      category: "Finance & ERP",
      description: "A tracking application coordinating requests for experimental material samples, testing feedback, and prototype shipments in R&D.",
      technologies: ["Power Apps", "Power Automate", "SharePoint Online", "M365 Groups"],
      impact: "Decreased sample turnaround times by 35% across laboratory testing cycles.",
      highlights: [
        "Built lab intake panels displaying inventory availability and sample queue statuses.",
        "Automated lab assignment notifications and task lists for lab technicians.",
        "Implemented customer feedback logging modules to collect and report sample evaluations."
      ]
    },
    {
      id: "proj16",
      title: "Toller Request Tracking System",
      category: "Finance & ERP",
      description: "An operations log to manage raw material transfers, outsourced processing agreements, and toll manufacturing logs.",
      technologies: ["Power Apps", "Power Automate", "SharePoint Online", "SQL Server"],
      impact: "Improved inventory visibility across multiple external third-party tollers.",
      highlights: [
        "Developed entry screens capturing dispatch notices, expected yields, and processing timelines.",
        "Configured alerts tracking delayed toll shipments or low-yield reports.",
        "Consolidated ledger inputs for processing-fee invoices."
      ]
    },
    {
      id: "proj17",
      title: "COGS Calculator",
      category: "Finance & ERP",
      description: "A spreadsheet-free, fast calculation utility for estimation of Cost of Goods Sold (COGS) based on fluctuating component costs and logistics overheads.",
      technologies: ["Power Apps", "PowerFx", "SQL Server", "Excel Analytics Integration"],
      impact: "Gave financial planners instant accurate margin estimates on the fly.",
      highlights: [
        "Engineered optimized PowerFx formula chains executing nested cost roll-ups dynamically.",
        "Built editable grids allowing users to update individual ingredient pricing and observe live COGS updates.",
        "Developed visual graphs analyzing cost components percentage distributions."
      ]
    },
    {
      id: "proj18",
      title: "Exist Employee Management System",
      category: "Operations & Admin",
      description: "An HR portal facilitating complete employee exit procedures, from formal letter submission, asset recovery, to final payroll sign-offs.",
      technologies: ["Power Apps", "Power Automate", "SharePoint Online", "Office 365 Users"],
      impact: "Automated standard employee offboarding checklists across 4 distinct departments.",
      highlights: [
        "Built an interactive tasks checklist automatically assigned to IT, Security, Finance, and HR teams.",
        "Automated asset tracking to ensure all laptops, badges, and company devices are physically returned.",
        "Generated and formatted exit clearance certificates in PDF using Power Automate Word actions."
      ]
    }
  ],

  education: {
    degree: "Bachelor of Technology",
    field: "Metallurgical Engineering",
    institution: "Jawaharlal Nehru Technological University - Gurajada – Vizianagaram",
    period: "05/2022",
    score: "7.5 CGPA"
  }
};
