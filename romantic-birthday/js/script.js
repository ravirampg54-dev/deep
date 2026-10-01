'use strict';
/* =====================================================================
   OUR LITTLE UNIVERSE — edit everything from this CONFIG object
   ===================================================================== */
const CONFIG = {
  loverName: "My Love",                       // used wherever {name} appears in the letter
  birthdayMessage: "HAPPY BIRTHDAY ❤️",       // big reveal heading
  subtitle: "A little piece of my heart, made just for you.",

  letter: `
    {name},

    I don't know if words will ever be enough
    to explain what you mean to me.

    But if I had to try...

    I would say that you make ordinary days
    feel like memories worth keeping.

    You are one of the most beautiful chapters
    in my story.

    And today isn't just about celebrating
    the day you were born.

    It's about celebrating the person
    you became...
    and the person I am lucky enough
    to know and love.

    Happy Birthday, my love.

    Today, tomorrow,
    and all the little moments between...

    I choose you. ❤️
  `,

  // 8–15 photos: put files in /images. Missing files show a soft placeholder.
  photos: [
    { src: "images/photo1.jpg",  title: "The beginning ❤️", caption: "Where our little story started." },
    { src: "images/photo2.jpg",  title: "That smile...",    caption: "One of my favorite views." },
    { src: "images/photo3.jpg",  title: "Our moment",       caption: "A memory I would choose again." },
    { src: "images/photo4.jpg",  title: "Just us",          caption: "Simple days, my favorite days." },
    { src: "images/photo5.jpg",  title: "Laughing",         caption: "The sound I could listen to forever." },
    { src: "images/photo6.jpg",  title: "Golden hour",      caption: "Everything glows when you're there." },
    { src: "images/photo7.jpg",  title: "Little adventures",caption: "Anywhere is better with you." },
    { src: "images/photo8.jpg",  title: "Comfort",          caption: "You feel like home." },
    { src: "images/photo9.jpg",  title: "Sweet chaos",      caption: "I love our silly moments." },
    { src: "images/photo10.jpg", title: "You, being you",   caption: "Never change." },
    { src: "images/photo11.jpg", title: "Quiet moments",    caption: "Louder than any words." },
    { src: "images/photo12.jpg", title: "Still choosing you", caption: "Today and every day." },
    { src: "images/photo13.jpg", title: "Us again",         caption: "I'd relive this one forever." },
    { src: "images/photo14.jpg", title: "My favorite",      caption: "My favorite person, my favorite place." },
    { src: "images/photo15.jpg", title: "Forever kind of love", caption: "And we're just getting started." }
  ],

  music: "music/one.mpeg",

  timeline: [
    { when: "Chapter one",   title: "THE BEGINNING",  text: "The day everything started.",         photo: 0 },
    { when: "Chapter two",   title: "FIRST MEMORY",   text: "One moment I'll never forget.",       photo: 1 },
    { when: "Chapter three", title: "MORE MEMORIES",  text: "And somehow, there were more.",       photo: 2 },
    { when: "Chapter four",  title: "THE MIDDLE OF US", text: "Ordinary days that became my favorites.", photo: 3 },
    { when: "Today",         title: "TODAY",          text: "Still choosing you.",                 photo: null }
  ],

  why: [
    ["❤️","Your smile","The way you make ordinary moments special."],
    ["🌸","Your kindness","The way you care."],
    ["✨","Your laugh","The sound I could listen to forever."],
    ["🌙","Your presence","Because everything feels better when you're around."],
    ["💫","Your eyes","I get lost in them. Every time."],
    ["🤍","Your heart","It's the softest, strongest place I know."],
    ["🎶","Your voice","My favorite sound after a long day."],
    ["🌷","Your little habits","The tiny things I notice and adore."],
    ["🔥","Your strength","You inspire me more than you know."],
    ["🏡","Your hugs","The closest thing to home."]
  ],

  quiz: [
    { q: "What is my favorite thing about you?", opts: ["Your smile","Your eyes","Your personality","Everything"], answer: 3, win: "Everything. ❤️" },
    { q: "What happens when I see you?", opts: ["I smile","I get nervous","My heart skips","All of the above"], answer: 3, win: "All of the above ❤️" },
    { q: "If I could choose one place to be right now...", opts: ["The beach","The mountains","Paris","Anywhere with you"], answer: 3, win: "Anywhere with you. ❤️" },
    { q: "What is the first thing on my mind in the morning?", opts: ["Breakfast","My plans","Whether you've texted","You. Always you."], answer: 3, win: "You. Always you. 💕" },
    { q: "What do I want most for your next birthday?", opts: ["A huge party","Fancy gifts","Another year beside you","A surprise trip"], answer: 2, win: "Another year beside you. ❤️" }
  ],

  // shown one by one as the stars are connected (12 stars)
  starReasons: [
    "You make me laugh when I'm tired.", "You listen like it matters.", "Your smile resets my whole day.",
    "You are gentle with the world.", "You make plain Tuesdays feel special.", "You believe in me.",
    "You feel like home.", "You are brave in quiet ways.", "You remember the little things.",
    "You make me want to be better.", "With you, silence is comfortable.", "You are simply you."
  ],

  hiddenWords: ["my favorite", "home", "always you", "my person", "softly yours", "forever", "my heart", "I choose you"],

  ifCould: [
    ["If I could stop time...", "I would stop it during our happiest moments."],
    ["If I could keep one memory forever...", "I'd keep the ones with you."],
    ["If I could make one wish...", "I'd wish for many more birthdays beside you."],
    ["If I could choose again...", "I'd still choose you. ❤️"]
  ]
};

