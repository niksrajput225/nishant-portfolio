// Nishant Kumar Portfolio - Main JavaScript Controller

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Projects Gallery Rendering & Filtering
  initProjectsGallery();

  // 2. Interactive Terminal Simulator
  initTerminal();

  // 3. Interactive Architecture Visualizer
  initArchitectureVisualizer();

  // 4. Skills Matrix Rendering
  initSkillsMatrix();

  // 5. Mobile Navigation
  initMobileNav();

  // 6. Contact Form & Quick Actions
  initContactForm();

  // 7. Modals
  initModals();
});

// ==========================================
// 1. PROJECTS GALLERY
// ==========================================
let currentFilter = "all";

function initProjectsGallery() {
  const container = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll("[data-project-filter]");

  renderProjects(currentFilter);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-cyan-500", "text-slate-950", "shadow-cyan-500/20", "shadow-lg");
        b.classList.add("bg-slate-900", "text-slate-400", "border-slate-800");
      });
      btn.classList.add("bg-cyan-500", "text-slate-950", "shadow-cyan-500/20", "shadow-lg");
      btn.classList.remove("bg-slate-900", "text-slate-400", "border-slate-800");

      currentFilter = btn.getAttribute("data-project-filter");
      renderProjects(currentFilter);
    });
  });
}

