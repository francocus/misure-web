import type {
  CaseStudy,
  ContactInfo,
  Cta,
  Differentiator,
  FaqItem,
  ForWhoSection,
  NavItem,
  PortfolioItem,
  ProblemSection,
  Service,
} from "./types";

import legalDashboard from "../assets/proyectos/legal/dashboard.png";
import legalExpediente from "../assets/proyectos/legal/expediente.png";
import legalClientes from "../assets/proyectos/legal/clientes.png";
import legalAgenda from "../assets/proyectos/legal/agenda.png";
import legalBibliotecaIa from "../assets/proyectos/legal/biblioteca-ia.png";
import legalContabilidad from "../assets/proyectos/legal/contabilidad.png";
import leadsNuevaConsulta from "../assets/proyectos/leadscrm/01-nueva-consulta.png";
import leadsBaseDeDatos from "../assets/proyectos/leadscrm/02-base-de-datos.png";
import leadsConfiguracion from "../assets/proyectos/leadscrm/03-configuracion.png";
import leadsLogin from "../assets/proyectos/leadscrm/04-login.png";
import leadsMetricas from "../assets/proyectos/leadscrm/05-metricas.png";
import azLandingHero from "../assets/proyectos/az-landing/az-hero.png";
import azLandingServicios from "../assets/proyectos/az-landing/az-servicios.png";
import azLandingComoTrabajamos from "../assets/proyectos/az-landing/az-como-trabajamos.png";
import azLandingContacto from "../assets/proyectos/az-landing/az-contacto.png";
import pediatricLandingHero from "../assets/proyectos/pediatric/landing-hero.png";
import pediatricLandingJourney from "../assets/proyectos/pediatric/landing-journey.png";
import pediatricLandingTestimonials from "../assets/proyectos/pediatric/landing-testimonials.png";
import pediatricLandingContacto from "../assets/proyectos/pediatric/landing-contacto.png";
import pediatricErpDashboard from "../assets/proyectos/pediatric/erp-dashboard.png";
import pediatricErpPortalRequests from "../assets/proyectos/pediatric/erp-portal-requests.png";
import pediatricErpAppointments from "../assets/proyectos/pediatric/erp-appointments.png";
import pediatricErpAppointmentDialog from "../assets/proyectos/pediatric/erp-appointment-dialog.png";
import pediatricErpConsultations from "../assets/proyectos/pediatric/erp-consultations.png";
import pediatricErpPatientRecord from "../assets/proyectos/pediatric/erp-patient-record.png";
import pediatricPortalAppointments from "../assets/proyectos/pediatric/portal-appointments.png";
import limpiezaAdmin1 from "../assets/proyectos/limpieza/admin1.png";
import limpiezaAdmin2 from "../assets/proyectos/limpieza/admin2.png";
import limpiezaAdmin3 from "../assets/proyectos/limpieza/admin3.png";
import limpiezaLogin from "../assets/proyectos/limpieza/login.png";

export const isPending = (value: string) => value.includes("[PENDIENTE");

export const hasRealAnswer = (value: string) =>
  value.replace(/\[PENDIENTE:[^\]]*\]/g, "").trim().length > 0;

export const cleanAnswer = (value: string) =>
  value.replace(/\[PENDIENTE:[^\]]*\]/g, "").trim();

export const site = {
  name: "misure",
  url: "https://misure.dev",
  announcement:
    "Software a medida en Rosario. Prototipo gratis antes de contratar.",
  menuLabel: "Menú",
  metaTitle: "misure | Software a medida para pymes de Rosario y alrededores",
  metaDescription:
    "misure desarrolla sistemas de gestión, CRM y páginas web a medida para pymes de Rosario y alrededores. Prototipo gratis antes de firmar.",
  tagline: "Software a medida para pequeñas y medianas empresas de Argentina.",
};

export const footer = {
  navTitle: "Navegación",
  contactTitle: "Contacto",
  ctaLabel: "Contanos tu caso",
  privacyLabel: "Privacidad",
  legal: "Todos los derechos reservados",
};

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
];

export const headerCta: Cta = {
  label: "Quiero mi prototipo gratis",
  href: "/contacto#contacto",
};

export const pages = {
  home: { title: site.metaTitle, description: site.metaDescription },
  nosotros: {
    title: "Nosotros | misure",
    description:
      "Conocé al equipo detrás de misure: sistemas de gestión, ventas y páginas web a medida para pymes de Rosario y alrededores.",
    h1: "Nosotros",
  },
  proyectos: {
    title: "Proyectos | misure",
    description:
      "Casos de éxito de misure: sistemas de gestión, ventas y páginas web a medida para pymes de Rosario. Resultados reales, no promesas.",
    h1: "Proyectos",
  },
  contacto: {
    title: "Contacto | misure",
    description:
      "Contanos en qué etapa está tu negocio y te mostramos cómo un sistema a medida puede resolver tu problema. Prototipo gratis, sin compromiso.",
    h1: "Hablemos",
    intro:
      "Contanos en qué etapa está tu negocio y empecemos con un prototipo gratis, sin compromiso.",
  },
};

export const privacy = {
  title: "Privacidad | misure",
  description:
    "Cómo trata misure los datos que dejás en el formulario de contacto: para qué se usan, quién los procesa y cómo pedir su eliminación.",
  eyebrow: "Legal",
  h1: "Privacidad",
  intro: "Qué hacemos con los datos que nos dejás y qué no hacemos nunca.",
  updatedAt: "Última actualización: septiembre de 2026",
  sections: [
    {
      title: "Qué datos pedimos",
      body: [
        "Solo los que cargás en el formulario de contacto: nombre, empresa (opcional), email, teléfono, el tipo de servicio que te interesa y, si querés, los detalles que nos cuentes.",
        "No pedimos datos sensibles, información financiera ni nada que no esté en ese formulario.",
      ],
    },
    {
      title: "Para qué los usamos",
      body: [
        "Únicamente para responder tu consulta y coordinar una charla de 20 minutos. Nada más.",
        "No los usamos para publicidad, no te suscribimos a ningún envío y no armamos perfiles tuyos.",
      ],
    },
    {
      title: "Con quién se comparten",
      body: [
        "No vendemos, alquilamos ni cedemos tus datos a terceros.",
        "El formulario se envía a través de Web3Forms, el proveedor que recibe el mensaje y lo reenvía a nuestro correo (contacto@misure.dev). Es el único tercero que interviene, y lo hace solo como intermediario técnico para que el mensaje llegue. Su infraestructura puede estar fuera de Argentina.",
      ],
    },
    {
      title: "Cuánto tiempo los conservamos",
      body: [
        "El tiempo necesario para atender tu consulta y, si seguimos trabajando juntos, mientras dure la relación comercial.",
        "Cuando nos pidas que los eliminemos, los borramos.",
      ],
    },
    {
      title: "Qué podés pedirnos",
      body: [
        "Podés pedirnos acceso, corrección o eliminación de tus datos escribiendo a contacto@misure.dev. Te respondemos en menos de 24 horas hábiles.",
        "En Argentina el tratamiento de datos personales está regulado por la Ley 25.326, y la autoridad de aplicación es la Agencia de Acceso a la Información Pública (AAIP).",
      ],
    },
    {
      title: "Cookies y analítica",
      body: [
        "Este sitio no usa cookies, ni de seguimiento ni de publicidad, ni analítica de terceros.",
        "Si en algún momento sumamos analítica, va a ser con tu consentimiento previo y vas a poder rechazarla.",
      ],
    },
    {
      title: "Cambios en esta política",
      body: [
        "Si cambiamos algo de lo que dice esta página, actualizamos la fecha del encabezado.",
      ],
    },
    {
      title: "Registros del servidor",
      body: [
        "Como cualquier sitio, el servidor que aloja esta página registra accesos técnicos (dirección IP, fecha y página visitada) para que el sitio funcione y para prevenir abusos.",
        "Esos registros no se cruzan con tus datos de contacto ni se usan para perfilarte.",
      ],
    },
  ],
};

