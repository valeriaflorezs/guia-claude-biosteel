/* ============================================================
   app.jsx — Root: routing + progreso + layout
   ============================================================ */
function useProgress() {
  const [progress, setProgress] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem("guia-progress") || "[]"); } catch (e) { return []; }
  });
  const toggleDone = (n) => setProgress((cur) => {
    const next = cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n];
    try { localStorage.setItem("guia-progress", JSON.stringify(next)); } catch (e) {}
    return next;
  });
  return [progress, toggleDone];
}

function App() {
  const [route, setRoute] = React.useState({ view: "hub", params: {} });
  const [progress, toggleDone] = useProgress();

  const go = (view, params = {}) => {
    setRoute({ view, params });
    if (view !== "modulo") window.scrollTo(0, 0);
  };

  const views = {
    hub: HubView, ruta: RutaView, modulo: ModuloView, casos: CasosView,
    recetario: RecetarioView, reglas: ReglasView, glosario: GlosarioView,
    trucos: TrucosView, proyecto: ProyectoView, manual: ManualView, deck: DeckView,
    evaluacion: EvaluacionView, videos: VideosView,
  };
  const View = views[route.view] || HubView;

  const ctx = { route, go, progress, toggleDone };

  if (route.view === "deck") {
    return (<NavCtx.Provider value={ctx}><DeckView /></NavCtx.Provider>);
  }

  return (
    <NavCtx.Provider value={ctx}>
      <div id="root">
        <TopBar />
        <div className="app-wrap fade-up" key={route.view + (route.params.mod || "")}>
          <View />
        </div>
        <Footer />
      </div>
    </NavCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
