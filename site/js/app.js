// ============================================================
// Tab Navigation
// ============================================================

function showTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.currentTarget.classList.add('active');

  if (name === 'map' && !window._mapInit) {
    initMap();
    window._mapInit = true;
  }
  if (name === 'market' && !window._cagrInit) {
    buildCAGRChart();
    window._cagrInit = true;
  }
}

// ============================================================
// Helpers
// ============================================================

function srcLink(sourceKey, label) {
  const s = SOURCES[sourceKey];
  if (!s) return '';
  return `<a href="${s.url}" target="_blank" rel="noopener" class="src-link" title="${s.label}">${label || '↗ source'}</a>`;
}

function extLink(url, label) {
  if (!url) return '';
  return `<a href="${url}" target="_blank" rel="noopener" class="src-link">${label || '↗ website'}</a>`;
}

function getDistanceClass(mi) {
  if (mi <= 2) return 'dist-close';
  if (mi <= 5) return 'dist-mid';
  return 'dist-far';
}

// ============================================================
// Competitor Cards (with source links)
// ============================================================

function buildCompetitorCards() {
  const grid = document.getElementById('competitor-cards');
  COMPETITORS.forEach(c => {
    const services = c.services.map(s => `<span class="service-chip">${s}</span>`).join('');
    const ratingHtml = c.rating
      ? `<span style="font-size:0.78rem; color:var(--warning); font-weight:700;">★ ${c.rating}</span>
         ${c.reviewUrl ? `<a href="${c.reviewUrl}" target="_blank" rel="noopener" class="src-link">(${c.reviews} ${c.reviewSource} reviews ↗)</a>` : ''}`
      : '';
    const websiteLink = c.url ? `<a href="${c.url}" target="_blank" rel="noopener" class="visit-link">Visit website ↗</a>` : '';
    const pricingLink = c.pricingUrl ? ` &nbsp;<a href="${c.pricingUrl}" target="_blank" rel="noopener" class="src-link">pricing page ↗</a>` : '';

    const driveHtml = c.driveTime ? `
      <div style="background:#f0f7f0; border:1px solid #c8e6c9; border-radius:6px; padding:7px 10px; margin-bottom:8px; font-size:0.75rem;">
        <span style="font-weight:700; color:var(--primary);">🚗 Drive from 4829 Peachtree</span>
        <div style="margin-top:4px; display:flex; flex-wrap:wrap; gap:6px;">
          <span style="background:white; border:1px solid #c8e6c9; border-radius:4px; padding:2px 6px;">🟢 Off-peak: <b>${c.driveTime.offPeak}</b></span>
          <span style="background:white; border:1px solid #c8e6c9; border-radius:4px; padding:2px 6px;">🟡 AM rush: <b>${c.driveTime.amRush}</b></span>
          <span style="background:white; border:1px solid #c8e6c9; border-radius:4px; padding:2px 6px;">🔴 PM rush: <b>${c.driveTime.pmRush}</b></span>
        </div>
        ${c.driveTime.note ? `<div style="color:var(--text-muted); margin-top:3px; font-style:italic;">${c.driveTime.note}</div>` : ''}
      </div>` : '';

    grid.innerHTML += `
      <div class="competitor-card" style="border-left-color: ${c.color};">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <h3>${c.name}</h3>
          ${websiteLink}
        </div>
        <div class="address">${c.address}</div>
        <span class="distance-badge ${getDistanceClass(c.distanceMi)}">~${c.distanceMi} mi away</span>
        ${ratingHtml ? `<div style="margin-bottom:8px;">${ratingHtml}</div>` : ''}
        ${driveHtml}
        <div class="pricing-row">
          <span class="price-tag">Daycare: ${c.pricing.daycare}</span>
          <span class="price-tag">Boarding: ${c.pricing.boarding}</span>
          ${pricingLink}
        </div>
        ${c.pricing.notes ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">${c.pricing.notes}</div>` : ''}
        <div class="services">${services}</div>
        ${c.hours ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:6px;">⏰ ${c.hours}</div>` : ''}
        <div class="note">${c.notes}</div>
      </div>
    `;
  });
}

// ============================================================
// Leaflet Map (with source links in popups)
// ============================================================

function initMap() {
  const map = L.map('map').setView([OUR_PROPERTY.lat, OUR_PROPERTY.lng], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  // 2-mile and 5-mile radius rings
  [2, 5].forEach((mi, i) => {
    L.circle([OUR_PROPERTY.lat, OUR_PROPERTY.lng], {
      radius: mi * 1609.34,
      color: i === 0 ? '#e74c3c' : '#2c5f2e',
      fillColor: i === 0 ? 'rgba(231,76,60,0.05)' : 'rgba(44,95,46,0.04)',
      fillOpacity: 1,
      weight: 1.5,
      dashArray: '5,4'
    }).addTo(map).bindTooltip(`${mi}-mile radius`, { permanent: false });
  });

  // Our property marker
  const ourIcon = L.divIcon({
    html: `<div style="
      background:#2c5f2e; color:white; border:3px solid white; border-radius:50%;
      width:38px; height:38px; display:flex; align-items:center; justify-content:center;
      font-size:20px; box-shadow:0 3px 12px rgba(0,0,0,0.45); font-weight:900;">★</div>`,
    className: '', iconSize: [38, 38], iconAnchor: [19, 19]
  });

  L.marker([OUR_PROPERTY.lat, OUR_PROPERTY.lng], { icon: ourIcon })
    .addTo(map)
    .bindPopup(`
      <div style="min-width:240px;">
        <strong style="font-size:0.95rem;">⭐ OUR PROPERTY</strong><br>
        <div style="font-size:0.8rem; color:#555; margin-top:2px;">${OUR_PROPERTY.subtitle}</div>
        <a href="${OUR_PROPERTY.listingUrl}" target="_blank" rel="noopener"
           style="font-size:0.75rem; color:#2c5f2e; font-weight:700;">View listing ↗</a>
        <hr style="margin:8px 0; border:none; border-top:1px solid #eee;">
        <div style="font-size:0.8rem; line-height:1.7;">
          <b>SF:</b> ${OUR_PROPERTY.details.sf}<br>
          <b>Lot:</b> ${OUR_PROPERTY.details.lot}<br>
          <b>Zoning:</b> ${OUR_PROPERTY.details.zoning}<br>
          <b>Traffic:</b> ${OUR_PROPERTY.details.traffic}
            <a href="${SOURCES.property.url}" target="_blank" style="color:#2c5f2e; font-size:0.7rem;">(GDOT via listing ↗)</a><br>
          <b>Built:</b> ${OUR_PROPERTY.details.built}<br>
          <b>Property taxes:</b> ${OUR_PROPERTY.details.taxes}
            <a href="${SOURCES.dekalb_tax.url}" target="_blank" style="color:#2c5f2e; font-size:0.7rem;">(DeKalb tax ↗)</a><br>
          <b style="color:#2c5f2e;">${OUR_PROPERTY.details.note}</b>
        </div>
      </div>
    `, { maxWidth: 300 }).openPopup();

  // Competitor markers
  COMPETITORS.forEach(c => {
    const icon = L.divIcon({
      html: `<div style="
        background:${c.color}; color:white; border:2.5px solid white; border-radius:50%;
        width:28px; height:28px; display:flex; align-items:center; justify-content:center;
        font-size:10px; font-weight:900; box-shadow:0 2px 8px rgba(0,0,0,0.35);">
        ${c.distanceMi}mi</div>`,
      className: '', iconSize: [28, 28], iconAnchor: [14, 14]
    });

    const ratingStr = c.rating
      ? `<b>Rating:</b> ★ ${c.rating} (${c.reviews} ${c.reviewSource}
           ${c.reviewUrl ? `<a href="${c.reviewUrl}" target="_blank" style="color:#2c5f2e;">↗</a>` : ''})<br>`
      : '';
    const websiteStr = c.url
      ? `<a href="${c.url}" target="_blank" rel="noopener"
           style="display:inline-block; margin-top:6px; font-size:0.75rem; color:#2c5f2e; font-weight:700;">
           Visit ${c.name} ↗</a>`
      : '';
    const pricingStr = c.pricingUrl
      ? `<a href="${c.pricingUrl}" target="_blank" rel="noopener"
           style="font-size:0.75rem; color:#9b59b6; font-weight:700; margin-left:8px;">
           Full pricing ↗</a>`
      : '';

    L.marker([c.lat, c.lng], { icon })
      .addTo(map)
      .bindPopup(`
        <div style="min-width:230px;">
          <strong style="font-size:0.92rem;">${c.name}</strong><br>
          <div style="font-size:0.78rem; color:#888;">${c.address}</div>
          <hr style="margin:8px 0; border:none; border-top:1px solid #eee;">
          <div style="font-size:0.8rem; line-height:1.7;">
            <b>Distance:</b> ~${c.distanceMi} mi<br>
            <b>Daycare:</b> ${c.pricing.daycare}<br>
            <b>Boarding:</b> ${c.pricing.boarding}<br>
            ${ratingStr}
            <b>Services:</b> ${c.services.join(', ')}<br>
            ${c.hours ? `<b>Hours:</b> ${c.hours}<br>` : ''}
          </div>
          <div style="font-size:0.75rem; color:#666; margin-top:6px; font-style:italic;">${c.notes}</div>
          <div style="margin-top:6px;">${websiteStr}${pricingStr}</div>
        </div>
      `, { maxWidth: 300 });
  });
}