export const clients = {
  eyebrow: "Validación social",
  title: "No prometemos resultados. Los mostramos.",
  description:
    "Un sistema de gestión a medida corre hoy en más de 30 sucursales de una empresa de limpieza en Rosario. Eliminó un puesto administrativo completo y llevó las quejas por inasistencias de 4-6 por mes a prácticamente 0.",
  metrics: [
    {
      value: "$2.800.000",
      unit: "ARS/mes",
      label: "ahorrados en sueldo y cargas sociales",
    },
    {
      value: "0",
      unit: "quejas",
      label: "por inasistencias (antes: 4-6 por mes)",
    },
    {
      value: "1",
      unit: "persona",
      label: "supervisa lo que antes hacían 3",
    },
  ],
  cta: {
    label: "Ver cómo lo hicimos",
    href: "/proyectos/empresa-limpieza-rosario",
  },
};

export const problem: ProblemSection = {
  eyebrow: "Tu problema",
  title:
    "Cada semana que seguís gestionando con Excel y WhatsApp, perdés plata y control.",
  bullets: [
    "Cada fin de mes alguien cruza planillas a mano para liquidar sueldos e impuestos: días de trabajo administrativo que no generan ni una venta.",
    "Lo que no queda registrado en el momento se descubre tarde y mal. Corregir un error de asistencia, stock o facturación cuesta horas que ya no vuelven.",
    "El seguimiento de clientes vive en el celular de cada vendedor. Las oportunidades que no cierran hoy se pierden sin dejar rastro.",
  ],
  caseNote: {
    text: "Es lo que le pasaba a la empresa de limpieza que documentamos: tres planillas de Excel, WhatsApp y un puesto administrativo al límite. Después del sistema a medida ahorró $2.800.000 ARS/mes y llevó las quejas por inasistencias a 0.",
    cta: {
      label: "Ver el caso completo",
      href: "/proyectos/empresa-limpieza-rosario",
    },
  },
};

export const explore = {
  eyebrow: "Explorá",
  title: "¿Por dónde seguís?",
  description:
    "Tres cosas concretas que podés hacer ahora para entender si misure es lo que tu empresa necesita.",
  items: [
    {
      title: "Prototipo gratis antes de firmar",
      description:
        "Te mostramos paso a paso cómo trabajamos, desde la primera visita hasta la entrega. Sin sorpresas.",
      href: "/nosotros",
      cta: "Cómo trabajamos",
    },
    {
      title: "Un caso real documentado",
      description:
        "El desafío, las decisiones técnicas y los números completos del sistema que armamos para una empresa de limpieza en Rosario.",
      href: "/proyectos/empresa-limpieza-rosario",
      cta: "Ver el caso",
    },
    {
      title: "Precios sin letra chica",
      description:
        "Cuánto cuesta cada tipo de proyecto y cómo armamos el presupuesto final.",
      href: "#pregunta-costo-mio",
      cta: "Ver preguntas frecuentes",
    },
  ],
};

export const about: {
  eyebrow: string;
  body: string[];
  highlights: string[];
} = {
  eyebrow: "Nuestra historia",
  body: [
    "Nos conocimos cursando en la facultad, armamos varios proyectos juntos durante la carrera, y un año antes de recibirnos decidimos dejar de hacerlo como practica y empezar a hacerlo como trabajo.",
    "La idea de misure nació de algo que veíamos todo el tiempo en pymes de la zona: un sistema genérico resuelve un problema puntual, pero deja sueltos todos los demás. Armamos este emprendimiento para ofrecer lo contrario: un solo sistema, construido a tu medida, que cubre el negocio completo.",
  ],
  highlights: ["un solo sistema, construido a tu medida"],
};

export const dictionaryEntry: {
  word: string;
  phonetic: string;
  category: string;
  senses: string[];
} = {
  word: "misure",
  phonetic: "/mi-sú-re/",
  category: "sustantivo · del italiano",
  senses: [
    "la dimensión exacta de algo hecho con propósito.",
  ],
};

export const hero = {
  title: "¿Todavía corrés tu negocio entre Excel, WhatsApp y papeles sueltos?",
  subtitle: "El sistema que le devuelve a tu equipo lo que hoy se les va en planillas.",
  highlights: ["le devuelve"],
  lead:
    "Diseñamos y desarrollamos sistemas de gestión, ventas y páginas web 100% a medida. Entendemos el problema completo de tu negocio antes de proponerte una solución.",
  ctaPrimary: { label: "Quiero mi prototipo gratis", href: "/contacto#contacto" },
  ctaSecondary: { label: "Ver casos de éxito", href: "/proyectos#portfolio" },
} satisfies {
  title: string;
  subtitle: string;
  highlights: string[];
  lead: string;
  ctaPrimary: Cta;
  ctaSecondary: Cta;
};

export const services: {
  eyebrow: string;
  title: string;
  subtitle: string;
  subtitleLink: Cta;
  items: Service[];
} = {
  eyebrow: "Servicios",
  title: "Lo que hacemos",
  subtitle:
    "Cada semana se van horas en tareas manuales que igual se pagan como un sueldo, los errores se descubren tarde y las ventas se enfrían sin seguimiento. Desarrollamos el software específico que reemplaza ese trabajo, 100% a medida y sin plantillas.",
  subtitleLink: {
    label: "¿Tenés dudas sobre qué elegir? Ver preguntas frecuentes",
    href: "#preguntas",
  },
  items: [
    {
      id: "erp",
      name: "Sistemas de Gestión (ERP)",
      description:
        "Dejás de perder tiempo con planillas de Excel, WhatsApp y papeles. Tu equipo trabaja desde un solo lugar: ventas, stock, compras y facturación integrados al proceso real de tu negocio.",
    },
    {
      id: "crm",
      name: "Herramientas de Ventas (CRM)",
      description:
        "Ninguna oportunidad se pierde más entre el primer contacto y el cierre. Tu equipo comercial trabaja con la misma información, en tiempo real, desde donde esté.",
    },
    {
      id: "landing",
      name: "Páginas Web",
      description:
        "Cada visita tiene una sola misión: convertirse en consulta o venta. Diseño propio, carga rápida y un objetivo claro que reemplaza al folleto digital que nadie lee.",
    },
  ],
};

