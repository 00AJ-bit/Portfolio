/**
 * Arjun Pillai — Resume / CV Generator & Modal Controller
 * Renders an exact ATS-standard 1-page Developer Resume matching professional hiring formats.
 * Perfectly aligned for on-screen viewing and single-page PDF/print export.
 */

document.addEventListener('DOMContentLoaded', () => {
  const resumeBtn = document.getElementById('view-resume-btn');
  const navResumeBtn = document.getElementById('nav-resume-btn');

  if (resumeBtn) {
    resumeBtn.addEventListener('click', openResumeModal);
  }
  if (navResumeBtn) {
    navResumeBtn.addEventListener('click', openResumeModal);
  }
});

window.openResumeModal = function() {
  const modal = document.getElementById('resume-modal');
  const content = document.getElementById('resume-content');
  if (!modal || !content) return;

  const profile = PORTFOLIO_DATA.profile;

  content.innerHTML = `
    <div class="modal-header print-hide">
      <div>
        <h2 class="modal-title" style="font-size: 1.2rem; font-weight: 700;">Curriculum Vitae (CV) — 1-Page ATS Format</h2>
        <span style="font-size: 0.82rem; color: var(--text-muted);">Strict 1-page layout • Optimized for ATS & PDF export</span>
      </div>
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <button class="btn-primary" onclick="printResume()" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Download / Print PDF
        </button>
        <button class="modal-close-btn" onclick="closeModal('resume-modal')">&times;</button>
      </div>
    </div>

    <div class="modal-body resume-modal-body">
      <!-- 1-Page ATS Standard Resume Sheet -->
      <div class="cv-page" id="cv-printable-page">
        
        <!-- Header -->
        <header class="cv-header">
          <h1 class="cv-name">ARJUN PILLAI</h1>
          <div class="cv-roles">Software Developer | Full Stack Engineer | Backend Developer</div>
          <div class="cv-contacts">
            <a href="mailto:${profile.email}" class="cv-link">✉ ${profile.email}</a>
            <span class="cv-sep">|</span>
            <a href="${profile.social.linkedin}" target="_blank" rel="noopener noreferrer" class="cv-link">🔗 LinkedIn</a>
            <span class="cv-sep">|</span>
            <a href="${profile.social.github}" target="_blank" rel="noopener noreferrer" class="cv-link">💻 GitHub</a>
            <span class="cv-sep">|</span>
            <span>📍 Pune, Maharashtra</span>
          </div>
        </header>

        <!-- Professional Summary -->
        <section class="cv-section">
          <h2 class="cv-section-title">Professional Summary</h2>
          <p class="cv-summary-text">
            Software Developer with strong foundational knowledge in Electronics & Communication Engineering (ECE) from Bharati Vidyapeeth College of Engineering, Pune. Experienced in full-stack web development, building high-throughput REST APIs, database architecture, and distributed systems. Seeking opportunities to contribute to high-impact software engineering projects.
          </p>
        </section>

        <!-- Core Skills -->
        <section class="cv-section">
          <h2 class="cv-section-title">Core Skills</h2>
          <ul class="cv-list">
            <li><strong>Programming:</strong> JavaScript (ES6+), TypeScript, Python, C/C++, SQL, HTML, CSS</li>
            <li><strong>Frameworks & Web:</strong> React.js, Node.js, Express, Next.js, FastAPI, RESTful APIs</li>
            <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis (In-Memory Caching)</li>
            <li><strong>Tools & DevOps:</strong> Git, GitHub, Docker, Linux, Postman, VS Code, CI/CD Pipelines</li>
          </ul>
        </section>

        <!-- Education -->
        <section class="cv-section">
          <h2 class="cv-section-title">Education</h2>
          <ul class="cv-list">
            <li>
              <strong>B.Tech in Electronics & Communication Engineering</strong>, Bharati Vidyapeeth College of Engineering, Pune (2023–2027 | Ongoing)
            </li>
            <li>
              <strong>Saint Francis School</strong> | 12th: 2023 | 10th: 2021
            </li>
          </ul>
        </section>

        <!-- Experience -->
        <section class="cv-section">
          <h2 class="cv-section-title">Experience</h2>
          <div class="cv-item-title-bar">
            <strong>Software Developer & Project Lead</strong> | Engineering Capstone & Systems | <span>Ongoing</span>
          </div>
          <ul class="cv-list">
            <li>Developing full-stack web applications and low-latency RESTful APIs using React, Node.js, and Python.</li>
            <li>Building distributed telemetry, database schemas (SQL/NoSQL), and real-time WebSocket communication.</li>
            <li>Implementing automated CI/CD pipelines, Docker containerization, and cloud deployment.</li>
          </ul>
        </section>

        <!-- Projects -->
        <section class="cv-section">
          <h2 class="cv-section-title">Projects</h2>
          
          <div class="cv-project-block">
            <div class="cv-project-name">God's Eye: Real-Time Edge Video Analytics & Surveillance Sentinel</div>
            <ul class="cv-list">
              <li>AI-powered edge vision and video telemetry platform for real-time anomaly detection and low-latency alert distribution.</li>
            </ul>
          </div>

          <div class="cv-project-block">
            <div class="cv-project-name">OmniPulse: Distributed System Monitoring & Metric Ingestion Engine</div>
            <ul class="cv-list">
              <li>Full-stack observability engine with time-series ingestion, Redis caching, and live interactive health dashboards.</li>
            </ul>
          </div>

          <div class="cv-project-block">
            <div class="cv-project-name">IntelliDoc AI: Intelligent Document Parsing & Semantic Search Engine</div>
            <ul class="cv-list">
              <li>Document analysis and semantic retrieval system powered by vector embeddings and conversational citation grounding.</li>
            </ul>
          </div>
        </section>

        <!-- Certifications -->
        <section class="cv-section">
          <h2 class="cv-section-title">Certifications</h2>
          <ul class="cv-list">
            <li>Full Stack Web Development & Software System Architecture</li>
            <li>Database Management Systems (DBMS & SQL Mastery)</li>
            <li>IoT, Microcontrollers & Embedded Systems Integration</li>
          </ul>
        </section>

        <!-- Languages -->
        <section class="cv-section" style="margin-bottom: 0;">
          <h2 class="cv-section-title">Languages</h2>
          <p class="cv-lang-text">English • Hindi</p>
        </section>

      </div>
    </div>
  `;

  modal.classList.add('open');
};

window.printResume = function() {
  window.print();
};
