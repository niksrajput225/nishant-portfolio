# Nishant Kumar - Personal Portfolio Website

A modern, high-performance portfolio website showcasing **Nishant Kumar**'s engineering capabilities across **DevOps & Cloud Infrastructure** and **Full-Stack / Web Development**.

## Highlights & Features

- **Cyber-Terminal Aesthetic**: Dark mode with subtle grid mesh, glowing status telemetry, and responsive modern layout.
- **Interactive DevOps CLI Simulator**: A simulated in-browser terminal allowing visitors to run `status`, `tunnel`, `backup`, `projects`, `skills`, and `whoami`.
- **Live Production Deployments**:
  - **Dubai Fragrances** (`https://fantastic-kangaroo-4a2356.netlify.app/`): Artisanal Arabian attar luxury store with Olfactory pyramid notes modal, slide-over cart drawer, and Cash-On-Delivery checkout.
  - **To Someone Special** (`https://tosomeonespecial.com/`): WooCommerce gifting e-commerce platform with 100+ products, integrated payments, and automated order workflows.
  - **System Engineers Cutting & Welding** (`https://systemengineers.in/`): Corporate industrial engineering machinery catalog protected with Cloudflare.
- **Architecture Flow Case Study**: Interactive visual diagram of the Cloudflare Zero-Trust Tunnel + Docker Compose + Tailscale Mesh automated disaster recovery workflow.
- **Experience & Education**: Timeline of work at System Engineers Cutting and Welding Pvt. Ltd. and Galgotias University.
- **Interactive Modals**: Detailed project breakdown modals and in-browser Resume viewer with print-to-PDF support.
- **Direct Connect**: 1-click email dispatch and instant WhatsApp chat (+91 9336600810).

---

## File Structure

```
nishant-portfolio/
├── index.html              # Main single-page application structure
├── css/
│   └── style.css           # Custom styles, terminal effects, animations
├── js/
│   ├── projects-data.js    # Data source for all projects, skills, architecture
│   └── main.js             # Logic for CLI simulator, project filtering, modals
└── README.md               # Documentation & deployment guide
```

---

## Local Preview

You can open `index.html` directly in any web browser, or serve it using Python or Node:

```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .
```

Then visit `http://localhost:3000`.

---

## Deployment Options

### 1. Deploy to Netlify (Recommended - 1 Click)
- Go to [Netlify Drop](https://app.netlify.com/drop)
- Drag and drop the `nishant-portfolio` folder.
- Your portfolio will be live in seconds!

### 2. Deploy to GitHub Pages
- Push this repository to GitHub under `niksrajput225/<repo-name>`
- Go to **Settings** > **Pages**
- Select Branch: `main`, Folder: `/ (root)`
- Click **Save**.

### 3. Deploy to Vercel
```bash
npx vercel
```
