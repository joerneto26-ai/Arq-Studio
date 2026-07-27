export const brand = {
  name: "ARQSTUDIO",
  full: "ARQSTUDIO · Construcción & Diseño",
  tagline: "Espacios funcionales, estéticos y bien pensados.",
  established: 2023,
};

export const contact = {
  phoneDisplay: "+52 669 274 9883",
  phoneHref: "tel:+526692749883",
  whatsapp: "526692749883",
  email: "arquintero0294@gmail.com",
  address: "Sector L",
  city: "Mazatlán, Sin.",
  hours: "Lun a Vie · 9:00–18:00 · Solo con cita",
  instagram: "https://www.instagram.com/arqstudiomx",
  facebook: "https://www.facebook.com/share/1CzpcJjppF/",
};

const DEFAULT_MSG =
  "Hola ARQSTUDIO, vi su página y me gustaría una cotización sin compromiso para mi proyecto.";

export function waLink(msg: string = DEFAULT_MSG) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const nav = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Compromisos", href: "#compromisos" },
  { label: "Contacto", href: "#contacto" },
];

export const certificaciones = [
  {
    icon: "layers",
    title: "AutoCAD · SketchUp · V-Ray",
    desc: "Del plano 2D al volumen 3D y renders fotorrealistas.",
  },
  {
    icon: "file",
    title: "Planos para licencias y permisos",
    desc: "Documentación completa para trámite municipal.",
  },
  {
    icon: "helmet",
    title: "Supervisión de obra incluida",
    desc: "Visitas de supervisión y reportes de avance.",
  },
  {
    icon: "shield",
    title: "Contrato y alcance por escrito",
    desc: "Sin sorpresas ni sobrecostos ocultos.",
  },
];

/* ---- Pain point: problema → agitar → solución ---- */
export const painPoint = {
  eyebrow: "¿Le suena familiar?",
  title: "Su proyecto no debería depender de tres personas que no se hablan.",
  problems: [
    "El arquitecto dibuja, el gestor tramita, el constructor improvisa: nadie responde por el conjunto.",
    "Trámites de licencia que se alargan meses por documentación incompleta.",
    "El presupuesto crece en obra porque los planos no bajaban al detalle.",
    "Despachos grandes que no aceptan proyectos chicos — o los atienden al final.",
  ],
  agitate:
    "Mientras tanto su terreno sigue sin producir, el local sin abrir y la ampliación en pausa. Cada semana parada cuesta: rentas que corren, materiales que suben y oportunidades que pasan.",
  solution:
    "En ARQSTUDIO nos encargamos de todo: diseño arquitectónico, proyecto ejecutivo, licencia de construcción y obra supervisada. Usted habla con nosotros: diseñamos, tramitamos y construimos.",
};

/* ---- Value props (alternadas imagen izq/der) ---- */
export const valueProps = [
  {
    eyebrow: "Dream outcome",
    title: "Nos encargamos de la idea a la obra",
    desc: "Diseño, proyecto ejecutivo, licencia y construcción con un solo equipo. Sin contratistas que se echan la bolita ni información que se pierde entre tres oficinas.",
    image:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=800",
    imageAlt: "Arquitecto y supervisor revisando planos dentro de una obra en proceso",
    cta: "Quiero que se encarguen de todo",
  },
  {
    eyebrow: "Dream outcome",
    title: "Planos ejecutivos que el constructor sí puede ejecutar",
    desc: "Ventanería, carpintería, herrería, pisos, acabados, instalaciones y criterios estructurales: todo detallado antes de obra. Menos interpretaciones, menos sobrecostos, menos retrabajo.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=800",
    imageAlt: "Equipo revisando planos arquitectónicos y proyecto ejecutivo sobre mesa de trabajo",
    cta: "Quiero planos completos",
  },
  {
    eyebrow: "Dream outcome",
    title: "Precio claro antes de mover tierra",
    desc: "Usted elige cómo contratar: precios unitarios, precio alzado o administración. Con alcance y presupuesto por escrito desde el inicio, sabe exactamente qué pagará y qué recibe.",
    image: "/images/proyectos/ampliacion-casa.webp",
    imageAlt: "Fachada de ampliación de casa habitación diseñada por ARQSTUDIO",
    cta: "Quiero mi presupuesto claro",
  },
];

