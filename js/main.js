/**
 * Arjun Pillai — Portfolio Core Controller
 * Handles dynamic DOM hydration from data.js, theme management, animations, and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  hydrateHeroAndStats();
  hydrateAboutAndEducation();
  hydrateSkillsMatrix();
  hydrateProjects();
  initDynamicTyping();
  initNavigation();
  initContactForm();
  initToast();
});

/* --- Theme Management --- */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'obsidian';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const themes = ['obsidian', 'cyber', 'amber', 'light'];
      const current = document.documentElement.getAttribute('data-theme') || 'obsidian';
      const nextIndex = (themes.indexOf(current) + 1) % themes.length;
      const nextTheme = themes[nextIndex];
      
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('portfolio-theme', nextTheme);
      showToast(`Theme switched to ${capitalize(nextTheme)}`);
    });
  }
}

/* --- Hero & Stats Hydration --- */
function hydrateHeroAndStats() {
  const profile = PORTFOLIO_DATA.profile;

  // Name & Greetings
  const heroNameEl = document.getElementById('hero-name');
  if (heroNameEl) heroNameEl.textContent = profile.name;

  const heroDescEl = document.getElementById('hero-desc');
  if (heroDescEl) heroDescEl.textContent = profile.tagline;

  const statusBadgeEl = document.getElementById('hero-status-badge');
  if (statusBadgeEl) {
    statusBadgeEl.innerHTML = `<span class="status-dot"></span> ${profile.availability.badge}`;
  }

  // Social Links
  const heroSocialsEl = document.getElementById('hero-social-links');
  if (heroSocialsEl) {
    heroSocialsEl.innerHTML = `
      <a href="${profile.social.github}" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub
      </a>
      <a href="${profile.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        LinkedIn
      </a>
      <a href="${profile.social.email}" class="social-link" title="Email">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        Email
      </a>
    `;
  }

  // Stats Grid
  const statsGridEl = document.getElementById('stats-grid');
  if (statsGridEl) {
    statsGridEl.innerHTML = profile.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-number">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }
}

/* --- Dynamic Typing Animation --- */
function initDynamicTyping() {
  const typingEl = document.getElementById('hero-typed-role');
  if (!typingEl) return;

  const roles = PORTFOLIO_DATA.profile.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function typeStep() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 1800; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 350; // Pause before typing next
    }

    setTimeout(typeStep, typeSpeed);
  }

  typeStep();
}

