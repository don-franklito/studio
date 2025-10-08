import {
  Code,
  Database,
  Terminal,
  Github,
  GitBranch,
  KanbanSquare,
  Book,
  Send,
  BrainCircuit,
  Users,
  ShieldCheck,
  DraftingCompass,
  Coffee,
  Server,
  Briefcase,
  Lightbulb,
} from 'lucide-react';

import {
  AngularIcon,
  BitbucketIcon,
  CodeIgniterIcon,
  JenkinsIcon,
  LaravelIcon,
  NodeJsIcon,
} from '@/components/icons';

export const profileData = {
  name: 'Juan Francisco Lizarraga Luna',
  title: 'Ingeniero Full-Stack, Especialista en Calidad de Software y Automatización',
  summary:
    'Soy un Ingeniero en Tecnologías de la Información con 6 años de experiencia demostrable en el ciclo de vida completo del desarrollo de software. Mi enfoque es generar soluciones eficientes, escalables y de alta calidad en entornos ágiles. Tengo un perfil Full-Stack sólido, con expertise en desarrollo Back-end (Java, PHP con Laravel y CodeIgniter), Front-end (JavaScript, Angular, JQuery) y bases de datos (PostgreSQL, Microsoft SQL). Mi compromiso con la calidad se refleja en mi experiencia liderando pruebas, garantizando una alta cobertura y disponibilidad del sistema. Certificado en Scrum y Six Sigma, aplico metodologías para la automatización de procesos, logrando reducciones significativas en tiempos de procesamiento.',
};

export const navLinks = [
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#portfolio', label: 'Portafolio' },
  { href: '#ai-tool', label: 'Optimizador IA' },
];

export const experienceData = [
  {
    role: 'Ingeniero de Soporte',
    company: 'Softtek',
    description:
      'Liderazgo técnico Nivel 2 y 3 y gestión de un equipo de 5 ingenieros (Jira/Confluence). Logré una reducción del 25% en el tiempo de procesamiento mediante automatización con Bash y SQL. Participación clave en la migración de Java 8 a Java 11 para mejorar rendimiento y seguridad.',
    icon: Briefcase,
  },
  {
    role: 'Desarrollador Web',
    company: 'Freelance',
    description:
      'Diseño e implementación Full-Stack (PHP/JavaScript) de módulos críticos (Alta de Clientes/Cuentas/Cobranza). Reduje el tiempo de reportes financieros en 30% mediante el desarrollo de procedimientos almacenados optimizados. Liderazgo en el levantamiento de requerimientos (UML).',
    icon: Code,
  },
  {
    role: 'Programador Web / Analista',
    company: 'UPC Technologies',
    description:
      'Optimización de consultas SQL que mejoraron el rendimiento en un 35% sobre grandes volúmenes de datos. Desarrollo de procesos almacenados en Microsoft SQL y diseño de interfaces que redujeron el tiempo de ingreso de datos en un 20%.',
    icon: Database,
  },
  {
    role: 'Practicante Desarrollador Front-end',
    company: 'Solemti',
    description:
      'Maquetación 100% responsiva (Bootstrap/Media Queries) y alta fidelidad respecto a diseños UI/UX. Corrección de más de 20 bugs, mejorando la estabilidad del sistema y la experiencia del usuario (UX).',
    icon: Lightbulb,
  },
];

export const skillsData = {
  'Lenguajes y Frameworks': [
    { name: 'Java', icon: Coffee },
    { name: 'JavaScript', icon: Code },
    { name: 'PHP', icon: Code },
    { name: 'C++', icon: Code },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
    { name: 'Angular', icon: AngularIcon },
    { name: 'Laravel', icon: LaravelIcon },
    { name: 'CodeIgniter', icon: CodeIgniterIcon },
    { name: 'NodeJs', icon: NodeJsIcon },
  ],
  'Bases de Datos y Backend': [
    { name: 'PostgreSQL', icon: Database },
    { name: 'Microsoft SQL', icon: Database },
    { name: 'Bash', icon: Terminal },
    { name: 'RLM', icon: Server },
    { name: 'Autosys', icon: Server },
  ],
  'DevOps y Herramientas': [
    { name: 'GitHub', icon: Github },
    { name: 'Bitbucket', icon: BitbucketIcon },
    { name: 'TortoiseSVN', icon: GitBranch },
    { name: 'Jenkins', icon: JenkinsIcon },
    { name: 'Jira', icon: KanbanSquare },
    { name: 'Confluence', icon: Book },
    { name: 'Postman', icon: Send },
  ],
  'IA y Metodologías': [
    { name: 'GitHub Copilot', icon: Github },
    { name: 'ChatGPT/Gemini', icon: BrainCircuit },
    { name: 'Scrum (SFC)', icon: Users },
    { name: 'Six Sigma (SSYB)', icon: ShieldCheck },
    { name: 'UML', icon: DraftingCompass },
  ],
};

export const projectsData = [
    {
        id: 'project-1',
        title: 'Sistema de Gestión de Clientes',
        description: 'Desarrollo de un módulo full-stack para la gestión de clientes, cuentas y cobranza, mejorando la eficiencia operativa.',
        imageHint: 'code laptop',
        link: '#',
    },
    {
        id: 'project-2',
        title: 'Optimización de Base de Datos',
        description: 'Mejora del rendimiento de consultas SQL en un 35% para una aplicación con gran volumen de datos.',
        imageHint: 'data chart',
        link: '#',
    },
    {
        id: 'project-3',
        title: 'Migración de Plataforma Java',
        description: 'Participación en la migración de un sistema empresarial de Java 8 a Java 11, aumentando la seguridad y el rendimiento.',
        imageHint: 'business meeting',
        link: '#',
    },
    {
        id: 'project-4',
        title: 'Aseguramiento de Calidad',
        description: 'Liderazgo en la ejecución de pruebas funcionales y de regresión, logrando una cobertura de hasta el 85%.',
        imageHint: 'software testing',
        link: '#',
    },
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/juan-francisco-liz%C3%A1rraga-luna-4a3977114/',
  github: 'https://github.com/Don-Franklito',
};
