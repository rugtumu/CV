import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import avatarImage from "@/public/images/avatar.jpg";

export const RESUME_DATA = {
  name: "Umut Gür",
  initials: "UG",
  location: "İstanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul/",
  about:
    "Data Analyst | Data Scientist | Mathematician",
  summary:
    "As a Data Analyst, I specialize in both analyzing large datasets for insights and developing predictive models to solve complex data problems. My expertise includes data cleaning, data visualization, and data management, along with machine learning and statistical modeling. I utilize tools such as Python, SQL, and Tableau to transform raw data into actionable insights and predictive solutions. Additionally, I work with big data processing tools and cloud platforms to optimize data-driven decision-making processes.",
  summaryPoints: [
    "Specialized in analyzing large datasets for insights and developing predictive models",
    "Experienced in data cleaning, data visualization, and data management",
    "Proficient in machine learning and statistical modeling techniques",
    "Utilize Python, SQL, and Tableau to transform raw data into actionable insights",
    "Work with big data processing tools and cloud platforms for optimized decision-making"
  ],
  avatarUrl: "@/public/images/avatar.jpg",
  personalWebsiteUrl: "https://www.umutgur.com/",
  hobbies: [
    "Board member of the ice sports team as an accountant (Boğaziçi Buz) [2023-2024]",
    "Active member of the university ice hockey team (Boğaziçi Blitz) [2022-2024]",
    "Volunteer representative of the Matematik Dünyası Dergisi at Boğaziçi University [2021-2022]",
    "Chair of the Mathematics Committee and accountant at Science Club [2020-2021]",
    "Co-founder of the Mathematics Committee at Science Club [2019]",
  ],
  contact: {
    email: "umutgur@tutamail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rugtumu",
        icon: GitHubIcon,
        text: "/rugtumu"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/umut-gur/",
        icon: LinkedInIcon,
        text: "/umut-gur"
      },
    ],
  },
  education: [
    {
      school: "Boğaziçi University",
      degree: "Bachelor's Degree in Mathematics",
      start: "2018",
      end: "2024",
      range: "2018 - 2024",
      gpa: "GPA: 3.11"
    },
  ],
  work: [
    {
      company: "Boğaziçi AI",
      link: "https://bogaziciai.com/",
      badges: [],
      title: "Data Bootcamp",
      start: "September",
      end: "November 2023",
      range: "2023",
      description:
        "During a 10-week period, we worked on various projects covering topics such as data analysis and data science. In this process, I not only experienced teamwork similar to that in a business environment but also significantly improved my data analysis and data science skills.",
      responsibilities: [
        "Completed intensive 10-week data science and analysis program",
        "Worked on various real-world data analysis and data science projects",
        "Collaborated in teams simulating business environment dynamics",
        "Significantly enhanced data analysis and data science skill set"
      ]
    },
    /*{
      company: "Mentor Özel Ders",
      link: "https://mentorozelders.com/",
      badges: ["Freelance"],
      title: "Instructor",
      start: "2022",
      end: "2024",
      range: "",
      description:
        "I have been teaching high school Math and Physics, as well as English, Calculus, and Physics 101 for about two years.",
    },*/
    {
      company: "Turkey Ice Hockey Federation",
      link: "https://tbhf.org.tr/",
      badges: ["On-site"],
      title: "Instructor of Ice Skating",
      start: "March",
      end: "2024",
      range: "2024",
      description:
        "For a month, I gave basic skating training at the Beykoz Ice Rink and introduced people to the ice hockey branch.",
      responsibilities: [
        "Provided basic skating training at Beykoz Ice Rink for one month",
        "Introduced participants to ice hockey fundamentals and techniques",
        "Developed training programs for beginners in ice skating"
      ]        
    },
    {
      company: "Scale AI",
      link: "https://scale.com/",
      badges: ["Remote"],
      title: "RLHF - Coding Team",
      start: "September 2024",
      end: "Present",
      range: "2024 - Present",
      description:
        "Contributing to the development of AI models by crafting high-quality prompts and evaluating model responses using advanced metrics to identify and correct errors. Working on coding projects involving Python, with a focus on code generation, synthesis, and debugging tasks.",
      responsibilities: [
        "Contributing to AI model development by crafting high-quality prompts",
        "Evaluating model responses using advanced metrics to identify and correct errors",
        "Work on Python coding projects with focus on code generation and synthesis",
        "Handle debugging tasks and optimize model performance"
      ]
      },
  ],
  skills: [
    "SQL",
    "Python",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "PySpark",
    "PyTorch",
    "Seaborn",
    "Matplotlib",
    "ETL/ELT",
    "Tableau",
    "Git Bash",
    "C++",
    "LaTex",
    "KaTeX",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  /*general_skills: [
    "SQL",
    "Python",
    "Data Analysis",
    "Data",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],*/
  projects: [
    {
      title: "Data Analyst",
      techStack: [
        "Python",
        "SQL",        
        "Exploratory Data Analysis",
        "Data Visualization",
        "Data Management",
        "A/B Tests",
      ],
      description:
      "~80 hours certification program with exams and recorded presentations.",      
      link: {
        label: "datacamp.com",
        href: "https://www.datacamp.com/certificate/DA0025829515704",
      },
    },
    {
      title: "Data Scientist Associate",
      techStack: [
        "Python",
        "Machine Learning",
        "scikit-learn",
        "Supervised Learning"
      ],
      description:
        "~80 hours certification program with exams.",      
      link: {
        label: "datacamp.com",
        href: "https://www.datacamp.com/certificate/DSA0012506867305",
      },
    },    
    {
      title: "Data Engineer Associate",
      techStack: [
        "Snowflake",
        "Python",
        "Database Design",
        "Data Warehousing",
      ],
      description:
        "~80 hours certification program with exams.",
      link: {
        label: "datacamp.com",
        href: "https://www.datacamp.com/certificate/DEA0014044089169",
      },
    },
    {
      title: "SQL Associate",
      techStack: [
        "PostgreSQL",
        "Database Design",
        "Data Management",
        "Exploratory Analysis",
      ],
      description:
      "~50 hours certification program with an exam.",
      link: {
        label: "datacamp.com",
        href: "https://www.datacamp.com/certificate/SQA0012414864755",
      },
    },
    {
      title: "AI Fundamentals",
      techStack: [
        "ML",
        "NLP",
        "LLM",
        "Generative AI",
        "ChatGPT",
      ],
      description:
        "~20 hours certification program.",      
      link: {
        label: "datacamp.com",
        href: "https://www.datacamp.com/skill-verification/AIF0020785439675",
      },
    },
    /*{
      title: "Data Analyst Associate",
      techStack: [
        "SQL",
        "Data Management",
        "Data Visualization"
      ],
      description:
      "This certification validates my ability to clean and process data using SQL, perform hands-on SQL coding challenges, use Python for analysis, and create effective dashboards, reports, and presentations to communicate insights.",
      logo: ParabolLogo,
      link: {
        label: "datacamp.com",
        href: "https://www.datacamp.com/certificate/DAA0014878098258",
      },
    },*/
    {
      title: "Google Cybersecurity",
      techStack: [        
        "Intrusion Detection Systems",
        "Network Security",        
        "Network Architecture",
        "Authentication Systems",
      ],
      description:
      "~60 hours certification program.",
      link: {
        label: "coursera.org",
        href: "https://coursera.org/share/1198d12171bf94766669c19c02463390",
      },
    },
    {
      title: "umutgur.com",
      techStack: [
        "TypeScript",
        "Next.js",
        "React"
      ],
      description: "I built a website from a template from Once UI. It is a personal portfolio website that showcases my projects and skills.",
      link: {
        label: "umutgur.com",
        href: "https://umutgur.com/",
      },
    },
    {
      title: "Algorithmic Trading",
      techStack: [
        "Machine Learning",
        "Python",
        "Algorithmic Trading",
        "TradingView",
        "Pine Script"
      ],
      description: "Worked on algorithms that scan cryptocurrency exchanges and stock markets using specific indicators.",
      link: {
        label: "github.com/rugtumu/trade",
        href: "https://github.com/rugtumu/trade",
      },
    },
    /*{
      title: "bogaziciblitz.com",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS"
      ],
      description: "I built a website from a Tailwind draft for the ice hockey team of Boğaziçi University, Boğaziçi Blitz.",
      link: {
        label: "bogaziciblitz.com",
        href: "https://bogaziciblitz.com/",
      },
    },*/
  ],
} as const;
