export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  deliverables: string[];
  pricing?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "web-mobile-apps",
    title: "Web & Mobile Apps",
    tagline: "Cross-platform excellence, every screen.",
    description:
      "We architect seamless user experiences using Flutter and React that maintain consistency and performance across all devices and operating systems.",
    category: "Engineering",
    features: [
      {
        title: "Cross-Platform Development",
        description:
          "Single codebase targeting iOS, Android, and web — reducing cost without sacrificing native performance.",
      },
      {
        title: "Responsive Design System",
        description:
          "Pixel-perfect layouts that adapt fluidly from 320px mobile screens to 4K desktop displays.",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Local data persistence and background sync ensure your app works reliably even without connectivity.",
      },
      {
        title: "Push Notifications & Real-Time",
        description:
          "WebSockets and push notification infrastructure for live data feeds and instant user engagement.",
      },
      {
        title: "App Store Deployment",
        description:
          "End-to-end App Store and Google Play submission, including asset preparation and review compliance.",
      },
      {
        title: "Performance Optimization",
        description:
          "Lazy loading, code splitting, and asset compression targeting sub-2s load times on 3G networks.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Product Discovery",
        description:
          "We define user personas, core flows, and success metrics before any design or code begins.",
      },
      {
        step: 2,
        title: "Wireframing & Prototyping",
        description:
          "Interactive Figma prototypes validated with real users before engineering starts.",
      },
      {
        step: 3,
        title: "Iterative Development",
        description:
          "Two-week sprints delivering shippable increments with continuous integration from day one.",
      },
      {
        step: 4,
        title: "Device & Browser QA",
        description:
          "Automated and manual testing across 20+ device/OS combinations using real hardware.",
      },
      {
        step: 5,
        title: "Launch & Growth",
        description:
          "Production deployment with analytics, crash reporting, and a 90-day post-launch support window.",
      },
    ],
    deliverables: [
      "Production-ready application (iOS / Android / Web)",
      "Figma design system & component library",
      "Source code repository with CI/CD pipeline",
      "App Store & Play Store listings",
      "API integration documentation",
      "Post-launch monitoring dashboard",
    ],
  },
  {
    slug: "ux-product-design",
    title: "UX & Product Design",
    tagline: "Data-driven interfaces users love.",
    description:
      "We create intuitive user experiences and brand-aligned product interfaces grounded in research, not guesswork.",
    category: "Design",
    features: [
      {
        title: "User Research & Interviews",
        description:
          "Structured user interviews, surveys, and usability sessions to surface real pain points.",
      },
      {
        title: "Information Architecture",
        description:
          "Content hierarchies and navigation structures built around how users actually think.",
      },
      {
        title: "High-Fidelity Prototyping",
        description:
          "Fully interactive Figma prototypes that simulate the real product for stakeholder sign-off.",
      },
      {
        title: "Design System Creation",
        description:
          "Scalable component libraries with tokens, variants, and documentation for engineering handoff.",
      },
      {
        title: "Accessibility (WCAG 2.1)",
        description:
          "Contrast ratios, keyboard navigation, and screen reader compatibility baked in from the start.",
      },
      {
        title: "Usability Testing",
        description:
          "Moderated and unmoderated testing sessions with measurable task-completion metrics.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Research & Discovery",
        description:
          "Competitor audits, user interviews, and heuristic evaluation of any existing product.",
      },
      {
        step: 2,
        title: "Wireframes & User Flows",
        description:
          "Low-fidelity wireframes mapping every interaction state before visual design begins.",
      },
      {
        step: 3,
        title: "Visual Design",
        description:
          "Brand-aligned high-fidelity screens with motion guidelines and micro-interaction specs.",
      },
      {
        step: 4,
        title: "Prototype & Test",
        description:
          "Clickable prototypes tested with real users; insights fed back into design iterations.",
      },
      {
        step: 5,
        title: "Engineering Handoff",
        description:
          "Annotated Figma files, design tokens exported to code, and live Q&A with developers.",
      },
    ],
    deliverables: [
      "User research report & personas",
      "Information architecture diagram",
      "Wireframe set (all key screens)",
      "High-fidelity design files (Figma)",
      "Interactive prototype",
      "Design system & component library",
    ],
  },
  {
    slug: "product-development",
    title: "Product Development",
    tagline: "From ideation to scalable platform.",
    description:
      "We take your concept through the full product lifecycle — strategy, design, engineering, and growth — delivering platforms built to scale.",
    category: "Engineering",
    features: [
      {
        title: "Product Strategy",
        description:
          "Market positioning, feature prioritization using the RICE framework, and roadmap definition.",
      },
      {
        title: "MVP Scoping",
        description:
          "Ruthless prioritization to get a testable product in front of users in the shortest time possible.",
      },
      {
        title: "Full-Stack Engineering",
        description:
          "End-to-end development from database schema to front-end UI with a unified engineering team.",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Payment gateways, CRMs, analytics platforms, and authentication providers integrated seamlessly.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Auto-scaling cloud deployments architected to handle 10x traffic without re-platforming.",
      },
      {
        title: "Growth Analytics",
        description:
          "Instrumented event tracking, funnel analysis, and A/B testing infrastructure from day one.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery Sprint",
        description:
          "One-week intensive to align on vision, constraints, and the minimum viable scope.",
      },
      {
        step: 2,
        title: "Architecture & Design",
        description:
          "Technical architecture and UI/UX design in parallel — no sequential hand-offs.",
      },
      {
        step: 3,
        title: "Build Sprints",
        description:
          "Two-week delivery cycles with weekly demos and a continuously deployable main branch.",
      },
      {
        step: 4,
        title: "Beta & Iteration",
        description:
          "Controlled beta rollout with real users, feedback synthesis, and rapid iteration.",
      },
      {
        step: 5,
        title: "Public Launch",
        description:
          "Go-to-market execution, production deployment, and a 90-day hypercare period.",
      },
    ],
    deliverables: [
      "Product requirements document",
      "Technical architecture blueprint",
      "Fully functional web/mobile product",
      "CI/CD pipeline & deployment runbook",
      "Analytics dashboard configuration",
      "Post-launch support package",
    ],
  },
  {
    slug: "communication-design",
    title: "Communication Design",
    tagline: "Brand narratives that move people.",
    description:
      "We craft cohesive visual identities and marketing collateral that tell your brand story with clarity and impact across every touchpoint.",
    category: "Design",
    features: [
      {
        title: "Brand Identity",
        description:
          "Logo design, color palette, typography system, and brand voice guidelines built for longevity.",
      },
      {
        title: "Marketing Collateral",
        description:
          "Pitch decks, brochures, social media templates, and print assets aligned to your brand.",
      },
      {
        title: "Motion Graphics",
        description:
          "Animated logos, explainer videos, and social content that capture attention in crowded feeds.",
      },
      {
        title: "Presentation Design",
        description:
          "Investor decks and sales presentations designed to communicate complex ideas simply.",
      },
      {
        title: "Social Media Kits",
        description:
          "Platform-specific template systems your team can update independently after delivery.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Comprehensive usage documentation ensuring brand consistency across all internal and external teams.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description:
          "Deep-dive workshop exploring your mission, audience, competitors, and visual preferences.",
      },
      {
        step: 2,
        title: "Concept Development",
        description:
          "Three distinct creative directions presented for feedback before refinement begins.",
      },
      {
        step: 3,
        title: "Design & Refinement",
        description:
          "Two rounds of revisions on the chosen direction until every element feels right.",
      },
      {
        step: 4,
        title: "Asset Production",
        description:
          "All final assets exported in every required format — print, digital, and social.",
      },
      {
        step: 5,
        title: "Handoff & Training",
        description:
          "Brand guidelines document delivered with a walkthrough session for your internal team.",
      },
    ],
    deliverables: [
      "Brand identity system (logo, colors, typography)",
      "Brand guidelines PDF",
      "Social media template kit",
      "Marketing collateral suite",
      "Presentation template",
      "All source files (Figma / Illustrator)",
    ],
  },
  {
    slug: "award-class-web-design",
    title: "Award-Class Web Design",
    tagline: "Websites that break the mold.",
    description:
      "Visually stunning, high-performance websites engineered to leave lasting impressions — designed for awards, built for conversion.",
    category: "Design & Engineering",
    features: [
      {
        title: "Signature Visual Direction",
        description:
          "Custom art direction specific to your brand — no templates, no stock layouts.",
      },
      {
        title: "Cinematic Animations",
        description:
          "GSAP and WebGL-powered scroll experiences and transitions that feel hand-crafted.",
      },
      {
        title: "Core Web Vitals Optimization",
        description:
          "Perfect Lighthouse scores — 95+ performance, accessibility, and SEO across all pages.",
      },
      {
        title: "CMS Integration",
        description:
          "Headless CMS setup (Sanity, Contentful, or Payload) so your team controls content independently.",
      },
      {
        title: "Conversion Architecture",
        description:
          "Strategic CTAs, social proof placement, and flow design engineered to maximize leads.",
      },
      {
        title: "Multilingual Support",
        description:
          "i18n-ready architecture with locale routing for brands operating across multiple regions.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Creative Brief",
        description:
          "We extract your ambition, audience, and aesthetic references in a structured brief session.",
      },
      {
        step: 2,
        title: "Moodboard & Direction",
        description:
          "Visual directions presented as curated moodboards before any design work begins.",
      },
      {
        step: 3,
        title: "Design",
        description:
          "Full-page designs crafted in Figma with animation storyboards for key interactions.",
      },
      {
        step: 4,
        title: "Development",
        description:
          "Next.js or Astro build with pixel-perfect implementation of every designed interaction.",
      },
      {
        step: 5,
        title: "Launch",
        description:
          "Performance-tested production deployment with CDN configuration and analytics instrumentation.",
      },
    ],
    deliverables: [
      "Fully designed & developed website",
      "CMS setup with content templates",
      "Animation & interaction specifications",
      "SEO meta structure & sitemap",
      "Core Web Vitals report (95+ scores)",
      "Source code & deployment access",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    tagline: "Full-cycle engineering, zero compromises.",
    description:
      "End-to-end engineering of robust software ecosystems. We translate complex business requirements into high-performance, scalable custom solutions using modern agile methodologies.",
    category: "Engineering",
    features: [
      {
        title: "Custom Architecture",
        description:
          "Bespoke software architectures designed around your specific business logic and growth projections.",
      },
      {
        title: "Agile Delivery",
        description:
          "Iterative sprints with weekly demos, keeping you in full control of scope and timelines.",
      },
      {
        title: "Code Quality & Reviews",
        description:
          "Mandatory peer reviews, automated test coverage thresholds, and linting enforced via CI.",
      },
      {
        title: "Tech Stack Flexibility",
        description:
          "React, Node.js, Python, Go, Rust — we match technology to problem, not trend.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Built to handle 10x traffic spikes without architectural overhaul or emergency refactors.",
      },
      {
        title: "Post-Launch Support",
        description:
          "Three months of free maintenance, monitoring, and bug fixes after every production deployment.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Scoping",
        description:
          "We map your business requirements to technical specifications in a structured workshop.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "System diagrams, data models, and API contracts defined before a single line of code.",
      },
      {
        step: 3,
        title: "Agile Development",
        description:
          "Two-week sprints with demos, feedback loops, and continuous integration from day one.",
      },
      {
        step: 4,
        title: "QA & Testing",
        description:
          "Unit, integration, and end-to-end tests with performance benchmarking on every release.",
      },
      {
        step: 5,
        title: "Deployment & Handover",
        description:
          "Zero-downtime production launch with full documentation and team training included.",
      },
    ],
    deliverables: [
      "Technical specification document",
      "Source code with full test suite",
      "CI/CD pipeline configuration",
      "System architecture diagram",
      "API documentation (OpenAPI spec)",
      "Deployment runbook",
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    tagline: "Online stores engineered for conversion.",
    description:
      "Full-featured e-commerce platforms with secure payment gateways, inventory management, and seamless shopping experiences tailored for your business.",
    category: "Engineering",
    pricing: "Starting at ₹25,000 — end-to-end store setup & launch.",
    features: [
      {
        title: "Custom Storefront",
        description:
          "Bespoke storefronts on Shopify, WooCommerce, or fully custom stacks — designed around your brand.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Razorpay, Stripe, PayPal, and UPI integrations with PCI-compliant checkout flows.",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Real-time stock tracking, automated reorder alerts, and multi-warehouse fulfillment logic.",
      },
      {
        title: "SEO & Performance",
        description:
          "Structured data, sitemap generation, and Core Web Vitals optimization for organic traffic growth.",
      },
      {
        title: "Mobile Commerce",
        description:
          "Progressive Web App or native app companion for a seamless mobile shopping experience.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Revenue dashboards, conversion funnel tracking, and cohort analysis to drive business decisions.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Business Analysis",
        description:
          "We map your catalog structure, logistics, and payment requirements before any build.",
      },
      {
        step: 2,
        title: "Design & UX",
        description:
          "Conversion-optimized store design with A/B tested checkout flows and product page layouts.",
      },
      {
        step: 3,
        title: "Development & Integrations",
        description:
          "Store build with all third-party integrations — payments, shipping, CRM, and email.",
      },
      {
        step: 4,
        title: "Testing & QA",
        description:
          "End-to-end order flow testing, load testing at 1,000 concurrent users, and security audit.",
      },
      {
        step: 5,
        title: "Launch & Optimization",
        description:
          "Go-live with 30-day conversion monitoring and iterative improvements based on real data.",
      },
    ],
    deliverables: [
      "Fully functional online store",
      "Payment gateway integration",
      "Admin dashboard & inventory system",
      "SEO-optimized product pages",
      "Mobile-responsive design",
      "Analytics & reporting setup",
    ],
  },
  {
    slug: "business-consultancy",
    title: "Business Consultancy",
    tagline: "Strategy that turns technology into growth.",
    description:
      "Strategic guidance aligning your technology investments with business outcomes. We assess your current setup, identify growth opportunities, and deliver actionable digital transformation roadmaps.",
    category: "Strategy",
    pricing: "Consultation fee ₹2,000 — one-on-one expert session.",
    features: [
      {
        title: "Technology Audit",
        description:
          "Comprehensive review of your existing stack, processes, and vendor relationships to identify waste and risk.",
      },
      {
        title: "Digital Transformation Roadmap",
        description:
          "Phased, prioritized plan for modernizing your operations — sequenced by business impact.",
      },
      {
        title: "Build vs. Buy Analysis",
        description:
          "Objective assessment of whether to build custom solutions or leverage existing platforms.",
      },
      {
        title: "Vendor Selection",
        description:
          "RFP preparation, vendor shortlisting, and negotiation support for technology procurement.",
      },
      {
        title: "Team Structure Guidance",
        description:
          "Recommendations on in-house vs. outsourced engineering capacity for your stage of growth.",
      },
      {
        title: "ROI Modelling",
        description:
          "Financial projections quantifying the return on proposed technology investments.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Initial Discovery Call",
        description:
          "60-minute structured session to understand your business model, goals, and current pain points.",
      },
      {
        step: 2,
        title: "Audit & Analysis",
        description:
          "Review of your existing systems, team structure, and competitive landscape.",
      },
      {
        step: 3,
        title: "Strategy Development",
        description:
          "We synthesize findings into a clear strategic framework with prioritized recommendations.",
      },
      {
        step: 4,
        title: "Roadmap Presentation",
        description:
          "Detailed roadmap presentation with stakeholders, including risk assessment and success metrics.",
      },
      {
        step: 5,
        title: "Implementation Support",
        description:
          "Optional ongoing advisory retainer to guide execution and course-correct as you build.",
      },
    ],
    deliverables: [
      "Technology audit report",
      "Digital transformation roadmap",
      "Vendor evaluation matrix",
      "ROI financial model",
      "Executive summary presentation",
      "30-day follow-up check-in",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "99.9% uptime. Zero compromise.",
    description:
      "Cloud-native strategy on AWS and Azure with automated scaling, CI/CD pipelines, and cost-efficiency for mission-critical applications.",
    category: "Infrastructure",
    features: [
      {
        title: "Cloud Architecture",
        description:
          "AWS and Azure infrastructure designed for high availability, disaster recovery, and cost optimization.",
      },
      {
        title: "CI/CD Pipeline Setup",
        description:
          "Fully automated build, test, and deployment pipelines with environment promotion controls.",
      },
      {
        title: "Container Orchestration",
        description:
          "Docker and Kubernetes cluster management with auto-scaling and health monitoring.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform and Pulumi configurations making your infrastructure version-controlled and reproducible.",
      },
      {
        title: "Observability Stack",
        description:
          "Centralized logging, distributed tracing, and custom alerting dashboards via Grafana and Datadog.",
      },
      {
        title: "Cost Optimization",
        description:
          "Reserved instance planning, right-sizing, and waste elimination targeting 30–40% cloud spend reduction.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Audit",
        description:
          "Review of your current cloud setup, spend, and reliability posture.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "Target-state architecture with multi-AZ failover, auto-scaling groups, and network topology.",
      },
      {
        step: 3,
        title: "Pipeline Implementation",
        description:
          "CI/CD pipeline build with staging environments, automated tests, and one-click production deploys.",
      },
      {
        step: 4,
        title: "Migration & Cutover",
        description:
          "Zero-downtime migration with rollback plans and live traffic validation.",
      },
      {
        step: 5,
        title: "Monitoring & Handover",
        description:
          "Observability stack deployment, runbook documentation, and on-call playbook setup.",
      },
    ],
    deliverables: [
      "Cloud architecture diagram",
      "Infrastructure as Code (Terraform/Pulumi)",
      "CI/CD pipeline configuration",
      "Observability & alerting setup",
      "Cost optimization report",
      "Operations runbook",
    ],
  },
  {
    slug: "systems-apis",
    title: "Systems & APIs",
    tagline: "Unified tech stacks, zero silos.",
    description:
      "Bespoke API orchestrations bridging disparate systems via REST, SOAP, and GraphQL to eliminate operational silos and optimize data flow.",
    category: "Engineering",
    features: [
      {
        title: "API Design & Documentation",
        description:
          "OpenAPI 3.0 spec-first design ensuring consistency, discoverability, and long-term maintainability.",
      },
      {
        title: "System Integration",
        description:
          "Connecting ERP, CRM, payment, and logistics systems through robust middleware layers.",
      },
      {
        title: "GraphQL Layer",
        description:
          "Federated GraphQL APIs aggregating multiple services into a single coherent data graph.",
      },
      {
        title: "Webhook Infrastructure",
        description:
          "Event-driven webhook systems with retry logic, signature validation, and delivery guarantees.",
      },
      {
        title: "Rate Limiting & Security",
        description:
          "API gateway configuration with rate limiting, OAuth 2.0, and IP allowlisting.",
      },
      {
        title: "High-Throughput Optimization",
        description:
          "Connection pooling, response caching, and async processing for APIs handling 10k+ RPM.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Systems Mapping",
        description:
          "We document every system, data format, and integration point across your stack.",
      },
      {
        step: 2,
        title: "API Contract Design",
        description:
          "Spec-first design with all stakeholders aligned on endpoints, schemas, and error handling.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Implementation with contract tests, load tests, and chaos engineering for resilience.",
      },
      {
        step: 4,
        title: "Integration & Cutover",
        description:
          "Phased rollout with parallel running of old and new systems until confidence is established.",
      },
      {
        step: 5,
        title: "Documentation & Handover",
        description:
          "Developer portal, interactive docs, and SDK generation for all consumer teams.",
      },
    ],
    deliverables: [
      "OpenAPI specification",
      "API gateway configuration",
      "Integration middleware codebase",
      "Load test results & benchmarks",
      "Developer documentation portal",
      "Monitoring & alerting setup",
    ],
  },
  {
    slug: "internal-tools",
    title: "Internal Tools",
    tagline: "Automate the work that slows your team down.",
    description:
      "Custom dashboards, automated workflows, and internal platforms built on n8n, Zapier, and event-driven webhooks to reduce manual overhead.",
    category: "Engineering",
    features: [
      {
        title: "Workflow Automation",
        description:
          "n8n and Zapier flows automating repetitive cross-system tasks — approvals, notifications, data sync.",
      },
      {
        title: "Custom Admin Dashboards",
        description:
          "Purpose-built internal UIs replacing clunky spreadsheets and manual reporting processes.",
      },
      {
        title: "BI & Reporting",
        description:
          "Custom business intelligence dashboards pulling from multiple data sources in real time.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Granular permissions ensuring teams only access data and actions relevant to their function.",
      },
      {
        title: "Audit Logging",
        description:
          "Immutable action logs for compliance, debugging, and accountability across all internal operations.",
      },
      {
        title: "Integration with Existing Stack",
        description:
          "Native integrations with Slack, Notion, Jira, Salesforce, and your existing data warehouse.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Process Audit",
        description:
          "We shadow your team to identify the highest-cost manual processes worth automating first.",
      },
      {
        step: 2,
        title: "Tool Architecture",
        description:
          "No-code vs. low-code vs. custom build decision made per workflow based on ROI.",
      },
      {
        step: 3,
        title: "Build & Automate",
        description:
          "Rapid development cycle with weekly working software delivered to your operations team.",
      },
      {
        step: 4,
        title: "Testing & Rollout",
        description:
          "Parallel running with existing processes, measuring time-saved before full cutover.",
      },
      {
        step: 5,
        title: "Training & Documentation",
        description:
          "Video walkthroughs and written documentation empowering your team to extend the tools.",
      },
    ],
    deliverables: [
      "Automated workflow configurations",
      "Custom internal dashboard application",
      "Role-based access control setup",
      "Integration documentation",
      "Training materials & video walkthroughs",
      "Ongoing maintenance plan",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Zero-trust protection for your digital assets.",
    description:
      "Rigorous protection combining automated testing suites with zero-trust security principles for resilience against threats and vulnerabilities.",
    category: "Security",
    features: [
      {
        title: "Penetration Testing",
        description:
          "OWASP Top 10 and beyond — manual and automated penetration testing of web, mobile, and APIs.",
      },
      {
        title: "Vulnerability Assessment",
        description:
          "Continuous scanning of your codebase and infrastructure for known CVEs and misconfigurations.",
      },
      {
        title: "Zero-Trust Architecture",
        description:
          "Identity-first network design eliminating implicit trust between systems and users.",
      },
      {
        title: "Security Code Review",
        description:
          "Manual review of critical code paths for injection vulnerabilities, auth flaws, and data leakage.",
      },
      {
        title: "Compliance Readiness",
        description:
          "Gap analysis and remediation guidance for SOC 2, ISO 27001, GDPR, and PCI-DSS requirements.",
      },
      {
        title: "Incident Response Planning",
        description:
          "Documented playbooks and tabletop exercises preparing your team for real breach scenarios.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Threat Modelling",
        description:
          "We map your attack surface — assets, entry points, threat actors, and business impact.",
      },
      {
        step: 2,
        title: "Automated Scanning",
        description:
          "SAST, DAST, and dependency scanning integrated into your CI/CD pipeline.",
      },
      {
        step: 3,
        title: "Manual Penetration Testing",
        description:
          "Expert-led testing of authenticated and unauthenticated attack surfaces.",
      },
      {
        step: 4,
        title: "Findings & Remediation",
        description:
          "Prioritized vulnerability report with CVSS scores and step-by-step fix guidance.",
      },
      {
        step: 5,
        title: "Re-Test & Sign-Off",
        description:
          "Verification testing after remediation with a clean-bill-of-health report.",
      },
    ],
    deliverables: [
      "Penetration test report (executive & technical)",
      "Vulnerability remediation roadmap",
      "Security scanning CI/CD integration",
      "Compliance gap analysis",
      "Incident response playbook",
      "Re-test verification report",
    ],
  },
  {
    slug: "it-architecture",
    title: "IT Architecture",
    tagline: "The backbone of modern, scalable business.",
    description:
      "Scalable backend architectures and strategic technology roadmaps supporting high-volume operations without compromising speed or security.",
    category: "Infrastructure",
    features: [
      {
        title: "Enterprise Architecture Design",
        description:
          "Comprehensive system blueprints covering compute, storage, networking, and security layers.",
      },
      {
        title: "Microservices Design",
        description:
          "Domain-driven service decomposition with clear ownership boundaries and communication contracts.",
      },
      {
        title: "Data Architecture",
        description:
          "Database selection, schema design, data lake structuring, and ETL pipeline architecture.",
      },
      {
        title: "Network & Security Topology",
        description:
          "VPC design, firewall rules, private networking, and secure inter-service communication.",
      },
      {
        title: "Technology Roadmap",
        description:
          "18-month phased modernization plan sequencing migrations by risk and business value.",
      },
      {
        title: "Architecture Review Board",
        description:
          "Ongoing advisory to review proposed changes and maintain architecture integrity over time.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Current State Assessment",
        description:
          "Documentation and analysis of your existing architecture, including pain points and technical debt.",
      },
      {
        step: 2,
        title: "Future State Design",
        description:
          "Target architecture designed for your 3-year growth trajectory with flexibility built in.",
      },
      {
        step: 3,
        title: "Gap Analysis",
        description:
          "Delta between current and target states mapped to a sequenced migration plan.",
      },
      {
        step: 4,
        title: "Proof of Concept",
        description:
          "Critical architectural decisions validated through targeted PoCs before full commitment.",
      },
      {
        step: 5,
        title: "Roadmap & Governance",
        description:
          "Phased delivery plan with decision gates, success criteria, and governance framework.",
      },
    ],
    deliverables: [
      "Current state architecture diagram",
      "Target state architecture blueprint",
      "Technology selection rationale document",
      "Migration & modernization roadmap",
      "Architecture decision records (ADRs)",
      "Governance framework & review process",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
