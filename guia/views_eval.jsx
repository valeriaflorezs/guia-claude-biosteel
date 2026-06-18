/* ============================================================
   views_eval.jsx — Diagnóstico grupal (AhaSlides) + Evaluación
   individual PRE/POS (Microsoft Forms) + clave de respuestas
   ============================================================ */

/* --- Enlaces externos (edítalos aquí cuando cambien) --- */
// Presentación interactiva de AhaSlides (diagnóstico grupal en vivo).
// Si el embed muestra "la presentación terminó", reemplaza este enlace
// por el de "Compartir / Embed" actual de tu cuenta de AhaSlides.
const AHA_URL = "https://presenter.ahaslides.com/casting/9459681/1781098732923-q3tmf7uapb";
// Enlace del cuestionario individual en Microsoft Forms.
// Pégalo aquí y el botón se activará automáticamente. Si lo dejas vacío,
// se muestra un recuadro "pendiente de enlazar".
const FORM_URL = "https://forms.office.com/r/4R2yP1AQ0Q";

/* --- Clave de respuestas del cuestionario (10 preguntas · 100 pts) --- */
/* Transcrita del formulario "Cuestionario Dominando Claude". */
const CLAVE_RESPUESTAS = [
  { n: 11, pts: 10, q: "¿Cuál de estas opciones corresponde a modelos de Claude?",
    r: "Sonnet 4.6, Opus 4.8 y Haiku 4.5" },
  { n: 12, pts: 10, q: "¿Cuál es la estructura recomendada para escribir un buen prompt?",
    r: "Contexto + Tarea + Formato" },
  { n: 13, pts: 10, q: "En el mundo de la IA, ¿qué es un «token»?",
    r: "La unidad mínima de texto que se procesa; con ellos se mide cuánto «lee» y consume." },
  { n: 14, pts: 10, q: "¿Cada cuánto se renuevan los límites de uso de Claude?",
    r: "Aproximadamente cada 5 horas" },
  { n: 15, pts: 10, q: "Olvidaste un dato importante en tu prompt. ¿Cuál es la forma MÁS eficiente de arreglarlo?",
    r: "Editar tu mensaje original y agregarle el dato que faltaba" },
  { n: 16, pts: 10, q: "Un cirujano te pide resumir un documento que incluye nombre y cédula de un paciente. ¿Es correcto subirlo tal cual?",
    r: "No: está prohibido subir nombres, cédulas o historias clínicas; primero hay que anonimizar el texto." },
  { n: 17, pts: 10, q: "¿Qué es un «artefacto» en Claude?",
    r: "Una ventana lateral donde aparece el resultado limpio (tabla, documento) con botón de descarga." },
  { n: 18, pts: 10, q: "¿Para qué sirve un «Proyecto» en Claude?",
    r: "Para crear una base de conocimiento con memoria." },
  { n: 19, pts: 10, q: "¿Qué es una «alucinación» en una IA como Claude?",
    r: "Cuando inventa un dato que parece real." },
  { n: 20, pts: 10, q: "Armas el mismo formato de reporte cada día. ¿Forma MÁS efectiva de que Claude lo haga siempre igual?",
    r: "Crear una Skill que le enseñe a ejecutar esa tarea siempre de la misma forma.",
    nota: "Distractor frecuente: «Proyecto». Recuerda la distinción del Módulo 13 — la Skill enseña CÓMO ejecutar la tarea siempre igual; el Proyecto aporta memoria y conocimiento del área." },
];

