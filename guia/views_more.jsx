/* ============================================================
   views_more.jsx — Casos, Reglas, Glosario, Trucos, Proyecto, Manual
   ============================================================ */

/* ---------- CASOS POR ÁREA ---------- */
function CasosView() {
  const G = window.GUIA;
  const [open, setOpen] = React.useState(G.areas[0].id);
  return (
    <div className="container section">
      <SectionHead eyebrow="Casos por área" title="Claude se adapta a tu cargo."
        desc="Para el contador es un analista; para SST, un asesor de riesgos; para logística, un organizador. Elige tu área y copia el prompt de ejemplo." />
      <div className="grid g3">
        {G.areas.map((a) => {
          const active = open === a.id;
          return (
            <div key={a.id} className="card" style={{ padding: 0, overflow: "hidden", borderColor: active ? "var(--blue)" : "var(--line)", gridColumn: active ? "1 / -1" : "auto", transition: "border-color .15s" }}>
              <button onClick={() => setOpen(active ? null : a.id)}
                style={{ width: "100%", textAlign: "left", border: "none", background: active ? "var(--blue-050)" : "#fff", cursor: "pointer", padding: 20, display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ width: 44, height: 44, borderRadius: 11, display: "grid", placeItems: "center", background: "var(--blue)", color: "#fff" }}><Icon name="hospital" size={22} /></span>
                <span style={{ flex: 1 }}>
                  <span className="h3" style={{ fontSize: 18, display: "block" }}>{a.nombre}</span>
                  <span className="muted" style={{ fontSize: 13.5 }}>{a.desc}</span>
                </span>
                <span style={{ transform: active ? "rotate(90deg)" : "none", transition: "transform .2s", color: "var(--blue)" }}><Icon name="arrow" size={18} stroke={2.4} /></span>
              </button>
              {active && (
                <div style={{ padding: "0 20px 20px" }} className="fade-up">
                  <PromptCard rol={a.nombre} texto={a.prompt} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- REGLAS DE ORO ---------- */
function ReglasView() {
  const G = window.GUIA;
  return (
    <div className="container section">
      <SectionHead eyebrow="Seguridad de la información" title="Reglas de oro · qué SÍ y qué NO."
        desc="Claude es una herramienta externa. La custodia de los datos de pacientes y de Biosteel es responsabilidad de cada colaborador, bajo la Ley 1581 de Colombia." />
      <div className="grid g2">
        <div className="card" style={{ overflow: "hidden", borderColor: "var(--bad)" }}>
          <div style={{ background: "var(--bad)", color: "#fff", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 17 }}>
            <Icon name="close" size={20} stroke={3} /> NUNCA subas
          </div>
          <div style={{ padding: 8 }}>
            {G.reglas.nunca.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "13px 14px", borderBottom: i < G.reglas.nunca.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span style={{ color: "var(--bad)", flexShrink: 0, marginTop: 2 }}><Icon name="close" size={18} stroke={3} /></span>
                <span style={{ fontSize: 15.5, fontWeight: 600 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ overflow: "hidden", borderColor: "var(--good)" }}>
          <div style={{ background: "var(--good)", color: "#fff", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 17 }}>
            <Icon name="check" size={20} stroke={3} /> SIEMPRE haz
          </div>
          <div style={{ padding: 8 }}>
            {G.reglas.siempre.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "13px 14px", borderBottom: i < G.reglas.siempre.length - 1 ? "1px solid var(--line)" : "none" }}>
                <span style={{ color: "var(--good)", flexShrink: 0, marginTop: 2 }}><Icon name="check" size={18} stroke={3} /></span>
                <span style={{ fontSize: 15.5, fontWeight: 600 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card card-pad" style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "flex-start", background: "var(--navy)", color: "#fff" }}>
        <span style={{ color: "#7fb2f0", flexShrink: 0 }}><Icon name="shield" size={28} /></span>
        <div>
          <div className="h3" style={{ color: "#fff", fontSize: 18 }}>La regla inquebrantable</div>
          <p style={{ color: "#c5d2e8", margin: "6px 0 0", fontSize: 15.5, lineHeight: 1.55 }}>
            Antes de pegar cualquier documento, pregúntate: <b style={{ color: "#fff" }}>¿esto identifica a un paciente o revela un secreto de Biosteel?</b> Si la respuesta es sí, anonimízalo primero. Es como no dejar las llaves de la oficina en un parque público.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- GLOSARIO ---------- */
function GlosarioView() {
  const G = window.GUIA;
  const [q, setQ] = React.useState("");
  const list = G.glosario.filter((g) => (g.t + " " + g.d).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="container section">
      <SectionHead eyebrow="Glosario" title="El vocabulario de Claude, sin tecnicismos."
        desc="Los términos que aparecerán en tu día a día con la IA, explicados en una frase." />
      <div style={{ position: "relative", maxWidth: 460, marginBottom: 26 }}>
        <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--faint)" }}><Icon name="search" size={20} /></span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar término…"
          style={{ width: "100%", padding: "13px 16px 13px 46px", borderRadius: 12, border: "1.5px solid var(--line-strong)", fontSize: 15.5, fontFamily: "var(--sans)", outline: "none" }}
          onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--line-strong)")} />
      </div>
      <div className="grid g2">
        {list.map((g, i) => (
          <div key={i} className="card card-pad" style={{ padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 8, height: 8, borderRadius: 3, background: "var(--blue)" }} />
              <span className="mono" style={{ fontWeight: 600, fontSize: 16, color: "var(--blue)" }}>{g.t}</span>
            </div>
            <p style={{ margin: "9px 0 0", fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>{g.d}</p>
          </div>
        ))}
        {list.length === 0 && <p className="muted">Sin resultados para «{q}».</p>}
      </div>
    </div>
  );
}

/* ---------- TRUCOS ---------- */
function TrucosView() {
  const G = window.GUIA;
  const niveles = ["Básico", "Intermedio", "Avanzado", "Dominio"];
  return (
    <div className="container section">
      <SectionHead eyebrow="Optimización" title="8 trucos para exprimir tu suscripción."
        desc="Tips avanzados que ahorran tokens, tiempo y mejoran la calidad de cada respuesta." />
      {niveles.map((nivel) => {
        const items = G.trucos.filter((t) => t.nivel === nivel);
        return (
          <div key={nivel} style={{ marginBottom: 30 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{nivel}</div>
            <div className="grid g2">
              {items.map((t) => (
                <div key={t.n} className="card card-pad" style={{ display: "flex", gap: 16 }}>
                  <div className="bignum" style={{ color: "var(--blue-050)", WebkitTextStroke: "1.5px var(--blue)", fontSize: 44, flexShrink: 0 }}>{t.n}</div>
                  <div>
                    <div className="h3" style={{ fontSize: 18 }}>{t.titulo}</div>
                    <div style={{ display: "inline-block", margin: "8px 0", fontSize: 13, fontWeight: 800, color: "var(--blue)", background: "var(--blue-050)", padding: "4px 10px", borderRadius: 8 }}>{t.clave}</div>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--muted)" }}>{t.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- PROYECTO FINAL ---------- */
function ProyectoView() {
  const G = window.GUIA, P = G.proyectoFinal;
  return (
    <div className="container section" style={{ maxWidth: 880 }}>
      <SectionHead eyebrow="Proyecto final" title={'"' + P.titulo + '"'} desc={P.intro} />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {P.pasos.map((s, i) => (
          <div key={i} className="card card-pad" style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: "var(--blue)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 19 }}>{i + 1}</div>
            <div>
              <div className="h3" style={{ fontSize: 18 }}>{s.t}</div>
              <p style={{ margin: "7px 0 0", fontSize: 15.5, lineHeight: 1.55, color: "var(--muted)" }}>{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero card-pad" style={{ marginTop: 22, padding: 30 }}>
        <div className="hero-grid" />
        <div className="hero-glow" style={{ bottom: -180, left: -100 }} />
        <div style={{ position: "relative" }}>
          <div className="eyebrow" style={{ color: "#7fb2f0" }}>La meta</div>
          <p style={{ color: "#fff", fontSize: 20, fontWeight: 700, lineHeight: 1.45, margin: "10px 0 0", maxWidth: 640 }}>{P.meta}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- MANUAL IMPRIMIBLE (slot para LaTeX/PDF) ---------- */
function ManualView() {
  const [exists, setExists] = React.useState(null);
  React.useEffect(() => {
    fetch("assets/manual.pdf", { method: "HEAD" })
      .then((r) => setExists(r.ok))
      .catch(() => setExists(false));
  }, []);
  return (
    <div className="container section" style={{ maxWidth: 760 }}>
      <SectionHead eyebrow="Manual imprimible" title="La cartilla en PDF (elaborada en LaTeX)."
        desc="La versión imprimible la prepara el equipo de Biosteel en LaTeX. Cuando esté lista, se sube aquí y queda disponible para descargar." />

      {exists ? (
        <div className="card card-pad" style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ width: 48, height: 48, borderRadius: 12, background: "var(--bad-bg)", color: "var(--bad)", display: "grid", placeItems: "center" }}><Icon name="doc" size={24} /></span>
            <div><div className="h3" style={{ fontSize: 17 }}>Manual Dominando Claude.pdf</div><div className="muted" style={{ fontSize: 13.5 }}>Cartilla de capacitación · Biosteel</div></div>
          </div>
          <a className="btn btn-primary" href="assets/manual.pdf" target="_blank" rel="noopener"><Icon name="doc" size={18} /> Abrir / descargar</a>
        </div>
      ) : (
        <div className="card card-pad" style={{ textAlign: "center", padding: 44, border: "2px dashed var(--line-strong)", boxShadow: "none" }}>
          <span style={{ width: 64, height: 64, borderRadius: 16, background: "var(--surface)", color: "var(--faint)", display: "grid", placeItems: "center", margin: "0 auto" }}><Icon name="doc" size={32} /></span>
          <div className="h3" style={{ marginTop: 16 }}>Pendiente de subir</div>
          <p className="muted" style={{ maxWidth: 440, margin: "10px auto 0", fontSize: 15.5, lineHeight: 1.55 }}>
            Sube tu PDF generado en LaTeX como <span className="mono" style={{ background: "var(--surface)", padding: "2px 7px", borderRadius: 6, fontSize: 13.5 }}>assets/manual.pdf</span> y este botón se activará automáticamente.
          </p>
          <div style={{ marginTop: 20, display: "inline-flex", gap: 8, alignItems: "center", color: "var(--muted)", fontSize: 13.5, background: "var(--surface)", padding: "9px 14px", borderRadius: 10 }}>
            <Icon name="layers" size={16} /> Mientras tanto, todo el contenido vive en esta guía interactiva.
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { CasosView, ReglasView, GlosarioView, TrucosView, ProyectoView, ManualView });
