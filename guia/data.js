/* ============================================================
   DATA — Guía "Dominando Claude" · Biosteel de Colombia
   Contenido transcrito de los documentos de capacitación.
   Expuesto como window.GUIA
   ============================================================ */
window.GUIA = {

  meta: {
    empresa: "Biosteel de Colombia S.A.",
    titulo: "Dominando Claude",
    subtitulo: "Capacitación integral para la excelencia operativa",
    anio: "2026",
    colaboradores: 12,
  },

  /* --- Modelos 2026 (según material de la empresa) --- */
  modelos: [
    { nombre: "Claude Sonnet 4.6", rol: "Equilibrio velocidad + inteligencia", uso: "Redacción diaria y tareas administrativas rápidas." },
    { nombre: "Claude Opus 4.7", rol: "Razonamiento profundo", uso: "Análisis de datos complejos y validación técnica quirúrgica." },
    { nombre: "Claude Haiku", rol: "Instantáneo y económico", uso: "Saludos y tareas simples; casi 'gratis' en límite." },
  ],

  /* --- 4 NIVELES, 16 MÓDULOS --- */
  niveles: [
    {
      id: 1, etiqueta: "Nivel 1", titulo: "Fundamentos y primeros pasos",
      resumen: "Qué es Claude, cómo acceder, anatomía del prompt y qué esperar (y qué no) de la IA.",
      modulos: [
        {
          n: 1, titulo: "¿Qué es la IA generativa y qué es Claude?",
          objetivos: "Comprender la naturaleza de la IA y la identidad de Claude.",
          explicacion: "Imagine que Claude es un bibliotecario superdotado que ha leído casi todo lo que existe y tiene una excelente capacidad de análisis. No es un buscador: es un 'cerebro' (modelo de lenguaje) capaz de predecir la siguiente palabra para crear respuestas coherentes. Fue creado por Anthropic, una empresa enfocada en que la IA sea segura, ética y profesional.",
          analogia: "Un bibliotecario superdotado que lo ha leído casi todo.",
          prompts: [
            { rol: "General", texto: "Explícame de forma sencilla qué es un tornillo de osteosíntesis y para qué se usa." },
            { rol: "Administración", texto: "Dame 5 ideas de cómo organizar mejor una oficina administrativa." },
          ],
          ejercicio: "Pregúntele a Claude: «¿Cuáles son las ventajas de usar placas de titanio en cirugías de traumatología?» y analice la claridad de la respuesta.",
          errores: "Tratar a la IA como si tuviera sentimientos o conciencia. Es un programa informático avanzado, no una persona.",
          recordar: "Claude es la interfaz (la caja de texto); el LLM es el 'cerebro' que procesa la información.",
        },
        {
          n: 2, titulo: "Cómo acceder y la primera conversación",
          objetivos: "Configurar el entorno de trabajo inicial.",
          explicacion: "Se accede a través de claude.ai. Es como entrar al correo: solo necesita su cuenta y contraseña. Puede usarlo en el navegador o descargar la versión de escritorio para funciones más avanzadas (obligatoria en Biosteel para Computer Use / Cowork).",
          analogia: "Entrar es tan simple como abrir su correo electrónico.",
          prompts: [
            { rol: "Inicio", texto: "Hola Claude, soy administrador en Biosteel. ¿En qué tareas administrativas puedes apoyarme hoy?" },
            { rol: "Redacción", texto: "Ayúdame a redactar un saludo formal para un nuevo cliente de una clínica quirúrgica." },
          ],
          ejercicio: "Inicie sesión y cambie el idioma de la plataforma a Español (Latinoamérica) en los ajustes de su perfil.",
          errores: "No verificar el idioma de salida. A veces Claude responde en inglés si no se le indica lo contrario al inicio.",
          recordar: "Claude tiene una ventana de contexto de 1 millón de tokens: recuerda muchísima información en una sola conversación.",
        },
        {
          n: 3, titulo: "Anatomía de un buen prompt (Contexto · Tarea · Formato)",
          objetivos: "Aprender a dar instrucciones efectivas.",
          explicacion: "Escribir un prompt es como darle una receta a un chef. Si solo dice «haz comida», el resultado será genérico. Sea específico: Contexto (quién es usted y por qué pide esto), Tarea (qué hacer exactamente) y Formato (cómo quiere el resultado: lista, tabla, correo).",
          analogia: "Darle una receta a un chef, no solo decir «haz comida».",
          prompts: [
            { rol: "Logística", texto: "Actúa como un experto en logística. Redacta un correo breve para un hospital informando que su pedido de clavos intramedulares llegará mañana a las 8:00 AM." },
            { rol: "Calidad", texto: "Resume este texto sobre políticas de calidad en 3 puntos clave usando lenguaje sencillo." },
          ],
          ejercicio: "Mejore este prompt malo: «Haz un texto de Biosteel». Conviértalo en uno bueno incluyendo que somos aliados estratégicos en dispositivos médicos.",
          errores: "Ser demasiado vago. «Hazme un análisis» sin decir de qué genera resultados inútiles.",
          recordar: "Cuanto más específico sea, mejor la respuesta. Use ejemplos para guiar el estilo que desea.",
        },
        {
          n: 4, titulo: "Qué esperar y qué NO esperar de la IA",
          objetivos: "Conocer las limitaciones y el fenómeno de las alucinaciones.",
          explicacion: "Claude es brillante pero no perfecto. A veces 'alucina': inventa datos que parecen reales pero son falsos. Es como un asistente muy seguro de sí mismo que a veces se equivoca.",
          analogia: "Un asistente muy seguro que a veces se equivoca con total confianza.",
          prompts: [
            { rol: "Verificación", texto: "Dime si esta información sobre normatividad de insumos médicos es actual o si tienes una fecha de corte de conocimiento." },
            { rol: "Revisión", texto: "Revisa si hay inconsistencias lógicas en este párrafo que escribí." },
          ],
          ejercicio: "Pídale a Claude que cite la fuente exacta de un dato técnico y verifique si el documento mencionado realmente existe.",
          errores: "Confiar ciegamente en datos numéricos o legales complejos sin revisión humana previa.",
          recordar: "Siempre lea y verifique lo que genera la IA. El responsable final de la información es el colaborador humano.",
        },
      ],
    },
    {
      id: 2, etiqueta: "Nivel 2", titulo: "Productividad diaria",
      resumen: "Redacción, resúmenes, plantillas reutilizables y casos prácticos por área.",
      modulos: [
        {
          n: 5, titulo: "Redacción y mejora de documentos",
          objetivos: "Agilizar la creación de textos corporativos.",
          explicacion: "Claude es como un corrector de estilo y redactor creativo 24/7. Transforma notas rápidas en actas formales o correos profesionales.",
          analogia: "Un redactor y corrector de estilo disponible 24/7.",
          prompts: [
            { rol: "Actas", texto: "Convierte estas notas de la reunión de hoy en un acta formal con compromisos y responsables: [pegue sus notas]." },
            { rol: "Correo", texto: "Mejora la redacción de este correo para que suene más cercano pero mantenga el profesionalismo de Biosteel." },
          ],
          ejercicio: "Tome una queja de un cliente ficticia y pida a Claude que redacte una respuesta empática siguiendo la política de calidad de Biosteel.",
          errores: "No definir el tono. Sin especificar «profesional», puede sonar demasiado robótico o demasiado informal.",
          recordar: "Use «estilos de escritura» personalizados para que Claude aprenda cómo habla Biosteel.",
        },
        {
          n: 6, titulo: "Resúmenes y explicación de informes",
          objetivos: "Procesar grandes volúmenes de información en poco tiempo.",
          explicacion: "Claude es un traductor de lenguaje complejo a sencillo. Puede leer manuales técnicos de dispositivos médicos y explicarlos como si usted tuviera 10 años.",
          analogia: "Un traductor de lo complejo a lo sencillo.",
          prompts: [
            { rol: "Producto", texto: "Resume este PDF técnico sobre nuevas placas de titanio en 5 beneficios para el cirujano." },
            { rol: "Ventas", texto: "Explícame los puntos más importantes de este informe de ventas mensual en lenguaje no técnico." },
          ],
          ejercicio: "Suba un documento con las especificaciones de un producto de Biosteel y pida un «argumento de venta» de 30 segundos para un instrumentador quirúrgico.",
          errores: "Subir archivos demasiado pesados sin indicar qué sección específica interesa resumir.",
          recordar: "Claude puede analizar desde un libro completo hasta una simple tabla de Excel.",
        },
        {
          n: 7, titulo: "Creación de plantillas reutilizables",
          objetivos: "Estandarizar procesos administrativos frecuentes.",
          explicacion: "Es como tener un diseñador de formatos automático. Puede crear checklists de inventario o estructuras de informes que solo deba llenar.",
          analogia: "Un diseñador de formatos automático.",
          prompts: [
            { rol: "Despachos", texto: "Crea una plantilla en formato tabla para el seguimiento de despachos de material médico que incluya: Fecha, Guía, Clínica y Estado." },
            { rol: "Informes", texto: "Genera una estructura de informe semanal para el área administrativa que resalte logros y bloqueos." },
          ],
          ejercicio: "Pida un checklist para la revisión de seguridad y salud en el trabajo (SST) específico para una bodega de insumos médicos.",
          errores: "Hacer plantillas demasiado complejas que luego son difíciles de usar manualmente.",
          recordar: "Use la función de Artefactos para ver estas plantillas en una ventana lateral y descargarlas fácilmente.",
        },
        {
          n: 8, titulo: "Casos prácticos por área en Biosteel",
          objetivos: "Aplicar lo aprendido a roles específicos de la empresa.",
          explicacion: "Claude se adapta a cada perfil: para el contador es un analista; para SST es un asesor de riesgos; para logística es un organizador.",
          analogia: "Un mismo aliado que cambia de sombrero según su cargo.",
          prompts: [
            { rol: "Finanzas", texto: "Analiza esta tabla de gastos y dime qué categorías representan el 80% del presupuesto." },
            { rol: "Compras", texto: "Redacta una solicitud de cotización para un proveedor de tornillos canulados solicitando precios por volumen." },
          ],
          ejercicio: "Según su cargo actual, pida: «Soy [su cargo] en Biosteel, sugiéreme 3 formas de ahorrar 1 hora de mi trabajo diario usando IA».",
          errores: "Pensar que Claude solo sirve para escribir. También es excelente analizando datos y sugiriendo estrategias.",
          recordar: "La IA es transversal: ayuda desde el auxiliar contable hasta el ingeniero de sistemas.",
        },
      ],
    },
    {
      id: 3, etiqueta: "Nivel 3", titulo: "Trabajo experto",
      resumen: "Prompts estructurados, análisis de datos, flujos de trabajo con Proyectos y control de calidad.",
      modulos: [
        {
          n: 9, titulo: "Prompts estructurados y por pasos",
          objetivos: "Ejecutar tareas complejas que requieren múltiples etapas.",
          explicacion: "Es como dirigir una orquesta. No pida todo de golpe: divida la tarea en pasos lógicos usando etiquetas claras (como etiquetas XML) para que Claude no se pierda.",
          analogia: "Dirigir una orquesta, instrumento por instrumento.",
          prompts: [
            { rol: "Por pasos", texto: "Primero, analiza este informe. Segundo, identifica los 3 errores más comunes. Tercero, redacta un plan de mejora." },
            { rol: "Etiquetas", texto: "Usa el formato <analisis> para los datos y <recomendacion> para tus sugerencias." },
          ],
          ejercicio: "Diseñe una instrucción que primero lea un manual de producto y luego genere 5 preguntas frecuentes para clientes de Biosteel.",
          errores: "Mezclar instrucciones. Si la tarea es larga, Claude puede ignorar el final si no está bien estructurada.",
          recordar: "Poner el contexto arriba y la pregunta al final puede mejorar los resultados hasta en un 30%.",
        },
        {
          n: 10, titulo: "Análisis de datos y archivos (Excel, PDF, CSV)",
          objetivos: "Usar a Claude como un científico de datos personal.",
          explicacion: "Claude puede 'mirar' sus archivos de Excel o CSV y encontrar patrones que a simple vista no vemos. Es como tener un analista senior que revisa miles de filas en segundos.",
          analogia: "Un analista senior que lee miles de filas en segundos.",
          prompts: [
            { rol: "Ventas", texto: "De este archivo de ventas, dime cuál es el producto de traumatología que más creció en el último trimestre." },
            { rol: "Compras", texto: "Compara estos dos presupuestos de proveedores y crea una tabla resaltando cuál ofrece mejor relación costo-beneficio." },
          ],
          ejercicio: "Suba una tabla ficticia de inventario (placas y tornillos) y pida identificar qué productos están cerca de agotarse según el promedio de salida.",
          errores: "Olvidar los límites de tokens. Si el archivo es gigantesco, pida que analice solo las columnas necesarias.",
          recordar: "Claude puede crear gráficos interactivos o dashboards para visualizar datos sin fórmulas de Excel.",
        },
        {
          n: 11, titulo: "Encadenar tareas y flujos de trabajo (Proyectos)",
          objetivos: "Crear espacios de trabajo dedicados a temas específicos.",
          explicacion: "Use la función de Proyectos: una carpeta inteligente donde sube el conocimiento de Biosteel (catálogos, visión, manuales) para que Claude responda siempre basado en esa información sin repetirla.",
          analogia: "Una carpeta inteligente con memoria persistente.",
          prompts: [
            { rol: "Logística", texto: "Dentro de este Proyecto de Logística, ayúdame a optimizar las rutas de entrega de esta semana." },
            { rol: "Manuales", texto: "Basado en los manuales que subí al proyecto, redacta una guía rápida para el instrumentador quirúrgico." },
          ],
          ejercicio: "Cree un proyecto llamado «Capacitación Biosteel», suba el catálogo de productos y pida un examen corto sobre los insumos disponibles.",
          errores: "Abrir chats nuevos para temas que ya tienen un proyecto. Gasta más tokens y pierde la memoria del proyecto.",
          recordar: "Los proyectos dan a Claude una «memoria persistente» sobre su área de trabajo.",
        },
        {
          n: 12, titulo: "Verificación, control de calidad y errores",
          objetivos: "Asegurar que el trabajo final sea impecable.",
          explicacion: "Es el proceso de «Human-in-the-loop» (humano en el ciclo). Usted es el supervisor: pida a Claude que revise su propio trabajo o busque errores lógicos.",
          analogia: "Usted es el supervisor; Claude, el asistente que revisa.",
          prompts: [
            { rol: "Auditoría", texto: "Revisa el documento que generaste. ¿Hay algún dato que parezca inventado o inconsistente?" },
            { rol: "Crítica", texto: "Actúa como un crítico exigente. Dime qué le falta a este informe para ser perfecto." },
          ],
          ejercicio: "Pida un resumen de un tema complejo y luego: «Ahora verifica si el resumen omitió algún detalle crítico del texto original».",
          errores: "Aceptar la primera respuesta sin iterar. A veces la segunda o tercera versión es mucho mejor.",
          recordar: "Claude puede verificar y comparar archivos locales para asegurar que no haya duplicados o errores.",
        },
      ],
    },
    {
      id: 4, etiqueta: "Nivel 4", titulo: "Dominio, ética y aplicación",
      resumen: "Skills propias del cargo, seguridad de la información, ética laboral y proyecto final.",
      modulos: [
        {
          n: 13, titulo: "Diseño de prompts reutilizables (Skills) del cargo",
          objetivos: "Automatizar tareas recurrentes mediante 'habilidades' personalizadas.",
          explicacion: "Una Skill es como enseñarle un nuevo truco a Claude. En vez de dar instrucciones cada vez, crea un manual interno (archivo markdown) para que él ejecute una tarea de Biosteel siempre igual.",
          analogia: "Enseñarle a Claude un truco que repite siempre igual.",
          prompts: [
            { rol: "Reportes", texto: "Crea una skill para generar reportes de servicio terminados siguiendo exactamente esta estructura: [estructura]." },
            { rol: "Voz Biosteel", texto: "Usa mi skill de 'Redacción Biosteel' para este nuevo comunicado." },
          ],
          ejercicio: "Escriba un conjunto de reglas para que Claude siempre redacte sus correos con el mismo saludo y despedida institucional de Biosteel.",
          errores: "Crear skills demasiado generales que no aportan valor sobre el uso estándar de Claude.",
          recordar: "Las skills ahorran tiempo y tokens al evitar explicar sus preferencias en cada chat.",
        },
        {
          n: 14, titulo: "Seguridad de la información y normativa colombiana",
          objetivos: "Proteger los datos sensibles de la empresa y los clientes.",
          explicacion: "Claude es una herramienta externa. NUNCA suba historias clínicas, números de identificación de pacientes ni secretos financieros confidenciales. Es como no dejar las llaves de la oficina en un parque público. Recuerde la Ley 1581 de Protección de Datos en Colombia.",
          analogia: "No deje las llaves de la oficina en un parque público.",
          prompts: [
            { rol: "Privacidad", texto: "¿Qué medidas de privacidad aplicas a los datos que subo en esta conversación?" },
            { rol: "Anonimizar", texto: "Ayúdame a anonimizar este texto eliminando nombres reales y datos de contacto antes de procesarlo." },
          ],
          ejercicio: "Identifique en su labor diaria 3 tipos de datos que NO debe compartir (ej.: cédulas de pacientes, precios de compra confidenciales).",
          errores: "Subir capturas de pantalla de sistemas internos que muestran datos personales.",
          recordar: "La seguridad y el cumplimiento son pilares de Anthropic, pero la responsabilidad del usuario es fundamental.",
        },
        {
          n: 15, titulo: "Ética y buenas prácticas en el entorno laboral",
          objetivos: "Usar la IA de manera transparente y responsable.",
          explicacion: "La IA debe ser un asistente, no un reemplazo del juicio humano. Ser ético implica ser honesto sobre cuándo se usó ayuda de IA y asegurar que los resultados no tengan sesgos o errores que afecten la salud de los pacientes.",
          analogia: "La IA asiste; el criterio humano decide.",
          prompts: [
            { rol: "Sesgos", texto: "Analiza si este texto tiene algún sesgo o tono discriminatorio." },
            { rol: "Ética", texto: "Dame consejos éticos para el uso de IA en el sector salud." },
          ],
          ejercicio: "Discuta con sus compañeros: ¿cómo informaremos a la gerencia que usamos Claude para ser más eficientes, sin ocultar su uso?",
          errores: "Hacer pasar el trabajo de la IA como 100% humano sin ninguna revisión o ajuste propio.",
          recordar: "Claude está diseñado para ofrecer respuestas más éticas y seguras que otros modelos.",
        },
        {
          n: 16, titulo: "Proyecto final: Mi asistente personalizado",
          objetivos: "Integrar todo lo aprendido en una herramienta útil para el puesto.",
          explicacion: "Cada participante creará su propio Proyecto o Skill diseñado para su tarea más difícil o repetitiva. Es la culminación del entrenamiento.",
          analogia: "El examen práctico: su propio asistente de cargo.",
          prompts: [
            { rol: "Ejemplo", texto: "Un instrumentador quirúrgico crea un proyecto que genera 'Guías de uso rápido' para cirujanos basadas en los manuales de las placas de Biosteel." },
          ],
          ejercicio: "1) Identifique una tarea que le tome +30 min al día. 2) Cree un Proyecto con el contexto y archivos necesarios. 3) Diseñe el «Prompt Maestro». 4) Pruebe, detecte errores y ajuste.",
          errores: "Elegir una tarea trivial que no demuestre el poder de la herramienta.",
          recordar: "Usted ahora puede multiplicar su tiempo y mejorar la calidad de su trabajo. ¡Empiece hoy mismo!",
        },
      ],
    },
  ],

  /* --- CASOS POR ÁREA --- */
  areas: [
    { id: "finanzas", nombre: "Finanzas", desc: "Auditoría de facturas de importación y desglose de IVA.",
      prompt: "Analiza estas facturas de titanio médico, detecta discrepancias en aranceles y resume el IVA aplicado." },
    { id: "logistica", nombre: "Logística", desc: "Disponibilidad de stock y correos de despacho a proveedores.",
      prompt: "Actúa como Coordinador de Logística. Revisa la disponibilidad de placas de osteosíntesis de fémur proximal en titanio y redacta un correo al proveedor solicitando despacho inmediato. Preséntalo en una tabla." },
    { id: "sst", nombre: "SST", desc: "Formatos de inspección de bodega bajo normativa Invima.",
      prompt: "Genera un checklist de inspección de bodega de dispositivos médicos basado en la normativa Invima vigente en Colombia." },
    { id: "compras", nombre: "Compras", desc: "Evaluación de materiales y cotizaciones por volumen.",
      prompt: "Compara fichas técnicas de acero quirúrgico vs. titanio grado 5. Identifica cuál es superior para implantes de columna." },
    { id: "ingenieria", nombre: "Ingeniería", desc: "Soporte técnico de instrumental quirúrgico.",
      prompt: "Crea una guía de resolución de problemas para el set de brocas rotas o desgastadas durante una cirugía." },
    { id: "contabilidad", nombre: "Contabilidad", desc: "Análisis de gastos y categorización de presupuesto.",
      prompt: "Analiza esta tabla de gastos y dime qué categorías representan el 80% del presupuesto." },
  ],

  /* --- REGLAS DE ORO (seguridad) --- */
  reglas: {
    nunca: [
      "Historias clínicas o datos médicos de pacientes.",
      "Números de cédula o identificación de pacientes.",
      "Secretos financieros o precios de compra confidenciales.",
      "Capturas de sistemas internos que muestren datos personales.",
    ],
    siempre: [
      "Anonimizar nombres y datos de contacto antes de procesar.",
      "Verificar con criterio humano los datos numéricos y legales.",
      "Mantener el «humano en el ciclo»: usted es el supervisor.",
      "Cumplir la Ley 1581 de Protección de Datos de Colombia.",
    ],
  },

  /* --- GLOSARIO --- */
  glosario: [
    { t: "LLM", d: "Modelo de Lenguaje de Gran Escala: el 'cerebro' que procesa y genera texto. Claude es un LLM." },
    { t: "Token", d: "Unidad mínima de texto que procesa la IA (aprox. ¾ de palabra). Los planes se miden en tokens." },
    { t: "Ventana de contexto", d: "Cuánta información recuerda Claude en una conversación. Claude maneja ~1 millón de tokens (≈750.000 palabras)." },
    { t: "Alucinación", d: "Cuando la IA inventa un dato que parece real pero es falso. Siempre verifique." },
    { t: "Proyecto", d: "Carpeta inteligente con memoria persistente donde sube los archivos base de su área." },
    { t: "Artefacto", d: "Ventana lateral donde Claude muestra documentos, tablas o código con botón de descarga directa." },
    { t: "Estilos", d: "Personalización del tono de Claude (p. ej. «Voz Biosteel») para no repetir instrucciones." },
    { t: "Connectors", d: "Conexión de Claude a Google Drive / Gmail / Calendar para trabajar con sus archivos reales." },
    { t: "Prompt Caching", d: "Claude 'congela' un documento ya subido para que las siguientes preguntas sean instantáneas y más económicas." },
    { t: "Pensamiento Extendido", d: "Modo en que Claude razona paso a paso (Chain of Thought) para validar la lógica antes de responder." },
    { t: "Computer Use (Cowork)", d: "Función de escritorio que permite a Claude, bajo su supervisión, interactuar con aplicaciones y archivos locales." },
    { t: "MCP", d: "Model Context Protocol: conecta a Claude con bases de datos externas de Biosteel para trabajar con datos en tiempo real." },
    { t: "Skill", d: "Manual interno (markdown) que enseña a Claude a ejecutar una tarea recurrente siempre de la misma forma." },
    { t: "Human-in-the-loop", d: "Principio donde un humano supervisa, revisa y aprueba lo que genera la IA." },
  ],

  /* --- TRUCOS DE OPTIMIZACIÓN (Recomendaciones) --- */
  trucos: [
    { n: 1, nivel: "Básico", titulo: "La receta perfecta", clave: "Dale un rol profesional a Claude",
      texto: "Asignar un rol («Actúa como instrumentador quirúrgico experto») activa un conjunto de datos más específico en su 'cerebro'. Un rol claro + un formato definido = menos correcciones después." },
    { n: 2, nivel: "Básico", titulo: "Editar es más barato que repreguntar", clave: "Use el botón Editar",
      texto: "Cada pregunta nueva hace que Claude relea toda la conversación, gastando su límite. Si se equivocó, edite su mensaje original con el lápiz en lugar de responder abajo." },
    { n: 3, nivel: "Intermedio", titulo: "Estilos personalizados", clave: "Cree la «Voz Biosteel»",
      texto: "Configure un estilo en el botón «+» pegando un correo real de gerencia. Así no tiene que recordarle en cada prompt que somos una empresa de insumos médicos." },
    { n: 4, nivel: "Intermedio", titulo: "Artefactos descargables", clave: "Pida 'como un artefacto'",
      texto: "Para tablas, checklists o dashboards, pida el resultado «como un artefacto»: se abre en una ventana lateral limpia con botón de descarga (.csv, .html)." },
    { n: 5, nivel: "Avanzado", titulo: "La regla del 30%", clave: "Datos primero, órdenes al final",
      texto: "Claude responde hasta un 30% mejor si pega todo el material de lectura al principio y deja la pregunta para el final del prompt." },
    { n: 6, nivel: "Avanzado", titulo: "Etiquetas XML", clave: "Cajones que ordenan la mente de la IA",
      texto: "Use etiquetas como <datos> o <correo> para separar requerimientos. Recuerde cerrarlas (</datos>) para no «marear» la lógica del modelo." },
    { n: 7, nivel: "Dominio", titulo: "Proyectos = memoria persistente", clave: "No suba lo mismo cada vez",
      texto: "Cree un Proyecto «Inventario Biosteel» y suba allí los PDF permanentes. No mezcle temas: un proyecto de RR.HH. no debe usarse para ventas." },
    { n: 8, nivel: "Dominio", titulo: "Gestione sus 5 horas", clave: "Horas valle + modelo Haiku",
      texto: "Los límites se renuevan cada 5 horas. Procese archivos gigantes temprano o al final del día; use Haiku para tareas simples y /clear para limpiar la memoria al terminar." },
  ],

  /* --- PROYECTO FINAL (blueprint) --- */
  proyectoFinal: {
    titulo: "Mi Asistente de Cargo",
    intro: "Cada uno de los 12 colaboradores entrega un «Proyecto» en Claude, configurado para resolver su tarea más compleja de la semana.",
    pasos: [
      { t: "Instrucciones personalizadas", d: "«Eres el Asistente de [tu cargo] en Biosteel. Tu tono es [profesional/técnico]. Priorizas la normativa Invima.»" },
      { t: "Base de conocimiento", d: "Cargue manuales de procesos del cargo, glosario de traumatología y plantillas de correo aprobadas." },
      { t: "Hito operativo", d: "Demuestre cómo el proyecto resuelve su tarea más difícil (reporte de facturación internacional, agenda quirúrgica vía Connector de Calendar, etc.)." },
    ],
    meta: "Meta: reducir tiempos muertos, eliminar errores en especificaciones técnicas y liderar la transformación digital del sector salud.",
  },
};