function EvaluacionView() {
  const [verClave, setVerClave] = React.useState(false);
  const totalPts = CLAVE_RESPUESTAS.reduce((s, x) => s + x.pts, 0);

  return (
    <div className="container section">
      <SectionHead
        eyebrow="Diagnóstico y evaluación"
        title="Diagnóstico grupal y evaluación final."
        desc="Dos instrumentos complementarios: un diagnóstico grupal en vivo para activar al equipo y romper el hielo, y un cuestionario individual PRE/POS que mide el aprendizaje real de cada colaborador." />

      {/* --- Resumen de los dos métodos --- */}
      <div className="grid g2" style={{ marginBottom: 26 }}>
        <div className="card card-pad" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, display: "grid", placeItems: "center", background: "var(--blue)", color: "#fff" }}>
            <Icon name="layers" size={24} />
          </span>
          <div>
            <div className="h3" style={{ fontSize: 18 }}>Diagnóstico grupal · en vivo</div>
            <p className="muted" style={{ margin: "6px 0 0", fontSize: 15, lineHeight: 1.55 }}>
              Presentación interactiva (AhaSlides) que se proyecta en la sesión. Todos responden desde el celular y los resultados se ven al instante: ideal para medir el punto de partida del grupo.
            </p>
          </div>
        </div>
        <div className="card card-pad" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, display: "grid", placeItems: "center", background: "var(--navy)", color: "#fff" }}>
            <Icon name="doc" size={24} />
          </span>
          <div>
            <div className="h3" style={{ fontSize: 18 }}>Evaluación individual · PRE/POS</div>
            <p className="muted" style={{ margin: "6px 0 0", fontSize: 15, lineHeight: 1.55 }}>
              Cuestionario de 10 preguntas (100 pts) en Microsoft Forms. El mismo formulario se aplica antes (PRE) y después (POS): la diferencia mide cuánto aprendió cada persona.
            </p>
          </div>
        </div>
      </div>

      {/* --- A · DIAGNÓSTICO GRUPAL (AhaSlides) --- */}
      <div className="card" style={{ overflow: "hidden", marginBottom: 26 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "16px 20px", borderBottom: "1px solid var(--line)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span style={{ color: "var(--blue)" }}><Icon name="play" size={20} /></span>
            <div>
              <div className="h3" style={{ fontSize: 18 }}>Diagnóstico grupal en vivo</div>
              <div className="muted" style={{ fontSize: 13.5 }}>Proyecta esta presentación y comparte el código de AhaSlides con el equipo.</div>
            </div>
          </div>
          <a className="btn btn-ghost btn-sm" href={AHA_URL} target="_blank" rel="noopener">
            <Icon name="arrow" size={15} stroke={2.4} /> Abrir en pantalla completa
          </a>
        </div>
        {/* embed responsivo 16:9 */}
        <div style={{ position: "relative", width: "100%", paddingBottom: "59.27%", height: 0, background: "#0c1422" }}>
          <iframe
            src={AHA_URL}
            title="Diagnóstico grupal · AhaSlides"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div>
        <div style={{ padding: "12px 20px", background: "var(--surface)", fontSize: 13, color: "var(--muted)", display: "flex", gap: 8, alignItems: "center" }}>
          <Icon name="bulb" size={15} /> Si el recuadro queda en negro o dice que la presentación terminó, abre AhaSlides y actualiza el enlace en <span className="mono" style={{ background: "#fff", padding: "2px 7px", borderRadius: 6, fontSize: 12 }}>AHA_URL</span>.
        </div>
      </div>

      {/* --- B · EVALUACIÓN INDIVIDUAL (Forms) --- */}
      <div className="card card-pad" style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ width: 48, height: 48, borderRadius: 12, background: "var(--blue-050)", color: "var(--blue)", display: "grid", placeItems: "center" }}><Icon name="doc" size={24} /></span>
            <div>
              <div className="h3" style={{ fontSize: 18 }}>Cuestionario individual «Dominando Claude»</div>
              <div className="muted" style={{ fontSize: 13.5 }}>Microsoft Forms · 10 preguntas calificadas · {totalPts} puntos</div>
            </div>
          </div>
          {FORM_URL ? (
            <a className="btn btn-primary" href={FORM_URL} target="_blank" rel="noopener">
              <Icon name="arrow" size={18} stroke={2.4} /> Abrir cuestionario
            </a>
          ) : (
            <span className="tag-pill" style={{ background: "var(--bad-bg)", color: "var(--bad)" }}>
              <Icon name="lock" size={14} /> Pendiente de enlazar
            </span>
          )}
        </div>

        {!FORM_URL && (
          <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--surface)", borderRadius: 10, fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
            Pega el enlace de tu formulario en la constante <span className="mono" style={{ background: "#fff", padding: "2px 7px", borderRadius: 6, fontSize: 13 }}>FORM_URL</span> (arriba en este archivo) y el botón se activará automáticamente.
          </div>
        )}

        {/* Cómo se aplica PRE/POS */}
        <div className="grid g2" style={{ marginTop: 18, gap: 14 }}>
          <div style={{ background: "var(--blue-050)", borderRadius: 12, padding: "14px 16px" }}>
            <div className="eyebrow" style={{ color: "var(--blue)" }}>PRE · antes</div>
            <p style={{ margin: "7px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "var(--navy)" }}>
              Se aplica al iniciar la jornada, sin consultar fuentes externas. Mide los conocimientos previos del colaborador.
            </p>
          </div>
          <div style={{ background: "var(--good-bg)", borderRadius: 12, padding: "14px 16px" }}>
            <div className="eyebrow" style={{ color: "var(--good)" }}>POS · después</div>
            <p style={{ margin: "7px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>
              El mismo cuestionario al cerrar la capacitación. La mejora PRE → POS es el indicador de aprendizaje del programa.
            </p>
          </div>
        </div>
      </div>

      {/* --- CLAVE DE RESPUESTAS (uso del facilitador) --- */}
      <div className="card" style={{ overflow: "hidden", marginTop: 26 }}>
        <button
          onClick={() => setVerClave((v) => !v)}
          style={{ width: "100%", textAlign: "left", border: "none", background: verClave ? "var(--navy)" : "#fff", color: verClave ? "#fff" : "var(--ink)", cursor: "pointer", padding: 20, display: "flex", alignItems: "center", gap: 14, transition: "background .15s, color .15s" }}>
          <span style={{ width: 44, height: 44, borderRadius: 11, flexShrink: 0, display: "grid", placeItems: "center", background: verClave ? "rgba(255,255,255,.12)" : "var(--blue-050)", color: verClave ? "#fff" : "var(--blue)" }}>
            <Icon name="shield" size={22} />
          </span>
          <span style={{ flex: 1 }}>
            <span className="h3" style={{ fontSize: 18, display: "block", color: "inherit" }}>Clave de respuestas</span>
            <span style={{ fontSize: 13.5, color: verClave ? "#c5d2e8" : "var(--muted)" }}>Solo para el facilitador · no proyectar antes de la revisión grupal</span>
          </span>
          <span style={{ fontWeight: 800, fontSize: 13.5, display: "inline-flex", alignItems: "center", gap: 7, color: verClave ? "#7fb2f0" : "var(--blue)" }}>
            {verClave ? "Ocultar" : "Mostrar respuestas"}
            <span style={{ transform: verClave ? "rotate(90deg)" : "none", transition: "transform .2s", display: "inline-flex" }}><Icon name="arrow" size={16} stroke={2.4} /></span>
          </span>
        </button>

        {verClave && (
          <div style={{ padding: 8 }} className="fade-up">
            {CLAVE_RESPUESTAS.map((it, i) => (
              <div key={it.n} style={{ padding: "16px 16px", borderTop: i === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, flexShrink: 0, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14, background: "var(--blue-050)", color: "var(--blue)" }}>{it.n}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, fontSize: 15.5, color: "var(--ink)", lineHeight: 1.4 }}>{it.q}</span>
                    <span className="tag-pill" style={{ fontSize: 10.5 }}>{it.pts} pts</span>
                  </div>
                  <div style={{ marginTop: 8, display: "flex", gap: 9, alignItems: "flex-start", background: "var(--good-bg)", borderRadius: 10, padding: "9px 12px" }}>
                    <span style={{ color: "var(--good)", flexShrink: 0, marginTop: 1 }}><Icon name="check" size={16} stroke={3} /></span>
                    <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)", lineHeight: 1.5 }}>{it.r}</span>
                  </div>
                  {it.nota && (
                    <div style={{ marginTop: 8, fontSize: 13, color: "var(--muted)", lineHeight: 1.5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--warn)", flexShrink: 0, marginTop: 1 }}><Icon name="bulb" size={14} /></span>
                      <span>{it.nota}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div style={{ padding: "14px 16px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 800, fontSize: 15 }}>
              <span className="muted" style={{ fontWeight: 700 }}>Puntaje total</span>
              <span style={{ color: "var(--blue)" }}>{totalPts} / {totalPts} pts</span>
            </div>
          </div>
        )}
      </div>

      {/* nota de seguridad / cierre */}
      <div className="card card-pad" style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "flex-start", background: "var(--navy)", color: "#fff" }}>
        <span style={{ color: "#7fb2f0", flexShrink: 0 }}><Icon name="shield" size={26} /></span>
        <div>
          <div className="h3" style={{ color: "#fff", fontSize: 18 }}>Antes de aplicar la evaluación</div>
          <p style={{ color: "#c5d2e8", margin: "6px 0 0", fontSize: 15, lineHeight: 1.55 }}>
            Las preguntas 1 a 3 piden datos personales (nombres, apellidos y número de identificación). Maneja esa información bajo la Ley 1581 de Protección de Datos y consérvala solo para el reporte interno de resultados.
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EvaluacionView });
