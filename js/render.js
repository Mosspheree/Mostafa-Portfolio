/* ── render.js — builds DOM from data.js ── */
function renderExperience() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-line"></div>
      <div class="timeline-content">
        <div class="timeline-company">${item.company}</div>
        <div class="timeline-role">${item.role}</div>
        <ul class="timeline-bullets">
          ${item.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div class="timeline-tags">
          ${item.tags.map(t => `<span class="tag tag-${t.color}">${t.label}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = PROJECTS.filter(Boolean).map(p => {
    const visual = p.hasOrbit ? `
      <div class="featured-visual">
        <div class="orbit-demo">
          <div class="orbit-ring"><div class="orbit-dot"></div></div>
          <div class="orbit-ring"><div class="orbit-dot"></div></div>
          <div class="orbit-ring"><div class="orbit-dot"></div></div>
          <div class="orbit-earth"></div>
        </div>
      </div>` : '';

    const extraLinks = [
      p.paperLink ? `<a href="${p.paperLink}" target="_blank" class="project-link paper-link" onclick="event.stopPropagation()">Read Paper →</a>` : '',
      p.liveLink  ? `<a href="${p.liveLink}"  target="_blank" class="project-link live-link"  onclick="event.stopPropagation()">Live Demo →</a>`  : '',
    ].filter(Boolean).join('');

    const tags = p.tags.map(t => `<span class="tag tag-${t.color}">${t.label}</span>`).join('');

    if (p.featured) {
      return `
        <a href="${p.link}" target="_blank" class="project-card featured reveal">
          <div class="project-content">
            <div class="project-num">${p.num}</div>
            <div class="project-name">${p.name}</div>
            <div class="project-sub">${p.sub}</div>
            <div class="project-desc">${p.desc}</div>
            <div class="project-tags">${tags}</div>
            <div class="project-buttons">
              <span class="project-link">View on GitHub →</span>
              ${extraLinks}
            </div>
          </div>
          ${visual}
        </a>`;
    }

    return `
      <a href="${p.link}" target="_blank" class="project-card reveal">
        <div class="project-num">${p.num}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-sub">${p.sub}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${tags}</div>
        <div class="project-buttons">
          <span class="project-link">View on GitHub →</span>
          ${extraLinks}
        </div>
      </a>`;
  }).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = SKILLS.map(g => `
    <div class="skill-group reveal">
      <div class="skill-group-title">${g.title}</div>
      <div class="skill-list">
        ${g.items.map(i => `<span class="tag tag-${g.color}">${i}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderAwards() {
  const container = document.getElementById('awards-container');
  if (!container) return;
  container.innerHTML = AWARDS.map(a => `
    <div class="award-card reveal">
      <div class="award-icon">${a.icon}</div>
      <div class="award-name">${a.name}</div>
      <div class="award-org">${a.org}</div>
      <div class="award-date">${a.date}</div>
    </div>
  `).join('');
}

function renderAll() {
  renderExperience();
  renderProjects();
  renderSkills();
  renderAwards();
}
