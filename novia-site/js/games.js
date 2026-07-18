// ---------- Datos ----------
const PIROPOS = [
  "Sos mi persona favorita para hablar boludeces y de la vida misma jeje.",
  "Cuando te reís me alegrás hasta el peor de los malos humores, tonta.",
  "Confío en vos como no confié en nadie, y pienso seguir haciéndolo toda la vida.",
  "Sos muy graciosa y tierna hasta cuando no te das cuenta, y eso me enamora cada día más.",
  "Con vos hasta un mensaje al mediodía me cambia la semana entera jeje.",
  "Sos la más linda, la más inteligente y la más pro que hay",
  "Quiero envejecer viéndote todas las mañanas.",
  "Sos mi arisita, y aunque seas de River siempre vas a ser lo mejor que me pasó Bv",
];

const RAZONES = [
  "Porque sos vos con quien quiero levantarme todos los días.",
  "Porque tu forma simple de hablarme me desarma por completo.",
  "Porque nunca dejás de ser buena persona aunque te pasen cosas malas.",
  "Porque me hacés reír hasta en mis peores días jeje.",
  "Porque quiero que seas la madre de mis hijos y no me imagino a otra persona.",
  "Porque sos auténtica",
  "Porque tus ocurrencias me alegran la mañana y la noche",
  "Porque te tengo, y te voy a tener, toda la confianza de mi vida.",
  "Porque con vos hasta las cosas malas se sienten más livianas.",
  "Porque sos suficiente. Más que suficiente. Siempre",
];

// ---------- Tabs ----------
function initTabs() {
  const tabs = document.querySelectorAll(".game-tab");
  const panels = document.querySelectorAll(".game-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });
}

// ---------- Pesca un piropo ----------
function koiSVG(body, spot) {
  return `<svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="45" cy="20" rx="32" ry="11" fill="${body}"/>
    <path d="M13 20 L-3 8 L-3 32 Z" fill="${body}"/>
    <ellipse cx="34" cy="16" rx="6" ry="3" fill="${spot}" opacity="0.85"/>
    <ellipse cx="55" cy="24" rx="7" ry="3.4" fill="${spot}" opacity="0.7"/>
    <circle cx="68" cy="17" r="2" fill="#0c3438"/>
  </svg>`;
}

function initPesca() {
  const zone = document.getElementById("pescaZone");
  const resultEl = document.getElementById("piropoResult");
  if (!zone) return;

  const palette = [
    ["#f4a259", "#e8542f"],
    ["#fff8f1", "#f4a259"],
    ["#ff9eb6", "#e85f82"],
  ];

  const shuffled = [...PIROPOS].sort(() => Math.random() - 0.5);
  const count = Math.min(6, shuffled.length);

  for (let i = 0; i < count; i++) {
    const btn = document.createElement("button");
    btn.className = "catch-fish";
    btn.setAttribute("aria-label", "Tocá el pez para pescar un piropo");
    const [body, spot] = palette[i % palette.length];
    btn.innerHTML = koiSVG(body, spot);
    btn.style.top = 8 + Math.random() * 78 + "%";
    const dur = 9 + Math.random() * 8;
    const bobDur = 2.4 + Math.random() * 2;
    btn.style.animationDuration = `${dur}s, ${bobDur}s`;
    btn.style.animationDelay = `-${Math.random() * dur}s, -${Math.random() * bobDur}s`;

    btn.addEventListener("click", () => {
      if (btn.classList.contains("caught")) return;
      btn.classList.add("caught");
      resultEl.textContent = shuffled[i];
    });

    zone.appendChild(btn);
  }

  resultEl.textContent = "Tocá un pez para pescar un piropo 🎣";
}

// ---------- Memoria ----------
const MEM_ICONS = ["🐟", "🌸", "🌙", "⭐", "💞", "🌊"];

function initMemoria() {
  const grid = document.getElementById("memGrid");
  const statusEl = document.getElementById("memStatus");
  if (!grid) return;

  let deck = [...MEM_ICONS, ...MEM_ICONS]
    .map((icon) => ({ icon, id: Math.random() }))
    .sort(() => Math.random() - 0.5);

  let flipped = [];
  let matched = 0;
  let lock = false;

  grid.innerHTML = "";
  deck.forEach((item) => {
    const card = document.createElement("div");
    card.className = "mem-card";
    card.dataset.icon = item.icon;
    card.textContent = "";
    card.addEventListener("click", () => {
      if (lock || card.classList.contains("flipped") || card.classList.contains("matched")) return;
      card.classList.add("flipped");
      card.textContent = item.icon;
      flipped.push(card);

      if (flipped.length === 2) {
        lock = true;
        const [a, b] = flipped;
        if (a.dataset.icon === b.dataset.icon) {
          setTimeout(() => {
            a.classList.add("matched");
            b.classList.add("matched");
            matched++;
            flipped = [];
            lock = false;
            if (matched === MEM_ICONS.length) {
              statusEl.textContent = "¡Ganaste! Como siempre que estamos juntos 💞";
            }
          }, 350);
        } else {
          setTimeout(() => {
            a.classList.remove("flipped");
            b.classList.remove("flipped");
            a.textContent = "";
            b.textContent = "";
            flipped = [];
            lock = false;
          }, 700);
        }
      }
    });
    grid.appendChild(card);
  });

  statusEl.textContent = "Encontrá las parejas, mi vida.";
}

// ---------- Ruleta ----------
function initRuleta() {
  const wheel = document.getElementById("wheel");
  const spinBtn = document.getElementById("spinBtn");
  const resultEl = document.getElementById("ruletaResult");
  if (!wheel) return;

  let rotation = 0;

  spinBtn.addEventListener("click", () => {
    const extraSpins = 4 + Math.floor(Math.random() * 3);
    rotation += extraSpins * 360 + Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${rotation}deg)`;
    spinBtn.disabled = true;
    resultEl.textContent = "Girando…";

    setTimeout(() => {
      const razon = RAZONES[Math.floor(Math.random() * RAZONES.length)];
      resultEl.textContent = razon;
      spinBtn.disabled = false;
    }, 3300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initPesca();
  initMemoria();
  initRuleta();
});