/* =====================================================================
   Utilities
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const pad = n => String(n).padStart(2, '0');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
const photos = CONFIG.photos;
const HEARTS = ['❤️', '💕', '💗', '💖', '💘'];
const COLORS = ['#ff4d7d', '#ff9eb5', '#ffd6df', '#f4c95d', '#fff7f3', '#b784c9'];

function h(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
const center = el => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
const show = (id, d = 0) => setTimeout(() => $('#' + id).classList.add('show'), d);
async function seq(ids, gap = 1600) { for (const id of ids) { show(id); await sleep(gap); } }

/* Images: a missing photo becomes a soft placeholder instead of a broken icon */
function placeholder() {
  const d = h('div', 'ph');
  d.append(h('b', '', '❤️'), h('span', '', 'Memory waiting to be added...'));
  return d;
}
function makeImg(p, eager) {
  const i = new Image();
  i.alt = p.alt || `${p.title} — ${p.caption}`;
  i.loading = eager ? 'eager' : 'lazy';
  i.decoding = 'async';
  i.draggable = false;
  i.addEventListener('error', () => i.replaceWith(placeholder()), { once: true });
  i.src = p.src;
  return i;
}

/* Double-tap / double-click heart (like social media) */
function doubleTapHeart(el) {
  let last = 0;
  const pop = () => { const d = h('div', 'dheart', '❤️'); el.append(d); setTimeout(() => d.remove(), 950); };
  el.addEventListener('dblclick', pop);
  el.addEventListener('pointerup', e => {
    if (e.pointerType !== 'touch') return;
    const now = Date.now();
    if (now - last < 320) pop();
    last = now;
  });
}

/* =====================================================================
   Background: star field, floating hearts, parallax
   ===================================================================== */
function initStars() {
  const c = $('#starfield'), x = c.getContext('2d');
  let w, hh, st = [];
  const resize = () => {
    w = c.width = innerWidth; hh = c.height = innerHeight;
    const n = Math.min(coarse ? 70 : 140, Math.floor(w * hh / 9000));
    st = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * hh, r: rnd(.3, 1.6), p: rnd(0, 6.28), s: rnd(.005, .025) }));
  };
  resize(); addEventListener('resize', resize);
  (function draw() {
    x.clearRect(0, 0, w, hh);
    x.fillStyle = '#fff';
    for (const s of st) {
      s.p += s.s;
      x.globalAlpha = .3 + .7 * Math.abs(Math.sin(s.p));
      x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill();
    }
    if (!reduced) requestAnimationFrame(draw);
  })();
}

function initFloatingHearts() {
  const box = $('#hearts'), max = coarse ? 9 : 18;
  const spawn = () => {
    if (document.hidden || box.childElementCount >= max) return;
    const el = h('span', 'fh', pick([...HEARTS, '✨']));
    const dur = rnd(10, 19);
    el.style.cssText = `left:${rnd(0, 100)}vw;font-size:${rnd(12, 32)}px;opacity:${rnd(.25, .75)};--dx:${rnd(-80, 80)}px;--rot:${rnd(-40, 40)}deg;animation-duration:${dur}s`;
    box.append(el);
    setTimeout(() => el.remove(), dur * 1000);
  };
  setInterval(spawn, reduced ? 3000 : 1000);
}

function initParallax() {
  if (coarse || reduced) return;
  const layers = [[$('#starfield'), 10], [$('.moon'), 22], [$('.o1'), 30], [$('.o2'), -26]];
  let mx = 0, my = 0, ticking = false;
  addEventListener('pointermove', e => {
    mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5;
    if (!ticking) { ticking = true; requestAnimationFrame(() => { layers.forEach(([el, k]) => el.style.translate = `${mx * k}px ${my * k}px`); ticking = false; }); }
  }, { passive: true });
}

/* =====================================================================
   FX engine: confetti, hearts, petals, fireworks (single canvas, capped)
   ===================================================================== */
