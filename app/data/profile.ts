export interface Metric {
  value: string
  label: string
  context: string
}

export interface Role {
  title: string
  period: string
  summary: string
  highlights: string[]
}

export interface Company {
  name: string
  location?: string
  roles: Role[]
}

export interface WorkArea {
  title: string
  description: string
  stack: string
}

export interface SkillGroup {
  name: string
  primary: string[]
  also: string[]
}

export interface Principle {
  title: string
  text: string
}

export const site = {
  url: 'https://igormytyuk.dev',
  name: 'Ihor Mytyuk',
  alternateName: 'Igor Mytyuk',
  title: 'Ihor Mytyuk | Technical Lead & Full-Stack Software Engineer',
  description:
    'Ihor Mytyuk is a Technical Lead and Full-Stack Software Engineer specializing in Angular, .NET, software architecture, performance optimization, and developer productivity.',
  jobTitle: 'Software Development Team Lead & Full-Stack Engineer',
  locality: 'Reggio Emilia',
  country: 'Italy',
  email: 'connect@igormytyuk.dev',
  phone: '+39 391 1196 793',
  github: 'https://github.com/nicetomytyuk',
  linkedin: 'https://www.linkedin.com/in/igor-mytyuk/',
  resume: '/files/Ihor_Mytyuk_Resume.pdf'
}

export const hero = {
  headline: 'I build software. And better ways to build it.',
  intro:
    'I work across full-stack development, software architecture, performance, and developer productivity. I enjoy solving complex engineering problems and building tools that help teams deliver better software.'
}

export const about = [
  'I have spent more than eight years building web, mobile, and enterprise applications. I started as a hands-on developer in retail, hospitality, logistics, and e-commerce, and gradually took on architecture, code review, and team leadership.',
  'My daily work is mostly Angular, TypeScript, C#/.NET, and SQL. At E80 Group I coordinate WebUI engineering across warehouse automation projects and act as a technical link between the Project and Product engineering departments.',
  'What keeps me interested is the part around the code: architecture, performance, developer experience, AI-assisted development, and the habits that make a team faster without making it louder.'
]

export const metrics: Metric[] = [
  {
    value: '8+',
    label: 'years of engineering',
    context: 'From web, mobile and POS development to architecture and team leadership.'
  },
  {
    value: '40%',
    label: 'faster developer ramp-up',
    context: 'After introducing structured onboarding and development processes at GAB Tamagnini.'
  },
  {
    value: '90%',
    label: 'lower infrastructure cost',
    context: 'Approximate saving from migrating legacy infrastructure to a more cost-efficient environment.'
  },
  {
    value: '500+',
    label: 'installations',
    context: 'Of an Android restaurant ordering application I built for hospitality customers.'
  }
]

export const experience: Company[] = [
  {
    name: 'E80 Group S.P.A.',
    location: 'Reggio Emilia area, Italy',
    roles: [
      {
        title: 'Software Development Team Lead',
        period: 'July 2026 to Present',
        summary:
          'Coordinating WebUI engineering across enterprise warehouse automation projects, and connecting what customer projects learn with what the Product teams build.',
        highlights: [
          'Coordinate internal and external developers, turning functional specifications into technical requirements, user stories, and sprint plans.',
          'Support architectural decisions, troubleshooting, code reviews, and development standards.',
          'Established Git, Pull Request, and CI/CD collaboration practices on Azure DevOps.',
          'Act as technical liaison between Project and Product engineering, collecting customer feedback and coordinating support escalations.',
          'Build internal tools that remove repetitive work: a .NET code-generation utility for DBO and DTO classes, offline dependency tooling, and reusable AI agent skills for a proprietary DSL.',
          'Created an internal training platform with documentation, video tutorials, tools, and best practices, and review contributions from other team leads.'
        ]
      },
      {
        title: 'Software Engineer',
        period: 'January 2026 to June 2026',
        summary:
          'Customised and delivered enterprise WebUI solutions for warehouse automation, and looked hard at how the product performs.',
        highlights: [
          'Implemented customer-specific configurations, backend logic, SQL integrations, and .NET Web APIs, and took part in integration and end-to-end testing.',
          'Investigated major CPU and memory problems in an established enterprise application using browser profiling and custom diagnostic scripts.',
          'Documented more than 50 product issues and improvement proposals covering performance, architecture, functionality, and UI/UX.',
          'Improved Git collaboration and CI/CD workflows, and supported other projects with WebUI installations and technical issues.'
        ]
      }
    ]
  },
  {
    name: 'GAB Tamagnini S.R.L.',
    roles: [
      {
        title: 'Software Development Team Lead',
        period: 'January 2023 to January 2026',
        summary:
          'Led a team of five developers delivering POS, e-commerce, and business management applications.',
        highlights: [
          'Introduced structured onboarding and development processes, reducing developer ramp-up time by 40%.',
          'Defined architectural standards and code review practices, contributing to a 30% reduction in post-deployment bugs.',
          'Improved Git workflows and CI/CD with GitHub Actions and Docker, raising deployment productivity by 25% and cutting manual release tasks by 75%.',
          'Built reusable authentication and data components and standardised data models, which sped up backend delivery by 60%.',
          'Migrated legacy infrastructure to a more cost-efficient environment, reducing infrastructure costs by approximately 90%.'
        ]
      },
      {
        title: 'Software Engineer',
        period: 'September 2018 to December 2022',
        summary:
          'Built web, mobile, and backend applications for retail, hospitality, logistics, and e-commerce, from requirements to maintenance.',
        highlights: [
          'Developed Angular and .NET marketplace solutions integrating Stripe and Satispay, supporting about 1,500 daily transactions.',
          'Built an Android restaurant ordering application used across more than 500 installations, plus native Android apps for warehouse and inventory tracking.',
          'Created business management platforms, analytics dashboards, and POS modules, with REST APIs, WebSocket features, and third-party integrations.',
          'Contributed to an 80% expansion of the product catalog and, with the POS modules, to a reported tenfold increase in license sales between 2018 and 2024.'
        ]
      }
    ]
  }
]