export const features = [
  {
    icon: "gem",
    title: "Trato directo, sin intermediarios",
    desc: "Habla con quien diseña, tramita y supervisa. Sin vendedores de por medio.",
  },
  {
    icon: "layers",
    title: "AutoCAD · SketchUp · V-Ray",
    desc: "Del plano en 2D al volumen 3D y renders fotorrealistas para decidir con certeza.",
  },
  {
    icon: "file",
    title: "Documentación para licencias",
    desc: "Alineamiento, uso de suelo, número oficial y licencia: planos y trámites incluidos.",
  },
  {
    icon: "helmet",
    title: "Supervisión de obra incluida",
    desc: "La obra se construye como se diseñó: visitas de supervisión y reportes de avance.",
  },
  {
    icon: "shield",
    title: "Alcance por escrito",
    desc: "Contrato, alcance y presupuesto firmados antes de iniciar. Sin sorpresas.",
  },
  {
    icon: "chart",
    title: "Tres formas de contratar",
    desc: "Precios unitarios, precio alzado o administración: la modalidad que le convenga.",
  },
];

export const processSteps = [
  {
    n: "01",
    icon: "gem",
    title: "Conversación sin compromiso",
    desc: "Nos cuenta su proyecto: terreno, local o ampliación. Le decimos viabilidad y ruta de trabajo.",
  },
  {
    n: "02",
    icon: "layers",
    title: "Anteproyecto",
    desc: "Plantas, alzados, secciones, volumen 3D y renders. Usted aprueba el diseño antes de gastar en detalle.",
  },
  {
    n: "03",
    icon: "file",
    title: "Proyecto ejecutivo + licencia",
    desc: "Planos completos para construir y toda la documentación para permisos y licencia de construcción.",
  },
  {
    n: "04",
    icon: "helmet",
    title: "Construcción supervisada",
    desc: "Obra con la modalidad de precio que eligió, supervisión del arquitecto y reportes de avance.",
  },
];

export const portfolio = [
  {
    title: "Local Comercial — Obra Nueva",
    category: "Comercial",
    location: "Mazatlán",
    meta: "Proyecto Ejecutivo",
    span: "lg",
    image: "/images/proyectos/local-comercial.webp",
  },
  {
    title: "Ampliación Casa Habitación",
    category: "Residencial",
    location: "Mazatlán",
    meta: "Proyecto Ejecutivo",
    span: "sm",
    image: "/images/proyectos/ampliacion-casa.webp",
  },
  {
    title: "Departamentos",
    category: "Residencial",
    location: "Mazatlán",
    meta: "Diseño Arq. + Proyecto Ejecutivo",
    span: "sm",
    image: "/images/proyectos/departamentos-a.webp",
  },
  {
    title: "Departamentos — Propuesta Fachada",
    category: "Residencial",
    location: "Mazatlán",
    meta: "Diseño Arq. + Proyecto Ejecutivo",
    span: "sm",
    image: "/images/proyectos/departamentos-b.webp",
  },
];

export const compromisos = [
  {
    title: "Propuesta y ruta en días, no semanas",
    desc: "Tras la primera conversación recibe alcance, tiempos y costo estimado por escrito.",
  },
  {
    title: "Presupuesto cerrado por escrito",
    desc: "Lo que firma es lo que paga. Todo cambio se cotiza y autoriza antes de ejecutarse.",
  },
  {
    title: "Licencia gestionada de principio a fin",
    desc: "Alineamiento, uso de suelo, número oficial, licencia, prórroga y terminación de obra.",
  },
  {
    title: "Obra supervisada y reportada",
    desc: "Visitas de supervisión y reportes de avance. Su proyecto, siempre visible y medible.",
  },
];