function renderProjects(filter) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map(project => {
    const isLive = !!project.links.live;
    const isFeatured = project.featured;

    // Badge styling
    let badgeBg = "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
    if (project.badgeColor === "emerald") badgeBg = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    if (project.badgeColor === "violet") badgeBg = "bg-purple-500/10 text-purple-400 border-purple-500/30";
    if (project.badgeColor === "amber") badgeBg = "bg-amber-500/10 text-amber-400 border-amber-500/30";
    if (project.badgeColor === "indigo") badgeBg = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";

    return `
      <div class="project-card rounded-2xl bg-[#0d121f] border border-slate-800/80 p-6 flex flex-col justify-between relative overflow-hidden group">
        <!-- Top Gradient Highlight -->
        <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div>
          <!-- Header: Category & Status Badge -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400">
              ${project.categoryLabel}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badgeBg} flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full ${project.badgeColor === 'emerald' ? 'bg-emerald-400' : 'bg-cyan-400'} pulse-dot"></span>
              ${project.badge}
            </span>
          </div>

          <!-- Project Title & Tagline -->
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
            ${project.title}
          </h3>
          <p class="text-xs text-cyan-400/90 font-mono mb-3">${project.tagline}</p>

          <!-- Short Overview -->
          <p class="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
            ${project.overview}
          </p>

          <!-- Key Metrics Pills -->
          <div class="grid grid-cols-2 gap-2 mb-5">
            ${project.metrics.slice(0, 2).map(m => `
              <div class="bg-slate-900/80 border border-slate-800/60 rounded-xl p-2.5">
                <div class="text-[10px] text-slate-400 uppercase tracking-wider">${m.label}</div>
                <div class="text-xs font-bold text-slate-200 font-mono mt-0.5">${m.value}</div>
              </div>
            `).join('')}
          </div>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${project.technologies.slice(0, 4).map(t => `
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                ${t}
              </span>
            `).join('')}
            ${project.technologies.length > 4 ? `
              <span class="px-2 py-1 rounded-lg bg-slate-900/60 text-slate-400 text-xs font-mono">
                +${project.technologies.length - 4}
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button 
            type="button" 
            onclick="openProjectModal('${project.id}')"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <i data-lucide="info" class="w-4 h-4"></i>
            <span>Architecture & Details</span>
          </button>

          <div class="flex items-center gap-2">
            ${project.links.github ? `
              <a 
                href="${project.links.github}" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View GitHub Profile / Repository"
                class="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
            ` : ''}

            ${isLive ? `
              <a 
                href="${project.links.live}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-500 font-semibold text-xs transition-all shadow-sm"
              >
                <span>Live Demo</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            ` : `
              <button 
                type="button" 
                onclick="openProjectModal('${project.id}')"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-colors"
              >
                <span>Deep Dive</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// ==========================================
// 2. INTERACTIVE TERMINAL SIMULATOR
// ==========================================
function initTerminal() {
  const terminalBody = document.getElementById("terminalOutput");
  const terminalInput = document.getElementById("terminalInput");
  const chipButtons = document.querySelectorAll("[data-term-cmd]");

  if (!terminalInput || !terminalBody) return;

  const commands = {
    help: () => `
<div class="text-cyan-400 font-bold mb-1">Available Commands:</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs">
  <div><span class="text-emerald-400 font-bold">whoami</span>       - Display Nishant's profile & role</div>
  <div><span class="text-emerald-400 font-bold">status</span>       - Check live infrastructure & platform health</div>
  <div><span class="text-emerald-400 font-bold">tunnel</span>       - Inspect Cloudflare Zero-Trust daemon</div>
  <div><span class="text-emerald-400 font-bold">backup</span>       - Run pull-based disaster recovery check</div>
  <div><span class="text-emerald-400 font-bold">projects</span>     - List live production platforms & demos</div>
  <div><span class="text-emerald-400 font-bold">skills</span>       - Print core DevOps & full-stack matrix</div>
  <div><span class="text-emerald-400 font-bold">contact</span>      - Get phone, email, and social handles</div>
  <div><span class="text-emerald-400 font-bold">clear</span>        - Clear the terminal screen</div>
</div>`,
    
    whoami: () => `
<div class="text-slate-200">
  <span class="text-cyan-400 font-bold">Nishant Kumar</span> — DevOps & Cloud Engineer | Web & Cloud Architect
  <br>Location: Faridabad, Haryana, India | B.Tech CSE (Galgotias Univ, 2021-2025)
  <br>Specialization: Zero-Trust Security, Dockerization, Tailscale Mesh Backups, High-Performance Web Applications.
</div>`,

    status: () => `
<div class="space-y-1 text-xs">
  <div class="text-emerald-400 font-bold">● CLUSTER & SERVICES STATUS: 100% HEALTHY</div>
  <div class="text-slate-300">├─ [OK] Cloudflare Zero Trust Ingress: <span class="text-emerald-400">ACTIVE (0 Inbound Open Ports)</span></div>
  <div class="text-slate-300">├─ [OK] Docker Daemon (Host: Ubuntu-Srv): <span class="text-emerald-400">RUNNING (Snipe-IT, Redis, MySQL)</span></div>
  <div class="text-slate-300">├─ [OK] Tailscale Mesh Vault Node: <span class="text-emerald-400">CONNECTED (100.92.x.x)</span></div>
  <div class="text-slate-300">├─ [OK] Dubai Fragrances Storefront: <span class="text-cyan-400">LIVE on Netlify Edge</span></div>
  <div class="text-slate-300">├─ [OK] To Someone Special (WooCommerce): <span class="text-cyan-400">LIVE (100+ Products)</span></div>
  <div class="text-slate-300">└─ [OK] System Engineers Industrial: <span class="text-cyan-400">LIVE (Protected by Cloudflare)</span></div>
</div>`,

    tunnel: () => `
<div class="text-xs font-mono space-y-1">
  <span class="text-purple-400 font-bold">$ cloudflared tunnel --config /etc/cloudflared/config.yml run</span>
  <div class="text-slate-300 text-[11px]">
    INF Starting tunnel tunnelID=4b9f2910-c03a-4a21-9311-5f07a72d119c<br>
    INF Version 2025.2.1 (built 2025-02-14)<br>
    INF Ingress rule matches: hostname=assets.internal -> service=http://localhost:8080<br>
    INF Ingress rule matches: hostname=backup.internal -> service=http://localhost:9000<br>
    INF Connection to Cloudflare Edge established: <span class="text-emerald-400">DEL01, BOM02 (Multiplexed QUIC)</span><br>
    INF Zero inbound ports opened. Remote perimeter protected.
  </div>
</div>`,

    backup: () => `
<div class="text-xs font-mono space-y-1">
  <span class="text-amber-400 font-bold">$ /usr/local/bin/vault-pull-backup.sh --target=production-db</span>
  <div class="text-slate-300 text-[11px]">
    [2026-03-22 02:00:01] INFO: Initiating pull-based snapshot via Tailscale IP 100.92.14.8<br>
    [2026-03-22 02:00:04] INFO: MySQL dump stream initiated over non-root SSH key auth<br>
    [2026-03-22 02:00:18] INFO: Compressed 4.2 GB database stream to 520 MB gzip<br>
    [2026-03-22 02:00:22] INFO: SHA-256 verification hash generated: 9c8f...b21a [PASS]<br>
    [2026-03-22 02:00:24] INFO: Laravel APP_KEY synchronization check: MATCHED [OK]<br>
    [2026-03-22 02:00:25] <span class="text-emerald-400">SUCCESS: Disaster recovery snapshot stored in isolated vault</span>
  </div>
</div>`,

    projects: () => `
<div class="text-xs space-y-1.5">
  <div class="text-cyan-400 font-bold">Featured Projects:</div>
  <div>1. <a href="https://fantastic-kangaroo-4a2356.netlify.app/" target="_blank" class="text-emerald-400 underline">Dubai Fragrances</a> - Luxury Artisanal E-commerce (Netlify / Docker / Tailwind)</div>
  <div>2. <a href="https://tosomeonespecial.com/" target="_blank" class="text-purple-400 underline">To Someone Special</a> - WooCommerce 100+ Products Gifting Platform</div>
  <div>3. <a href="https://systemengineers.in/" target="_blank" class="text-blue-400 underline">System Engineers</a> - Industrial Corporate Cutting & Welding Platform</div>
  <div>4. <span class="text-slate-200">Snipe-IT Zero Trust</span> - Cloudflare Tunnel + Multi-Container Asset Management</div>
  <div>5. <span class="text-slate-200">Tailscale DR Engine</span> - Pull-based Automated Backup & Restore</div>
</div>`,

    skills: () => `
<div class="text-xs space-y-1 text-slate-300">
  <div><span class="text-cyan-400 font-bold">DevOps & Cloud:</span> Linux (Ubuntu/Debian), Docker, Compose, Kubernetes, Cloudflare Zero Trust, Tunnels, CI/CD, Cron, SSH</div>
  <div><span class="text-purple-400 font-bold">Cloud & Infra:</span> AWS (EC2, S3, IAM, VPC), Tailscale Mesh VPN, Nginx</div>
  <div><span class="text-emerald-400 font-bold">Web & E-Commerce:</span> Tailwind CSS, JavaScript ES6+, HTML5, WordPress, WooCommerce</div>
  <div><span class="text-amber-400 font-bold">Scripting & DB:</span> Bash Scripting, Python, VBA, MySQL, MongoDB, Git/GitHub</div>
</div>`,

    contact: () => `
<div class="text-xs space-y-1 text-slate-300">
  <div><span class="text-cyan-400 font-bold">Email:</span> <a href="mailto:nishantkumar050103@gmail.com" class="text-cyan-300 underline">nishantkumar050103@gmail.com</a></div>
  <div><span class="text-cyan-400 font-bold">Phone / WhatsApp:</span> <a href="https://wa.me/919336600810" target="_blank" class="text-emerald-400 underline">+91 9336600810</a></div>
  <div><span class="text-cyan-400 font-bold">LinkedIn:</span> <a href="https://linkedin.com/in/nishantkumar225" target="_blank" class="text-blue-400 underline">linkedin.com/in/nishantkumar225</a></div>
  <div><span class="text-cyan-400 font-bold">GitHub:</span> <a href="https://github.com/niksrajput225" target="_blank" class="text-purple-400 underline">github.com/niksrajput225</a></div>
</div>`,

    clear: () => {
      terminalBody.innerHTML = "";
      return null;
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Echo user line
    const userLine = document.createElement("div");
    userLine.className = "flex items-center gap-2 text-slate-400 text-xs font-mono mt-3";
    userLine.innerHTML = `<span class="text-cyan-400">guest@nishant-cloud:~$</span> <span class="text-white">${escapeHtml(rawCmd)}</span>`;
    terminalBody.appendChild(userLine);

    // Run action
    const outputContainer = document.createElement("div");
    outputContainer.className = "text-xs font-mono mt-1 text-slate-300 leading-relaxed";

    if (commands[cmd]) {
      const res = commands[cmd]();
      if (res !== null) {
        outputContainer.innerHTML = res;
        terminalBody.appendChild(outputContainer);
      }
    } else {
      outputContainer.innerHTML = `<span class="text-rose-400">Command not recognized: '${escapeHtml(cmd)}'. Type <span class="text-cyan-300 font-bold cursor-pointer underline" onclick="window.runTermCmd('help')">help</span> for a list of available commands.</span>`;
      terminalBody.appendChild(outputContainer);
    }

    // Scroll to bottom
    const terminalWindow = document.getElementById("terminalWindowContainer");
    if (terminalWindow) {
      terminalWindow.scrollTop = terminalWindow.scrollHeight;
    }
  }

  window.runTermCmd = (cmdStr) => {
    terminalInput.value = cmdStr;
    executeCommand(cmdStr);
    terminalInput.value = "";
    terminalInput.focus();
  };

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(terminalInput.value);
      terminalInput.value = "";
    }
  });

  chipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.getAttribute("data-term-cmd");
      window.runTermCmd(cmd);
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

// ==========================================
// 3. ARCHITECTURE VISUALIZER
// ==========================================
function initArchitectureVisualizer() {
  const container = document.getElementById("architectureFlowContainer");
  if (!container) return;

  container.innerHTML = architectureFlowData.nodes.map((node, index) => {
    const isLast = index === architectureFlowData.nodes.length - 1;
    
    let colorBorder = "border-cyan-500/30 text-cyan-400 bg-cyan-500/10";
    if (node.color === "amber") colorBorder = "border-amber-500/30 text-amber-400 bg-amber-500/10";
    if (node.color === "indigo") colorBorder = "border-indigo-500/30 text-indigo-400 bg-indigo-500/10";
    if (node.color === "emerald") colorBorder = "border-emerald-500/30 text-emerald-400 bg-emerald-500/10";
    if (node.color === "violet") colorBorder = "border-purple-500/30 text-purple-400 bg-purple-500/10";

    return `
      <div class="relative flex flex-col items-center">
        <!-- Node Card -->
        <div class="arch-node w-full p-5 rounded-2xl bg-[#0d121f] border border-slate-800 text-left relative z-10">
          <div class="flex items-center gap-3 mb-2.5">
            <div class="w-10 h-10 rounded-xl ${colorBorder} flex items-center justify-center shrink-0">
              <i data-lucide="${node.icon}" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400">Step 0${index + 1}</span>
              <h4 class="text-sm font-bold text-white">${node.title}</h4>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">${node.desc}</p>
        </div>

        <!-- Connecting Arrow (Horizontal on md+, Vertical on mobile) -->
        ${!isLast ? `
          <div class="hidden lg:flex items-center justify-center my-auto px-2 text-cyan-500/40">
            <!-- Handled by grid gap -->
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// ==========================================
// 4. SKILLS MATRIX
// ==========================================
function initSkillsMatrix() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  const categories = [
    { title: "DevOps & Cloud Infrastructure", key: "devops", icon: "terminal", color: "cyan" },
    { title: "Cloud Platforms & Networking", key: "cloud", icon: "cloud", color: "indigo" },
    { title: "Automation & Scripting", key: "scripting", icon: "cpu", color: "amber" },
    { title: "Web & E-Commerce Engineering", key: "web", icon: "layout", color: "emerald" },
    { title: "Databases & Version Control", key: "databases", icon: "database", color: "purple" }
  ];

  container.innerHTML = categories.map(cat => {
    const list = skillsData[cat.key] || [];
    return `
      <div class="p-6 rounded-2xl bg-[#0d121f] border border-slate-800/80 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-${cat.color}-400">
              <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
            </div>
            <h4 class="text-base font-bold text-white">${cat.title}</h4>
          </div>

          <div class="space-y-3.5">
            ${list.map(s => `
              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="font-medium text-slate-200">${s.name}</span>
                  <span class="font-mono text-slate-400">${s.level}%</span>
                </div>
                <div class="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 skill-bar-fill" style="width: ${s.level}%"></div>
                </div>
                <p class="text-[11px] text-slate-400 mt-1">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 5. MOBILE NAVIGATION
// ==========================================
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// ==========================================
// 6. CONTACT FORM & ACTIONS
// ==========================================
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  const statusMsg = document.getElementById("contactStatusMessage");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    // Create mailto fallback trigger
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Nishant,\n\n${message}\n\nFrom: ${name} (${email})`);
    
    // Open user's email client directly
    window.location.href = `mailto:nishantkumar050103@gmail.com?subject=${subject}&body=${body}`;

    if (statusMsg) {
      statusMsg.classList.remove("hidden");
      statusMsg.innerHTML = `<span class="text-emerald-400 font-semibold">Thank you ${escapeHtml(name)}! Opening your email client to dispatch the message directly to Nishant.</span>`;
    }

    form.reset();
  });
}

// ==========================================
// 7. MODALS
// ==========================================
function initModals() {
  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      closeResumeModal();
    }
  });
}

