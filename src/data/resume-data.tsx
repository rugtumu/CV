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

export const RESUME_DATA = {
  name: "Umut Gür",
  initials: "UG",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul/",
  about:
    "Data Analyst | Data Scientist | Mathematician",
  summary:
    "As a Data Analyst, I specialize in both analyzing large datasets for insights and developing predictive models to solve complex data problems. My expertise includes data cleaning, data visualization, and data management, along with machine learning and statistical modeling. I utilize tools such as Python, SQL, and Tableau to transform raw data into actionable insights and predictive solutions. Additionally, I work with big data processing tools and cloud platforms to optimize data-driven decision-making processes.",
  avatarURL: "https://avatars.githubusercontent.com/u/150899294?s=400&u=54d40f937758ae3e54838c602f180e80ffbf0e63&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "umutgur7@gmail.com",
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
      description:
        "During a 10-week period, we worked on various projects covering topics such as data analysis and data science. In this process, I not only experienced teamwork similar to that in a business environment but also significantly improved my data analysis and data science skills.",
    },
    {
      company: "Türkiye Buz Hokeyi Federasyonu",
      link: "https://tbhf.org.tr/",
      badges: [],
      title: "Instructor of Ice Skating",
      start: "March",
      end: "2024",
      description:
        "For a month, I gave basic skating training at the Beykoz Ice Rink and introduced people to the ice hockey branch.",
    },
    {
      company: "Mentor Özel Ders",
      link: "https://mentorozelders.com/",
      badges: ["Freelance"],
      title: "Instructor",
      start: "2022",
      end: null,
      description:
        "I have been teaching high school Math and Physics, as well as English, Calculus, and Physics 101 for about two years.",
    },    
  ],
  skills: [
    "SQL",
    "Python",
    "scikit-learn",
    "Pandas",
    "Seaborn",
    "Matplotlib",
    "ETL/ELT",
    "Tableau",
    "Bash",
    "C++",
    "LaTex",
    "Algorithmic Trading",
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
      "Certified as a Data Analyst, I have demonstrated expertise in analytic fundamentals, exploratory analysis, data management, and visualization/reporting. This certification validates my ability to perform A/B tests, clean and process data using SQL, analyze data using Python, and effectively communicate insights through dashboards and presentations.",      
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
        "As a certified Associate Data Scientist, I have demonstrated proficiency in data management, exploratory analysis, statistical experimentation, modeling, and data science programming. I also gained skills in communicating actionable insights through reports and dashboards, preparing me for entry-level data science roles.",      
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
        "Certified as an Associate Data Engineer, I have demonstrated proficiency in data management and exploratory analysis. This certification validates my ability to clean and prepare data using SQL for further analysis, and to understand common methods of working with data to effectively collaborate with data analysts and scientists.",
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
      "This certification validates my ability to clean and process data, identify data quality issues, and perform transformations using SQL, as well as calculate metrics and report on data characteristics and feature relationships using PostgreSQL.",      
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
        "Certified in AI Fundamentals, I have demonstrated proficiency in identifying use cases for AI sub-domains, understanding generative AI, constructing prompts for generative AI tools, and explaining the ethical considerations of AI and generative AI solutions.",      
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
        "SIEM Tools",
        "Linux",
        "Bash",
      ],
      description:
        "This certificate consists of hands-on, practice based assessments and are designed to prepare candidates for entry-level roles in cybersecurity.",
      link: {
        label: "coursera.org",
        href: "https://coursera.org/share/1198d12171bf94766669c19c02463390",
      },
    },
    {
      title: "Algorithmic Trading",
      techStack: [
        "Side Project",
        "Python",
        "Algorithmic Trading",
        "TradingView",
        "Pine Script"
      ],
      description: "I develop algorithms that scan cryptocurrency exchanges, as well as stock markets such as NASDAQ, NYSE, and BIST, using specific indicators. You can access my project's files on GitHub by clicking on the card.",
      link: {
        label: "github.com/rugtumu/trade",
        href: "https://github.com/rugtumu/trade",
      },
    },
    {
      title: "umutgur.com",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "React"
      ],
      description: "I built a website from a public template which belongs to Bartosz Jarocki. Also my current CV.",
      link: {
        label: "umutgur.com",
        href: "https://umutgur.com/",
      },
    },
    {
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
    },
  ],
} as const;
