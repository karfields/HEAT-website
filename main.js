function $(id){return document.getElementById(id)}

function initNav(){
  const nav = $('nav-links');
  if(!nav) return;
  nav.innerHTML = NAV.map(([label,href]) => `<a href="${href}">${label}</a>`).join('') + `<a class="button nav-button" data-registration href="${SITE.registrationUrl}">Register TBD</a>`;
  const toggle = document.querySelector('.menu-toggle');
  toggle?.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

function applyLinks(){
  document.querySelectorAll('[data-registration]').forEach(a => a.href = SITE.registrationUrl || '#attend');
  document.querySelectorAll('[data-abstract]').forEach(a => a.href = SITE.abstractUrl || '#research');
  document.querySelectorAll('[data-instagram]').forEach(a => a.href = SITE.instagramUrl);
}

function renderExperiences(){
  const el = $('experience-grid'); if(!el) return;
  el.innerHTML = EXPERIENCES.map(x => `<article class="card experience-card"><span class="chip">${x.audience}</span><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
}

function renderAgenda(){
  const el = $('agenda-list'); if(!el) return;
  el.innerHTML = AGENDA.map(x => `<article class="timeline-item"><div class="time">${x.time}</div><div><h3>${x.title}</h3><p>${x.description}</p></div></article>`).join('');
}

function renderResearch(){
  const el = $('research-grid'); if(!el) return;
  el.innerHTML = RESEARCH.map(x => `<article class="card"><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
}

function renderSpeakers(){
  const el = $('speaker-grid'); if(!el) return;
  el.innerHTML = SPEAKERS.map(x => `<article class="card speaker-card"><span class="chip">Coming soon</span><h3>${x.name}</h3><p><b>${x.title}</b></p><p>${x.affiliation}</p><p>${x.topic}</p></article>`).join('');
}

function emailMarkup(email){
  if(!email || email === 'Email TBD') return '<span>Email TBD</span>';
  return `<a href="mailto:${email}">${email}</a>`;
}

function renderBoard(){
  const el = $('board-grid'); if(!el) return;
  el.innerHTML = BOARD.map(p => `<article class="board-card"><img src="${p.image}" alt="${p.name} headshot"><div class="board-body"><h3>${p.name}</h3><p class="role">${p.role}</p><p class="school">${p.school}</p><p class="bio">${p.biography}</p><p class="email"><b>Email:</b> ${emailMarkup(p.email)}</p></div></article>`).join('');
}

function renderGallery(){
  const el = $('gallery-grid'); if(!el) return;
  el.innerHTML = GALLERY.map(g => `<figure class="gallery-item"><img src="${g.image}" alt="${g.caption}"><figcaption>${g.caption}</figcaption></figure>`).join('');
}

function renderCountdown(){
  const el = $('countdown'); if(!el) return;
  const target = new Date(SITE.dateISO).getTime();
  function update(){
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = [['Days',d],['Hours',h],['Minutes',m],['Seconds',s]].map(([label,val]) => `<div><b>${String(val).padStart(2,'0')}</b><span>${label}</span></div>`).join('');
  }
  update(); setInterval(update, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  initNav(); applyLinks(); renderExperiences(); renderAgenda(); renderResearch(); renderSpeakers(); renderBoard(); renderGallery(); renderCountdown();
});