const FX = (() => {
  const c = $('#fx'), x = c.getContext('2d');
  let w, hh, P = [], running = false;
  const MAX = coarse ? 240 : 420;
  const N = n => reduced ? Math.ceil(n * .25) : n;
  const resize = () => { const d = Math.min(devicePixelRatio || 1, 2); w = innerWidth; hh = innerHeight; c.width = w * d; c.height = hh * d; x.setTransform(d, 0, 0, d, 0, 0); };
  resize(); addEventListener('resize', resize);

  const add = o => {
    if (P.length >= MAX) return;
    P.push(Object.assign({ t: 'd', x: 0, y: 0, vx: 0, vy: 0, g: 0, drag: 1, rot: 0, vr: 0, life: 100, size: 6, col: '#fff', a: 1 }, o));
    if (!running) { running = true; requestAnimationFrame(loop); }
  };
  function loop() {
    x.clearRect(0, 0, w, hh);
    for (let i = P.length - 1; i >= 0; i--) {
      const p = P[i];
      p.life--; p.vy += p.g; p.vx *= p.drag; p.vy *= p.drag; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if (p.life <= 0 || p.y > hh + 50) { P.splice(i, 1); continue; }
      x.save();
      x.globalAlpha = Math.min(1, p.life / 30) * p.a;
      x.translate(p.x, p.y); x.rotate(p.rot);
      if (p.t === 'e') { x.font = p.size + 'px serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(p.ch, 0, 0); }
      else if (p.t === 'r') { x.fillStyle = p.col; x.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2); }
      else if (p.t === 'p') { x.fillStyle = p.col; x.beginPath(); x.ellipse(0, 0, p.size, p.size / 1.8, 0, 0, 6.283); x.fill(); }
      else { x.fillStyle = p.col; x.shadowColor = p.col; x.shadowBlur = 8; x.beginPath(); x.arc(0, 0, p.size, 0, 6.283); x.fill(); }
      x.restore();
    }
    if (P.length) requestAnimationFrame(loop); else { running = false; x.clearRect(0, 0, w, hh); }
  }
  return {
    burst(px, py, n = 40, big = false) {
      for (let i = 0; i < N(n); i++) {
        const a = rnd(0, 6.283), s = rnd(2, big ? 11 : 6);
        const emoji = Math.random() < .55;
        add({ t: emoji ? 'e' : 'd', ch: pick(HEARTS), col: pick(COLORS), x: px, y: py, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, g: .09, drag: .985, size: emoji ? rnd(14, big ? 34 : 24) : rnd(1.5, 3.5), life: rnd(60, 120), rot: rnd(0, 6), vr: rnd(-.1, .1) });
      }
    },
    confetti(n = 120) {
      for (let i = 0; i < N(n); i++) add({ t: 'r', x: rnd(0, w), y: rnd(-60, -10), vx: rnd(-2, 2), vy: rnd(2, 5), g: .04, size: rnd(7, 13), col: pick(COLORS), rot: rnd(0, 6), vr: rnd(-.2, .2), life: rnd(140, 240) });
    },
    petals(n = 60) {
      for (let i = 0; i < N(n); i++) add({ t: 'p', x: rnd(0, w), y: rnd(-120, -10), vx: rnd(-1, 1.4), vy: rnd(1, 2.4), g: .005, size: rnd(5, 9), col: pick(['#ff4d7d', '#ff9eb5', '#c2306a', '#ffd6df']), rot: rnd(0, 6), vr: rnd(-.06, .06), life: rnd(240, 400) });
    },
    firework(px = rnd(w * .15, w * .85), py = rnd(hh * .12, hh * .5)) {
      const col = pick(COLORS);
      for (let i = 0; i < N(46); i++) { const a = (i / 46) * 6.283, s = rnd(2.5, 5.5); add({ t: 'd', x: px, y: py, vx: Math.cos(a) * s, vy: Math.sin(a) * s, g: .05, drag: .975, size: rnd(1.5, 3), col, life: rnd(55, 85) }); }
    },
    rain(n = 30) {
      for (let i = 0; i < N(n); i++) add({ t: 'e', ch: pick(HEARTS), x: rnd(0, w), y: rnd(-100, -10), vy: rnd(2, 4), g: .02, size: rnd(16, 32), life: rnd(160, 260), vr: rnd(-.03, .03) });
    }
  };
})();

function flash() { const f = $('#flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
function megaBurst(x = innerWidth / 2, y = innerHeight / 2) { flash(); FX.burst(x, y, 90, true); FX.rain(24); }

/* =====================================================================
   Cursor + click hearts + gallery heart trail
   ===================================================================== */
function initCursor() {
  addEventListener('pointerdown', e => FX.burst(e.clientX, e.clientY, 5));   // tiny hearts on every tap/click
  if (coarse || !matchMedia('(hover: hover)').matches) return;
  const c = $('#cursor');
  document.body.classList.add('has-cursor');
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
  const tick = () => {
    cx += (tx - cx) * .3; cy += (ty - cy) * .3;
    c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    raf = (Math.abs(tx - cx) + Math.abs(ty - cy) > .3) ? requestAnimationFrame(tick) : 0;
  };
  addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    tx = e.clientX; ty = e.clientY; c.classList.add('on');
    if (!raf) raf = requestAnimationFrame(tick);
    c.classList.toggle('big', !!e.target.closest('button,a,input,.cs,.pol,.card'));
  }, { passive: true });
  document.addEventListener('mouseleave', () => c.classList.remove('on'));
}