export const differentiators: {
  eyebrow: string;
  title: string;
  subtitle: string;
  subtitleLink: Cta;
  items: Differentiator[];
} = {
  eyebrow: "Diferenciales",
  title: "Qué nos hace distintos",
  subtitle:
    "Cuatro compromisos concretos, no adjetivos. Podés leerlos y pedirlos por escrito.",
  subtitleLink: {
    label: "¿Te interesa? Contanos tu caso",
    href: "/contacto#contacto",
  },
  items: [
    {
      title: "Entrevista de 2 horas, presencial o a distancia",
      description:
        "Si estás en Rosario y alrededores, vamos a tu negocio. Si estás en otra provincia, la hacemos por videollamada. En los dos casos entendemos cómo trabajás antes de escribir una línea de código.",
    },
    {
      title: "Errores post-lanzamiento: los arreglamos gratis",
      description:
        "Si algo falla después de que el sistema sale a producción, lo solucionamos sin costo adicional. Sin excusas y sin facturar horas extra.",
    },
    {
      title: "Prototipo y diseño gratis antes de firmar nada",
      description:
        "Antes de que desembolses un peso, ya tenés el prototipo navegable y el diseño aprobado. Si no te convence, no perdés nada.",
    },
    {
      title: "Cumplimiento de plazos garantizado por contrato",
      description:
        "Las entregas semanales y la fecha de lanzamiento quedan escritas en el contrato. No somos una empresa que promete y desaparece.",
    },
  ],
};

export const team: {
  eyebrow: string;
  title: string;
  description: string;
  socialLabels: { linkedin: string; github: string };
  members: {
    name: string;
    role: string;
    description: string;
    socials: { linkedin: string; github: string };
  }[];
} = {
  eyebrow: "Equipo",
  title: "Conocé al equipo",
  description:
    "Dos personas, un mismo objetivo: que tu sistema funcione como vos trabajás, no al revés.",
  socialLabels: {
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  members: [
    {
      name: "Agustín Angelini",
      role: "Desarrollador Full Stack",
      description: "Orientación en Frontend e integraciones con IA. Me gusta que el software sea rápido, simple y fácil de usar.",
      socials: {
        linkedin: "https://www.linkedin.com/in/agustin-angelini/",
        github: "https://github.com/angelini-agus",
      },
    },
    {
      name: "Franco Cuscianna",
      role: "Desarrollador Full Stack",
      description: "Orientación en Backend y Arquitectura de Sistemas. Me gusta que el software sea sólido, seguro y escalable.",
      socials: {
        linkedin: "https://www.linkedin.com/in/francocus/",
        github: "https://github.com/francocus",
      },
    },
  ],
};

export const howWeWork: {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: { title: string; description: string }[];
} = {
  eyebrow: "Proceso",
  title: "Cómo trabajamos",
  subtitle:
    "Cuatro pasos que repetimos en cada proyecto. Sin sorpresas, sin letra chica.",
  steps: [
    {
      title: "Entrevistamos a tu equipo",
      description:
        "Si estás en Rosario y alrededores, vamos presencialmente. Si estás en otra provincia, la misma entrevista se hace a distancia. Nunca arrancamos sin entender cómo trabajás.",
    },
    {
      title: "Prototipo gratis antes de pagar",
      description:
        "Armamos el diseño y el prototipo navegable sin cargo. Lo ves, lo aprobás y recién ahí firmamos.",
    },
    {
      title: "Entregas semanales por contrato",
      description:
        "El avance queda escrito. Cada semana sabés exactamente qué va a estar listo, sin depender de nuestra palabra.",
    },
    {
      title: "Mantenimiento post-lanzamiento",
      description:
        "Si algo falla después de que sale, lo arreglamos gratis. Si algo cambia en tu negocio, lo ajustamos.",
    },
  ],
};

export const nosotrosCta: {
  eyebrow: string;
  title: string;
  label: string;
  href: string;
} = {
  eyebrow: "¿Trabajamos juntos?",
  title: "Agendá 20 minutos y te mostramos cómo funciona.",
  label: "Quiero mi prototipo gratis",
  href: "/contacto#contacto",
};

export const clientQuote: {
  eyebrow: string;
  text: string;
  author: string;
  source: string;
  caseHref: string;
  highlights: string[];
} = {
  eyebrow: "Testimonio",
  text: "Antes perdíamos horas llenando planillas a mano para saber quién había trabajado qué día en cada edificio, y encima las quejas por inasistencias eran un dolor de cabeza semana a semana. Con Misure ahora todo se carga solo, y una tarea que antes le consumía gran parte de su jornada a un empleado, hoy se resuelve de forma automática. Para mí fue de las mejores decisiones que tomé en la empresa, ya que dejé de lidiar con problemas cotidianos y puse mi foco en hacer crecer el negocio.",
  author: "Paola Zorila",
  source: "AZ Servicios de Limpieza, Rosario",
  caseHref: "/proyectos/empresa-limpieza-rosario",
  highlights: ["resuelve de forma automática"],
};


export const portfolio: {
  eyebrow: string;
  title: string;
  description: string;
  detailsLabel: string;
  items: PortfolioItem[];
} = {
  eyebrow: "Portfolio",
  title: "Casos de éxito",
  description:
    "Proyectos reales, con resultados medibles. Cada sistema fue diseñado desde cero para el proceso de cada empresa.",
  detailsLabel: "Ver caso completo",
  items: [
    {
      project: "Sistema de gestión para empresa de limpieza",
      client: "Empresa de limpieza · Rosario",
      category: "erp",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "QR", "Geolocalización"],
      description:
        "Asistencia por geolocalización/QR, cálculo automático de sueldos e impuestos y gestión de stock por edificio. Resultado: un puesto administrativo eliminado y quejas por inasistencias reducidas a 0.",
      href: "/proyectos/empresa-limpieza-rosario",
      image: limpiezaAdmin1,
      imageAlt: "Panel de administración de ServiceTrack",
    },
    {
      project: "Sistema de gestión jurídica integral",
      client: "Estudio jurídico · Argentina y Paraguay",
      category: "erp",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "IA integrada",
      ],
      description:
        "Plataforma integral para administrar un estudio jurídico que opera en dos jurisdicciones: gestión de clientes, expedientes judiciales y extrajudiciales, agenda, control financiero y una biblioteca jurídica con verificación de fuentes oficiales asistida por IA.",
      href: "/proyectos/gestion-legal-estudio",
      image: legalDashboard,
      imageAlt: "Panel de gestión del estudio jurídico",
    },
    {
      project: "Sistema de gestión para clínica pediátrica",
      client: "Clínica pediátrica · Argentina",
      category: "erp",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
      description:
        "Plataforma integral para clínica pediátrica: historia clínica conforme a la Ley 26.529, turnos, panel clínico en tiempo real y recetas en PDF.",
      href: "/proyectos/sistema-clinica-pediatrica",
      image: pediatricErpDashboard,
      imageAlt: "Dashboard clínico del sistema pediátrico",
    },
    {
      project: "Página web para clínica pediátrica",
      client: "Clínica pediátrica · Argentina",
      category: "landing",
      technologies: ["Astro", "React", "Tailwind CSS"],
      description:
        "Sitio público con la trayectoria médica, las etapas del cuidado pediátrico y un flujo de solicitud de turnos pensado para las familias.",
      href: "/proyectos/landing-clinica-pediatrica",
      image: pediatricLandingHero,
      imageAlt: "Página web de la clínica pediátrica",
    },
    {
      project: "Página web para empresa de limpieza",
      client: "Empresa de limpieza · Rosario",
      category: "landing",
      technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
      description:
        "Sitio oficial con propuesta de valor clara, captación de consultas calificada e integración con el ERP interno bajo un mismo dominio.",
      href: "/proyectos/landing-empresa-limpieza",
      image: azLandingHero,
      imageAlt: "Sitio de la empresa de limpieza",
    },
    {
      project: "CRM de leads para concesionaria",
      client: "Concesionaria de autos · Rosario",
      category: "crm",
      technologies: [
        "React",
        "Vite",
        "PrimeReact",
        ".NET 9",
        "Dapper",
        "PostgreSQL",
        "Docker",
      ],
      description:
        "CRM a medida que centraliza las consultas de WhatsApp, Instagram, Facebook y Mercado Libre en una sola base, con filtros por marca/modelo, cliente y teléfono y asignación de cada lead a un asesor. Reemplaza la planilla de Excel manual.",
      href: "/proyectos/crm-concesionaria-rosario",
      image: leadsBaseDeDatos,
      imageAlt: "Base de datos de leads del CRM de la concesionaria",
    },
  ],
};


