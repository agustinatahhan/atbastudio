export type ProjectTranslation = {
  title: string;
  category: string;
  description: string;
};

export type Project = {
  id: string;
  kind: "web" | "design" | "software";
  tech: string[];
  live: string;
  repo?: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
  en: ProjectTranslation;
  es: ProjectTranslation;
};

export const projects: Project[] = [
  {
    id: "guia",
    kind: "web",
    tech: [
      "Next.js",
      "TypeScript",
      "WordPress (Headless)",
      "GraphQL",
      "React-Leaflet",
      "Tailwind CSS",
    ],
    live: "https://guiagastronomicadr.com",
    image: "/projects/guia/guia1.png",
    imageAlt: "Vista principal",
    reverse: false,
    es: {
      title: "Guía Gastronómica Dominicana",
      category: "Gastronomía / Web",
      description:
        "Una guía gastronómica digital creada para mostrar la identidad culinaria de la República Dominicana. La plataforma combina destinos, platos tradicionales, rutas culturales y los guardianes del sabor en una experiencia editorial inmersiva que conecta territorio, cultura y gastronomía.",
    },
    en: {
      title: "Dominican Gastronomic Guide",
      category: "Food & Culture / Web",
      description:
        "A digital food guide created to showcase the culinary identity of the Dominican Republic. The platform combines destinations, traditional dishes, cultural routes, and flavor guardians in an immersive editorial experience that connects territory, culture, and gastronomy.",
    },
  },
  {
    id: "itiba",
    kind: "web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://itibaagencia.com/es",
    image: "/projects/itiba/itiba1.jpeg",
    imageAlt: "Home View",
    reverse: true,
    es: {
      title: "Itibá Agencia Gastronómica",
      category: "Agencia / Web",
      description:
        "Itibá es una plataforma culinaria y cultural que nace desde el Caribe para repensar la gastronomía con identidad, método y visión de futuro.",
    },
    en: {
      title: "Itibá Gastronomic Agency",
      category: "Agency / Web",
      description:
        "Itibá is a culinary and cultural platform born in the Caribbean to rethink gastronomy with identity, method, and a vision for the future.",
    },
  },
  {
    id: "learn",
    kind: "web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Calendly", "Vercel"],
    live: "https://learnwithiokacademy.com/",
    image: "/projects/learn/learn1.jpeg",
    imageAlt: "Home View",
    reverse: false,
    es: {
      title: "Learn With IOK",
      category: "E-learning / Web",
      description:
        "Portal informativo de una profesora de inglés donde los estudiantes pueden conocer sus servicios, metodología y reservar clases. El sitio combina diseño moderno, rendimiento y una experiencia clara enfocada en la conversión.",
    },
    en: {
      title: "Learn With IOK",
      category: "E-learning / Web",
      description:
        "An informational portal for an English teacher where students can explore services, methodology, and book lessons. The site combines modern design, performance, and a clear user journey focused on conversion.",
    },
  },
  {
    id: "neuro",
    kind: "web",
    tech: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
    live: "https://neurosinergia.store",
    image: "/projects/neuro/neuro1.jpeg",
    imageAlt: "Home View",
    reverse: true,
    es: {
      title: "Neurosinergia",
      category: "E-commerce / Diseño",
      description:
        "Ecommerce especializado en materiales terapéuticos y educativos. La plataforma permite explorar, filtrar y comprar recursos diseñados para profesionales y familias, ofreciendo una experiencia de compra clara y accesible.",
    },
    en: {
      title: "Neurosinergia",
      category: "E-commerce / Design",
      description:
        "An ecommerce platform specialized in therapeutic and educational materials. The website allows users to browse, filter, and purchase resources designed for professionals and families, delivering a clear shopping experience.",
    },
  },
  {
    id: "photoscape",
    kind: "web",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel", "Email.js", "Git"],
    live: "https://photoscapelandscape.com/",
    repo: "https://github.com/agustinatahhan/photoscape",
    image: "/projects/photoscape/photoscape1.jpeg",
    imageAlt: "Home View",
    reverse: false,
    es: {
      title: "Photoscape",
      category: "Paisajismo / Web",
      description:
        "Empresa de paisajismo en Florida. Rediseñamos su sitio para posicionarlos en el mercado local y generar conversiones de nuevos clientes — con foco en identidad visual, rendimiento y una navegación clara que convierte visitas en consultas.",
    },
    en: {
      title: "Photoscape",
      category: "Landscaping / Web",
      description:
        "Landscaping company based in Florida. We redesigned their website to position them in the local market and drive new client conversions — focusing on visual identity, performance, and clear navigation that turns visits into inquiries.",
    },
  },
  {
    id: "m4life",
    kind: "web",
    tech: ["React.js", "JavaScript", "Bootstrap", "CSS", "Email.js"],
    live: "https://www.microbesforlife.com/",
    repo: "https://github.com/agustinatahhan/m4life",
    image: "/projects/m4life/m4life1.jpeg",
    imageAlt: "Home View",
    reverse: true,
    es: {
      title: "M4Life",
      category: "Biotech / Web",
      description:
        "Startup dedicada a ofrecer soluciones microbiológicas para la agricultura y el cuidado del medio ambiente. Diseñamos su presencia digital para transmitir profesionalismo e impulsar su expansión internacional.",
    },
    en: {
      title: "M4Life",
      category: "Biotech / Web",
      description:
        "Startup offering microbiological solutions for agriculture and environmental care. We built their digital presence to convey professionalism and support their international growth.",
    },
  },
];