function initTrail() {
  if (coarse || reduced) return;
  let last = 0;
  $('#memories').addEventListener('pointermove', e => {
    const now = performance.now();
    if (now - last < 90 || e.pointerType === 'touch') return;
    last = now;
    const t = h('span', 'trail', pick(HEARTS));
    t.style.left = e.clientX + 'px'; t.style.top = e.clientY + 'px';
    document.body.append(t);
    setTimeout(() => t.remove(), 900);
  }, { passive: true });
}

/* =====================================================================
   INTRO JOURNEY
   ===================================================================== */
function go(id) {
  $$('.scene').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
}

async function runIntro() {
  // 1) cinematic loading (kept short on purpose)
  let p = 0;
  const bar = $('#loadBar'), pct = $('#loadPct');
  await new Promise(res => {
    const t = setInterval(() => {
      p = Math.min(100, p + rnd(7, 18));
      bar.style.width = p + '%'; pct.textContent = Math.floor(p) + '%';
      if (p >= 100) { clearInterval(t); res(); }
    }, 150);
  });
  show('loadReady');
  await sleep(1300);
  go('s-ask');
  await seq(['ask1', 'ask2', 'ask3', 'askBtns'], 1200);
  $('#yesBtn').focus({ preventScroll: true });
}

function initIntro() {
  const no = $('#noBtn'), msg = $('#noMsg');
  const lines = ['Hmm... I think you clicked the wrong button. 😌❤️', 'Still the wrong one 🙈', 'The YES button is feeling lonely 🥺', 'You know you want to say yes 😌', 'Okay okay... you win 🥹'];
  let tries = 0;
  const dodge = () => {
    if (no.dataset.yes) return;
    tries++;
    msg.textContent = lines[Math.min(tries - 1, lines.length - 1)];
    if (tries >= 5) { no.textContent = 'OK... YES ❤️'; no.classList.add('primary'); no.style.transform = ''; no.dataset.yes = '1'; return; }
    no.style.transform = `translate(${rnd(-90, 90)}px,${rnd(-60, 60)}px) rotate(${rnd(-12, 12)}deg)`;
  };
  no.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') dodge(); });
  no.addEventListener('click', () => { if (no.dataset.yes) yes(); else dodge(); });
  $('#yesBtn').addEventListener('click', yes);

  function yes() { megaBurst(); Music.nudge(); go('s-know'); }

  // love question
  $$('#knowBtns [data-k]').forEach(b => b.addEventListener('click', async () => {
    const c = center(b); megaBurst(c.x, c.y);
    $('#knowBtns').style.display = 'none';
    $('#knowQ').textContent = 'Hmm... let me check that answer.';
    await sleep(1100);
    $('#knowQ').style.display = 'none';
    await seq(['k1', 'k2', 'knowNext'], 2300);
    $('#knowNext').focus({ preventScroll: true });
  }, { once: true }));
  $('#knowNext').addEventListener('click', () => { go('s-ily'); });

  // I LOVE YOU
  const words = $$('#words [data-w]');
  let idx = 0;
  words.forEach((w, i) => w.addEventListener('click', async () => {
    if (i !== idx) { w.classList.remove('shake'); void w.offsetWidth; w.classList.add('shake'); return; }
    w.classList.add('done'); idx++;
    const c = center(w); FX.burst(c.x, c.y, 24);
    if (idx === words.length) {
      await sleep(500);
      megaBurst();
      $('#words').style.display = 'none';
      await seq(['i1', 'i2', 'ilyNext'], 2000);
    }
  }));
  $('#ilyNext').addEventListener('click', async () => {
    go('s-cine');
    await seq(['c1', 'c2', 'c3', 'c4', 'enterBtn'], 2300);
    $('#enterBtn').focus({ preventScroll: true });
  });
  $('#enterBtn').addEventListener('click', enterUniverse);
}

function enterUniverse() {
  megaBurst();
  $('#intro').classList.add('gone');
  document.body.classList.remove('locked');
  $('#main').hidden = false;
  $('#menuBtn').hidden = false;
  window.scrollTo(0, 0);
  setTimeout(() => { $('#intro').hidden = true; }, 1500);
  FX.petals(40);
  Music.nudge();
}

/* =====================================================================
   Navigation, scroll reveal, progress, timeline fill
   ===================================================================== */
function initNav() {
  const btn = $('#menuBtn'), menu = $('#menu');
  const toggle = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', open); btn.textContent = open ? '✕' : '☰'; };
  btn.addEventListener('click', () => toggle(menu.hidden));
  $$('a', menu).forEach(a => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { toggle(false); btn.focus(); } });
}