/* Encabezado de la seccion de preguntas del inicio: la columna izquierda la arma
   Faq.astro con la palabra en grande (que es la que lleva el h2), el lead y el
   link a contacto. */
export const faqHeading: {
  title: string;
  lead: string;
  cta: { label: string; href: string };
} = {
  title: "FAQ",
  lead: "Lo que nos preguntás antes de arrancar, respondido sin vueltas.",
  cta: {
    label: "Escribinos",
    href: "/contacto#contacto",
  },
};

export const faq: FaqItem[] = [
  {
    question: "¿Qué servicios ofrece misure?",
    answer:
      "Desarrollamos sistemas de gestión (ERP), herramientas de ventas (CRM) y páginas web a medida. Tres líneas que se combinan para cubrir la operación interna de tu empresa y cómo te mostrás al mundo.",
  },
  {
    question: "¿Qué incluye un sistema de gestión (ERP)?",
    answer:
      "Ventas, stock, compras y facturación en una sola herramienta, construida alrededor de tus procesos y no al revés. El alcance final se define según el rubro y la operación de cada empresa.",
  },
  {
    question: "¿Para qué sirve una herramienta de ventas (CRM)?",
    answer:
      "Para el seguimiento de clientes y oportunidades: que ninguna venta se pierda en el camino y que el equipo trabaje con la misma información.",
  },
  {
    question: "¿Qué es una página web de conversión?",
    answer:
      "Una página enfocada en un solo objetivo: convertir visitas en consultas o ventas, con diseño propio y carga rápida. Sirve para captar los contactos que después seguís con tu CRM.",
  },
  {
    question: "¿Cuánto cuesta un proyecto como el mío?",
    answer:
      "Depende del alcance, pero manejamos rangos transparentes: landing page desde USD 200, sistemas de gestión (ERP/CRM) entre USD 1.000 y 2.000, e-commerce entre USD 1.500 y 3.000. Antes de darte un número, hacemos una entrevista para entender tu caso y presupuestamos sin compromiso.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Seguimos disponibles para soporte y mejoras. Si encontramos un error, te avisamos antes de que lo notes; si lo encontrás vos, nos escribís y lo resolvemos sin cargo.",
  },
  {
    question: "¿Cómo sé que van a cumplir el plazo si son una empresa nueva?",
    answer:
      "No dependés de nuestra palabra: la fecha de lanzamiento y el cronograma de entregas semanales quedan en el contrato antes de arrancar. Cada semana ves el avance real, no un resumen armado para la ocasión.",
  },
];

export const forWho: ForWhoSection = {
  eyebrow: "¿Es para vos?",
  title: "Trabajamos con quienes saben lo que quieren.",
  yes: {
    label: "Es para vos si",
    items: [
      "Perdiste el control de tu operación con Excel, WhatsApp o papeles",
      "Probaste un sistema genérico que no encajaba con tu negocio",
      "Preferís pagar una vez y no una suscripción de por vida",
      "Querés un sistema que se adapte a vos, no al revés",
      "Valorás tener un interlocutor que entiende tu rubro",
    ],
  },
  no: {
    label: "No es para vos si",
    items: [
      "Buscás la opción más barata, sin importar cuántas horas manuales termine costando después",
      "Querés un sistema ya armado, aunque tu equipo tenga que seguir adaptándose a él todos los días",
      "No tenés 2 horas para la entrevista inicial y preferís seguir gestionando como hasta ahora",
      "Esperás que el software ordene tu gestión solo, sin involucrarte ni cambiar nada de cómo trabajás",
    ],
  },
};

export const contact: ContactInfo = {
  eyebrow: "Contacto",
  title: "Contanos tu caso.",
  description:
    "Dejanos tus datos y coordinamos una charla de 20 minutos para entender tu negocio.",
  email: "contacto@misure.dev",
  locationItems: [
    { label: "UBICACIÓN", value: "Rosario, Santa Fe" },
    {
      label: "MODALIDAD",
      value:
        "Entrevistas presenciales en Rosario y alrededores. A distancia en todo el país.",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/misure",
      displayLabel: "misure",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/misure.dev",
      displayLabel: "misure.dev",
    },
  ],
};

export const stickyCta = {
  ariaLabel: "Acción rápida",
  label: "Quiero mi prototipo gratis",
  href: "/contacto#contacto",
};

export const share = {
  label: "Compartir",
  copiedLabel: "Link copiado",
  errorLabel: "No se pudo copiar",
  ariaLabel: "Compartir esta página",
};

