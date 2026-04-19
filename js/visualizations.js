/* ── visualizations.js — interactive visualization logic ── */

/* ─── Porkchop Energy Landscape ─── */
function buildPorkchopGrid() {
  const grid = document.getElementById('porkchop-grid');
  const tooltip = document.getElementById('pk-tooltip');
  if (!grid || !tooltip) return;

  const COLS = 14;
  const ROWS = 8;

  // Generate porkchop-shaped energy values (two Gaussian wells = launch windows)
  function energy(col, row) {
    const x = (col / (COLS - 1) - 0.5) * 4;
    const y = (row / (ROWS - 1) - 0.5) * 4;
    const w1 = Math.exp(-(Math.pow(x + 1.0, 2) * 1.2 + Math.pow(y - 0.6, 2) * 0.9));
    const w2 = Math.exp(-(Math.pow(x - 0.9, 2) * 1.4 + Math.pow(y + 0.7, 2) * 1.1));
    return 1 - Math.max(w1, w2) * 0.88;
  }

  // Map energy 0→1 to color: green (low) → amber → red (high)
  function energyColor(e) {
    const clamped = Math.max(0, Math.min(1, e));
    if (clamped < 0.35) {
      // green → cyan
      const t = clamped / 0.35;
      const r = Math.round(0   + t * 0);
      const g = Math.round(200 - t * 50);
      const b = Math.round(80  + t * 120);
      return `rgba(${r},${g},${b},0.82)`;
    } else if (clamped < 0.65) {
      // cyan → amber
      const t = (clamped - 0.35) / 0.30;
      const r = Math.round(0   + t * 220);
      const g = Math.round(150 + t * 20);
      const b = Math.round(200 - t * 170);
      return `rgba(${r},${g},${b},0.82)`;
    } else {
      // amber → red
      const t = (clamped - 0.65) / 0.35;
      const r = Math.round(220 + t * 35);
      const g = Math.round(170 - t * 140);
      const b = Math.round(30  - t * 20);
      return `rgba(${r},${g},${b},0.82)`;
    }
  }

  // Departure dates (fake but plausible)
  const departures = [
    'Jan 2025','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec 2025',
    'Jan 2026','Feb 2026',
  ];

  // Build cells
  const cells = [];
  for (let r = ROWS - 1; r >= 0; r--) {
    for (let c = 0; c < COLS; c++) {
      const e = energy(c, r);
      const el = document.createElement('div');
      el.className = 'pk-cell';
      el.style.background = energyColor(e);
      el.style.borderRadius = '1px';

      const dv    = (3.2 + e * 18.5).toFixed(1);
      const tof   = Math.round(150 + (r / (ROWS - 1)) * 280);
      const dep   = departures[c] || `M${c + 1}`;
      const qual  = e < 0.25 ? 'OPTIMAL' : e < 0.5 ? 'VIABLE' : 'HIGH COST';

      el.addEventListener('mousemove', (ev) => {
        const rect = grid.getBoundingClientRect();
        const tx = ev.clientX - rect.left + 12;
        const ty = ev.clientY - rect.top  + 12;
        tooltip.style.left = `${Math.min(tx, rect.width - 180)}px`;
        tooltip.style.top  = `${Math.max(0, ty - 80)}px`;
        tooltip.innerHTML = `
          <div>ΔV: <span class="pk-dv">${dv} km/s</span></div>
          <div>TOF: ${tof} days</div>
          <div>DEP: ${dep}</div>
          <div class="pk-opt">${qual}</div>`;
        tooltip.classList.add('visible');
      });

      el.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
      });

      cells.push(el);
    }
  }

  grid.innerHTML = '';
  cells.forEach(c => grid.appendChild(c));

  grid.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
  });
}

/* ─── NASA Mission Timeline scroll animation ─── */
function initMissionTimeline() {
  const track = document.getElementById('astrobotic-mt');
  if (!track) return;

  const progress  = document.getElementById('mt-progress');
  const milestones = track.querySelectorAll('.mt-milestone');
  const totalItems = milestones.length;

  function update() {
    const rect   = track.getBoundingClientRect();
    const viewH  = window.innerHeight;
    // How far we've scrolled through the element (0 = top just entered, 1 = bottom just left)
    const ratio  = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH + rect.height)));
    const pct    = ratio * 100;

    if (progress) progress.style.height = pct + '%';

    milestones.forEach((m, i) => {
      const threshold = (i / (totalItems - 1)) * 100;
      m.classList.toggle('mt-reached', pct >= threshold);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ─── Init after DOM render ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Build porkchop after renderAll() completes (render.js calls renderAll synchronously)
  // renderAll() is called in main.js DOMContentLoaded, but render.js loads before visualizations.js,
  // so we use a microtask to wait for the grid to exist.
  setTimeout(() => {
    buildPorkchopGrid();
    initMissionTimeline();
  }, 0);
});