export const work: WorkArea[] = [
  {
    title: 'Enterprise WebUI for warehouse automation',
    description:
      'Customising enterprise applications for automated logistics environments: frontend configuration, backend services, SQL integrations, customer-specific logic, and the troubleshooting that goes with all of it.',
    stack: 'Angular, .NET, SQL Server, Azure DevOps'
  },
  {
    title: 'Performance engineering and product feedback',
    description:
      'Tracking down CPU, memory, and interaction problems in a large enterprise application. Browser diagnostics and custom scripts turned vague complaints into reproducible evidence the Product team could act on.',
    stack: 'Browser profiling, diagnostic scripts, technical reporting'
  },
  {
    title: 'Developer productivity tools',
    description:
      'Tools for .NET code generation, offline dependency management, and AI-assisted work with a proprietary DSL. The goal is always the same: less manual work, simpler development, a lower barrier for new people.',
    stack: '.NET, automation, AI agent skills'
  },
  {
    title: 'Engineering training platform',
    description:
      'A shared training platform for the Project department with tutorials, documentation, and a collaborative maintenance workflow, so knowledge stops living in a few people’s heads.',
    stack: 'Documentation, video tutorials, review workflow'
  },
  {
    title: 'POS, e-commerce, and mobile platforms',
    description:
      'Production systems for retail and hospitality: payment integrations, Android applications, dashboards, and business management tools.',
    stack: 'Angular, .NET, Node.js, Kotlin, Stripe, Satispay'
  }
]

export const approach: Principle[] = [
  {
    title: 'Measure first',
    text: 'Sometimes the bottleneck is the code. Sometimes it is how we write it. A profiler or a build log usually knows which.'
  },
  {
    title: 'Automate the boring part',
    text: 'Fewer repetitive tasks, more time for the interesting problems. If someone does it by hand three times, it becomes a script.'
  },
  {
    title: 'Write it down',
    text: 'Standards, onboarding, and training material are part of the product. A team ramps up faster when the answers are easy to find.'
  },
  {
    title: 'AI as a tool, not a shortcut',
    text: 'I use AI agents to automate routine work, prototype ideas, and make a proprietary DSL easier to work with. Review and judgment stay human.'
  }
]

export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    primary: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    also: ['JavaScript', 'Vue.js', 'React', 'Three.js']
  },
  {
    name: 'Backend',
    primary: ['C#', '.NET', 'ASP.NET Core', 'REST APIs'],
    also: ['Node.js', 'WebSockets']
  },
  {
    name: 'Data',
    primary: ['SQL Server', 'Data integration'],
    also: ['PostgreSQL', 'MySQL', 'Database design']
  },
  {
    name: 'Engineering',
    primary: ['Software architecture', 'Git', 'Azure DevOps', 'CI/CD', 'Performance profiling'],
    also: ['GitHub Actions', 'Docker', 'System integration']
  },
  {
    name: 'Leadership',
    primary: ['Technical leadership', 'Mentoring', 'Code review', 'Sprint planning'],
    also: ['Developer enablement', 'Cross-functional collaboration']
  },
  {
    name: 'Developer tools',
    primary: ['Code generation', 'Automation', 'AI-assisted development'],
    also: ['Internal tooling']
  }
]

export const education = {
  school: 'Istituto Superiore Silvio D’Arzo',
  program: 'Information Technology and Telecommunications, EQF Level 4',
  period: '2014 to 2019',
  place: 'Montecchio Emilia, Italy'
}

export const languages = [
  { name: 'English', level: 'Advanced' },
  { name: 'Italian', level: 'Native' },
  { name: 'Ukrainian', level: 'Native' },
  { name: 'Russian', level: 'Native' },
  { name: 'Spanish', level: 'Basic understanding' }
]

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' }
]
