/**
 * Arjun Pillai — Resume / CV Generator & Modal Controller
 * Provides an ATS-friendly, clean professional CV viewer with one-click print/PDF download.
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
  const education = PORTFOLIO_DATA.education;
  const skills = PORTFOLIO_DATA.skills;
  const projects = PORTFOLIO_DATA.projects;
  const experience = PORTFOLIO_DATA.experience;

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <h2 class="modal-title" style="font-size: 1.25rem;">Curriculum Vitae (CV) Preview</h2>
        <span style="font-size: 0.85rem; color: var(--text-muted);">ATS-Formatted • Ready for Print / PDF Export</span>
      </div>
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <button class="btn-primary" onclick="printResume()" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Download / Print PDF
        </button>
        <button class="modal-close-btn" onclick="closeModal('resume-modal')">&times;</button>
      </div>
    </div>

    <div class="modal-body" style="background: #f8fafc; padding: 2rem;">
      <div class="resume-sheet">
        <!-- Header -->
        <div class="resume-header">
          <h1 class="resume-name">${profile.name}</h1>
          <div class="resume-title">${profile.title}</div>
          <div class="resume-contact-bar">
            <span>📧 ${profile.email}</span>
            <span>📍 ${profile.location}</span>
            <span>💼 <a href="${profile.social.linkedin}" target="_blank" style="color: #0284c7; text-decoration: underline;">linkedin.com/in/arjun-pillai-a88998425</a></span>
            <span>🐙 <a href="${profile.social.github}" target="_blank" style="color: #0284c7; text-decoration: underline;">github.com/00AJ-bit</a></span>
          </div>
        </div>

        <!-- Summary -->
        <h2 class="resume-section-title">Professional Summary</h2>
        <p style="font-size: 0.92rem; color: #334155; margin-bottom: 1.25rem;">
          Software Developer with a strong engineering background in Electronics & Communication Engineering (ECE) from Bharati Vidyapeeth (DU) College of Engineering, Pune. Skilled in full-stack web engineering, architecting high-throughput REST APIs, database design (SQL/NoSQL), and bridging low-level system understanding with modern cloud technologies. Passionate about writing clean, maintainable, and high-performance code.
        </p>

        <!-- Technical Skills -->
        <h2 class="resume-section-title">Technical Skills</h2>
        <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 1.25rem;">
          <div><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, C, C++, SQL, HTML5, CSS3</div>
          <div><strong>Frameworks & Web:</strong> React.js, Node.js, Express, Next.js, FastAPI, RESTful API Architecture, TailwindCSS</div>
          <div><strong>Databases & Storage:</strong> PostgreSQL, MongoDB, MySQL, Redis (In-Memory Caching)</div>
          <div><strong>Tools & Cloud:</strong> Git, GitHub Actions, Docker, Linux/Unix, Postman, Vercel, Netlify, CI/CD Pipelines</div>
        </div>

        <!-- Featured Projects -->
        <h2 class="resume-section-title">Key Engineering Projects</h2>
        ${projects.map(p => `
          <div class="resume-item">
            <div class="resume-item-header">
              <span>${p.title}</span>
              <span style="font-weight: 500; font-size: 0.85rem; color: #64748b;">${p.category}</span>
            </div>
            <div class="resume-item-sub">
              <strong>Tech Stack:</strong> ${p.tags.join(', ')} | 
              <a href="${p.githubUrl}" target="_blank" style="color: #0284c7; text-decoration: underline;">GitHub Repository</a>
            </div>
            <ul class="resume-bullet-list">
              <li>${p.caseStudy.solution}</li>
              <li>${p.caseStudy.highlights[0]}</li>
              <li>${p.caseStudy.highlights[1]}</li>
            </ul>
          </div>
        `).join('')}

        <!-- Experience -->
        <h2 class="resume-section-title">Experience & Capstone Leadership</h2>
        ${experience.map(exp => `
          <div class="resume-item">
            <div class="resume-item-header">
              <span>${exp.role}</span>
              <span style="font-weight: 500; font-size: 0.85rem; color: #64748b;">${exp.duration}</span>
            </div>
            <div class="resume-item-sub">${exp.company} • ${exp.location}</div>
            <ul class="resume-bullet-list">
              ${exp.contributions.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <!-- Education -->
        <h2 class="resume-section-title">Education</h2>
        ${education.map(edu => `
          <div class="resume-item">
            <div class="resume-item-header">
              <span>${edu.degree}</span>
              <span style="font-weight: 500; font-size: 0.85rem; color: #64748b;">${edu.duration}</span>
            </div>
            <div class="resume-item-sub">${edu.institution}, ${edu.location} — <strong>${edu.grade}</strong></div>
            <p style="font-size: 0.88rem; color: #475569; margin-top: 0.2rem;">${edu.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modal.classList.add('open');
};

window.printResume = function() {
  window.print();
};
