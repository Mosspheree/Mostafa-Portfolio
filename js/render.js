/* ── render.js — builds DOM from data.js ── */
const ASTROBOTIC_MILESTONES = [
  { name: 'HIL/SIL Test Framework Setup',         phase: 'AUG 2025' },
  { name: 'UART/Serial Protocol Integration',      phase: 'SEP 2025' },
  { name: 'Emulator Configuration (5+ units)',     phase: 'OCT 2025' },
  { name: 'Flight Software Integration',           phase: 'NOV 2025' },
  { name: 'Core Flight System (cFS) Testing',      phase: 'DEC 2025' },
  { name: 'Mission-Critical Anomaly Resolution',   phase: 'JAN 2026' },
  { name: 'DFS/EFS System Enhancement',            phase: 'MAR 2026' },
];

function renderExperience() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(item => {
    const isAstrobotic = item.company.includes('Astrobotic');

    const logicFlow = isAstrobotic ? `
      <div class="logic-flow-wrap">
        <div class="lf-title">System Logic Flow — AI Test Agent</div>
        <div class="flow-nodes">
          <div class="flow-node"><span class="node-dot"></span>CMD QUEUE</div>
          <div class="flow-connector"><div class="flow-packet"></div></div>
          <div class="flow-node"><span class="node-dot"></span>AGENT PARSER</div>
          <div class="flow-connector"><div class="flow-packet"></div></div>
          <div class="flow-node node-active"><span class="node-dot"></span>HIL/SIL ENV</div>
          <div class="flow-connector"><div class="flow-packet"></div></div>
          <div class="flow-node"><span class="node-dot"></span>VALIDATION</div>
          <div class="flow-connector"><div class="flow-packet"></div></div>
          <div class="flow-node"><span class="node-dot"></span>REPORT</div>
        </div>
        <div class="lf-footer">
          <span class="lf-stat">STATUS <em>NOMINAL</em></span>
          <span class="lf-stat">TESTS PASSED <em>10+</em></span>
          <span class="lf-stat">ANOMALIES <em>15 RESOLVED</em></span>
        </div>
      </div>` : '';

    const missionTimeline = isAstrobotic ? `
      <div class="mission-timeline-wrap">
        <div class="mt-header">Mission Timeline — NASA CLPS</div>
        <div class="mt-track" id="astrobotic-mt">
          <div class="mt-rail"></div>
          <div class="mt-progress" id="mt-progress"></div>
          ${ASTROBOTIC_MILESTONES.map((m, i) => `
            <div class="mt-milestone" data-idx="${i}">
              <div class="mt-dot"></div>
              <div class="mt-info">
                <div class="mt-name">${m.name}</div>
                <div class="mt-phase">${m.phase}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>` : '';

    return `
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
          ${logicFlow}
          ${missionTimeline}
        </div>
      </div>`;
  }).join('');
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
      p.paperLink ? `<a href="${p.paperLink}" target="_blank" class="project-link paper-link" onclick="event.stopPropagation()" aria-label="Read paper for ${p.name}">Read Paper →</a>` : '',
      p.liveLink  ? `<a href="${p.liveLink}"  target="_blank" class="project-link live-link"  onclick="event.stopPropagation()" aria-label="Live demo of ${p.name}">Live Demo →</a>`  : '',
    ].filter(Boolean).join('');
    const tags = p.tags.map(t => `<span class="tag tag-${t.color}">${t.label}</span>`).join('');

    const porkchopViz = p.name === 'Porkchop Plotter' ? `
      <div class="porkchop-viz" id="porkchop-viz" onclick="event.stopPropagation()">
        <div class="viz-header">
          <span class="viz-label">C3 Energy Landscape</span>
          <span class="viz-status-blink">HOVER TO INSPECT</span>
        </div>
        <div class="porkchop-grid" id="porkchop-grid"></div>
        <div class="porkchop-axes">
          <span class="axis-lbl">DEPARTURE DATE →</span>
          <span class="axis-lbl">↑ FLIGHT TIME</span>
        </div>
        <div class="pk-tooltip" id="pk-tooltip"></div>
      </div>` : '';

    if (p.featured) {
      return `
        <div class="project-card featured reveal" onclick="window.open('${p.link}','_blank')" role="link" tabindex="0" aria-label="${p.name} — ${p.sub}. Click to view on GitHub.">
          <div class="project-content">
            <div class="project-num">${p.num}</div>
            <div class="project-name">${p.name}</div>
            <div class="project-sub">${p.sub}</div>
            <div class="project-desc">${p.desc}</div>
            <div class="project-tags" aria-label="Technologies used">${tags}</div>
            <div class="project-buttons">
              <a href="${p.link}" target="_blank" class="project-link" onclick="event.stopPropagation()" aria-label="View ${p.name} on GitHub">View on GitHub →</a>
              ${extraLinks}
            </div>
          </div>
          ${visual}
        </div>`;
    }
    return `
      <div class="project-card reveal" onclick="window.open('${p.link}','_blank')" role="link" tabindex="0" aria-label="${p.name} — ${p.sub}. Click to view on GitHub.">
        <div class="project-num">${p.num}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-sub">${p.sub}</div>
        <div class="project-desc">${p.desc}</div>
        ${porkchopViz}
        <div class="project-tags" aria-label="Technologies used">${tags}</div>
        <div class="project-buttons">
          <a href="${p.link}" target="_blank" class="project-link" onclick="event.stopPropagation()" aria-label="View ${p.name} on GitHub">View on GitHub →</a>
          ${extraLinks}
        </div>
      </div>`;
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
