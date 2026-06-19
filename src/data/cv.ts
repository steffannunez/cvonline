// ─────────────────────────────────────────────────────────────
// Fuente única de verdad del CV.
// Editá SOLO este archivo para actualizar tu contenido.
// La vista (componentes .astro) consume estos datos.
// ─────────────────────────────────────────────────────────────

export interface Contact {
  email: string;
  phone: string;
  handle: string;
  github?: string;
  linkedin?: string;
}

export interface SkillGroup {
  category: string;
  subgroups: { label: string; items: string[] }[];
}

export interface Job {
  role: string;
  company: string;
  context?: string;
  period: string;
  location: string;
  highlights: string[];
  tags?: string[];
}

export interface Project {
  name: string;
  url?: string;
  description: string;
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export const profile = {
  name: 'B. Estefan Núñez Maturana',
  title: 'Software Engineer Sr · Full Stack Developer',
  tagline: 'Technical Lead · Arquitectura de microservicios · Cloud-native · IA',
  summary:
    'Ingeniero de Software con más de 5 años de experiencia en desarrollo full stack, especializado en arquitecturas de microservicios escalables con TypeScript, Node.js y frameworks modernos como NestJS, Next.js y Vue.js. Experto en soluciones cloud-native sobre AWS, Azure, Vercel y Supabase. Actualmente Technical Lead en la Cámara de Comercio de Santiago (vía Leytonmedia), liderando un equipo de 9 ingenieros sobre una arquitectura BFF de 15 frontends y 11 backends. Apasionado por Clean Code, SOLID y CI/CD en entornos ágiles, con experiencia adicional en entrenamiento de modelos de IA y desarrollo de herramientas MCP.',
};

export const contact: Contact = {
  email: 'brandon.nunez@usach.cl',
  phone: '(+56) 9 9090 9063',
  handle: '@steffan.uwu',
  github: 'https://github.com/TU_USUARIO',
  linkedin: 'https://linkedin.com/in/TU_USUARIO',
};

export const stats = [
  { value: '5+', label: 'años de experiencia' },
  { value: '9', label: 'ingenieros liderados' },
  { value: '15+11', label: 'frontends + backends (BFF)' },
  { value: '4', label: 'productos propios' },
];

export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    subgroups: [
      { label: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Node.js', 'Python', 'C#', 'Java', 'Golang'] },
      { label: 'Frameworks', items: ['NestJS', 'Express.js', '.NET', 'FastAPI', 'Spring Boot', 'Django'] },
      { label: 'APIs', items: ['REST', 'GraphQL', 'gRPC'] },
    ],
  },
  {
    category: 'Frontend',
    subgroups: [
      { label: 'Frameworks', items: ['React', 'Next.js', 'Vue 3', 'Nuxt.js', 'Angular'] },
      { label: 'Tecnologías', items: ['TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Bootstrap'] },
    ],
  },
  {
    category: 'Bases de Datos',
    subgroups: [
      { label: 'Relacionales', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL Server'] },
      { label: 'NoSQL', items: ['MongoDB', 'DynamoDB', 'Couchbase', 'Redis', 'Supabase'] },
    ],
  },
  {
    category: 'Cloud, DevOps & Arquitectura',
    subgroups: [
      { label: 'Cloud', items: ['Azure', 'AWS', 'Vercel', 'Firebase', 'Google Cloud', 'Supabase'] },
      { label: 'Contenedores', items: ['Docker', 'Kubernetes'] },
      { label: 'CI/CD', items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Azure DevOps'] },
      { label: 'Arquitectura', items: ['Microservicios', 'Serverless', 'Event-Driven', 'Monolitos escalables'] },
      { label: 'Automatización', items: ['n8n', 'Python scripting'] },
    ],
  },
  {
    category: 'Metodologías & Herramientas',
    subgroups: [
      { label: 'Metodologías', items: ['Scrum', 'Kanban', 'Agile'] },
      { label: 'Principios', items: ['Clean Code', 'SOLID', 'DRY', 'Testing automatizado'] },
      { label: 'Herramientas', items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Postman', 'Swagger', 'Figma'] },
    ],
  },
];

export const experience: Job[] = [
  {
    role: 'Technical Lead',
    company: 'Leytonmedia',
    context: 'Cámara de Comercio de Santiago',
    period: 'Abril 2026 — Presente',
    location: 'Santiago, Chile',
    tags: ['React', '.NET', 'Azure', 'BFF', 'Leadership'],
    highlights: [
      'Liderazgo de un equipo de 9 ingenieros, estableciendo estándares de código, code review, pruebas funcionales y buenas prácticas de ingeniería.',
      'Arquitectura y evolución de una arquitectura BFF conectando 15 aplicaciones frontend y 11 servicios backend en React y .NET, desplegado en Azure Cloud.',
      'Liderazgo del rediseño visual completo de la plataforma, con ownership sobre dirección UX/UI, sistema de diseño e implementación frontend desde cero.',
      'Responsable de despliegues, revisión de PRs, validación funcional y pasos a producción de todos los desarrollos del equipo.',
      'Implementación de metodologías ágiles y liderazgo de migración de sistemas legacy hacia arquitecturas escalables y mantenibles.',
    ],
  },
  {
    role: 'Lead Software Engineer & Co-founder',
    company: 'Vrandy SPA',
    period: 'Noviembre 2024 — Presente',
    location: 'Santiago, Chile',
    tags: ['React', 'Next.js', 'Supabase', 'Kubernetes', 'AWS'],
    highlights: [
      'Tech lead y desarrollador principal de med.vrandy.cl, marketplace para profesionales de medicina estética (próximo lanzamiento).',
      'Desarrollo full stack: frontend con React, Next.js, TypeScript y Tailwind; backend y autenticación con Supabase.',
      'Diseño e implementación de arquitectura de microservicios escalables con Docker, Kubernetes y servicios AWS.',
      'Diseño UX/UI en Figma, modelado de base de datos relacional y gestión técnica del backlog del producto.',
      'Pipelines CI/CD con GitHub Actions y despliegues automatizados en Vercel.',
    ],
  },
  {
    role: 'Lead Software Engineer & Co-founder',
    company: 'Bfrost Studio',
    period: '2025 — Presente',
    location: 'Santiago, Chile',
    tags: ['IA', 'MCP', 'React', 'Next.js', 'Supabase'],
    highlights: [
      'Desarrollo de productos digitales propios: endreams.com (generación de imágenes y videos con IA) y chronolimit.com (gestión de metas y financiamiento).',
      'Desarrollo de servidores MCP open source para Blender y Unreal Engine 5, habilitando flujos de creación de videojuegos con agentes de IA.',
      'Desarrollo e implementación de proyectos completos como ravenAI y chronolimit.com con React, Next.js y TypeScript.',
      'Arquitectura e integración con Supabase (auth, storage, base de datos, cron jobs) y despliegues en Vercel.',
    ],
  },
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'Toteat',
    period: '2024 — 2025',
    location: 'Remoto',
    tags: ['Angular', 'Vue 3', 'Python'],
    highlights: [
      'Desarrollo y resolución de bugs en plataforma de gestión para restaurantes.',
      'Implementación y optimización de sistemas de reportería con grandes volúmenes de datos.',
      'Stack: Angular 1, Vue 3, Python 3 en entorno de producción legacy + moderno.',
    ],
  },
  {
    role: 'AI Trainer',
    company: 'Revelo',
    context: 'Anthropic — Claude',
    period: '2025',
    location: 'Remoto',
    tags: ['IA', 'LLM', 'Evaluación'],
    highlights: [
      'Participación en el programa de entrenamiento y evaluación del modelo Mythos (Claude) de Anthropic.',
      'Generación de datos de entrenamiento, evaluación de respuestas y feedback para mejora del modelo.',
    ],
  },
  {
    role: 'Software Engineer (Freelance)',
    company: 'Independiente',
    period: '2023 — Presente',
    location: 'Remoto',
    tags: ['React', 'Next.js', 'NestJS', 'FastAPI', 'AWS'],
    highlights: [
      'Implementación completa de frontends desde cero para 3 plataformas web (ravenAI, chronolimit.com, med.vrandy.cl).',
      'Desarrollo de microservicios backend escalables con TypeScript, Node.js, NestJS y Python FastAPI.',
      'Proyecto destacado: plataforma de casino online de juegos de lógica (sin azar) con Vue.js, FastAPI, Docker y Supabase.',
      'Infraestructura cloud con AWS (Lambda, EC2, ECS, API Gateway, S3), Vercel y Supabase.',
      'Automatización de procesos empresariales con n8n y scripting Python.',
    ],
  },
  {
    role: 'Backend Semi Senior Developer',
    company: 'Mercado Libre',
    period: '2023 — 2024',
    location: 'Santiago, Chile',
    tags: ['Java', 'Golang', 'Python', 'Redis', 'ML'],
    highlights: [
      'Desarrollo y mantenimiento de microservicios de alto tráfico para API de publicidad y sistema de recomendaciones.',
      'Implementación de algoritmos de machine learning y componentes frontend en Java, Golang y Python.',
      'Despliegue continuo de experimentos A/B con usuarios reales, análisis de métricas con Datadog y BigQuery.',
      'Optimización de performance usando Redis como capa de caché distribuida.',
      'Arquitectura de microservicios sobre Fury, la plataforma interna de infraestructura de Mercado Libre.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Talana linQ Spa',
    period: '2022 — 2023',
    location: 'Santiago, Chile',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    highlights: [
      'Full stack developer enfocado en módulos de remuneraciones y firma digital electrónica.',
      'Desarrollo end-to-end: frontend (Vue.js), backend (Django/Python) y base de datos (PostgreSQL).',
      'Recuperación de datos críticos desde servidores y backups, garantizando continuidad del negocio.',
      'Gestión de infraestructura AWS (EC2, S3, Lambda) para servicios en producción.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Tenlove Spa',
    period: '2021 — 2022',
    location: 'Santiago, Chile',
    tags: ['Swift', 'Kotlin', 'AWS', 'ML'],
    highlights: [
      'Desarrollo de aplicación móvil de citas para iOS (Swift) y Android (Kotlin).',
      'Búsqueda, categorización y filtrado de imágenes con machine learning.',
      'Arquitectura serverless con AWS Lambda, EC2, ECS y S3 para procesamiento de imágenes.',
      'Supervisión de deploys a producción y gestión de accesos a servidores y bases de datos.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'endreams.com',
    description: 'Plataforma de generación y edición de imágenes y videos con IA.',
    stack: ['React', 'Next.js', 'TypeScript', 'APIs generativas'],
  },
  {
    name: 'chronolimit.com',
    description: 'App de gestión de metas con sistema de financiamiento integrado y contadores de tiempo.',
    stack: ['React', 'Next.js', 'Supabase'],
  },
  {
    name: 'med.vrandy.cl',
    description: 'Marketplace para cirujanos plásticos y medicina estética (próximo lanzamiento).',
    stack: ['React', 'Next.js', 'Supabase'],
  },
  {
    name: 'MCP Servers · Blender & UE5',
    description: 'Servidores MCP open source que permiten a agentes de IA interactuar con herramientas 3D y motores de videojuegos.',
    stack: ['MCP', 'Python', 'Blender', 'Unreal Engine 5'],
  },
  {
    name: 'ravenAI',
    description: 'Plataforma web desarrollada de extremo a extremo con foco en experiencia y rendimiento.',
    stack: ['React', 'Next.js', 'TypeScript'],
  },
  {
    name: 'Casino de juegos de lógica',
    description: 'Plataforma de casino online de juegos de lógica (sin azar), de arquitectura completa.',
    stack: ['Vue.js', 'FastAPI', 'Docker', 'Supabase'],
  },
];

export const education: Education[] = [
  {
    degree: 'Ingeniero de Ejecución en Computación e Informática',
    school: 'Universidad de Santiago de Chile',
    year: '2021',
  },
  {
    degree: 'Licenciado en Ciencias de la Ingeniería',
    school: 'Universidad de Santiago de Chile',
    year: '2018',
  },
];

export const languages = [
  { lang: 'Español', level: 'Nativo' },
  { lang: 'Inglés', level: 'Avanzado' },
];
