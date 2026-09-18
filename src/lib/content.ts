import type {
  ContactInfo,
  Cta,
  Differentiator,
  FaqItem,
  ForWhoSection,
  NavItem,
  PortfolioItem,
  Service,
} from "./types";

export const isPending = (value: string) => value.includes("[PENDIENTE");

export const hasRealAnswer = (value: string) =>
  value.replace(/\[PENDIENTE:[^\]]*\]/g, "").trim().length > 0;

export const cleanAnswer = (value: string) =>
  value.replace(/\[PENDIENTE:[^\]]*\]/g, "").trim();

export const site = {
  name: "misure",
  url: "[PENDIENTE: dominio de producción]",
  announcement:
    "Desarrollo de software a medida en Rosario y alrededores. Prototipo gratis antes de contratar.",
  menuLabel: "Menú",
  metaTitle: "misure | Software a medida para pymes de Rosario y alrededores",
  metaDescription:
    "misure desarrolla sistemas de gestión, CRM y páginas web a medida para pymes de Rosario y alrededores. Prototipo gratis antes de firmar.",
  tagline: "Software a medida para pymes de Rosario y el cordón industrial.",
};

export const footer = {
  navTitle: "Navegación",
  contactTitle: "Contacto",
  ctaLabel: "Contanos tu caso",
  tagline: "Desarrollado por misure",
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
    "Ahí entendimos que había un problema real: las pymes locales pagan de más por sistemas genéricos que no encajan con cómo trabajan. Formamos misure para poder resolver eso a escala, con un modelo que va presencialmente a entender el negocio antes de escribir una línea de código.",
    "No somos una empresa con décadas de historia. Somos dos personas con un caso de éxito concreto y un método que funciona.",
  ],
};

export const hero = {
  title: "El sistema que reemplaza un sueldo completo.",
  lead:
    "Diseñamos y desarrollamos sistemas de gestión, ventas y páginas web 100% a medida. Entendemos el problema completo de tu negocio antes de proponerte una solución.",
  ctaPrimary: { label: "Quiero mi prototipo gratis", href: "/contacto#contacto" },
  ctaSecondary: { label: "Ver el caso de éxito", href: "/proyectos#portfolio" },
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
    "Desarrollamos software específico y 100% personalizado para tu empresa. Sin SaaS genérico, sin plantillas, sin adaptarte a un sistema rígido.",
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
      title: "Entrevista de 2 horas en tu negocio",
      description:
        "Vamos presencialmente a ver cómo trabajás antes de escribir una línea de código. No hacemos suposiciones desde una videollamada.",
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
      name: "[COMPLETAR: nombre]",
      role: "[COMPLETAR: rol, ej: Desarrollo]",
      description: "[COMPLETAR: frase personal, ej: Me obsesiona que el cliente entienda el sistema sin manual de instrucciones]",
      socials: {
        linkedin: "[COMPLETAR: link LinkedIn]",
        github: "[COMPLETAR: link GitHub]",
      },
    },
    {
      name: "[COMPLETAR: nombre]",
      role: "[COMPLETAR: rol, ej: Desarrollo y Negocio]",
      description: "[COMPLETAR: frase personal, ej: Prefiero una demo en el negocio del cliente que diez reuniones por Zoom]",
      socials: {
        linkedin: "[COMPLETAR: link LinkedIn]",
        github: "[COMPLETAR: link GitHub]",
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
      title: "Vamos a tu negocio",
      description:
        "Hacemos una entrevista presencial de 2 horas para entender cómo trabajás. No suposiciones desde una pantalla.",
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
  filtersLabel: string;
  detailsLabel: string;
  filters: { value: string; label: string }[];
  items: PortfolioItem[];
} = {
  eyebrow: "Portfolio",
  title: "Casos de éxito",
  description:
    "Proyectos reales, con resultados medibles. Cada sistema fue diseñado desde cero para el proceso de cada empresa.",
  filtersLabel: "Filtrar proyectos",
  detailsLabel: "Ver caso completo",
  filters: [
    { value: "todos", label: "Todos" },
    { value: "erp", label: "Gestión (ERP)" },
    { value: "crm", label: "Ventas (CRM)" },
    { value: "landing", label: "Páginas Web" },
  ],
  items: [
    {
      project: "Sistema de gestión para empresa de limpieza",
      client: "Empresa de limpieza · Rosario",
      category: "erp",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "QR", "Geolocalización"],
      description:
        "Asistencia por geolocalización/QR, cálculo automático de sueldos e impuestos y gestión de stock por edificio. Resultado: un puesto administrativo eliminado y quejas por inasistencias reducidas a 0.",
      href: "/proyectos/empresa-limpieza-rosario",
    },
    {
      project: "Proyecto [PENDIENTE]",
      client: "Cliente [PENDIENTE]",
      category: "crm",
      technologies: ["React", "Node.js", "TypeScript"],
      description: "[PENDIENTE: descripción del caso y resultados]",
    },
    {
      project: "Proyecto [PENDIENTE]",
      client: "Cliente [PENDIENTE]",
      category: "landing",
      technologies: ["Astro", "TypeScript"],
      description: "[PENDIENTE: descripción del caso y resultados]",
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
      "Buscás la opción más barata sin importar el resultado",
      "Querés un sistema ya armado sin adaptarlo a tu proceso",
      "No tenés 2 horas para una entrevista inicial presencial",
      "Esperás que el software resuelva problemas de gestión sin involucrarte",
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
    { label: "MODALIDAD", value: "Presencial / Remoto" },
  ],
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/misure",
      displayLabel: "misure",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/misure",
      displayLabel: "@misure",
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
};

export const contactForm = {
  labels: {
    name: "Nombre",
    company: "Empresa",
    email: "Email",
    phone: "Teléfono",
    service: "Servicio de interés",
    message: "Mensaje",
  },
  placeholders: {
    name: "Tu nombre",
    company: "Tu empresa",
    email: "tucorreo@empresa.com",
    phone: "Tu teléfono o WhatsApp",
    message: "Contanos en qué etapa está tu negocio",
  },
  servicePlaceholder: "Elegí un servicio",
  serviceOptions: [
    { value: "erp", label: "Sistemas de Gestión (ERP)" },
    { value: "crm", label: "Herramientas de Ventas (CRM)" },
    { value: "landing", label: "Páginas Web" },
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
  successMessage:
    "Gracias, recibimos tu mensaje. Te contactamos a la brevedad.",
  formError: "Revisá los campos marcados e intentá de nuevo.",
  disclaimer:
    "Tus datos están seguros con nosotros. No compartimos tu información con terceros ni enviamos spam.",
  web3forms: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "[PENDIENTE: access key de Web3Forms]",
  },
};

export const caseStudies = {
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
};