function initReveal() {
  ['.gal', '.polas', '.slideshow', '.why', '.quiz', '.const', '.dark', '.sky', '.pulsebtn', '.ifbox'].forEach(s => { const e = $(s); if (e) e.classList.add('rv'); });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { threshold: 0, rootMargin: '0px 0px -10% 0px' });
  $$('.rv, .ti').forEach(el => io.observe(el));

  const tl = $('#timeline'), bar = $('#progress');
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
    const r = tl.getBoundingClientRect();
    tl.style.setProperty('--p', Math.max(0, Math.min(1, (innerHeight * .65 - r.top) / r.height)).toFixed(3));
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* =====================================================================
   Content builders
   ===================================================================== */
function buildHero() {
  const hero = $('#heroHeart'), msg = $('#secretMsg');
  $('#subtitle').textContent = CONFIG.subtitle;
  let n = 0;
  hero.addEventListener('click', () => {
    n++;
    if (n === 5) {
      msg.hidden = false; msg.classList.add('in');
      const c = center(hero); megaBurst(c.x, c.y); FX.petals(50);
    }
  });
}

function buildTimeline() {
  const tl = $('#timeline');
  CONFIG.timeline.forEach(t => {
    const li = h('div', 'ti');
    li.append(h('span', 'when', t.when), h('h3', '', t.title), h('p', '', `"${t.text}"`));
    if (t.photo != null && photos[t.photo]) { const w = h('div', 'tp'); w.append(makeImg(photos[t.photo])); li.append(w); }
    tl.append(li);
  });
}

function buildGallery() {
  const g = $('#gallery');
  photos.forEach((p, i) => {
    const card = h('button', 'card');
    card.type = 'button';
    card.setAttribute('aria-label', `Open memory ${i + 1}: ${p.title}`);
    const cap = h('div', 'cap'); cap.append(h('b', '', p.title), h('span', '', p.caption));
    card.append(makeImg(p), cap);
    card.addEventListener('click', () => openModal(i));
    if (!coarse && !reduced) {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 14}deg) scale(1.03)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    }
    g.append(card);
  });

  // polaroids
  const pw = $('#polas');
  photos.slice(0, 12).forEach((p, i) => {
    const d = h('div', 'pol'); d.tabIndex = 0; d.setAttribute('role', 'button'); d.setAttribute('aria-label', `Open ${p.title}`);
    d.style.setProperty('--r', rnd(-9, 9).toFixed(1) + 'deg');
    const pi = h('div', 'pi'); pi.append(makeImg(p));
    d.append(pi, h('div', 'pt', p.title));
    d.addEventListener('click', () => openModal(i));
    d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(i); } });
    pw.append(d);
  });
}

/* ---------- fullscreen modal ---------- */
const modal = $('#modal');
let mi = 0, lastFocus = null;
function openModal(i) {
  mi = i; lastFocus = document.activeElement;
  modal.hidden = false; document.body.classList.add('locked');
  renderModal();
  $('.mclose', modal).focus();
}
function closeModal() {
  modal.hidden = true; document.body.classList.remove('locked');
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
function stepModal(d) { mi = (mi + d + photos.length) % photos.length; renderModal(); }
function renderModal() {
  const p = photos[mi];
  modal.replaceChildren();
  const box = h('div', 'mimg'); box.append(makeImg(p, true));
  const nav = h('div', 'mnav');
  const prev = h('button', 'btn mprev', '← Previous'), next = h('button', 'btn mnext', 'Next →'), close = h('button', 'btn mclose', 'Close ×');
  [prev, next, close].forEach(b => b.type = 'button');
  close.setAttribute('aria-label', 'Close memory viewer');
  prev.onclick = () => stepModal(-1); next.onclick = () => stepModal(1); close.onclick = closeModal;
  nav.append(prev, next, close);
  modal.append(h('div', 'mt', `MEMORY #${pad(mi + 1)}`), box, h('h3', 'script', p.title), h('p', 'mc', `"${p.caption}"`), h('div', '', '❤️'), nav);
  doubleTapHeart(box);
  // swipe
  let sx = null;
  box.addEventListener('pointerdown', e => { sx = e.clientX; });
  box.addEventListener('pointerup', e => { if (sx != null && Math.abs(e.clientX - sx) > 50) stepModal(e.clientX < sx ? 1 : -1); sx = null; });
}
function initModalKeys() {
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft') stepModal(-1);
    else if (e.key === 'ArrowRight') stepModal(1);
    else if (e.key === 'Tab') {                       // keep focus inside the modal
      const f = $$('button', modal), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
}

/* ---------- cinematic slideshow ---------- */
function buildSlideshow() {
  let i = 0, timer = null, visible = false;
  const fg = $('#sfg'), bg = $('#sbg'), cnt = $('#scount');
  const render = () => {
    const p = photos[i];
    fg.replaceChildren(makeImg(p, true));
    bg.style.backgroundImage = `url("${p.src}")`;
    cnt.textContent = `${pad(i + 1)} / ${pad(photos.length)}`;
  };
  const step = d => { i = (i + d + photos.length) % photos.length; render(); restart(); };
  const restart = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => { if (visible && !document.hidden) { i = (i + 1) % photos.length; render(); } }, 5200); };
  $('#sPrev').onclick = () => step(-1); $('#sNext').onclick = () => step(1);
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe($('#show'));
  doubleTapHeart(fg);
  render(); restart();
}

