/* ============================================================
   videos.jsx — Vista de videos de la capacitación asincrónica
   ============================================================ */

/* Los tres videos en orden. Para cambiar una URL, reemplaza `embed`.
   Las URLs deben ser las de INSERCIÓN de OneDrive (con ?width=&height=)
   y el archivo debe estar compartido como "Cualquiera con el enlace". */
const VIDEOS_CAP = [
  {
    n: "01",
    titulo: "Introducción",
    desc: "Bienvenida, objetivos y cómo aprovechar esta capacitación.",
    embed: "https://youtu.be/lCHZkgw41HI",
  },
  {
    n: "02",
    titulo: "Contenido",
    desc: "Desarrollo de los temas centrales del programa.",
    embed: "https://youtu.be/7yWY0Dil8v8",
  },
  {
    n: "03",
    titulo: "Herramientas y Material",
    desc: "Recursos prácticos y material de apoyo para empezar a usar Claude.",
    embed: "https://youtu.be/sceIGlAjbLM",
  },
];

function VideoEmbedCard({ n, titulo, desc, embed }) {
  return (
    <div className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", padding: 0 }}>
      {/* Cabecera */}
      <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "16px 18px", borderBottom: "1px solid var(--line)" }}>
        <span style={{ width: 38, height: 38, borderRadius: 9, flexShrink: 0, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14, background: "var(--blue)", color: "#fff" }}>
          {n}
        </span>
        <div style={{ minWidth: 0 }}>
          <div className="h3" style={{ fontSize: 17, color: "var(--navy)", lineHeight: 1.2 }}>{titulo}</div>
          <div className="muted" style={{ fontSize: 13.5, marginTop: 3 }}>{desc}</div>
        </div>
      </div>

      {/* Reproductor 16:9 */}
      <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "var(--navy)" }}>
        {embed ? (
          <iframe
            src={embed}
            title={titulo}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: 20, color: "rgba(255,255,255,.85)", fontSize: 13.5, fontWeight: 600 }}>
            Falta la URL de inserción de «{titulo}»
          </div>
        )}
      </div>
    </div>
  );
}

function VideosView() {
  return (
    <div className="container section">
      <SectionHead
        eyebrow="Capacitación asincrónica"
        title="Videos de la capacitación"
        desc="Sigue los tres módulos en orden. Cada video puede verse en pantalla completa. Si alguno no carga, refresca la página."
      />
      <div className="grid g3">
        {VIDEOS_CAP.map((v) => (
          <VideoEmbedCard key={v.n} {...v} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { VideosView });