/**
 * Arjun Pillai — Interactive Developer CLI / Mini-Terminal
 * Handles real-time developer terminal commands, easter eggs, and interactive responses.
 */

document.addEventListener('DOMContentLoaded', () => {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.querySelector('.terminal-body');

  if (!terminalInput || !terminalOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  // Print initial welcome message
  printOutput(`
    <div style="color: var(--accent-primary); font-weight: 700; margin-bottom: 0.25rem;">
      ⚡ Arjun Pillai — Interactive Developer Terminal [v2.4.0]
    </div>
    <div style="color: var(--text-muted); margin-bottom: 0.5rem;">
      Type <span style="color: #38bdf8; font-weight: 600;">'help'</span> to see available commands or explore skills, projects, and contact info.
    </div>
  `);

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawInput = terminalInput.value.trim();
      if (!rawInput) return;

      commandHistory.push(rawInput);
      historyIndex = commandHistory.length;

      // Echo command
      printOutput(`
        <div style="display: flex; gap: 0.5rem; color: var(--text-primary); margin-top: 0.5rem;">
          <span style="color: var(--accent-primary);">arjun@dev:~$</span>
          <span>${escapeHTML(rawInput)}</span>
        </div>
      `);

      processCommand(rawInput);
      terminalInput.value = '';
      if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });

  function processCommand(input) {
    const parts = input.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ').toLowerCase();

    switch (cmd) {
      case 'help':
        printOutput(`
          <div style="color: var(--text-secondary); line-height: 1.6;">
            <strong>Available Commands:</strong><br>
            • <span style="color: #38bdf8;">about</span> / <span style="color: #38bdf8;">bio</span> - Summary of Arjun Pillai & background<br>
            • <span style="color: #38bdf8;">skills</span> - Technical skills & proficiencies<br>
            • <span style="color: #38bdf8;">projects</span> - Featured software & IoT projects<br>
            • <span style="color: #38bdf8;">education</span> - Academic background & universities<br>
            • <span style="color: #38bdf8;">contact</span> - Direct email & LinkedIn details<br>
            • <span style="color: #38bdf8;">cv</span> / <span style="color: #38bdf8;">resume</span> - Open printable ATS Resume modal<br>
            • <span style="color: #38bdf8;">theme &lt;obsidian|cyber|amber|light&gt;</span> - Switch color theme<br>
            • <span style="color: #38bdf8;">sudo hire</span> - Direct recruiter fast-track<br>
            • <span style="color: #38bdf8;">clear</span> - Clear terminal screen
          </div>
        `);
        break;

      case 'about':
      case 'bio':
        printOutput(`
          <div style="color: var(--text-secondary); line-height: 1.6;">
            <strong style="color: var(--text-primary);">${PORTFOLIO_DATA.profile.name}</strong> — ${PORTFOLIO_DATA.profile.title}<br>
            📍 ${PORTFOLIO_DATA.profile.location}<br>
            🎓 ${PORTFOLIO_DATA.education[0].degree} (${PORTFOLIO_DATA.education[0].institution})<br><br>
            ${PORTFOLIO_DATA.about.paragraphs[0]}
          </div>
        `);
        break;

      case 'skills':
        const langs = PORTFOLIO_DATA.skills.languages.map(l => l.name).join(', ');
        const fws = PORTFOLIO_DATA.skills.frameworks.map(f => f.name).join(', ');
        const dbs = PORTFOLIO_DATA.skills.databases.map(d => d.name).join(', ');
        const devops = PORTFOLIO_DATA.skills.toolsAndDevops.map(t => t.name).join(', ');

        printOutput(`
          <div style="color: var(--text-secondary); line-height: 1.7;">
            <strong style="color: #38bdf8;">Languages:</strong> ${langs}<br>
            <strong style="color: #38bdf8;">Frameworks & Backend:</strong> ${fws}<br>
            <strong style="color: #38bdf8;">Databases:</strong> ${dbs}<br>
            <strong style="color: #38bdf8;">DevOps & Tools:</strong> ${devops}
          </div>
        `);
        break;

      case 'projects':
        const projectsList = PORTFOLIO_DATA.projects.map((p, idx) => `
          <div style="margin-bottom: 0.5rem;">
            <strong>${idx + 1}. ${p.title}</strong> [${p.category}]<br>
            <span style="color: var(--text-muted);">${p.tagline}</span><br>
            <span style="color: #38bdf8;">GitHub:</span> <a href="${p.githubUrl}" target="_blank" style="text-decoration: underline; color: #38bdf8;">${p.githubUrl}</a>
          </div>
        `).join('');
        printOutput(projectsList);
        break;

      case 'education':
        const eduList = PORTFOLIO_DATA.education.map(e => `
          <div style="margin-bottom: 0.5rem;">
            <strong style="color: #38bdf8;">${e.degree}</strong> (${e.duration})<br>
            <span>${e.institution} • ${e.location}</span><br>
            <span style="color: var(--success);">${e.grade}</span>
          </div>
        `).join('');
        printOutput(eduList);
        break;

      case 'contact':
        printOutput(`
          <div style="color: var(--text-secondary); line-height: 1.6;">
            📧 <strong>Email:</strong> <a href="${PORTFOLIO_DATA.profile.social.email}" style="color: #38bdf8; text-decoration: underline;">${PORTFOLIO_DATA.profile.email}</a><br>
            💼 <strong>LinkedIn:</strong> <a href="${PORTFOLIO_DATA.profile.social.linkedin}" target="_blank" style="color: #38bdf8; text-decoration: underline;">${PORTFOLIO_DATA.profile.social.linkedin}</a><br>
            🐙 <strong>GitHub:</strong> <a href="${PORTFOLIO_DATA.profile.social.github}" target="_blank" style="color: #38bdf8; text-decoration: underline;">${PORTFOLIO_DATA.profile.social.github}</a>
          </div>
        `);
        break;

      case 'cv':
      case 'resume':
        if (typeof openResumeModal === 'function') {
          openResumeModal();
          printOutput(`<div style="color: var(--success);">✓ Opened Resume Viewer modal!</div>`);
        }
        break;

      case 'sudo':
        if (args === 'hire' || args === 'hire me' || args === 'hire-me') {
          printOutput(`
            <div style="color: var(--success); font-weight: 700; line-height: 1.6;">
              🚀 [ACCESS GRANTED] Fast-tracking interview process!<br>
              Direct contact email: <a href="mailto:${PORTFOLIO_DATA.profile.email}" style="color: #38bdf8; text-decoration: underline;">${PORTFOLIO_DATA.profile.email}</a><br>
              Phone/Calendar availability: Ready upon email confirmation.
            </div>
          `);
        } else {
          printOutput(`<div style="color: var(--danger);">sudo: command not recognized. Try 'sudo hire'</div>`);
        }
        break;

      case 'theme':
        const validThemes = ['obsidian', 'cyber', 'amber', 'light'];
        if (validThemes.includes(args)) {
          document.documentElement.setAttribute('data-theme', args);
          localStorage.setItem('portfolio-theme', args);
          printOutput(`<div style="color: var(--success);">✓ Theme set to ${args}</div>`);
        } else {
          printOutput(`<div style="color: var(--danger);">Invalid theme. Choose from: ${validThemes.join(', ')}</div>`);
        }
        break;

      case 'clear':
        terminalOutput.innerHTML = '';
        break;

      default:
        printOutput(`<div style="color: var(--danger);">Command not found: '${escapeHTML(input)}'. Type 'help' for available commands.</div>`);
        break;
    }
  }

  function printOutput(html) {
    const entry = document.createElement('div');
    entry.className = 'terminal-entry';
    entry.innerHTML = html;
    terminalOutput.appendChild(entry);
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
});