export const services = [
  {
    name: "Diseño Arquitectónico + Proyecto Ejecutivo",
    tagline: "De la idea a los planos completos para construir.",
    price: "Cotización a medida",
    priceNote: "según alcance y m²",
    includes: [
      "Anteproyecto: plantas, alzados, secciones, volumen 3D y renders",
      "Planos para permisos y licencias de construcción",
      "Proyecto ejecutivo: ventanería, carpintería y herrería",
      "Pisos, planos de albañilería y plano de acabados",
      "Instalaciones y criterios estructurales",
    ],
    cta: "Cotizar este servicio",
  },
  {
    name: "Gestión de Proyectos",
    tagline: "Su licencia de construcción sin filas ni idas y vueltas.",
    price: "Cotización a medida",
    priceNote: "según tipo de trámite",
    includes: [
      "Trámite completo de licencia de construcción",
      "Alineamiento y uso de suelo",
      "Número oficial",
      "Prórrogas de licencia vigente",
      "Terminación de obra",
    ],
    cta: "Cotizar este servicio",
  },
  {
    name: "Construcción del Proyecto",
    tagline: "Obra con precio claro y supervisión del arquitecto.",
    price: "Cotización a medida",
    priceNote: "según modalidad elegida",
    includes: [
      "Presupuesto por precios unitarios",
      "Precio alzado (llave en mano)",
      "Precio por administración",
      "Supervisión de obra incluida",
      "Reportes de avance periódicos",
    ],
    cta: "Cotizar este servicio",
  },
];

export const benefitsImage =
  "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1100";

export const benefits = [
  "Nos encargamos de todo: diseño, licencia y obra con un solo equipo.",
  "Documentación completa para permisos incluida desde el inicio.",
  "Supervisión de obra y reportes de avance periódicos.",
  "Tres modalidades de precio: unitarios, alzado o administración.",
];

export const faqs = [
  {
    q: "¿Qué diferencia hay entre precios unitarios, alzado y administración?",
    a: "Unitarios: paga por partida realmente ejecutada, medida en obra. Alzado: precio cerrado total desde el inicio. Administración: usted paga costos directos más un porcentaje fijo de administración. Le explicamos cuál conviene a su proyecto en la primera conversación.",
  },
  {
    q: "¿Cuánto tarda la licencia de construcción en Mazatlán?",
    a: "Depende del tipo de obra y del municipio, pero con la documentación completa desde el inicio el trámite típicamente toma de 4 a 8 semanas. Preparamos alineamiento, uso de suelo, número oficial y planos para que no haya observaciones.",
  },
  {
    q: "¿Qué incluye exactamente el proyecto ejecutivo?",
    a: "Los planos que el constructor necesita para no improvisar: ventanería, carpintería, herrería, pisos, planos de albañilería, plano de acabados, instalaciones y criterios estructurales.",
  },
  {
    q: "¿Puedo contratar solo los planos y construir con mi propio constructor?",
    a: "Claro. Muchos clientes contratan solo el diseño y el proyecto ejecutivo. Sus planos quedan listos para que cualquier constructor serio los ejecute tal cual.",
  },
  {
    q: "¿Hacen proyectos chicos: ampliaciones, locales, remodelaciones?",
    a: "Sí. Como estudio independiente, los proyectos chicos y medianos son nuestra especialidad: ampliaciones, locales comerciales, departamentos y casa habitación.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Escríbanos por WhatsApp. Agendamos una cita, entendemos su proyecto y le enviamos propuesta con alcance y costo por escrito. Sin compromiso.",
  },
];

export const locations = [
  "Centro Histórico",
  "Malecón",
  "Zona Dorada",
  "Cerritos",
  "Marina Mazatlán",
  "El Cid",
  "Real del Valle",
  "Pradera Dorada",
  "Hacienda del Seminario",
  "Tellería",
  "Sábalo",
  "Villa Unión",
  "El Walamo",
  "Sector L",
  "Fracc. del Mar",
  "Estrella del Mar",
];

export const projectTypes = [
  "Obra nueva (casa, local, departamentos)",
  "Ampliación casa habitación",
  "Local comercial",
  "Remodelación",
  "Solo planos / proyecto ejecutivo",
  "Solo trámite o licencia",
  "Otro",
];
