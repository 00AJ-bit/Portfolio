/**
 * Arjun Pillai — Command Palette Controller (Cmd + K / Ctrl + K)
 * Fast keyboard-driven navigation, project search, theme switcher, and actions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const paletteModal = document.getElementById('command-palette-modal');
  const paletteInput = document.getElementById('cmd-palette-input');
  const paletteResults = document.getElementById('cmd-palette-results');
  const triggerBtn = document.getElementById('cmd-palette-trigger');

  if (!paletteModal || !paletteInput || !paletteResults) return;

  const actions = [
    { title: "Download / View Resume (CV)", category: "Action", handler: () => openResumeModal() },
    { title: "Copy Contact Email", category: "Action", handler: () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      showToast(`Copied ${PORTFOLIO_DATA.profile.email} to clipboard!`);
    }},
    { title: "Go to About & Education Section", category: "Navigation", handler: () => scrollToSection('about') },
    { title: "Go to Technical Skills Matrix", category: "Navigation", handler: () => scrollToSection('skills') },
    { title: "Go to Featured Projects", category: "Navigation", handler: () => scrollToSection('projects') },
    { title: "Go to Developer Terminal", category: "Navigation", handler: () => scrollToSection('terminal') },
    { title: "Go to Contact Hub", category: "Navigation", handler: () => scrollToSection('contact') },
    { title: "Switch Theme: Midnight Obsidian", category: "Theme", handler: () => setTheme('obsidian') },
    { title: "Switch Theme: Cyber Emerald", category: "Theme", handler: () => setTheme('cyber') },
    { title: "Switch Theme: Amber Sunset", category: "Theme", handler: () => setTheme('amber') },
    { title: "Switch Theme: Clean Studio Light", category: "Theme", handler: () => setTheme('light') },
    { title: "Open GitHub Profile (00AJ-bit)", category: "External", handler: () => window.open(PORTFOLIO_DATA.profile.social.github, '_blank') },
    { title: "Open LinkedIn Profile", category: "External", handler: () => window.open(PORTFOLIO_DATA.profile.social.linkedin, '_blank') }
  ];

  // Add individual projects to search
  PORTFOLIO_DATA.projects.forEach(p => {
    actions.push({
      title: `Project: ${p.title}`,
      category: "Project",
      handler: () => openCaseStudy(p.id)
    });
  });

  // Global keydown for Cmd+K / Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      togglePalette();
    } else if (e.key === 'Escape' && paletteModal.classList.contains('open')) {
      closePalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', togglePalette);
  }

  paletteInput.addEventListener('input', () => {
    const query = paletteInput.value.toLowerCase().trim();
    renderResults(query);
  });

  function togglePalette() {
    const isOpen = paletteModal.classList.contains('open');
    if (isOpen) {
      closePalette();
    } else {
      paletteModal.classList.add('open');
      paletteInput.value = '';
      renderResults('');
      setTimeout(() => paletteInput.focus(), 50);
    }
  }

  function closePalette() {
    paletteModal.classList.remove('open');
  }

  function renderResults(query) {
    const filtered = actions.filter(a => 
      a.title.toLowerCase().includes(query) || 
      a.category.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      paletteResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No commands found matching "${escapeHTML(query)}"</div>`;
      return;
    }

    paletteResults.innerHTML = filtered.map((item, index) => `
      <div class="cmd-result-item ${index === 0 ? 'selected' : ''}" data-index="${index}">
        <span>${escapeHTML(item.title)}</span>
        <span class="cmd-result-badge">${item.category}</span>
      </div>
    `).join('');

    // Attach click events
    const items = paletteResults.querySelectorAll('.cmd-result-item');
    items.forEach((el, idx) => {
      el.addEventListener('click', () => {
        filtered[idx].handler();
        closePalette();
      });
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function setTheme(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('portfolio-theme', name);
    showToast(`Theme set to ${capitalize(name)}`);
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
