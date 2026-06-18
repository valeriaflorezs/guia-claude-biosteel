/* ============================================================
   components.jsx — UI compartida (se exporta a window)
   ============================================================ */
const { useState, useEffect, useRef, createContext, useContext } = React;

/* ---- Navigation context ---- */
const NavCtx = createContext({ route: { view: "hub" }, go: () => {} });
const useNav = () => useContext(NavCtx);

/* ---- Minimal line icons ---- */
function Icon({ name, size = 22, stroke = 2 }) {
  const p = {
    map:      "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14",
    flask:    "M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7 15h10",
    hospital: "M4 21V7l8-4 8 4v14M9 21v-5h6v5M12 7v4m-2-2h4",
    lock:     "M6 11V8a6 6 0 0 1 12 0v3M5 11h14v9H5z",
    book:     "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM19 19H6",
    target:   "M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 12h6",
    bulb:     "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.7.7 1 1.3 1 3h6c0-1.7.3-2.3 1-3a6 6 0 0 0-4-10Z",
    deck:     "M3 4h18v12H3zM8 20h8M12 16v4",
    doc:      "M6 2h8l4 4v16H6zM14 2v4h4M9 13h6M9 17h6",
    search:   "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3",
    arrow:    "M5 12h14M13 6l6 6-6 6",
    back:     "M19 12H5M11 18l-6-6 6-6",
    check:    "M20 6 9 17l-5-5",
    copy:     "M9 9h11v11H9zM5 15H4V4h11v1",
    play:     "M6 4v16l13-8z",
    close:    "M6 6l12 12M18 6 6 18",
    spark:    "M12 3v6m0 6v6M3 12h6m6 0h6M6 6l3 3m6 6 3 3m0-12-3 3M9 15l-3 3",
    shield:   "M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z",
    layers:   "M12 3 2 8l10 5 10-5zM2 13l10 5 10-5M2 18l10 5 10-5",
  }[name] || "M12 12h.01";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d={p} />
    </svg>
  );
}

/* ---- Copy-to-clipboard button ---- */
function CopyButton({ text, label = "Copiar" }) {
  const [done, setDone] = useState(false);
  function copy() {
    const clean = text.replace(/<\/?b>/g, "");
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = clean; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(clean).catch(fallback);
    } else fallback();
    setDone(true);
    setTimeout(() => setDone(false), 1700);
  }
  return (
    <button className={"copy-btn" + (done ? " done" : "")} onClick={copy}>
      <Icon name={done ? "check" : "copy"} size={14} stroke={2.4} />
      {done ? "¡Copiado!" : label}
    </button>
  );
}

/* ---- Prompt card ---- */
function PromptCard({ rol, texto }) {
  return (
    <div className="prompt">
      <div className="prompt-head">
        <span className="prompt-role">{rol}</span>
        <CopyButton text={texto} />
      </div>
      <div className="prompt-body" dangerouslySetInnerHTML={{ __html: '"' + texto + '"' }} />
    </div>
  );
}

/* ---- Top bar ---- */
function TopBar() {
  const { route, go } = useNav();
  const items = [
    { v: "ruta", label: "Ruta" },
    { v: "recetario", label: "Recetario" },
    { v: "casos", label: "Casos por área" },
    { v: "trucos", label: "Trucos" },
    { v: "reglas", label: "Reglas de oro" },
    { v: "glosario", label: "Glosario" },
    { v: "evaluacion", label: "Diagnóstico" },
  ];
  const active = (v) => route.view === v || (v === "ruta" && route.view === "modulo");
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="brand" onClick={() => go("hub")} aria-label="Inicio">
          <img src="assets/Logo_Biosteel.png" alt="Biosteel de Colombia" />
          <span>
            <span className="bt" style={{ display: "block" }}>Dominando Claude</span>
            <span className="bs">Guía de capacitación</span>
          </span>
        </button>
        <nav className="nav">
          {items.map((it) => (
            <button key={it.v} className={active(it.v) ? "on" : ""} onClick={() => go(it.v)}>
              {it.label}
            </button>
          ))}
        </nav>
        <div className="topbar-cta">
          <button className="btn btn-navy btn-sm" onClick={() => go("deck")}>
            <Icon name="play" size={15} stroke={2.4} /> Presentar
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---- Footer ---- */
function Footer() {
  const { go } = useNav();
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>Biosteel de Colombia S.A.</div>
          <div style={{ fontSize: 13.5, marginTop: 4 }}>Guía interna de capacitación · Claude · 2026</div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 14, flexWrap: "wrap" }}>
          <a onClick={() => go("manual")} style={{ cursor: "pointer", textDecoration: "none" }}>Manual imprimible (PDF)</a>
          <a onClick={() => go("reglas")} style={{ cursor: "pointer", textDecoration: "none" }}>Reglas de seguridad</a>
          <a onClick={() => go("proyecto")} style={{ cursor: "pointer", textDecoration: "none" }}>Proyecto final</a>
        </div>
      </div>
      <div className="container" style={{ marginTop: 22, fontSize: 12.5, color: "#7e8aa3" }}>
        El uso de IA en Biosteel sigue la Ley 1581 de Protección de Datos. El criterio humano es siempre el responsable final.
      </div>
    </footer>
  );
}

/* ---- Section header ---- */
function SectionHead({ eyebrow, title, desc, center }) {
  return (
    <div style={{ marginBottom: 30, textAlign: center ? "center" : "left", maxWidth: center ? 720 : "none", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {desc && <p className="lede" style={{ marginTop: 12 }}>{desc}</p>}
    </div>
  );
}

/* ---- Modal ---- */
function Modal({ children, onClose, wide }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, []);
  return (
    <div className="overlay" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="fade-up"
        style={{ background: "#fff", borderRadius: 22, maxWidth: wide ? 900 : 640, width: "100%", maxHeight: "88vh", overflow: "auto", boxShadow: "var(--shadow-lg)" }}>
        {children}
      </div>
    </div>
  );
}

/* ---- Back link ---- */
function BackLink({ to, label }) {
  const { go } = useNav();
  return (
    <button onClick={() => go(to)} style={{ border: "none", background: "none", cursor: "pointer", color: "var(--muted)", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 0" }}>
      <Icon name="back" size={16} stroke={2.4} /> {label}
    </button>
  );
}

Object.assign(window, { NavCtx, useNav, Icon, CopyButton, PromptCard, TopBar, Footer, SectionHead, Modal, BackLink });