window.openProjectModal = (projectId) => {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("projectModalContent");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-start justify-between p-6 border-b border-slate-800 bg-[#070a12]">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-mono uppercase text-cyan-400 font-semibold">${project.categoryLabel}</span>
          <span class="text-slate-600">•</span>
          <span class="text-xs font-mono text-emerald-400">${project.badge}</span>
        </div>
        <h3 class="text-2xl font-bold text-white">${project.title}</h3>
        <p class="text-sm text-slate-400 mt-1">${project.tagline}</p>
      </div>
      <button 
        onclick="closeProjectModal()" 
        class="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
      >
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
      
      <!-- Key Metrics Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        ${project.metrics.map(m => `
          <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <div class="text-[11px] text-slate-400 uppercase tracking-wider">${m.label}</div>
            <div class="text-sm font-bold text-cyan-400 font-mono mt-1">${m.value}</div>
          </div>
        `).join('')}
      </div>

      <!-- Overview -->
      <div>
        <h4 class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i>
          <span>Project Overview</span>
        </h4>
        <p class="text-slate-300 text-sm leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
          ${project.overview}
        </p>
      </div>

      <!-- Key Engineering Highlights -->
      <div>
        <h4 class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
          <span>Key Engineering Highlights</span>
        </h4>
        <ul class="space-y-2.5">
          ${project.highlights.map(h => `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <i data-lucide="arrow-right" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Architecture & Infrastructure -->
      <div>
        <h4 class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-2">
          <i data-lucide="layers" class="w-4 h-4 text-purple-400"></i>
          <span>Architecture & Stack</span>
        </h4>
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
          ${project.architecture}
        </div>
      </div>

      <!-- Technology Badges -->
      <div>
        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(t => `
            <span class="px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-700/80 text-xs font-mono">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="p-6 border-t border-slate-800 bg-[#070a12] flex items-center justify-between gap-3">
      <button 
        onclick="closeProjectModal()" 
        class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold"
      >
        Close
      </button>

      <div class="flex items-center gap-2.5">
        ${project.links.github ? `
          <a 
            href="${project.links.github}" 
            target="_blank" 
            class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5"
          >
            <i data-lucide="github" class="w-4 h-4"></i>
            <span>GitHub</span>
          </a>
        ` : ''}

        ${project.links.live ? `
          <a 
            href="${project.links.live}" 
            target="_blank" 
            class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-cyan-500/20 shadow-lg"
          >
            <span>Visit Live Platform</span>
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    lucide.createIcons();
  }
};

window.closeProjectModal = () => {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
};

window.openResumeModal = () => {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
};

window.closeResumeModal = () => {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
};
