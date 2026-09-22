// Nishant Kumar - Portfolio Projects Data
const projectsData = [
  {
    id: "dubai-fragrances",
    title: "Dubai Fragrances",
    tagline: "Artisanal Arabian Attars & Dehn Al Oudh E-Commerce Store",
    category: "web",
    categoryLabel: "Web & E-Commerce",
    featured: true,
    badge: "Live Production",
    badgeColor: "emerald",
    links: {
      live: "https://fantastic-kangaroo-4a2356.netlify.app/",
      github: "https://github.com/niksrajput225"
    },
    technologies: ["Tailwind CSS", "JavaScript ES6+", "HTML5", "Lucide Icons", "Docker", "Nginx", "Netlify"],
    metrics: [
      { label: "Catalog", value: "40+ Attars" },
      { label: "Conversion Flow", value: "1-Click COD" },
      { label: "Performance", value: "100% Client-Side" },
      { label: "Responsive", value: "Mobile-First" }
    ],
    overview: "A luxury e-commerce web application engineered for artisanal Arabian perfumes and Dehn Al Oudh. Crafted with an onyx-and-gold aesthetic, the storefront features an interactive Olfactory Pyramid note explorer, dynamic multi-tier discount calculation, a slide-over bag drawer, wishlist persistence, and a streamlined Cash-On-Delivery checkout workflow.",
    highlights: [
      "Designed an immersive Olfactory Pyramid breakdown modal displaying Top, Heart, and Enduring Base notes for 40+ blends.",
      "Implemented a slide-over fragrance bag drawer with dynamic free-shipping progress indicators and subtotal calculation.",
      "Built client-side persistent storage for wishlist items and cart state.",
      "Engineered a zero-friction Cash on Delivery (COD) order checkout modal tailored for Pan-India delivery requirements.",
      "Optimized assets and responsive layouts for blazing-fast mobile and desktop performance."
    ],
    architecture: "Frontend built with vanilla modern JavaScript and Tailwind CSS, containerized using multi-stage Docker and Nginx reverse proxy configuration, and continuously deployed to Netlify."
  },
  {
    id: "to-someone-special",
    title: "To Someone Special",
    tagline: "High-Volume WooCommerce Gifting & Lifestyle Platform",
    category: "web",
    categoryLabel: "Web & E-Commerce",
    featured: true,
    badge: "Live Client Platform",
    badgeColor: "violet",
    links: {
      live: "https://tosomeonespecial.com/"
    },
    technologies: ["WordPress", "WooCommerce", "MySQL", "PHP", "Elementor", "Payment Gateways", "REST APIs"],
    metrics: [
      { label: "Inventory", value: "100+ Products" },
      { label: "Payment Systems", value: "Integrated" },
      { label: "Checkout Steps", value: "Optimized" },
      { label: "Order Tracking", value: "Automated" }
    ],
    overview: "End-to-end development, deployment, and ongoing maintenance of an active e-commerce gifting platform hosting over 100+ curated products. Nishant configured full catalog workflows, customized cart and checkout funnels, integrated payment gateways, and established reliable order fulfillment mechanisms.",
    highlights: [
      "Configured and managed a 100+ product WooCommerce catalog with custom variation swatches, pricing tiers, and inventory tracking.",
      "Streamlined cart-to-checkout funnels to minimize cart abandonment and ensure fast mobile checkout.",
      "Integrated secure domestic payment gateways, automated invoice generation, and real-time order status triggers.",
      "Configured automated WhatsApp chat integration and delivery tracking widgets for enhanced customer support.",
      "Handled regular database maintenance, performance caching, and core security updates."
    ],
    architecture: "WordPress CMS backed by MySQL relational database, customized WooCommerce workflows, caching plugins, and SSL termination."
  },
  {
    id: "system-engineers",
    title: "System Engineers Cutting & Welding",
    tagline: "Corporate Industrial Engineering & Machinery Platform",
    category: "web",
    categoryLabel: "Web & E-Commerce",
    featured: false,
    badge: "Corporate Live",
    badgeColor: "blue",
    links: {
      live: "https://systemengineers.in/"
    },
    technologies: ["WordPress", "Linux Web Hosting", "Cloudflare DNS", "SSL/TLS", "SEO", "Responsive UI"],
    metrics: [
      { label: "Product Lines", value: "Heavy Industrial" },
      { label: "Security", value: "Cloudflare Protected" },
      { label: "Inquiry System", value: "Direct B2B Leads" }
    ],
    overview: "Designed, developed, and deployed the official corporate digital presence for System Engineers Cutting and Welding Pvt. Ltd. Showcases industrial cutting equipment, technical specifications, brochures, and direct B2B inquiry routing.",
    highlights: [
      "Engineered corporate industrial catalog showcasing welding and cutting machinery with detailed technical specification sheets.",
      "Implemented responsive layouts ensuring prospective B2B clients have seamless browsing on mobile and desktop devices.",
      "Configured Cloudflare DNS management, SSL encryption, and basic DDoS protection.",
      "Set up automated inquiry contact forms with spam protection and direct email routing to the sales team."
    ],
    architecture: "Enterprise corporate WordPress instance configured on Linux hosting with Cloudflare edge caching, SSL, and automated contact pipelines."
  },
  {
    id: "snipe-it-zero-trust",
    title: "Secure Snipe-IT Deployment & Zero-Trust Infrastructure",
    tagline: "Cloudflare Tunnel + Multi-Container Docker Asset Management",
    category: "devops",
    categoryLabel: "DevOps & Cloud Infrastructure",
    featured: true,
    badge: "Enterprise DevOps",
    badgeColor: "cyan",
    links: {
      github: "https://github.com/niksrajput225"
    },
    technologies: ["Docker", "Docker Compose", "Cloudflare Zero Trust", "cloudflared", "Ubuntu Linux", "Laravel"],
    metrics: [
      { label: "Inbound Ports", value: "0 Opened" },
      { label: "Public IPs", value: "0 Required" },
      { label: "Containers", value: "Multi-App Host" },
      { label: "Access Security", value: "SSO / Zero-Trust" }
    ],
    overview: "Architected and deployed a containerized enterprise IT asset management system (Snipe-IT) using Docker and Docker Compose on Ubuntu Linux. Implemented Cloudflare Zero Trust Tunnels (cloudflared) to securely expose internal services without opening any inbound firewall ports or exposing public IPs.",
    highlights: [
      "Deployed multi-container Snipe-IT environment (App + MySQL Database + Redis) via optimized Docker Compose files.",
      "Configured a single Cloudflare Tunnel (`cloudflared`) with complex ingress rules routing traffic to multiple distinct internal container services.",
      "Eliminated the need for public IP addresses or opening firewall ports 80/443, mitigating direct perimeter attacks.",
      "Implemented Cloudflare Access policies to enforce authentication before requests reach internal company services.",
      "Synchronized Laravel `APP_KEY` across instances to ensure seamless application-level database encryption and decryption during migrations."
    ],
    architecture: "Ubuntu Server -> Docker Engine -> Snipe-IT / MySQL containers connected via internal bridge network. Outbound-only encrypted TLS tunnel maintained by `cloudflared` daemon to Cloudflare Edge network."
  },
  {
    id: "disaster-recovery-backup",
    title: "Automated Pull-Based Backup & Disaster Recovery System",
    tagline: "Tailscale Mesh VPN + SSH + Bash Scripting + Cron Scheduling",
    category: "automation",
    categoryLabel: "Automation & Scripting",
    featured: true,
    badge: "Disaster Recovery",
    badgeColor: "amber",
    links: {
      github: "https://github.com/niksrajput225"
    },
    technologies: ["Bash", "Tailscale", "SSH Key Auth", "Cron", "Linux", "MySQL Dump", "Gzip"],
    metrics: [
      { label: "Schedule", value: "Nightly Automated" },
      { label: "Data Integrity", value: "100% Encrypted" },
      { label: "Network Security", value: "Tailscale Mesh" },
      { label: "Recovery Time", value: "< 15 mins RTO" }
    ],
    overview: "Designed and implemented a reliable pull-based backup and disaster recovery automation framework across distributed Linux nodes. Used Tailscale private mesh VPN and key-based SSH authentication to safely extract and store encrypted database and file backups on isolated storage servers.",
    highlights: [
      "Engineered pull-based backup scripts in Bash to prevent compromised production servers from tampering with backup archives.",
      "Leveraged Tailscale overlay mesh network to communicate securely between remote hosts without exposing SSH ports to the public internet.",
      "Automated nightly executions with Linux cron scheduling, rotating archives with retention policies (daily, weekly, monthly).",
      "Wrote scheduled disaster restore test scripts with automatic integrity verification and alerting upon failed verification steps.",
      "Created structured LAN and network topology architecture diagrams to document security perimeters and recovery procedures."
    ],
    architecture: "Central Backup Vault Server pulls compressed dumps and storage snapshots over private Tailscale IP addresses using non-root SSH keys with restricted sudo execution."
  },
  {
    id: "cicd-docker-pipeline",
    title: "Automated CI/CD Pipeline for Dockerized Releases",
    tagline: "GitHub Actions + Automated Docker Image Build & SSH Deployment",
    category: "devops",
    categoryLabel: "DevOps & Cloud Infrastructure",
    featured: false,
    badge: "CI/CD Automation",
    badgeColor: "indigo",
    links: {
      github: "https://github.com/niksrajput225"
    },
    technologies: ["GitHub Actions", "Docker", "SSH", "Linux", "Docker Hub / Registry", "Bash"],
    metrics: [
      { label: "Deploy Time", value: "< 3 mins" },
      { label: "Deployment", value: "100% Automated" },
      { label: "Rollback", value: "Version-Tagged" }
    ],
    overview: "Constructed automated Continuous Integration and Continuous Deployment (CI/CD) pipelines using GitHub Actions for containerized web applications. Enabled continuous testing, Docker container builds, and secure SSH-based zero-downtime deployment triggers.",
    highlights: [
      "Built GitHub Actions workflow to run automated linting, test checks, and multi-platform Docker container builds on push to main.",
      "Secured environment credentials and SSH deployment keys using GitHub Actions Encrypted Secrets.",
      "Scripted automated remote host orchestration over SSH: pulling latest images, updating Docker Compose stacks, and pruning stale containers.",
      "Implemented rollback strategy using immutable semantic version Docker tags."
    ],
    architecture: "Git Commit -> GitHub Actions CI runner (Build & Test) -> Container Registry -> SSH Remote Trigger -> Production Host Docker Compose Pull & Reload."
  },
  {
    id: "vba-spam-automation",
    title: "Outlook VBA Automation & Mail Processing Engine",
    tagline: "Intelligent Spam Filtering, Archival & Mailbox Backup Scripting",
    category: "automation",
    categoryLabel: "Automation & Scripting",
    featured: false,
    badge: "Enterprise Scripting",
    badgeColor: "pink",
    links: {
      github: "https://github.com/niksrajput225"
    },
    technologies: ["VBA (Visual Basic for Applications)", "Outlook API", "RegEx", "Automation"],
    metrics: [
      { label: "Spam Reduction", value: "Significant" },
      { label: "Archive Speed", value: "Automated" },
      { label: "Manual Effort", value: "Eliminated" }
    ],
    overview: "Developed custom VBA automation scripts within enterprise Microsoft Outlook environments to handle advanced email spam pattern detection, automatic classification, and scheduled mailbox archival and recovery operations.",
    highlights: [
      "Implemented pattern-matching algorithms in VBA to detect spoofed domains and phishing keywords.",
      "Automated systematic categorization of critical supplier inquiries into priority folders.",
      "Programmed backup export routines to preserve email communication archives safely on internal network shares."
    ],
    architecture: "VBA macro script hooks integrated directly into Microsoft Outlook's message reception pipeline."
  }
];

