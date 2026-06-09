/* ============================================================
   deck.jsx — Modo presentación (deck dinámico, full overlay)
   ============================================================ */
function buildSlides() {
  const G = window.GUIA;
  const s = [{ type: "title" }];
  G.niveles.forEach((nv) => {
    s.push({ type: "divider", nv });
    nv.modulos.forEach((m) => s.push({ type: "module", m, nv }));
  });
  s.push({ type: "rules" });
  s.push({ type: "closing" });
  return s;
}

function DeckView() {
  const { go } = useNav();
  const G = window.GUIA;
  const slides = React.useMemo(buildSlides, []);
  const [i, setI] = React.useState(() => {
    const p = parseInt(localStorage.getItem("deck-pos") || "0", 10);
    return isNaN(p) || p >= slides.length ? 0 : p;
  });
  const [scale, setScale] = React.useState(1);

  const clamp = (n) => Math.max(0, Math.min(slides.length - 1, n));
  const goTo = (n) => setI(clamp(n));

  React.useEffect(() => { localStorage.setItem("deck-pos", String(i)); }, [i]);
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setI((x) => clamp(x + 1)); }
      else if (e.key === "ArrowLeft") setI((x) => clamp(x - 1));
      else if (e.key === "Escape") go("hub");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  React.useEffect(() => {
    const fit = () => setScale(Math.min((window.innerWidth - 40) / 1280, (window.innerHeight - 120) / 720, 1.3));
    fit(); window.addEventListener("resize", fit);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("resize", fit); document.body.style.overflow = ""; };
  }, []);

  const sl = slides[i];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 300, background: "#0c1422", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* top controls */}
      <div style={{ position: "absolute", top: 16, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center", color: "#9fb2d4", zIndex: 10 }}>
        <span style={{ fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 9 }}>
          <img src="assets/Logo_Biosteel.png" style={{ height: 24 }} alt="" /> Modo presentación
        </span>
        <button onClick={() => go("hub")} style={{ border: "1px solid #2a3a55", background: "rgba(255,255,255,.04)", color: "#cdd6e6", borderRadius: 9, padding: "7px 13px", cursor: "pointer", fontWeight: 700, fontSize: 13.5, display: "inline-flex", gap: 7, alignItems: "center" }}>
          <Icon name="close" size={15} stroke={2.4} /> Salir (Esc)
        </button>
      </div>

      {/* stage */}
      <div style={{ width: 1280, height: 720, transform: `scale(${scale})`, transformOrigin: "center", borderRadius: 18, overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,.6)" }}>
        <Slide key={i} sl={sl} G={G} index={i} total={slides.length} />
      </div>

      {/* nav arrows */}
      <button onClick={() => setI((x) => clamp(x - 1))} disabled={i === 0}
        style={navBtn("left", i === 0)}><Icon name="back" size={24} stroke={2.4} /></button>
      <button onClick={() => setI((x) => clamp(x + 1))} disabled={i === slides.length - 1}
        style={navBtn("right", i === slides.length - 1)}><Icon name="arrow" size={24} stroke={2.4} /></button>

      {/* counter + progress */}
      <div style={{ position: "absolute", bottom: 18, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 4, maxWidth: "70vw", flexWrap: "wrap", justifyContent: "center" }}>
          {slides.map((_, n) => (
            <button key={n} onClick={() => goTo(n)} aria-label={"Ir a diapositiva " + (n + 1)}
              style={{ width: n === i ? 22 : 8, height: 8, borderRadius: 99, border: "none", cursor: "pointer", background: n === i ? "#7fb2f0" : "#33415c", transition: "all .2s", padding: 0 }} />
          ))}
        </div>
        <span style={{ color: "#6b7a96", fontSize: 13, fontWeight: 700 }}>{i + 1} / {slides.length} · usa ← → o la barra espaciadora</span>
      </div>
    </div>
  );
}

function navBtn(side, disabled) {
  return {
    position: "absolute", top: "50%", transform: "translateY(-50%)", [side]: 18,
    width: 52, height: 52, borderRadius: "50%", border: "1px solid #2a3a55",
    background: disabled ? "rgba(255,255,255,.02)" : "rgba(255,255,255,.07)",
    color: disabled ? "#3a4763" : "#cdd6e6", cursor: disabled ? "default" : "pointer",
    display: "grid", placeItems: "center", zIndex: 10,
  };
}

/* ---- One slide ---- */
function Slide({ sl, G }) {
  const base = { width: "100%", height: "100%", position: "relative", overflow: "hidden", fontFamily: "var(--sans)" };
  const grid = (
    <div style={{ position: "absolute", inset: 0, opacity: .5, backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
  );

  if (sl.type === "title") {
    return (
      <div style={{ ...base, background: "#203562", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96 }} className="fade-up">
        {grid}
        <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", filter: "blur(60px)", background: "radial-gradient(circle,rgba(0,89,184,.5),transparent 70%)", top: -240, right: -200 }} />
        <div style={{ position: "relative" }}>
          <img src="assets/Logo_Biosteel.png" style={{ height: 56, marginBottom: 36 }} alt="" />
          <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#7fb2f0" }}>Capacitación interna · {G.meta.anio}</div>
          <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: "-.03em", lineHeight: .95, marginTop: 18 }}>Dominando<br />Claude</div>
          <div style={{ fontSize: 26, color: "#c5d2e8", marginTop: 26, maxWidth: 760 }}>{G.meta.subtitulo} · {G.meta.empresa}</div>
        </div>
      </div>
    );
  }

  if (sl.type === "divider") {
    const nv = sl.nv;
    return (
      <div style={{ ...base, background: "#004a98", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96 }} className="fade-up">
        {grid}
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 200, fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "rgba(255,255,255,.16)", position: "absolute", top: -60, right: 0 }}>{nv.id}</div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "#bcd6f5" }}>{nv.etiqueta}</div>
          <div style={{ fontSize: 76, fontWeight: 900, letterSpacing: "-.025em", lineHeight: 1, marginTop: 16, maxWidth: 880 }}>{nv.titulo}</div>
          <div style={{ fontSize: 25, color: "#dbe7fa", marginTop: 24, maxWidth: 820, lineHeight: 1.45 }}>{nv.resumen}</div>
          <div style={{ display: "flex", gap: 10, marginTop: 40 }}>
            {G.niveles.map((x) => <span key={x.id} style={{ width: x.id === nv.id ? 56 : 22, height: 10, borderRadius: 99, background: x.id === nv.id ? "#fff" : "rgba(255,255,255,.35)" }} />)}
          </div>
        </div>
      </div>
    );
  }

  if (sl.type === "module") {
    const m = sl.m, p = m.prompts[0];
    return (
      <div style={{ ...base, background: "#fff", color: "var(--ink)", display: "flex", flexDirection: "column", padding: "56px 72px" }} className="fade-up">
        <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: ".1em", color: "var(--blue)", textTransform: "uppercase" }}>Módulo {m.n} · {sl.nv.etiqueta}</div>
        <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-.02em", lineHeight: 1.04, marginTop: 10, maxWidth: 1040 }}>{m.titulo}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, marginTop: 28, flex: 1, alignItems: "start", minHeight: 0 }}>
          <div>
            <p style={{ fontSize: 21, lineHeight: 1.45, color: "var(--ink)", margin: 0 }}>{m.explicacion}</p>
            {m.analogia && (
              <div style={{ marginTop: 20, background: "var(--surface)", borderRadius: 16, padding: "16px 20px", display: "flex", gap: 13, alignItems: "flex-start" }}>
                <span style={{ fontSize: 26 }}>💡</span>
                <span style={{ fontSize: 19, fontStyle: "italic", color: "var(--muted)", lineHeight: 1.4 }}>{m.analogia}</span>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "var(--surface)", padding: "11px 16px", fontSize: 14, fontWeight: 800, letterSpacing: ".06em", color: "var(--blue)", textTransform: "uppercase" }}>Prompt · {p.rol}</div>
              <div style={{ padding: 18, fontFamily: "var(--mono)", fontSize: 17, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: '"' + p.texto + '"' }} />
            </div>
            <div style={{ background: "var(--good-bg)", borderRadius: 16, padding: "16px 20px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--good)", letterSpacing: ".08em" }}>RECUERDA</div>
              <div style={{ fontSize: 19, marginTop: 6, lineHeight: 1.38 }}>{m.recordar}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (sl.type === "rules") {
    return (
      <div style={{ ...base, background: "#fff", padding: 80, display: "flex", flexDirection: "column" }} className="fade-up">
        <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: ".1em", color: "var(--blue)", textTransform: "uppercase" }}>Seguridad de la información</div>
        <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-.02em", marginTop: 12 }}>Reglas de oro</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 40, flex: 1 }}>
          {[["nunca", "NUNCA subas", "var(--bad)", "var(--bad-bg)", "close"], ["siempre", "SIEMPRE haz", "var(--good)", "var(--good-bg)", "check"]].map((c) => (
            <div key={c[0]} style={{ borderRadius: 18, overflow: "hidden", border: "2px solid " + c[2] }}>
              <div style={{ background: c[2], color: "#fff", padding: "16px 24px", fontSize: 24, fontWeight: 900, display: "flex", alignItems: "center", gap: 12 }}><Icon name={c[4]} size={26} stroke={3} /> {c[1]}</div>
              <div style={{ padding: 14, background: c[3] }}>
                {G.reglas[c[0]].map((r, k) => (
                  <div key={k} style={{ display: "flex", gap: 12, padding: "12px 12px", fontSize: 19, fontWeight: 600, alignItems: "flex-start" }}>
                    <span style={{ color: c[2], flexShrink: 0, marginTop: 2 }}><Icon name={c[4]} size={20} stroke={3} /></span>{r}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // closing
  const P = G.proyectoFinal;
  return (
    <div style={{ ...base, background: "#203562", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96 }} className="fade-up">
      {grid}
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", filter: "blur(60px)", background: "radial-gradient(circle,rgba(0,89,184,.5),transparent 70%)", bottom: -260, left: -160 }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#7fb2f0" }}>Proyecto final</div>
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-.025em", lineHeight: 1, marginTop: 16 }}>“{P.titulo}”</div>
        <div style={{ fontSize: 26, color: "#dbe7fa", marginTop: 26, maxWidth: 880, lineHeight: 1.45 }}>{P.meta}</div>
        <div style={{ marginTop: 40, display: "inline-flex", background: "#004a98", padding: "16px 28px", borderRadius: 14, fontSize: 24, fontWeight: 800 }}>¡Empieza hoy mismo! →</div>
      </div>
    </div>
  );
}

Object.assign(window, { DeckView });