export const contactForm = {
  labels: {
    name: "Nombre",
    company: "Empresa",
    email: "Email",
    phone: "Teléfono",
    message: "Detalles",
  },
  placeholders: {
    name: "Tu nombre",
    company: "Tu empresa",
    email: "tucorreo@empresa.com",
    phone: "Tu teléfono o WhatsApp",
    message: "Contanos, ¿cuál es el mayor problema en el día a día de tu empresa?",
  },
  serviceStep: {
    eyebrow: "Paso 1",
    title: "¿Qué necesitás?",
    help: "Elegí el tipo de servicio y completá tus datos.",
    backAriaLabel: "Volver a elegir el servicio",
  },
  serviceOptions: [
    { value: "erp", label: "Sistemas de gestión (ERP)" },
    { value: "crm", label: "Herramientas de ventas (CRM)" },
    { value: "web", label: "Páginas web y\ne-commerce" },
    { value: "otros", label: "Otros" },
  ],
  errors: {
    name: "Ingresá tu nombre",
    email: "Ingresá un email válido",
    phone: "Ingresá tu teléfono",
    service: "Elegí un servicio",
    message: "Contanos un poco más (mínimo 10 caracteres)",
  },
  submitLabel: "Enviar mi consulta",
  submittingLabel: "Enviando...",
  retryLabel: "Reintentar",
  successMessage:
    "Gracias, recibimos tu mensaje. Te contactamos a la brevedad.",
  formError: "Revisá los campos marcados e intentá de nuevo.",
  disclaimer:
    "Prometemos responderte en menos de 24 horas hábiles. No vendemos ni cedemos tus datos a nadie: los usamos solo para responderte y no te vamos a mandar spam.",
  privacyLabel: "Política de privacidad",
  modal: {
    title: "¡Mensaje enviado!",
    body: "Gracias por escribirnos. Te contactamos a la brevedad.",
    closeLabel: "Cerrar",
  },
  web3forms: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "a6e71898-0129-4ef0-a454-619adaccd02f",
  },
};