// Skills Data
const skillsData = {
  devops: [
    { name: "Linux Server Administration", level: 90, desc: "Ubuntu, Debian, systemd, bash, user & permissions management" },
    { name: "Docker & Docker Compose", level: 92, desc: "Multi-container orchestration, Dockerfile optimization, internal networking" },
    { name: "Cloudflare Zero Trust & Tunnels", level: 95, desc: "cloudflared daemons, ingress rules, Zero Trust access policies, DNS" },
    { name: "CI/CD (GitHub Actions)", level: 88, desc: "Automated test/build workflows, SSH-based remote deployments, registry publishing" },
    { name: "Backup & Disaster Recovery", level: 92, desc: "Pull-based architectures, Tailscale mesh, snapshot encryption, automated restore" },
    { name: "Cron & Process Automation", level: 90, desc: "Scheduled job automation, log rotation, failure alerts, health checks" },
    { name: "SSH & Key Management", level: 92, desc: "Key generation, hardened sshd configuration, bastion/mesh routing" },
    { name: "Kubernetes (Basics)", level: 70, desc: "Core pods, deployments, services, kubectl commands" }
  ],
  cloud: [
    { name: "AWS (Amazon Web Services)", level: 80, desc: "EC2 instances, S3 buckets, IAM roles & policies, VPC networking" },
    { name: "Cloudflare Platform", level: 95, desc: "Cloudflare DNS, SSL/TLS termination, edge caching, Access, Tunnels" },
    { name: "Tailscale VPN", level: 92, desc: "Mesh VPN setup, ACLs, secure node-to-node routing without open ports" }
  ],
  scripting: [
    { name: "Bash Shell Scripting", level: 92, desc: "Automation scripts, backup engines, cron jobs, text processing (awk/sed/grep)" },
    { name: "Python", level: 82, desc: "Automation utilities, API scripting, data handling, system administration" },
    { name: "VBA (Visual Basic)", level: 80, desc: "Enterprise Outlook automation, spam filtering, data manipulation" }
  ],
  web: [
    { name: "Tailwind CSS & Modern CSS", level: 92, desc: "Utility-first CSS, dark mode design, responsive layouts, animations" },
    { name: "JavaScript (ES6+)", level: 88, desc: "Vanilla DOM, async/await, API integration, state management, drawers" },
    { name: "HTML5 & Semantic Markup", level: 95, desc: "Accessible, SEO-friendly, mobile-optimized markup" },
    { name: "WordPress & WooCommerce", level: 90, desc: "Full e-commerce setup, catalog configuration, payment gateways, plugins" },
    { name: "Nginx Web Server", level: 85, desc: "Reverse proxy, SSL setup, virtual hosts, header security, gzip compression" }
  ],
  databases: [
    { name: "MySQL", level: 85, desc: "Relational queries, database dumps, backup automation, user grants" },
    { name: "MongoDB", level: 78, desc: "Document collections, basic indexing, CRUD operations" },
    { name: "Git & GitHub", level: 92, desc: "Branching strategies, pull requests, SSH auth, GitHub Actions workflows" }
  ]
};