function buildWhy() {
  const box = $('#why');
  CONFIG.why.forEach(([icon, title, text]) => {
    const f = h('button', 'flip'); f.type = 'button'; f.setAttribute('aria-pressed', 'false'); f.setAttribute('aria-label', `${title}. Tap to reveal.`);
    const inner = h('div'), front = h('div', 'f'), back = h('div', 'b');
    front.append(h('span', '', icon), h('b', '', title)); back.append(h('b', '', title), h('p', '', text));
    inner.append(front, back); f.append(inner);
    f.addEventListener('click', () => {
      const open = f.classList.toggle('open'); f.setAttribute('aria-pressed', open);
      if (open) { const c = center(f); FX.burst(c.x, c.y, 14); }
    });
    box.append(f);
  });
}

/* ---------- love quiz ---------- */
function buildQuiz() {
  const box = $('#quizBox'), Q = CONFIG.quiz;
  let qi = 0;
  const render = () => {
    box.replaceChildren();
    if (qi >= Q.length) {
      const done = h('div'); 
      done.append(h('p', 'small', 'QUIZ COMPLETE'), h('h3', 'title', 'Congratulations...'), h('p', 'sub', 'You just unlocked something. A little piece of my heart. ❤️'));
      done.style.cssText = 'display:flex;flex-direction:column;gap:12px;align-items:center';
      box.append(done); megaBurst(); return;
    }
    const q = Q[qi], msg = h('p', 'qmsg'), opts = h('div', 'qopts');
    msg.setAttribute('aria-live', 'polite');
    q.opts.forEach((o, k) => {
      const b = h('button', 'btn', o); b.type = 'button';
      b.addEventListener('click', async () => {
        if (k === q.answer) {
          $$('button', opts).forEach(x => x.disabled = true);
          b.classList.add('good'); msg.textContent = q.win;
          const c = center(b); FX.burst(c.x, c.y, 30);
          await sleep(1500); qi++; render();
        } else { b.classList.remove('bad'); void b.offsetWidth; b.classList.add('bad'); msg.textContent = 'Close... but try again 😌'; }
      });
      opts.append(b);
    });
    box.append(h('p', 'small', `QUESTION ${qi + 1} / ${Q.length}`), h('h3', '', q.q), opts, msg);
    box.firstChild.style.marginBottom = '10px';
  };
  render();
}

/* ---------- NEW: constellation — connect the stars into a heart ---------- */
function buildConstellation() {
  const svg = $('#csvg'); if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg', R = CONFIG.starReasons, n = R.length;
  const mk = (t, a) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); return e; };
  const pts = Array.from({ length: n }, (_, i) => {
    const t = Math.PI + i * 2 * Math.PI / n;
    const x = 16 * Math.sin(t) ** 3, y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return [200 + x * 11, 185 - (y + 2.6) * 11];
  });
  const fill = mk('polygon', { id: 'cfill', points: pts.map(p => p.join(',')).join(' ') });
  const line = mk('polyline', { id: 'cline', points: '' });
  svg.append(fill, line);
  const stars = pts.map((p, i) => {
    const g = mk('g', { class: 'cs' + (i === 0 ? ' next' : ''), tabindex: 0, role: 'button', 'aria-label': `Star ${i + 1}` });
    g.append(mk('circle', { cx: p[0], cy: p[1], r: 22, fill: 'transparent' }), mk('circle', { class: 'c', cx: p[0], cy: p[1], r: 7 }));
    svg.append(g); return g;
  });
  let idx = 0;
  const reason = $('#creason');
  const hit = i => {
    if (i !== idx) { return; }
    stars[i].classList.remove('next'); stars[i].classList.add('done');
    const done = pts.slice(0, i + 1); if (i === n - 1) done.push(pts[0]);
    line.setAttribute('points', done.map(p => p.join(',')).join(' '));
    reason.textContent = R[i];
    const c = center($('circle.c', stars[i])); FX.burst(c.x, c.y, 12);
    idx++;
    if (idx < n) stars[idx].classList.add('next');
    else { fill.classList.add('on'); setTimeout(() => { reason.textContent = 'You connected every star. Every one of them is a reason I love you. ❤️'; megaBurst(); }, 900); }
  };
  stars.forEach((g, i) => {
    g.addEventListener('click', () => hit(i));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hit(i); } });
  });
}

