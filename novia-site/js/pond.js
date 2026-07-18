// Genera el fondo de estanque: peces koi, nenúfares y ondas de agua.
(function () {
  const KOI_COLORS = [
    { body: "#f4a259", spot: "#e8542f" },
    { body: "#fff8f1", spot: "#f4a259" },
    { body: "#ff9eb6", spot: "#e85f82" },
    { body: "#f4a259", spot: "#fff8f1" },
  ];

  function koiSVG(colors) {
    return `
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="20" rx="32" ry="11" fill="${colors.body}"/>
      <path d="M13 20 L-3 8 L-3 32 Z" fill="${colors.body}"/>
      <ellipse cx="34" cy="16" rx="6" ry="3" fill="${colors.spot}" opacity="0.85"/>
      <ellipse cx="55" cy="24" rx="7" ry="3.4" fill="${colors.spot}" opacity="0.7"/>
      <path d="M45 9 Q55 -2 65 8 Q56 10 45 9Z" fill="${colors.spot}" opacity="0.55"/>
      <circle cx="68" cy="17" r="2" fill="#0c3438"/>
    </svg>`;
  }

  function makeFish(container) {
    const n = window.innerWidth < 600 ? 4 : 7;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("div");
      el.className = "fish";
      const colors = KOI_COLORS[i % KOI_COLORS.length];
      el.innerHTML = koiSVG(colors);
      const size = 40 + Math.random() * 50;
      el.style.width = size + "px";
      el.style.top = (10 + Math.random() * 75) + "vh";
      const dur = 18 + Math.random() * 22;
      const bobDur = 3 + Math.random() * 3;
      el.style.animationDuration = `${dur}s, ${bobDur}s`;
      el.style.animationDelay = `-${Math.random() * dur}s, -${Math.random() * bobDur}s`;
      container.appendChild(el);
    }
  }

  function makeLilies(container) {
    const n = window.innerWidth < 600 ? 4 : 6;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("div");
      el.className = "lily";
      const size = 30 + Math.random() * 55;
      el.style.left = Math.random() * 92 + "vw";
      el.style.top = Math.random() * 90 + "vh";
      el.style.animationDelay = `-${Math.random() * 6}s`;
      const pink = Math.random() > 0.55;
      el.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="32" rx="26" ry="12" fill="#1c6b64" opacity="0.9"/>
          <path d="M30 32 L30 14" stroke="#134f4a" stroke-width="2" opacity="0.5"/>
          ${pink ? `
          <g opacity="0.95">
            <ellipse cx="30" cy="24" rx="6" ry="10" fill="#ff9eb6"/>
            <ellipse cx="22" cy="28" rx="6" ry="10" fill="#ff9eb6" transform="rotate(-40 22 28)"/>
            <ellipse cx="38" cy="28" rx="6" ry="10" fill="#ff9eb6" transform="rotate(40 38 28)"/>
            <circle cx="30" cy="26" r="4" fill="#f4a259"/>
          </g>` : ""}
        </svg>`;
      container.appendChild(el);
    }
  }

  function makeRipples(container) {
    const n = 5;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("div");
      el.className = "ripple";
      const size = 60 + Math.random() * 120;
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.left = Math.random() * 95 + "vw";
      el.style.top = Math.random() * 95 + "vh";
      el.style.animationDelay = `-${Math.random() * 6}s`;
      container.appendChild(el);
    }
  }

  function initPond() {
    const container = document.getElementById("pond-bg");
    if (!container) return;
    makeRipples(container);
    makeLilies(container);
    makeFish(container);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPond);
  } else {
    initPond();
  }
})();