// ============================================================
// CAGR Bar Chart
// ============================================================

function buildCAGRChart() {
  const container = document.getElementById('cagr-chart');
  if (!container) return;

  const years = [
    { year: '2024', val: 1.85 },
    { year: '2025', val: +(1.85 * Math.pow(1.086, 1)).toFixed(2) },
    { year: '2026', val: +(1.85 * Math.pow(1.086, 2)).toFixed(2) },
    { year: '2027', val: +(1.85 * Math.pow(1.086, 3)).toFixed(2) },
    { year: '2028', val: +(1.85 * Math.pow(1.086, 4)).toFixed(2) },
    { year: '2030', val: +(1.85 * Math.pow(1.086, 6)).toFixed(2) },
    { year: '2034', val: 4.30 },
  ];

  const maxVal = 4.30;
  container.innerHTML = years.map(y => `
    <div class="cagr-bar-row">
      <span class="cagr-bar-label">${y.year}</span>
      <div class="cagr-bar-track">
        <div class="cagr-bar-fill" style="width:${(y.val / maxVal * 100).toFixed(1)}%">
          $${y.val}B
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// Sources Panel — renders a tab's source list
// ============================================================

function buildSourcesPanel(sourceKeys, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = sourceKeys.map(k => {
    const s = SOURCES[k];
    if (!s) return '';
    return `<li><a href="${s.url}" target="_blank" rel="noopener" class="src-link">${s.label} ↗</a>
            ${s.notes ? `<span style="color:var(--text-muted); font-size:0.75rem;"> — ${s.notes}</span>` : ''}</li>`;
  }).join('');
  el.innerHTML = `<ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; font-size:0.82rem;">${items}</ul>`;
}

// ============================================================
// Init
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildCompetitorCards();
  buildCAGRChart();

  // Build sources panels for each tab
  buildSourcesPanel(['property', 'dekalb_tax', 'dekalb_tax_calc', 'chamblee_tax', 'chamblee_zoning'], 'sources-property');
  buildSourcesPanel(['market_gminsights', 'market_grandview', 'appa_stats', 'chamblee_demographics', 'chamblee_zip', 'chamblee_datausa', 'rover_pricing', 'pet_industry_ga'], 'sources-market');
  buildSourcesPanel(['dogtopia_pricing', 'bark_board_rates', 'bhv_main', 'dogphoria_yelp', 'rover_pricing', 'camp_run_mutt', 'atlanta_pet_resort', 'puppy_haven_brookhaven'], 'sources-competitors');
  buildSourcesPanel(['startup_costs', 'property', 'dekalb_tax'], 'sources-financials');
  buildSourcesPanel(['staff_ratios', 'startup_costs'], 'sources-operations');
  buildSourcesPanel(['gda_kennel_license', 'gda_kennel_info', 'ga_statute', 'chamblee_zoning', 'chamblee_planning', 'dekalb_animal'], 'sources-regulations');
  buildSourcesPanel(['property', 'market_gminsights', 'appa_stats', 'chamblee_demographics', 'rover_pricing', 'dogtopia_pricing', 'bhv_main', 'dogphoria_yelp'], 'sources-overview');
});
