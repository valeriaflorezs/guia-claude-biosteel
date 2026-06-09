/* ============================================================
   recetario.jsx — Constructor interactivo de prompts
   ============================================================ */
function RecetarioView() {
  const roles = [
    "Coordinador de Logística", "Analista Contable", "Asesor de SST",
    "Encargado de Compras", "Instrumentador Quirúrgico", "Ingeniero de Soporte",
    "Asistente Administrativo",
  ];
  const formatos = [
    { id: "tabla", label: "Tabla", frase: "una tabla" },
    { id: "correo", label: "Correo", frase: "un correo profesional" },
    { id: "lista", label: "Lista con viñetas", frase: "una lista con viñetas" },
    { id: "pasos", label: "Paso a paso", frase: "una guía paso a paso" },
    { id: "resumen", label: "Resumen breve", frase: "un resumen de 3 puntos clave" },
  ];
  const tonos = ["profesional", "técnico", "cercano", "conciso"];

  const [rol, setRol] = React.useState(roles[0]);
  const [tarea, setTarea] = React.useState("");
  const [formato, setFormato] = React.useState("tabla");
  const [tono, setTono] = React.useState("profesional");
  const [datos, setDatos] = React.useState(false);

  const tareaTxt = tarea.trim() || "[describe aquí la tarea concreta que necesitas]";
  const fFrase = formatos.find((f) => f.id === formato).frase;

  const prompt =
    (datos ? "[Pega aquí el documento, tabla o texto de referencia]\n\n" : "") +
    `Actúa como ${rol} de Biosteel de Colombia S.A. ` +
    `${tareaTxt}${/[.?!]$/.test(tareaTxt) ? "" : "."} ` +
    `Usa un tono ${tono} y preséntalo en ${fFrase}.`;

  const filled = tarea.trim().length > 0;

  const Step = ({ n, label, children }) => (
    <div className="card card-pad" style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: "var(--blue)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span>
        <span style={{ fontWeight: 800, fontSize: 15 }}>{label}</span>
      </div>
      {children}
    </div>
  );

  return (
    <div className="container section" style={{ maxWidth: 1000 }}>
      <SectionHead eyebrow="Recetario · interactivo" title="Arma tu prompt como una receta."
        desc="Contexto + Tarea + Formato. Completa los tres pasos y copia un prompt listo para pegar en Claude. (Recuerda: los datos van primero, la orden al final.)" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="rec-cols">
        {/* LEFT — controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Step n="1" label="Contexto — ¿quién eres?">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {roles.map((r) => (
                <button key={r} className={"chip" + (rol === r ? " on" : "")} onClick={() => setRol(r)} style={{ fontSize: 12.5 }}>{r}</button>
              ))}
            </div>
          </Step>

          <Step n="2" label="Tarea — ¿qué necesitas?">
            <textarea value={tarea} onChange={(e) => setTarea(e.target.value)}
              placeholder="Ej.: Redacta un correo al proveedor solicitando despacho inmediato de placas de fémur proximal en titanio"
              rows={4}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 11, border: "1.5px solid var(--line-strong)", fontSize: 15, fontFamily: "var(--sans)", resize: "vertical", outline: "none", lineHeight: 1.5 }}
              onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--line-strong)")} />
            <label style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 12, cursor: "pointer", fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
              <input type="checkbox" checked={datos} onChange={(e) => setDatos(e.target.checked)} style={{ width: 17, height: 17, accentColor: "var(--blue)" }} />
              Voy a adjuntar un documento o datos de referencia
            </label>
          </Step>

          <Step n="3" label="Formato — ¿cómo lo quieres?">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {formatos.map((f) => (
                <button key={f.id} className={"chip" + (formato === f.id ? " on" : "")} onClick={() => setFormato(f.id)}>{f.label}</button>
              ))}
            </div>
            <div style={{ marginTop: 14, fontWeight: 700, fontSize: 13.5, color: "var(--muted)" }}>Tono</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {tonos.map((t) => (
                <button key={t} className={"chip" + (tono === t ? " on" : "")} onClick={() => setTono(t)} style={{ textTransform: "capitalize" }}>{t}</button>
              ))}
            </div>
          </Step>
        </div>

        {/* RIGHT — live result */}
        <div style={{ position: "sticky", top: 90, alignSelf: "start" }}>
          <div className="card" style={{ overflow: "hidden", borderColor: filled ? "var(--blue)" : "var(--line)", boxShadow: filled ? "0 12px 34px rgba(0,74,152,.16)" : "var(--shadow-sm)", transition: "all .2s" }}>
            <div style={{ padding: "14px 18px", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 800, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><Icon name="spark" size={17} /> Tu prompt</span>
              <CopyButton text={prompt} label="Copiar prompt" />
            </div>
            <pre style={{ margin: 0, padding: 20, fontFamily: "var(--mono)", fontSize: 14, lineHeight: 1.65, color: "var(--ink)", whiteSpace: "pre-wrap", wordBreak: "break-word", background: filled ? "#fff" : "var(--surface)" }}>{prompt}</pre>
          </div>

          <div style={{ marginTop: 16, padding: "14px 16px", background: "var(--blue-050)", borderRadius: 12, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ color: "var(--blue)", flexShrink: 0 }}><Icon name="bulb" size={20} /></span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--navy)" }}>
              <b>Tip:</b> dar un rol profesional “activa” datos más específicos en Claude. Un rol claro + un formato definido = menos correcciones después.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { RecetarioView });