/* ---------- NEW: flashlight — find hidden words in the dark ---------- */
function buildFlashlight() {
  const panel = $('#dark'), hl = $('#hl'), W = CONFIG.hiddenWords, found = $('#found');
  if (!panel || !hl || !found) return;
  const spans = W.map((t, i) => {
    const s = h('span', '', t);
    s.style.left = (i % 2 ? 70 : 30) + '%'; s.style.top = (10 + i * (80 / Math.max(1, W.length - 1))) + '%';
    hl.append(s); return s;
  });
  let n = 0;
  found.textContent = `0 / ${W.length} found`;
  hl.style.setProperty('--x', '-300px'); hl.style.setProperty('--y', '-300px');
  const move = e => {
    const r = panel.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    hl.style.setProperty('--x', x + 'px'); hl.style.setProperty('--y', y + 'px');
    spans.forEach(s => {
      if (s.dataset.f) return;
      const c = center(s);
      if (Math.hypot(c.x - e.clientX, c.y - e.clientY) < 55) {
        s.dataset.f = 1; n++;
        found.textContent = n === W.length ? 'You found every hidden word. Every one of them is true. ❤️' : `${n} / ${W.length} found`;
        if (n === W.length) { const p = center(panel); megaBurst(p.x, p.y); }
      }
    });
  };
  panel.addEventListener('pointermove', move);
  panel.addEventListener('pointerdown', move);
}

/* ---------- NEW: heartbeat sync ---------- */
function buildPulse() {
  const btn = $('#pulseBtn'), out = $('#bpm'), times = [];
  if (!btn || !out) return;
  btn.addEventListener('click', () => {
    times.push(performance.now()); if (times.length > 6) times.shift();
    btn.classList.remove('tap'); void btn.offsetWidth; btn.classList.add('tap');
    if (navigator.vibrate) navigator.vibrate(25);
    if (times.length >= 2) {
      const gaps = times.slice(1).map((t, i) => t - times[i]);
      const bpm = Math.max(40, Math.min(200, Math.round(60000 / (gaps.reduce((a, b) => a + b) / gaps.length))));
      out.textContent = times.length >= 5 ? `Yours: ${bpm} bpm — and mine just matched it. We're in sync. 💓` : `Yours: ${bpm} bpm... keep going 💓`;
      if (times.length === 5) { const c = center(btn); megaBurst(c.x, c.y); }
    } else out.textContent = 'Keep tapping...';
  });
}

/* ---------- secret heart ---------- */
function buildSecretHeart() {
  const hb = $('#secretHeart'), txt = $('#secretText');
  hb.addEventListener('click', async () => {
    if (hb.dataset.used) return; hb.dataset.used = 1;
    hb.classList.add('grow');
    await sleep(750);
    const c = center(hb); megaBurst(c.x, c.y); FX.burst(c.x, c.y, 120, true); FX.petals(50);
    hb.style.visibility = 'hidden'; hb.style.height = '0';
    txt.hidden = false; txt.style.animation = 'scIn 1.6s both';
  });
}

/* ---------- handwritten letter ---------- */
function buildLetter() {
  const pre = $('#letterText'), paper = $('#paper');
  const text = CONFIG.letter.replace(/\{name\}/g, CONFIG.loverName).split('\n').map(l => l.trim()).join('\n').trim();
  const caret = h('span', 'caret'); caret.setAttribute('aria-hidden', 'true');
  let started = false, i = 0, tm = 0;
  const node = document.createTextNode(''); pre.append(node, caret);
  const finish = () => { clearTimeout(tm); node.data = text; i = text.length; caret.remove(); };
  const tick = () => {
    if (i >= text.length) { caret.remove(); return; }
    node.data = text.slice(0, ++i);
    const ch = text[i - 1];
    tm = setTimeout(tick, /[.,!?\n]/.test(ch) ? 260 : 32);
  };
  paper.title = 'Tap to finish writing';
  paper.addEventListener('click', finish);
  new IntersectionObserver((es, o) => {
    if (es[0].isIntersecting && !started) { started = true; o.disconnect(); reduced ? finish() : tick(); }
  }, { threshold: .35 }).observe(paper);
}

/* ---------- if I could ---------- */
function buildIf() {
  const box = $('#ifbox'), btn = $('#ifNext'), L = CONFIG.ifCould;
  let i = 0;
  const render = () => {
    box.replaceChildren(h('h3', '', L[i][0]), h('p', '', L[i][1]));
    if (i === L.length - 1) { btn.textContent = 'Almost there ✨'; megaBurst(); }
  };
  btn.addEventListener('click', () => {
    if (i < L.length - 1) { i++; render(); }
    else $('#countdown').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  });
  render();
}

/* =====================================================================
   Countdown → grand birthday reveal
   ===================================================================== */
