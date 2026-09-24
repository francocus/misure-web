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
import legalExpedienteEdit from "../assets/proyectos/legal/expediente-edit.png";
import legalClientes from "../assets/proyectos/legal/clientes.png";
import legalAgenda from "../assets/proyectos/legal/agenda.png";
import legalBiblioteca from "../assets/proyectos/legal/biblioteca.png";
import legalBibliotecaIa from "../assets/proyectos/legal/biblioteca-ia.png";
import legalContabilidad from "../assets/proyectos/legal/contabilidad.png";
import legalObligaciones from "../assets/proyectos/legal/obligaciones.png";
import legalTeam from "../assets/proyectos/legal/team.png";
import legalLogin from "../assets/proyectos/legal/login.png";
import legalSwitchUser from "../assets/proyectos/legal/switch-user.png";
import leadsNuevaConsulta from "../assets/proyectos/leadscrm/01-nueva-consulta.png";
import leadsBaseDeDatos from "../assets/proyectos/leadscrm/02-base-de-datos.png";
import leadsConfiguracion from "../assets/proyectos/leadscrm/03-configuracion.png";
import leadsLogin from "../assets/proyectos/leadscrm/04-login.png";
import leadsMetricas from "../assets/proyectos/leadscrm/05-metricas.png";
import azLandingDesktop from "../assets/proyectos/az-landing/desktop.png";
import pediatricLandingHero from "../assets/proyectos/pediatric/01-landing-hero.png";
import pediatricDoctorJourney from "../assets/proyectos/pediatric/02-landing-doctor-journey.png";
import pediatricTurnos from "../assets/proyectos/pediatric/03-landing-turnos.png";
import pediatricFaq from "../assets/proyectos/pediatric/04-landing-faq-contact.png";
import pediatricLogin from "../assets/proyectos/pediatric/05-erp-login.png";
import pediatricDashboard from "../assets/proyectos/pediatric/06-erp-dashboard.png";
import pediatricPatients from "../assets/proyectos/pediatric/07-erp-patients.png";
import pediatricAppointments from "../assets/proyectos/pediatric/08-erp-appointments.png";
import pediatricSettings from "../assets/proyectos/pediatric/09-erp-settings.png";
import limpiezaAdmin1 from "../assets/proyectos/limpieza/admin1.png";
import limpiezaAdmin2 from "../assets/proyectos/limpieza/admin2.png";
import limpiezaAdmin3 from "../assets/proyectos/limpieza/admin3.png";

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
    intro:
      "Somos dos socios de Rosario que se cansaron de ver pymes pagando de más por sistemas genéricos que no resuelven nada. Así nació misure.",
  },
  proyectos: {
    title: "Proyectos | misure",
    description:
      "Casos de éxito de misure: sistemas de gestión, ventas y páginas web a medida para pymes de Rosario. Resultados reales, no promesas.",
    h1: "Proyectos",
    intro:
      "Resultados reales de software a medida para pymes: sistemas de gestión, herramientas de ventas y páginas web.",
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
  eyebrow: "El problema",
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
  title: string;
  body: string[];
} = {
  eyebrow: "Nuestra historia",
  title: "Quiénes somos",
  body: [
    "Uno de nosotros empezó haciendo desarrollo freelance para pymes de Rosario a principios de 2025. Uno de esos trabajos fue un sistema para una empresa de limpieza: geolocalización para controlar asistencia, cálculo automático de sueldos e impuestos, stock por edificio. Cuando terminamos, habían eliminado un puesto administrativo completo.",
    "El otro socio arrancó por su lado, desarrollando sistemas a medida para conocidos y amigos de familiares. Un ejemplo es el sistema de gestión jurídica que armamos a pedido de un estudio jurídico que opera en Argentina y Paraguay: gestión de clientes, expedientes judiciales y extrajudiciales, agenda, control financiero y una biblioteca jurídica con verificación de fuentes oficiales asistida por IA, todo adaptado a la normativa de ambos países.",
    "Ahí entendimos que había un problema real: las pymes locales pagan de más por sistemas genéricos que no encajan con cómo trabajan. Formamos misure para poder resolver eso a escala, con un modelo que entiende el negocio en persona o a distancia antes de escribir una línea de código.",
    "No somos una empresa con décadas de historia. Somos dos personas con un caso de éxito concreto y un método que funciona.",
  ],
};

