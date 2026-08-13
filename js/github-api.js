/**
 * Arjun Pillai — Live GitHub API Integration
 * Fetches public repositories and stats for 00AJ-bit with caching and offline fallback.
 */

document.addEventListener('DOMContentLoaded', () => {
  const username = PORTFOLIO_DATA.profile.handle || '00AJ-bit';
  const reposGrid = document.getElementById('github-repos-grid');
  const userAvatar = document.getElementById('github-user-avatar');
  const userStats = document.getElementById('github-user-stats');

  if (!reposGrid) return;

  async function fetchGitHubData() {
    try {
      // 1. Fetch User Profile
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (userRes.ok) {
        const userData = await userRes.json();
        if (userAvatar) userAvatar.src = userData.avatar_url;
        if (userStats) {
          userStats.innerHTML = `
            <span><strong>${userData.public_repos}</strong> Repositories</span> • 
            <span><strong>${userData.followers}</strong> Followers</span>
          `;
        }
      }

      // 2. Fetch Repositories
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (reposRes.ok) {
        const repos = await reposRes.json();
        if (repos && repos.length > 0) {
          renderRepos(repos);
          return;
        }
      }
      renderFallbackRepos();
    } catch (err) {
      console.warn('GitHub API rate limited or offline, using structured showcase repos', err);
      renderFallbackRepos();
    }
  }

  function renderRepos(repos) {
    reposGrid.innerHTML = repos.map(repo => `
      <div class="gh-repo-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="font-weight: 700; color: var(--accent-primary); font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            ${escapeHTML(repo.name)}
          </a>
          <span class="tag-pill" style="font-size: 0.75rem;">${repo.language || 'Code'}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
          ${escapeHTML(repo.description || 'Public GitHub software repository for production web and system services.')}
        </p>
        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
          <span>⭐ ${repo.stargazers_count} Stars</span>
          <span>🍴 ${repo.forks_count} Forks</span>
        </div>
      </div>
    `).join('');
  }

  function renderFallbackRepos() {
    const featured = PORTFOLIO_DATA.projects;
    reposGrid.innerHTML = featured.map(f => `
      <div class="gh-repo-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <a href="${f.githubUrl}" target="_blank" rel="noopener noreferrer" style="font-weight: 700; color: var(--accent-primary); font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            ${escapeHTML(f.id)}
          </a>
          <span class="tag-pill" style="font-size: 0.75rem;">${f.tags[0]}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
          ${escapeHTML(f.tagline)}
        </p>
        <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
          <span>⭐ ${f.stats.stars || 10} Stars</span>
          <span>⚡ ${f.category}</span>
        </div>
      </div>
    `).join('');
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  fetchGitHubData();
});