export const caseStudies: {
  limpieza: CaseStudy;
  leadscrm: CaseStudy;
  legal: CaseStudy;
  azLanding: CaseStudy;
  pediatricLanding: CaseStudy;
  pediatricErp: CaseStudy;
} = {
  limpieza: {
    slug: "empresa-limpieza-rosario",
    seo: {
      title:
        "Sistema de gestión para empresa de limpieza en Rosario | misure",
      description:
        "Eliminamos un puesto administrativo completo y bajamos las quejas por inasistencias a 0, con un sistema de geolocalización y sueldos automáticos.",
    },
    eyebrow: "Caso de éxito",
    title: "Sistema de gestión para empresa de limpieza",
    client: "Empresa de limpieza",
    location: "Rosario, Santa Fe",
    category: "Gestión (ERP)",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Geolocalización",
      "QR",
    ],
    gallery: [
      { src: limpiezaAdmin3, alt: "Gestión de insumos organizada por edificio" },
      { src: limpiezaAdmin1, alt: "Panel de administración con la grilla semanal de turnos" },
      { src: limpiezaAdmin2, alt: "Liquidación automática de sueldos por horas verificadas" },
      { src: limpiezaLogin, alt: "Pantalla de inicio de sesión con usuario y contraseña" },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "El control manual llegó a su límite.",
      body: [
        "El control de una empresa con más de 30 edificios pasaba por planillas y mensajes de WhatsApp.",
      ],
    },
    contrast: {
      labels: { before: "Antes", after: "Después" },
      rows: [
        {
          before: "Asistencia en planillas de Excel compartidas por WhatsApp",
          after: "Entrada y salida con GPS y código QR desde el teléfono",
        },
        {
          before: "Cierre de mes cruzando datos a mano durante varios días",
          after: "Sueldos e impuestos calculados automáticamente en minutos",
        },
        {
          before: "Sin visibilidad de quién estaba en cada edificio",
          after: "Mapa en vivo con las alertas de inasistencia",
        },
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Cómo lo resolvimos.",
      features: [
        {
          title: "Asistencia por geolocalización y QR",
          description:
            "El personal registra entrada y salida desde su teléfono, verificado por geolocalización GPS y código QR en cada edificio. Sin papel, sin planillas, sin posibilidad de registrar desde otro lugar.",
        },
        {
          title: "Cálculo automático de sueldos e impuestos",
          description:
            "Las horas trabajadas, horas extra, ausencias y llegadas tarde se calculan automáticamente según el convenio colectivo. La liquidación mensual que antes llevaba días ahora tarda minutos.",
        },
        {
          title: "Gestión de stock por edificio",
          description:
            "Cada edificio tiene su propio inventario de insumos dentro del sistema. Los supervisores registran consumo desde el celular y el sistema alerta cuando el stock cae por debajo del mínimo.",
        },
        {
          title: "Panel de supervisión en tiempo real",
          description:
            "Un supervisor puede ver en un mapa qué empleados están activos, en qué edificio, y cuánto llevan trabajado en el día. Las alertas de inasistencia aparecen automáticamente.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Números reales, no estimaciones.",
      metrics: [
        {
          value: "$2.800.000",
          unit: "ARS/mes",
          label: "ahorrados en sueldo y cargas sociales al eliminar un puesto administrativo completo",
        },
        {
          value: "0",
          unit: "quejas",
          label: "por inasistencias por mes (antes eran 4-6 mensuales sin posibilidad de verificar)",
        },
        {
          value: "1",
          unit: "persona",
          label: "supervisa hoy lo que antes requería 3, con mayor visibilidad y en tiempo real",
        },
        {
          value: "30+",
          unit: "sucursales",
          label: "usando el sistema activamente hoy",
        },
      ],
    },
    cta: {
      eyebrow: "¿Tu empresa tiene un problema similar?",
      title: "Contanos cómo trabajás y te mostramos qué podemos hacer.",
      label: "Quiero mi prototipo gratis",
      href: "/contacto#contacto",
    },
  },
  leadscrm: {
    slug: "crm-concesionaria-rosario",
    seo: {
      title: "CRM de leads para concesionaria en Rosario | misure",
      description:
        "CRM a medida para una concesionaria de autos de Rosario: centraliza los leads de WhatsApp, Instagram, Facebook y Mercado Libre, con filtros por marca/modelo, cliente y teléfono y asignación a asesores. Reemplaza la planilla de Excel manual.",
    },
    eyebrow: "Caso de estudio",
    title: "CRM de leads para concesionaria",
    client: "Concesionaria de autos",
    location: "Rosario, Santa Fe",
    category: "Ventas (CRM)",
    technologies: [
      "React",
      "Vite",
      "PrimeReact",
      ".NET 9",
      "Dapper",
      "PostgreSQL",
      "Docker",
    ],
    gallery: [
      {
        src: leadsNuevaConsulta,
        alt: "Formulario para ingresar una consulta con canal de ingreso, modelo de interés, datos del cliente y asesor asignado",
      },
      {
        src: leadsBaseDeDatos,
        alt: "Base de datos de leads con filtros por canal, asesor y fecha, y exportación a Excel",
      },
      {
        src: leadsConfiguracion,
        alt: "Administración de datos maestros: vendedores, modelos de vehículos y usuarios del CRM",
      },
      {
        src: leadsMetricas,
        alt: "Métricas de consultas por canal, tendencia diaria, modelos más pedidos y distribución por asesor",
      },
      {
        src: leadsLogin,
        alt: "Pantalla de inicio de sesión de AutoLeads CRM",
      },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Una planilla de Excel no aguanta cuatro canales y varios asesores a la vez",
      body: [
        "Cuatro canales de entrada y varios asesores trabajando sobre una misma planilla de Excel.",
      ],
    },
    contrast: {
      labels: { before: "Antes", after: "Después" },
      rows: [
        {
          before: "Consultas cargadas a mano en una planilla de Excel",
          after: "Todas las consultas en una misma base, con fecha, canal y modelo",
        },
        {
          before: "Seguimiento que dependía de la memoria de cada uno",
          after: "Cada lead asignado a un asesor responsable",
        },
        {
          before: "Buscar por modelo o teléfono filtrando a mano",
          after: "Filtros por marca/modelo, cliente y teléfono al instante",
        },
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un CRM a medida que centraliza los leads y ordena el seguimiento",
      features: [
        {
          title: "Todos los canales en una sola base",
          description:
            "Las consultas de WhatsApp, Instagram, Facebook y Mercado Libre dejan de vivir en planillas y chats sueltos: entran a un mismo lugar, con fecha, canal y modelo asociado a cada lead.",
        },
        {
          title: "Filtros por marca/modelo, cliente y teléfono",
          description:
            "El equipo encuentra cualquier consulta filtrando por lo que realmente usa para trabajar: el modelo de interés, el nombre del cliente o su teléfono. Lo que antes era buscar a mano en una planilla pasa a ser una consulta inmediata.",
        },
        {
          title: "Asignación de cada consulta a un asesor",
          description:
            "Cada lead se asigna a un asesor responsable, para que el seguimiento no dependa de la memoria de nadie ni de mensajes cruzados. Con varios asesores en paralelo, queda claro quién atiende qué.",
        },
        {
          title: "Campos para cotización de usado y financiación",
          description:
            "A partir de lo que mostraba la planilla anterior, el CRM contempla los datos que el negocio realmente pide: cotización del vehículo usado del cliente y condiciones de financiación, además de los datos de contacto.",
        },
      ],
    },
    results: {
      eyebrow: "Impacto",
      title: "Lo que el CRM ordena hoy, sin métricas de mejora medidas todavía.",
      metrics: [
        {
          value: "4",
          unit: "canales",
          label:
            "WhatsApp, Instagram, Facebook y Mercado Libre centralizados en una sola base de leads, en lugar de planillas y chats dispersos.",
        },
        {
          value: "60%",
          unit: "pedía cotización de usado",
          label:
            "Dato real de la planilla anterior (22 consultas): el 60% pedía cotización de su usado y financiación. Es evidencia del proceso que se reemplazó e informó los campos del CRM, no una mejora medida del sistema nuevo.",
        },
        {
          value: "1",
          unit: "asesor por lead",
          label:
            "Cada consulta se filtra por marca/modelo, cliente o teléfono y se asigna a un asesor, para que el seguimiento no se pierda entre varios canales y varias personas.",
        },
        {
          value: "2",
          unit: "campos de negocio",
          label:
            "cotización del vehículo usado del cliente y condiciones de financiación, salidos de lo que mostraba la planilla anterior.",
        },
      ],
    },
    cta: {
      eyebrow: "¿Tus ventas se pierden entre planillas y canales sueltos?",
      title: "Contanos cómo trabajás y te mostramos qué podemos hacer.",
      label: "Quiero mi prototipo gratis",
      href: "/contacto#contacto",
    },
  },
  legal: {
    slug: "gestion-legal-estudio",
    seo: {
      title: "Sistema de gestión jurídica integral | misure",
      description:
        "Plataforma integral para administrar un estudio jurídico con jurisdicción en Argentina y Paraguay: clientes, expedientes judiciales y extrajudiciales, agenda, control financiero y biblioteca jurídica con verificación de fuentes oficiales asistida por IA.",
    },
    eyebrow: "Caso de estudio",
    title: "Sistema de gestión jurídica integral",
    client: "Estudio jurídico con jurisdicción en Argentina y Paraguay",
    location: "Argentina / Paraguay",
    category: "Gestión (ERP)",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Google Gemini",
    ],
    gallery: [
      { src: legalDashboard, alt: "Panel de inicio del estudio jurídico con agenda, vencimientos y resumen contable" },
      { src: legalClientes, alt: "Gestión de clientes con filtros por área, expedientes y turnos del día" },
      { src: legalExpediente, alt: "Detalle de un expediente judicial" },
      { src: legalAgenda, alt: "Agenda del estudio con audiencias, plazos y bandeja operativa" },
      { src: legalBibliotecaIa, alt: "Comparador asistido por IA entre el texto derogado y el texto vigente de una norma" },
      { src: legalContabilidad, alt: "Resumen contable con evolución mensual y seguimiento de señas" },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Un estudio que opera en dos jurisdicciones no puede depender de un software genérico",
      body: [
        "Un estudio que atiende causas en Argentina y Paraguay no encaja en un software genérico.",
      ],
    },
    contrast: {
      labels: { before: "Antes", after: "Después" },
      rows: [
        {
          before: "Un software estándar que fuerza las dos jurisdicciones a un molde único",
          after: "Expedientes y obligaciones modelados según el proceso de cada país",
        },
        {
          before: "Normas guardadas que quedaban desactualizadas sin que nadie se entere",
          after: "Verificación contra Infoleg y CSJ-IIJ con alerta asistida por IA",
        },
        {
          before: "Clientes, expedientes y agenda en herramientas distintas",
          after: "Una sola plataforma con toda la operación del estudio",
        },
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un sistema construido alrededor de la operación real de un estudio jurídico",
      features: [
        {
          title: "Gestión integral de clientes",
          description:
            "Ficha completa por cliente con datos personales, documento, contactos y el historial de causas asociadas. Todo el vínculo con cada cliente queda centralizado y consultable desde un solo lugar.",
        },
        {
          title: "Expedientes judiciales y extrajudiciales",
          description:
            "Seguimiento de causas judiciales y extrajudiciales por cliente: carátula, juzgado, estado, movimientos, documentos adjuntos y notas. Cada expediente se modela según el proceso que realmente sigue el estudio.",
        },
        {
          title: "Biblioteca jurídica con verificación de fuentes por IA",
          description:
            "El estudio guarda las normas que usa en su práctica, pero el sistema verifica automáticamente si la versión guardada sigue vigente contra la fuente oficial (Infoleg para Argentina, CSJ-IIJ para Paraguay) y, con asistencia de IA, alerta cuando una norma quedó desactualizada.",
        },
        {
          title: "Agenda, control financiero y obligaciones",
          description:
            "Calendario de audiencias, vencimientos y citas; registro de honorarios, pagos y movimientos por causa; y control de obligaciones fiscales y contribuciones con seguimiento de su estado, adaptado a los organismos de cada país.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Las funcionalidades entregadas según las pretensiones del estudio.",
      metrics: [
        {
          value: "2",
          unit: "jurisdicciones",
          label:
            "Argentina y Paraguay en un mismo sistema: expedientes, obligaciones y fuentes de cada país, sin molde único.",
        },
        {
          value: "IA",
          unit: "asistente",
          label:
            "comparador entre el texto derogado y el vigente de una norma, con alerta cuando quedó desactualizada.",
        },
        {
          value: "2",
          unit: "fuentes oficiales",
          label:
            "cada versión guardada se verifica contra la fuente oficial de cada país: Infoleg para Argentina y CSJ-IIJ para Paraguay.",
        },
        {
          value: "1",
          unit: "plataforma",
          label:
            "clientes, expedientes judiciales y extrajudiciales, agenda, finanzas y obligaciones en el mismo lugar.",
        },
      ],
    },
    cta: {
      eyebrow: "¿Tu estudio opera en más de una jurisdicción?",
      title: "Contanos cómo trabajás y te mostramos qué podemos hacer.",
      label: "Quiero mi prototipo gratis",
      href: "/contacto#contacto",
    },
  },
  azLanding: {
    slug: "landing-empresa-limpieza",
    seo: {
      title:
        "Landing page para empresa de limpieza en Rosario | misure",
      description:
        "Diseñamos y desarrollamos el sitio oficial de una empresa de limpieza de Rosario: propuesta de valor clara, captación de consultas calificada e integración con su ERP interno.",
    },
    eyebrow: "Caso de éxito",
    title: "Landing page de conversión para empresa de limpieza",
    client: "Empresa de limpieza",
    location: "Rosario, Santa Fe",
    category: "Página Web",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Lenis", "Vercel"],
    gallery: [
      {
        src: azLandingHero,
        alt: "Portada del sitio con la propuesta de valor, las métricas de respaldo y el pedido de presupuesto",
      },
      {
        src: azLandingServicios,
        alt: "Las verticales de servicio, ordenadas por tipo de espacio",
      },
      {
        src: azLandingComoTrabajamos,
        alt: "El proceso, de la consulta al servicio",
      },
      {
        src: azLandingContacto,
        alt: "El formulario de contacto, con los cuatro datos y el pedido de presupuesto",
      },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Una operación ya digitalizada que no se veía desde afuera",
      body: [
        "La operación ya estaba digitalizada con un ERP propio, pero no se veía desde afuera.",
      ],
    },
    contrast: {
      labels: { before: "Antes", after: "Después" },
      rows: [
        {
          before: "Una operación fuerte sin presencia pública a la altura",
          after: "Un sitio que explica la propuesta de valor y ordena las consultas",
        },
        {
          before: "Consultas entrantes sin orden ni filtro",
          after: "Un flujo de contacto que entrega consultas calificadas",
        },
        {
          before: "El sitio, el acceso de empleados y la API en dominios separados",
          after: "Todo bajo el mismo dominio, con un proxy en el borde hacia el ERP",
        },
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un sitio estático, rápido y conectado al ERP de la empresa",
      features: [
        {
          title: "Propuesta de valor como eje del sitio",
          description:
            "Cada sección está construida para responder por qué contratar a la empresa: personal propio asegurado, verificación de turnos por QR y GPS, y cobertura de edificios, oficinas y clínicas.",
        },
        {
          title: "Captación de consultas calificada",
          description:
            "Un flujo de contacto de varios pasos filtra y ordena las consultas antes de que lleguen, para que el equipo comercial reciba información útil en lugar de mensajes sueltos.",
        },
        {
          title: "Integración transparente con el ERP",
          description:
            "El sitio es la puerta de entrada de la marca: un proxy en el borde redirige el acceso de empleados y las llamadas a la API hacia el sistema interno, todo bajo un mismo dominio.",
        },
        {
          title: "Rendimiento y calidad medidos",
          description:
            "Generación estática, contenido tipado y una batería de pruebas automatizadas (unitarias y end-to-end en varios tamaños de pantalla) para cuidar velocidad, navegación y formularios.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "El sitio está en producción; las métricas de negocio, pendientes.",
      metrics: [
        {
          value: "1",
          unit: "dominio",
          label:
            "el sitio público, el acceso de empleados y las llamadas a la API conviven bajo la misma dirección, con un proxy en el borde,",
        },
        {
          value: "100%",
          unit: "estático",
          label:
            "generación estática y contenido tipado: el build produce el HTML listo, sin servidor propio.",
        },
        {
          value: "QR y GPS",
          unit: "verificación",
          label:
            "los diferenciales más fuertes de la operación (personal propio y asistencia verificada) explicados desde la portada.",
        },
        {
          value: "Pruebas",
          unit: "automatizadas",
          label:
            "batería unitaria y end-to-end en varios tamaños de pantalla, que cuida velocidad, navegación y formularios.",
        },
      ],
    },
    cta: {
      eyebrow: "¿Tu negocio necesita una web que traiga consultas?",
      title: "Contanos cómo trabajás y te mostramos qué podemos hacer.",
      label: "Quiero mi prototipo gratis",
      href: "/contacto#contacto",
    },
  },
  pediatricLanding: {
    slug: "landing-clinica-pediatrica",
    seo: {
      title: "Página web para clínica pediátrica | misure",
      description:
        "Sitio público de una clínica pediátrica: la trayectoria de la profesional, las etapas del cuidado, los testimonios de las familias y el turno como cierre, con el contenido renderizado en el servidor.",
    },
    eyebrow: "Caso de estudio",
    title: "Página web para clínica pediátrica",
    client: "Clínica pediátrica",
    location: "Pueblo Esther, Santa Fe",
    category: "Página Web",
    technologies: ["Astro", "React", "Tailwind CSS", "TypeScript"],
    gallery: [
      {
        src: pediatricLandingHero,
        alt: "Portada del sitio con la propuesta de la pediatra y los dos accesos, sacar turno y entrar al portal",
      },
      {
        src: pediatricLandingJourney,
        alt: "Las etapas del cuidado, de la preconcepción a la adolescencia",
      },
      {
        src: pediatricLandingContacto,
        alt: "El mapa del consultorio y los datos de contacto, al final del recorrido",
      },
      {
        src: pediatricLandingTestimonials,
        alt: "Testimonios de familias, con la trayectoria de la clínica arriba",
      },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Un consultorio que abría tenía que estar online desde el primer día",
      body: [
        "Un consultorio que abría sin pacientes y sin sistema anterior: online desde el primer día y sin publicar la dirección.",
      ],
    },
    contrast: {
      labels: { before: "Antes", after: "Después" },
      rows: [
        {
          before: "Reservar turno llamando por teléfono",
          after: "El turno se pide desde el portal y entra a la cola de confirmación",
        },
        {
          before: "La dirección del consultorio publicada para cualquiera",
          after: "Sólo la ciudad en el sitio; la ubicación exacta se libera con cuenta",
        },
        {
          before: "El sitio sin contenido ni costumbres que respetar",
          after: "Cinco etapas del cuidado como eje, con testimonios y cierre en el turno",
        },
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un sitio que presenta a la profesional y cierra en el turno",
      features: [
        {
          title: "Autoridad médica como eje",
          description:
            "La portada presenta a la pediatra y su enfoque: la misma profesional en cada etapa, de la preconcepción a la adolescencia.",
        },
        {
          title: "Etapas del cuidado con una pieza interactiva",
          description:
            "Las cinco etapas del cuidado se recorren en un abanico interactivo en escritorio y en un carrusel con ajuste en mobile: el mismo contenido con otra composición según el ancho.",
        },
        {
          title: "El turno cierra el recorrido",
          description:
            "Cada sección termina apuntando al portal de pacientes, donde la familia ve la disponibilidad y pide su turno. La solicitud cae en la cola de confirmación de la clínica.",
        },
        {
          title: "Privacidad desde el arranque",
          description:
            "El sitio publica la ciudad. La ubicación exacta se libera sólo adentro del portal, con la cuenta de la familia.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Publicado y en uso, con el turno como cierre de cada sección.",
      metrics: [
        {
          value: "0",
          unit: "JS por defecto",
          label:
            "el contenido se renderiza en el servidor y sólo lo interactivo viaja como isla de React",
        },
        {
          value: "1",
          unit: "pediatra",
          label:
            "la misma profesional en cada etapa, de la preconcepción a la adolescencia",
        },
        {
          value: "Ciudad",
          unit: "publicada",
          label:
            "la ubicación exacta se libera recién con la cuenta registrada de la familia",
        },
        {
          value: "5",
          unit: "etapas",
          label:
            "del cuidado, de la preconcepción a la adolescencia, en un abanico interactivo en escritorio y carrusel en mobile.",
        },
      ],
    },
    cta: {
      eyebrow: "¿Tu consultorio o clínica necesita una web que traiga consultas?",
      title: "Contanos cómo trabajás y te mostramos qué podemos hacer.",
      label: "Quiero mi prototipo gratis",
      href: "/contacto#contacto",
    },
  },
  pediatricErp: {
    slug: "sistema-clinica-pediatrica",
    seo: {
      title: "Sistema de gestión clínica pediátrica | misure",
      description:
        "ERP clínico y portal de pacientes para una clínica pediátrica: historia clínica trazable conforme a la Ley 26.529, turnos que se confirman en una cola, recetas en PDF y accesos por rol.",
    },
    eyebrow: "Caso de estudio",
    title: "ERP clínico y portal de pacientes para clínica pediátrica",
    client: "Clínica pediátrica",
    location: "Pueblo Esther, Santa Fe",
    category: "Gestión (ERP)",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Tailwind CSS",
      "TypeScript",
      "Turborepo",
    ],
    gallery: [
      {
        src: pediatricErpDashboard,
        alt: "Panel del día: el embudo de turnos, las evoluciones pendientes y la tabla de turnos de hoy",
      },
      {
        src: pediatricErpPortalRequests,
        alt: "Solicitudes de turno hechas desde el portal de familias, esperando la confirmación de la clínica",
      },
      {
        src: pediatricErpAppointments,
        alt: "Agenda con paciente, tutor, motivo, profesional y estado",
      },
      {
        src: pediatricErpAppointmentDialog,
        alt: "Nuevo turno: los selectores de fecha y hora sólo ofrecen los horarios que están libres",
      },
      {
        src: pediatricErpConsultations,
        alt: "Consultas del día con el panel de la consulta embebido: contexto, evoluciones y receta",
      },
      {
        src: pediatricErpPatientRecord,
        alt: "Historia clínica: datos, antecedentes perinatales y cobertura junto a la línea de evoluciones",
      },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Historia clínica, turnos y privacidad: tres decisiones que no se parchean",
      body: [
        "Historia clínica, turnos y privacidad: tres decisiones que nacen con la clínica, no después.",
      ],
    },
    contrast: {
      labels: { before: "Antes", after: "Después" },
      rows: [
        {
          before: "Registros clínicos sin trazabilidad obligatoria",
          after: "Baja lógica y auditoría que sólo se agrega, conforme a la Ley 26.529",
        },
        {
          before: "El turno cerrado por teléfono",
          after: "La familia lo pide desde el portal y entra a la cola de confirmación",
        },
        {
          before: "La dirección exacta publicada en el sitio",
          after: "Sólo con la cuenta registrada de la familia",
        },
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un ERP clínico con API propia, portal de familias y sitio público",
      features: [
        {
          title: "El cumplimiento va en el modelo, no en una política",
          description:
            "Cada entidad clínica tiene baja lógica obligatoria y cada escritura queda en un registro de auditoría que sólo se agrega: nada se borra físicamente y todo cambio es atribuible.",
        },
        {
          title: "El turno se cierra sin llamar por teléfono",
          description:
            "La familia ve la disponibilidad y pide el turno desde el portal. La solicitud entra a una cola de confirmación y, al confirmarla, pasa a la agenda como turno agendado.",
        },
        {
          title: "Una pantalla por trabajo",
          description:
            "Correr el día, documentar una consulta y pedir un turno son tareas distintas: el panel del equipo, el portal de familias y el sitio público son superficies separadas sobre la misma API y los mismos tokens de diseño.",
        },
        {
          title: "Recetas como documentos",
          description:
            "La receta se emite en PDF desde la historia clínica, con los datos de la clínica, del profesional y su matrícula.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "En producción desde antes del primer paciente.",
      metrics: [
        {
          value: "3",
          unit: "superficies",
          label:
            "panel del equipo, portal de familias y sitio público, con la misma API y los mismos tokens",
        },
        {
          value: "5",
          unit: "roles",
          label:
            "el alta pública sólo crea pacientes y cada persona ve lo que le corresponde",
        },
        {
          value: "26.529",
          unit: "Ley",
          label:
            "trazabilidad en el modelo de datos: baja lógica y auditoría que sólo se agrega",
        },
        {
          value: "PDF",
          unit: "recetas",
          label:
            "emitidas desde la historia clínica, con los datos de la clínica, del profesional y su matrícula.",
        },
      ],
    },
    cta: {
      eyebrow: "¿Tu consultorio o clínica necesita un sistema a medida?",
      title: "Contanos cómo trabajás y te mostramos qué podemos hacer.",
      label: "Quiero mi prototipo gratis",
      href: "/contacto#contacto",
    },
  },
};