/* --- About & Education Hydration --- */
function hydrateAboutAndEducation() {
  const about = PORTFOLIO_DATA.about;
  const education = PORTFOLIO_DATA.education;

  // About Narrative
  const aboutLeadEl = document.getElementById('about-lead');
  if (aboutLeadEl) aboutLeadEl.textContent = about.lead;

  const aboutParasEl = document.getElementById('about-paragraphs');
  if (aboutParasEl) {
    aboutParasEl.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  const aboutHighlightsEl = document.getElementById('about-highlights');
  if (aboutHighlightsEl) {
    aboutHighlightsEl.innerHTML = about.highlights.map(h => `
      <div class="highlight-box">
        <h4>${h.title}</h4>
        <p>${h.description}</p>
      </div>
    `).join('');
  }

  // Education Timeline
  const eduContainerEl = document.getElementById('education-timeline');
  if (eduContainerEl) {
    eduContainerEl.innerHTML = education.map(edu => `
      <div class="timeline-card">
        <div class="timeline-duration">${edu.duration}</div>
        <h3 class="timeline-degree">${edu.degree}</h3>
        <div class="timeline-institution">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          ${edu.institution} • ${edu.location}
        </div>
        <p class="timeline-desc">${edu.description}</p>
        <span class="timeline-grade-badge">${edu.grade}</span>
      </div>
    `).join('');
  }
}

/* --- Skills Matrix Hydration --- */
function hydrateSkillsMatrix() {
  const skills = PORTFOLIO_DATA.skills;
  const container = document.getElementById('skills-container');
  if (!container) return;

  const categories = [
    { title: "Programming Languages", icon: "{ }", items: skills.languages },
    { title: "Frameworks & Web Engineering", icon: "⚡", items: skills.frameworks },
    { title: "Databases & Storage", icon: "🗄️", items: skills.databases },
    { title: "DevOps, Cloud & Architecture", icon: "☁️", items: skills.toolsAndDevops }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-category-header">
        <span class="skill-category-icon">${cat.icon}</span>
        <h3 class="skill-category-title">${cat.title}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item">
            <div class="skill-item-info">
              <span>${item.name}</span>
              <span style="color: var(--text-muted);">${item.level}%</span>
            </div>
            <div class="skill-progress-track">
              <div class="skill-progress-bar" style="width: ${item.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* --- Projects Hydration & Interactive Filter --- */
function hydrateProjects() {
  const projects = PORTFOLIO_DATA.projects;
  const gridEl = document.getElementById('projects-grid');
  if (!gridEl) return;

  function renderProjects(filter = 'all') {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || p.tags.some(t => t.toLowerCase() === filter.toLowerCase()));

    gridEl.innerHTML = filtered.map(p => `
      <div class="project-card" data-category="${p.category}">
        <div class="project-card-header">
          <span class="project-badge">${p.category}</span>
          <div class="project-links">
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Source Code">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Live Preview">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-tagline">${p.tagline}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <button class="deep-dive-btn" onclick="openCaseStudy('${p.id}')">
            Architecture & Case Study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  renderProjects();

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

/* --- Project Case Study Modal --- */
window.openCaseStudy = function(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('case-study-content');
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="project-badge" style="margin-bottom: 0.35rem; display: inline-block;">${project.category}</span>
        <h2 class="modal-title">${project.title}</h2>
      </div>
      <button class="modal-close-btn" onclick="closeModal('case-study-modal')">&times;</button>
    </div>
    <div class="modal-body">
      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-primary); margin-bottom: 0.4rem; font-size: 1.05rem;">The Challenge & Problem</h4>
        <p style="color: var(--text-secondary);">${project.caseStudy.problem}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-primary); margin-bottom: 0.4rem; font-size: 1.05rem;">Engineered Solution</h4>
        <p style="color: var(--text-secondary);">${project.caseStudy.solution}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-primary); margin-bottom: 0.4rem; font-size: 1.05rem;">Architecture & Tech Breakdown</h4>
        <p style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.9rem; background: var(--bg-tertiary); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          ${project.caseStudy.architecture}
        </p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-primary); margin-bottom: 0.4rem; font-size: 1.05rem;">Key Engineering Highlights</h4>
        <ul style="list-style: disc; padding-left: 1.25rem; color: var(--text-secondary);">
          ${project.caseStudy.highlights.map(h => `<li style="margin-bottom: 0.35rem;">${h}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 2rem;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View GitHub Repository
        </a>
        <button class="btn-secondary" onclick="closeModal('case-study-modal')">Close</button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

// Global click outside to close modals
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
  }
});

/* --- Navigation & Active Section Spy --- */
function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.position = 'absolute';
        navLinks.style.top = 'var(--header-height)';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'var(--bg-glass)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid var(--border-subtle)';
      }
    });
  }
}

/* --- Contact Form & Email Copy --- */
function initContactForm() {
  const emailVal = PORTFOLIO_DATA.profile.email;
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailVal).then(() => {
        showToast(`Copied ${emailVal} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${emailVal}`);
      });
    });
  }

  const form = document.getElementById('portfolio-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value || 'Portfolio Inquiry';
      const message = document.getElementById('form-message').value;

      // Construct native mailto fallback for instant reliable delivery
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject + " - from " + name)}&body=${encodeURIComponent(message + "\n\nContact Email: " + email)}`;
      window.location.href = mailtoUrl;
      showToast("Opening your email client to send message...");
      form.reset();
    });
  }
}

/* --- Toast Notification Controller --- */
function initToast() {
  if (!document.querySelector('.toast-container')) {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