export const hero = {
  title: "¿Sabías que un sistema a medida puede reemplazar un sueldo completo?",
  lead:
    "Diseñamos y desarrollamos sistemas de gestión, ventas y páginas web 100% a medida. Entendemos el problema completo de tu negocio antes de proponerte una solución.",
  ctaPrimary: { label: "Quiero mi prototipo gratis", href: "/contacto#contacto" },
  ctaSecondary: { label: "Ver casos de éxito", href: "/proyectos#portfolio" },
} satisfies {
  title: string;
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
      image: pediatricDashboard,
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
      image: azLandingDesktop,
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


export const faqHeading: {
  eyebrow: string;
  title: string;
} = {
  eyebrow: "FAQ",
  title: "Preguntas frecuentes",
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
  locationItems: [{ label: "UBICACIÓN", value: "Rosario, Santa Fe" }],
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
      { src: limpiezaAdmin1, alt: "Panel de administración con la grilla semanal de turnos" },
      { src: limpiezaAdmin2, alt: "Liquidación automática de sueldos por horas verificadas" },
      { src: limpiezaAdmin3, alt: "Gestión de insumos organizada por edificio" },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "El control manual llegó a su límite.",
      body: [
        "La empresa manejaba la asistencia de su personal en múltiples edificios con planillas de Excel compartidas por WhatsApp. Cada fin de mes, el área administrativa tardaba varios días en cruzar datos de asistencia, calcular sueldos y liquidar impuestos.",
        "Las quejas por inasistencias llegaban a 4-6 por mes sin que hubiera forma de verificarlas en tiempo real. El personal de supervisión no tenía visibilidad de qué empleado estaba en qué edificio, y el stock de insumos por edificio se registraba a mano.",
        "El sistema existente no era escalable: cada empleado nuevo multiplicaba el trabajo administrativo en lugar de distribuirlo.",
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
        "La concesionaria recibe consultas diarias de campañas de Facebook e Instagram: clientes interesados en modelos como Jolion, H6 o Tank. Hasta ahora esas consultas se cargaban a mano en una planilla de Excel, filtrando manualmente por modelo, nombre de cliente y teléfono.",
        "Con múltiples canales de entrada (WhatsApp, Instagram, Facebook y Mercado Libre) y varios asesores atendiendo en paralelo, la planilla se volvía difícil de mantener ordenada y de asignar seguimiento a tiempo. Cada consulta nueva multiplicaba el trabajo manual en lugar de ordenarlo.",
        "Una muestra real de la planilla que reemplazamos mostró qué necesitaban registrar: en 22 consultas, el 60% de los clientes pedían cotización de su vehículo usado y condiciones de financiación. Eso dejó en claro que el seguimiento no podía reducirse a datos de contacto genéricos: hacían falta campos específicos para cotización de usado y plan de pago.",
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
      { src: legalExpedienteEdit, alt: "Edición de un expediente judicial" },
      { src: legalAgenda, alt: "Agenda del estudio con audiencias, plazos y bandeja operativa" },
      { src: legalBiblioteca, alt: "Biblioteca jurídica de Argentina y Paraguay con verificación de fuentes oficiales" },
      { src: legalBibliotecaIa, alt: "Comparador asistido por IA entre el texto derogado y el texto vigente de una norma" },
      { src: legalContabilidad, alt: "Resumen contable con evolución mensual y seguimiento de señas" },
      { src: legalObligaciones, alt: "Seguimiento impositivo y administrativo con vencimientos, montos y estados" },
      { src: legalTeam, alt: "Gestión de equipo con usuarios, roles y auditoría de accesos" },
      { src: legalLogin, alt: "Acceso al sistema del estudio jurídico" },
      { src: legalSwitchUser, alt: "Selección de cuenta para ingresar al sistema" },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Un estudio que opera en dos jurisdicciones no puede depender de un software genérico",
      body: [
        "El estudio atiende causas en Argentina y Paraguay, dos jurisdicciones con normativa, procesos y organismos distintos. Un sistema estándar de gestión no contempla esa particularidad: la estructura de un expediente, las obligaciones fiscales o las fuentes normativas de cada país no se comportan igual.",
        "El abogado necesitaba una sola plataforma que centralizara clientes, expedientes, agenda y finanzas del estudio, pero que al mismo tiempo se adaptara a la normativa y a los procesos de ambos países en lugar de forzarlos a un molde único.",
        "El sistema se construyó en base a sus requisitos y pretensiones concretas: no se trata de un proyecto propio sin validación externa, sino de una herramienta pensada y ajustada para la operación real de un estudio que trabaja en dos mercados a la vez.",
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
          value: "[PENDIENTE]",
          unit: "métricas de resultado si las hay",
          label: "No contamos aún con cifras de ahorro o de tiempo. Completá con datos reales cuando los tengas.",
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
        src: azLandingDesktop,
        alt: "Sitio de la empresa de limpieza en escritorio",
      },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Una operación ya digitalizada que no se veía desde afuera",
      body: [
        "La empresa ya gestionaba su operación interna con un ERP propio, pero necesitaba una presencia pública a la altura de esa operación: un sitio que explicara su propuesta de valor y ordenara las consultas entrantes.",
        "Sus diferenciales más fuertes (personal propio asegurado, sin subcontratación, y verificación de asistencia en tiempo real por QR y GPS) tenían que comunicarse de forma clara a edificios, oficinas y clínicas.",
        "El desafío adicional era no fragmentar la marca: el acceso de empleados y las llamadas al sistema interno debían convivir bajo el mismo dominio que el sitio público.",
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
          value: "[PENDIENTE]",
          unit: "métricas de resultado",
          label:
            "Todavía no contamos con cifras de conversión o de consultas generadas. Completar con datos reales cuando estén disponibles.",
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
        "Sitio público para una clínica pediátrica: trayectoria médica, etapas del cuidado pediátrico, solicitud de turnos y contacto directo, optimizado para SEO.",
    },
    eyebrow: "Caso de estudio",
    title: "Página web para clínica pediátrica",
    client: "Clínica pediátrica",
    location: "Argentina",
    category: "Página Web",
    technologies: ["Astro", "React", "Tailwind CSS"],
    gallery: [
      { src: pediatricLandingHero, alt: "Portada de la landing con la autoridad médica" },
      { src: pediatricDoctorJourney, alt: "Trayectoria médica y etapas del cuidado pediátrico" },
      { src: pediatricTurnos, alt: "Flujo de solicitud de turnos" },
      { src: pediatricFaq, alt: "Preguntas frecuentes y contacto" },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "La autoridad médica no se veía desde afuera",
      body: [
        "El consultorio pediátrico necesitaba una presencia pública que comunicara su trayectoria y especialidad, y que funcionara como canal de contacto para las familias.",
        "La información clave (trayectoria del profesional, etapas del cuidado pediátrico, horarios y ubicación) no tenía un lugar único donde consultarse.",
        "Las consultas de turnos llegaban por canales dispersos, sin un flujo ordenado que le dejara a la clínica los datos necesarios para responder.",
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un sitio público claro, optimizado para SEO y orientado a turnos",
      features: [
        {
          title: "Autoridad médica como eje",
          description:
            "La portada presenta al profesional y su trayectoria, con las etapas del cuidado pediátrico desde la preconcepción hasta la adolescencia.",
        },
        {
          title: "Flujo de solicitud de turnos",
          description:
            "Un formulario de solicitud de turnos ordena la consulta y reúne los datos que la clínica necesita antes de responder, en lugar de mensajes sueltos.",
        },
        {
          title: "FAQ y contacto directo",
          description:
            "Preguntas frecuentes, horarios, ubicación y canales de contacto directo, todo en un mismo lugar y sin fricción.",
        },
        {
          title: "Rendimiento y SEO",
          description:
            "Sitio estático con generación optimizada y contenido pensado para buscadores, para que las familias encuentren la clínica y lleguen al turno.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Funcionalidades entregadas; métricas de negocio pendientes.",
      metrics: [
        {
          value: "[PENDIENTE]",
          unit: "métricas de resultado",
          label:
            "No contamos aún con cifras de consultas o conversión. Completar con datos reales cuando los tengas.",
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
        "ERP clínico y portal de pacientes para una clínica pediátrica: historia clínica conforme a la Ley 26.529, turnos, recetas en PDF y autenticación segura.",
    },
    eyebrow: "Caso de estudio",
    title: "ERP clínico y portal de pacientes para clínica pediátrica",
    client: "Clínica pediátrica",
    location: "Argentina",
    category: "Gestión (ERP)",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Turborepo",
    ],
    gallery: [
      { src: pediatricDashboard, alt: "Dashboard clínico con el embudo de pacientes del día" },
      { src: pediatricPatients, alt: "Directorio de pacientes pediátricos" },
      { src: pediatricAppointments, alt: "Agenda de turnos del consultorio" },
      { src: pediatricSettings, alt: "Configuración de la clínica y recetas" },
      { src: pediatricLogin, alt: "Login seguro del ERP clínico" },
    ],
    problem: {
      eyebrow: "El desafío",
      title: "Gestionar pacientes pediátricos exige más que una agenda de turnos",
      body: [
        "Un consultorio pediátrico no maneja un solo paciente: maneja niños con tutores legales (padre, madre o responsable), obra social y datos clínicos que deben conservarse durante años.",
        "La historia clínica está alcanzada por la Ley 26.529 de registros médicos: no se puede borrar información clínica ni dejar acciones sin trazabilidad. Un sistema genérico no contempla esa exigencia.",
        "El consultorio necesitaba centralizar en una sola herramienta la gestión de pacientes, turnos, historia clínica, recetas y obligaciones, sin depender de planillas sueltas ni de un software que no contemplara su forma de trabajar.",
      ],
    },
    solution: {
      eyebrow: "La solución",
      title: "Un ERP clínico a medida, con API propia y portal de pacientes",
      features: [
        {
          title: "Panel clínico en tiempo real",
          description:
            "El equipo ve el embudo de pacientes del día, la sala de espera, la asistencia, las evoluciones pendientes de firma y los próximos turnos en un solo tablero.",
        },
        {
          title: "Historia clínica conforme a la Ley 26.529",
          description:
            "Cada acción clínica queda registrada en un historial de auditoría inmutable, con autor, fecha y detalle del cambio. Nada se borra: las entidades clínicas usan baja lógica y la jerarquía de tutores queda modelada.",
        },
        {
          title: "Recetas en PDF y configuración de la clínica",
          description:
            "Un generador dinámico de recetas en PDF incorpora los datos de la clínica, el profesional y su matrícula. La configuración permite ajustar licencias, especialidad y encabezados sin tocar código.",
        },
        {
          title: "Seguridad y control de acceso",
          description:
            "Una API propia con roles diferenciados y autenticación de servidor mediante cookies httpOnly, sin exponer tokens al navegador. Cada usuario accede solo a lo que le corresponde.",
        },
      ],
    },
    results: {
      eyebrow: "Resultados",
      title: "Funcionalidades entregadas; métricas de negocio pendientes.",
      metrics: [
        {
          value: "[PENDIENTE]",
          unit: "métricas de resultado",
          label:
            "No contamos aún con cifras de ahorro o de tiempo. Completar con datos reales cuando los tengas.",
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