// Architecture Interactive Flow Data
const architectureFlowData = {
  nodes: [
    {
      id: "visitor",
      title: "Remote User / Employee",
      desc: "Requests access via custom domain (e.g. assets.internal.com)",
      icon: "laptop",
      color: "blue"
    },
    {
      id: "cloudflare",
      title: "Cloudflare Edge & Zero Trust",
      desc: "Enforces identity authentication (SSO / OTP), SSL termination & DDoS mitigation. No direct origin IP exposure.",
      icon: "shield-check",
      color: "amber"
    },
    {
      id: "tunnel",
      title: "Cloudflare Tunnel (cloudflared)",
      desc: "Outbound-only secure TLS connection initiated from inside the server. Zero inbound ports opened on firewall.",
      icon: "radio",
      color: "cyan"
    },
    {
      id: "host",
      title: "Ubuntu Linux Production Host",
      desc: "Hardened OS running Docker Engine, systemd services, and cron monitoring.",
      icon: "server",
      color: "indigo"
    },
    {
      id: "containers",
      title: "Docker Compose Containers",
      desc: "Isolated containers: Snipe-IT app, MySQL DB, Redis cache, and Dubai Fragrances web containers.",
      icon: "box",
      color: "emerald"
    },
    {
      id: "backup",
      title: "Disaster Recovery Vault (Tailscale)",
      desc: "Pull-based automated nightly backups over encrypted Tailscale mesh VPN with synchronized encryption keys.",
      icon: "archive",
      color: "violet"
    }
  ]
};
