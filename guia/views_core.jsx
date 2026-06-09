/* ============================================================
   views_core.jsx — Hub, Ruta de aprendizaje, Módulo
   ============================================================ */
const { useState: useStateC } = React;

/* ---------- HUB (home) ---------- */
function HubView() {
  const { go, progress } = useNav();
  const G = window.GUIA;
  const totalMods = 16;
  const pct = Math.round((progress.length / totalMods) * 100);

  const tiles = [
    { v: "ruta", icon: "map", t: "Ruta de aprendizaje", d: "Niveles 1→4 · 16 módulos con ejercicios.", feat: false },
    { v: "recetario", icon: "flask", t: "Recetario de prompts", d: "Arma tu prompt: Contexto + Tarea + Formato.", feat: true },
    { v: "casos", icon: "hospital", t: "Casos por área", d: "Finanzas · Logística · SST · Compras · más.", feat: false },
    { v: "trucos", icon: "bulb", t: "Trucos de optimización", d: "8 tips para exprimir tu suscripción.", feat: false },
    { v: "reglas", icon: "lock", t: "Reglas de oro", d: "Qué SÍ y qué NO subir a Claude.", feat: false },
    { v: "glosario", icon: "book", t: "Glosario", d: "Tokens, alucinaciones, proyectos, MCP…", feat: false },
  ];

  return (
    <div className="app-wrap">
      {/* HERO */}
      <section className="container" style={{ paddingTop: 28 }}>
        <div className="hero card-pad fade-up" style={{ padding: "clamp(28px,5vw,64px)" }}>
          <div className="hero-grid" />
          <div className="hero-glow" style={{ top: -160, right: -120 }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.25fr .9fr", gap: 40, alignItems: "center" }} className="hero-cols">
            <div>
              <div className="eyebrow" style={{ color: "#7fb2f0" }}>Capacitación interna · {G.meta.anio}</div>
              <h1 className="h1" style={{ marginTop: 14, color: "#fff" }}>
                Claude, tu aliado<br />estratégico en <span style={{ color: "#7fb2f0" }}>Biosteel</span>.
              </h1>
              <p className="lede" style={{ color: "#c5d2e8", marginTop: 18, maxWidth: 520 }}>
                Una guía visual y práctica para que todo el equipo administrativo multiplique su tiempo con IA — sin perder la precisión que exige el sector médico-quirúrgico.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => go("ruta")}>
                  Empezar la ruta <Icon name="arrow" size={18} stroke={2.4} />
                </button>
                <button className="btn btn-ghost" onClick={() => go("recetario")} style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,.35)" }}>
                  <Icon name="flask" size={17} /> Abrir recetario
                </button>
              </div>
            </div>
            {/* floating prompt sample */}
            <div className="hero-card" style={{ position: "relative" }}>
              <div style={{ background: "#fff", borderRadius: 16, padding: 4, boxShadow: "var(--shadow-lg)", transform: "rotate(1.4deg)" }}>
                <div className="prompt" style={{ boxShadow: "none", border: "none" }}>
                  <div className="prompt-head"><span className="prompt-role">Logística</span><span className="copy-btn" style={{ pointerEvents: "none" }}><Icon name="copy" size={14} />Copiar</span></div>
                  <div className="prompt-body">"Actúa como <b>Coordinador de Logística</b> de Biosteel. Redacta un correo al proveedor solicitando despacho de <b>placas de fémur</b>. Formato: <b>tabla</b>."</div>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: -18, left: -14, background: "#fff", borderRadius: 12, padding: "10px 14px", boxShadow: "var(--shadow)", transform: "rotate(-2deg)", display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--good-bg)", color: "var(--good)", display: "grid", placeItems: "center" }}><Icon name="check" size={17} stroke={3} /></span>
                <span style={{ fontWeight: 800, fontSize: 13.5, color: "var(--ink)" }}>Listo para copiar<br /><span style={{ fontWeight: 600, color: "var(--muted)", fontSize: 12 }}>y pegar en Claude</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container" style={{ marginTop: 26 }}>
        <div className="grid g4" style={{ gap: 14 }}>
          {[["4", "niveles"], ["16", "módulos"], [G.meta.colaboradores + "", "colaboradores"], ["1M", "tokens de contexto"]].map((s, i) => (
            <div key={i} className="card card-pad" style={{ textAlign: "center", padding: "20px 14px" }}>
              <div className="bignum" style={{ color: "var(--blue)", fontSize: 40 }}>{s[0]}</div>
              <div className="muted" style={{ fontWeight: 700, fontSize: 13.5, marginTop: 4 }}>{s[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TILES */}
      <section className="section container">
        <SectionHead eyebrow="Centro de mando" title="¿Por dónde quieres empezar?" desc="No tienes que ser lineal: entra directo a lo que necesitas hoy." />
        <div className="grid g3">
          {tiles.map((t) => (
            <button key={t.v} onClick={() => go(t.v)}
              className="card"
              style={{ textAlign: "left", cursor: "pointer", padding: 22, display: "flex", flexDirection: "column", gap: 12, borderColor: t.feat ? "var(--blue)" : "var(--line)", boxShadow: t.feat ? "0 10px 30px rgba(0,74,152,.18)" : "var(--shadow-sm)", transition: "transform .14s, box-shadow .14s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
              <span style={{ width: 46, height: 46, borderRadius: 12, display: "grid", placeItems: "center", background: t.feat ? "var(--blue)" : "var(--blue-050)", color: t.feat ? "#fff" : "var(--blue)" }}>
                <Icon name={t.icon} size={24} />
              </span>
              <div>
                <div className="h3" style={{ fontSize: 18, display: "flex", alignItems: "center", gap: 8 }}>
                  {t.t}{t.feat && <span className="tag-pill tag-blue" style={{ fontSize: 10.5 }}>interactivo</span>}
                </div>
                <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>{t.d}</div>
              </div>
              <span style={{ marginTop: "auto", color: "var(--blue)", fontWeight: 800, fontSize: 13.5, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Abrir <Icon name="arrow" size={15} stroke={2.6} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* PROGRESS + final project banner */}
      <section className="container" style={{ paddingBottom: 30 }}>
        <div className="card card-pad" style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between", background: "var(--surface)" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div className="eyebrow">Tu progreso</div>
            <div className="h3" style={{ marginTop: 6 }}>{progress.length} de {totalMods} módulos completados</div>
            <div style={{ height: 10, borderRadius: 99, background: "var(--surface-2)", marginTop: 14, overflow: "hidden" }}>
              <div style={{ height: "100%", width: pct + "%", background: "var(--blue)", borderRadius: 99, transition: "width .4s" }} />
            </div>
          </div>
          <button className="btn btn-navy" onClick={() => go("proyecto")}>
            <Icon name="target" size={18} /> Ver el proyecto final
          </button>
        </div>
      </section>
    </div>
  );
}

/* ---------- RUTA (learning path) ---------- */
function RutaView() {
  const { go, progress } = useNav();
  const G = window.GUIA;
  return (
    <div className="container section">
      <SectionHead eyebrow="Ruta de aprendizaje" title="Cuatro niveles, dieciséis módulos."
        desc="Desde los fundamentos hasta el dominio experto y la ética. Avanza a tu ritmo; cada módulo trae explicación, analogía, prompts listos y un ejercicio práctico." />
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {G.niveles.map((nv) => {
          const doneCount = nv.modulos.filter((m) => progress.includes(m.n)).length;
          return (
            <div key={nv.id} className="card" style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", gap: 20, padding: "22px 24px", alignItems: "center", background: "var(--navy)", color: "#fff", flexWrap: "wrap" }}>
                <div className="bignum" style={{ color: "#7fb2f0" }}>{nv.id}</div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div className="eyebrow" style={{ color: "#7fb2f0" }}>{nv.etiqueta}</div>
                  <div className="h3" style={{ color: "#fff", marginTop: 2 }}>{nv.titulo}</div>
                  <div style={{ color: "#c5d2e8", fontSize: 14.5, marginTop: 6, maxWidth: 620 }}>{nv.resumen}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 900, fontSize: 22 }}>{doneCount}/{nv.modulos.length}</div>
                  <div style={{ fontSize: 12, color: "#9fb2d4" }}>módulos</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="mod-rows">
                {nv.modulos.map((m, i) => {
                  const done = progress.includes(m.n);
                  return (
                    <button key={m.n} onClick={() => go("modulo", { nivel: nv.id, mod: m.n })}
                      style={{ textAlign: "left", border: "none", borderTop: "1px solid var(--line)", borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none", background: "#fff", cursor: "pointer", padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, transition: "background .12s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
                      <span style={{ width: 34, height: 34, borderRadius: 9, flexShrink: 0, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14, background: done ? "var(--good-bg)" : "var(--blue-050)", color: done ? "var(--good)" : "var(--blue)" }}>
                        {done ? <Icon name="check" size={17} stroke={3} /> : m.n}
                      </span>
                      <span style={{ flex: 1 }}>
                        <span style={{ fontWeight: 700, fontSize: 15, color: "var(--ink)", display: "block", lineHeight: 1.25 }}>{m.titulo}</span>
                      </span>
                      <Icon name="arrow" size={17} stroke={2.4} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- MÓDULO (detail) ---------- */
function ModuloView() {
  const { route, go, progress, toggleDone } = useNav();
  const G = window.GUIA;
  const allMods = G.niveles.flatMap((nv) => nv.modulos.map((m) => ({ ...m, nivel: nv.id, nivelTit: nv.titulo, etiqueta: nv.etiqueta })));
  const idx = allMods.findIndex((m) => m.n === route.params.mod);
  const m = allMods[idx];
  if (!m) return null;
  const done = progress.includes(m.n);
  const prev = allMods[idx - 1], next = allMods[idx + 1];

  React.useEffect(() => { window.scrollTo(0, 0); }, [route.params.mod]);

  const Block = ({ icon, label, color, children }) => (
    <div style={{ marginTop: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 11 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, display: "grid", placeItems: "center", background: (color || "var(--blue)") + "1a", color: color || "var(--blue)" }}><Icon name={icon} size={17} /></span>
        <span className="eyebrow" style={{ color: color || "var(--blue)" }}>{label}</span>
      </div>
      {children}
    </div>
  );

  return (
    <div className="container section" style={{ maxWidth: 860 }}>
      <BackLink to="ruta" label="Volver a la ruta" />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
        <span className="tag-pill tag-blue">{m.etiqueta} · Módulo {m.n}</span>
        {done && <span className="tag-pill" style={{ background: "var(--good-bg)", color: "var(--good)" }}><Icon name="check" size={13} stroke={3} /> Completado</span>}
      </div>
      <h1 className="h2" style={{ marginTop: 14 }}>{m.titulo}</h1>

      <div style={{ marginTop: 18, padding: "14px 18px", borderLeft: "4px solid var(--blue)", background: "var(--blue-050)", borderRadius: "0 12px 12px 0", fontWeight: 600, color: "var(--navy)" }}>
        <span style={{ fontWeight: 800 }}>Objetivo · </span>{m.objetivos}
      </div>

      <Block icon="book" label="Explicación">
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>{m.explicacion}</p>
        {m.analogia && (
          <div style={{ marginTop: 16, display: "flex", gap: 13, alignItems: "flex-start", background: "var(--surface)", borderRadius: 14, padding: "16px 18px" }}>
            <span style={{ fontSize: 22, lineHeight: 1 }} aria-hidden>💡</span>
            <div><span style={{ fontWeight: 800 }}>La analogía: </span><span style={{ fontStyle: "italic", color: "var(--muted)" }}>{m.analogia}</span></div>
          </div>
        )}
      </Block>

      <Block icon="flask" label="Ejemplos de prompts">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {m.prompts.map((p, i) => <PromptCard key={i} rol={p.rol} texto={p.texto} />)}
        </div>
      </Block>

      <Block icon="target" label="Ejercicio práctico" color="var(--navy)">
        <div className="card" style={{ padding: "16px 18px", fontSize: 16, lineHeight: 1.55 }}>{m.ejercicio}</div>
      </Block>

      <div className="grid g2" style={{ marginTop: 26, gap: 16 }}>
        <div style={{ background: "var(--bad-bg)", borderRadius: 14, padding: "16px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, color: "var(--bad)", fontSize: 14 }}><Icon name="close" size={16} stroke={3} /> ERRORES COMUNES</div>
          <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{m.errores}</p>
        </div>
        <div style={{ background: "var(--good-bg)", borderRadius: 14, padding: "16px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, color: "var(--good)", fontSize: 14 }}><Icon name="spark" size={16} /> LO QUE DEBES RECORDAR</div>
          <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{m.recordar}</p>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <button className={"btn " + (done ? "btn-ghost" : "btn-primary")} onClick={() => toggleDone(m.n)}>
          <Icon name="check" size={18} stroke={2.6} /> {done ? "Marcar como pendiente" : "Marcar como completado"}
        </button>
      </div>

      {/* prev / next */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 34, borderTop: "1px solid var(--line)", paddingTop: 20 }}>
        {prev ? (
          <button className="btn btn-ghost btn-sm" onClick={() => go("modulo", { nivel: prev.nivel, mod: prev.n })}>
            <Icon name="back" size={15} /> <span className="nowrap">Módulo {prev.n}</span>
          </button>
        ) : <span />}
        {next ? (
          <button className="btn btn-ghost btn-sm" onClick={() => go("modulo", { nivel: next.nivel, mod: next.n })}>
            <span className="nowrap">Módulo {next.n}</span> <Icon name="arrow" size={15} />
          </button>
        ) : (
          <button className="btn btn-primary btn-sm" onClick={() => go("proyecto")}>Proyecto final <Icon name="arrow" size={15} /></button>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { HubView, RutaView, ModuloView });