function buildCountdown() {
  const stage = $('#cdStage'), black = $('#blackout');
  $('#cdStart').addEventListener('click', async () => {
    for (let n = 5; n >= 1; n--) {
      const num = h('div', 'num', String(n)); num.setAttribute('role', 'status');
      stage.replaceChildren(num);
      await sleep(1000);
    }
    black.textContent = '✨ ✨ ✨'; black.classList.add('on');
    await sleep(1100);
    $('#finale').hidden = false;
    stage.replaceChildren(h('p', 'script', '🎂'));
    $('#birthday').scrollIntoView({ behavior: 'instant' });
    await sleep(500);
    black.classList.remove('on');
    grandReveal();
    setupFinale();
  }, { once: true });
  $('#moreFx').addEventListener('click', grandReveal);
}

function grandReveal() {
  $('#bdTitle').textContent = CONFIG.birthdayMessage;
  flash(); FX.confetti(160); FX.petals(60);
  let k = 0;
  const fw = setInterval(() => { FX.firework(); if (++k > (reduced ? 2 : 9)) clearInterval(fw); }, 450);
  for (let i = 0; i < (coarse ? 5 : 9); i++) {
    const b = h('div', 'balloon');
    const dur = rnd(8, 14);
    b.style.cssText = `left:${rnd(3, 94)}vw;background:radial-gradient(circle at 30% 30%,#fff9,${pick(COLORS)});--dx:${rnd(-60, 60)}px;--rot:0deg;animation-duration:${dur}s;animation-delay:${rnd(0, 2.5)}s`;
    document.body.append(b);
    setTimeout(() => b.remove(), (dur + 3) * 1000);
  }
}

/* ---------- finale: collage, lanterns, final message, replay ---------- */
let finaleReady = false;
function setupFinale() {
  if (finaleReady) return; finaleReady = true;

  // collage
  const col = $('#collage');
  photos.forEach(p => {
    const d = h('div', 'cc'); d.style.setProperty('--r', rnd(-11, 11).toFixed(1) + 'deg'); d.style.setProperty('--s', rnd(.92, 1.08).toFixed(2));
    d.append(makeImg(p)); col.prepend(d);
  });

  const sky = $('#sky'), input = $('#wishIn');
  if (sky && input && $('#wishBtn')) {
    const release = () => {
      const t = input.value.trim() || '❤️';
      if (sky.childElementCount > 14) sky.firstChild.remove();
      const l = h('div', 'lantern', t);
      l.style.left = rnd(8, 82) + '%'; l.style.setProperty('--dx', rnd(-50, 50) + 'px');
      sky.append(l); setTimeout(() => l.remove(), 14500);
      input.value = ''; const c = center(sky); FX.burst(c.x, c.y + 100, 14);
    };
    $('#wishBtn').addEventListener('click', release);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') release(); });
  }

  // final message appears slowly
  const end = $('#end');
  new IntersectionObserver(async (es, o) => {
    if (!es[0].isIntersecting) return; o.disconnect();
    await seq(['f1'], 3200); show('f2'); megaBurst(); await sleep(3200); show('f3');
  }, { threshold: .3 }).observe(end);

  $('#replay').addEventListener('click', async () => {
    scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    await sleep(reduced ? 100 : 1100);
    $('#blackout').textContent = '❤️'; $('#blackout').classList.add('on');
    await sleep(900); location.reload();
  });
}

/* =====================================================================
   Music — never autoplays; starts only after a tap. Missing file is safe.
   ===================================================================== */
const Music = (() => {
  const audio = $('#bgm');
  const btn = $('#musicBtn');
  const label = $('#musicLabel');
  let available = false;
  let unlocked = false;

  function setLabel(t, on) {
    label.textContent = t;
    btn.classList.toggle('on', !!on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.setAttribute('aria-label', t);
  }

  function play() {
    if (!available) return;
    audio.play().then(() => {
      unlocked = true;
      setLabel('Music ON', true);
    }).catch(() => setLabel('Tap to play our song', false));
  }

  function pause() {
    audio.pause();
    setLabel('Music OFF', false);
  }

  return {
    init() {
      if (!CONFIG.music) {
        btn.hidden = true;
        return;
      }
      audio.src = CONFIG.music;
      available = false;
      btn.hidden = true;
      audio.addEventListener('canplay', () => { available = true; }, { once: true });
      audio.addEventListener('error', () => {
        available = false;
        btn.classList.add('dead');
        btn.hidden = true;
      });
      btn.addEventListener('click', () => {
        if (!available) return;
        if (audio.paused) play(); else pause();
      });
    },
    nudge() {
      if (!available || unlocked) return;
      btn.hidden = false;
      play();
    }
  };
})();

/* =====================================================================
   Boot
   ===================================================================== */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('DOMContentLoaded', () => {
  scrollTo(0, 0);
  initStars(); initFloatingHearts(); initParallax(); initCursor();
  buildHero(); buildTimeline(); buildGallery(); buildSlideshow(); buildWhy(); buildQuiz();
  buildConstellation(); buildFlashlight(); buildPulse(); buildSecretHeart(); buildLetter(); buildIf(); buildCountdown();
  initTrail(); initNav(); initReveal(); initModalKeys(); initIntro();
  Music.init();
  runIntro();
});
