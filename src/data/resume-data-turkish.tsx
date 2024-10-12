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
  
  export const RESUME_DATA_TR = {
    name: "Umut Gür",
    initials: "UG",
    location: "Istanbul, Türkiye",
    locationLink: "https://www.google.com/maps/place/Istanbul/",
    about:
      "Veri Analisti | Veri Bilimcisi | Matematikçi",
    summary:
      "Bir veri analisti olarak, hem büyük veri setlerini analiz ederek içgörüler elde etme hem de karmaşık veri problemlerini çözmek için modeller geliştirme konusunda yetkinim. Uzmanlık alanlarım arasında veri temizleme, veri görselleştirme ve veri yönetimi bulunmakta, ayrıca makine öğrenimi ve istatistiksel modelleme konusunda deneyim sahibiyim. Python, SQL ve Tableau gibi araçları kullanarak ham veriyi uygulanabilir içgörülere ve tahmine dayalı çözümlere dönüştürüyorum. Ayrıca, büyük veri işleme araçları ve bulut platformları ile çalışarak veri odaklı karar alma süreçlerini optimize ediyorum.",
    avatarUrl: "https://avatars.githubusercontent.com/u/150899294?s=400&u=54d40f937758ae3e54838c602f180e80ffbf0e63&v=4",
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
        school: "Boğaziçi Üniversitesi",
        degree: "Matematik Lisans Derecesi",
        start: "2018",
        end: "2024",
        gpa: "Ortalama: 3.11"
      },
    ],
    work: [
      {
        company: "Boğaziçi AI",
        link: "https://bogaziciai.com/",
        badges: [],
        title: "Data Bootcamp",
        start: "Eylül",
        end: "Kasım 2023",
        description:
          "10 haftalık bir süreç boyunca, verileri analiz etme ve veri bilimi gibi konuları kapsayan çeşitli projeler üzerinde çalıştık. Bu süreçte sadece iş ortamındaki gibi takım çalışması deneyimi yaşamakla kalmadım, aynı zamanda veri analizi ve veri bilimi becerilerimi de önemli ölçüde geliştirdim.",
      },
      {
        company: "Türkiye Buz Hokeyi Federasyonu",
        link: "https://tbhf.org.tr/",
        badges: [],
        title: "Buz Pateni Eğitmeni",
        start: "Mart",
        end: "2024",
        description:
          "Bir aylık bir süreç boyunca Beykoz Buz Pistinde temel kayma eğitimi verdim ve insanları buz hokeyi branşıyla tanıştırdım.",
      },
      {
        company: "Mentor Özel Ders",
        link: "https://mentorozelders.com/",
        badges: ["Serbest Çalışan"],
        title: "Instructor",
        start: "2022",
        end: null,
        description:
          "Yaklaşık iki yıldır lise seviyesinde Matematik ve Fiziğin yanı sıra İngilizce, Kalkülüs ve Fizik 101 dersleri veriyorum.",
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
        title: "Veri Analisti",
        techStack: [
          "Python",
          "SQL",        
          "Keşifsel Veri Analizi",
          "Veri Görselleştirme",
          "Veri Yönetimi",
          "A/B Testleri",
        ],
        description:
        "Veri Analisti sertifikalı biri olarak analiz temel bilgileri, keşifsel analiz, veri yönetimi ve görselleştirme/raporlama konularında uzmanlığımı kanıtladım. Bu sertifika, A/B testleri gerçekleştirme, SQL kullanarak verileri temizleme ve işleme, Python ile veri analiz etme ve içgörüleri panolar ve sunumlar aracılığıyla etkili bir şekilde iletme yeteneğimi doğrulamaktadır.",      
        link: {
          label: "datacamp.com",
          href: "https://www.datacamp.com/certificate/DA0025829515704",
        },
      },
      {
        title: "Veri Bilimcisi Yardımcısı",
        techStack: [
          "Python",
          "Makine Öğrenmesi",
          "scikit-learn",
          "Gözetimli Öğrenme"
        ],
        description:
          "Sertifikalı yardımcı veri bilimcisi olarak, veri yönetimi, keşifsel analiz, istatistiksel deney, modelleme ve veri bilimi programlama konusunda yeterlilik gösterdim. Ayrıca, raporlar ve panolar aracılığıyla eyleme dönüştürülebilir içgörüleri iletme becerileri kazandım ve bu da beni giriş seviyesi veri bilimi rollerine hazırladı.",      
        link: {
          label: "datacamp.com",
          href: "https://www.datacamp.com/certificate/DSA0012506867305",
        },
      },    
      {
        title: "Veri Mühendisi Yardımcısı",
        techStack: [
          "Snowflake",
          "Python",
          "Veritabanı Dizaynı",
          "Veri Ambarı",
        ],
        description:
          "Veri mühendisi yardımcısı sertifikalı olarak, veri yönetimi ve keşifsel analiz konusunda yeterlilik gösterdim. Bu sertifika, SQL kullanarak verileri temizleme ve daha fazla analiz için hazırlama yeteneğimi ve veri analistleri ve bilim insanlarıyla etkili bir şekilde iş birliği yapmak için verilerle çalışmanın genel yöntemlerini anlama yeteneğimi doğruluyor.",
        link: {
          label: "datacamp.com",
          href: "https://www.datacamp.com/certificate/DEA0014044089169",
        },
      },
      {
        title: "SQL Uzman Yardımcısı",
        techStack: [
          "PostgreSQL",
          "Veritabanı Dizaynı",
          "Veri Yönetimi",
          "Keşifsel Analiz",
        ],
        description:
        "Bu sertifika, verileri temizleme ve işleme, veri kalitesi sorunlarını belirleme ve SQL kullanarak dönüşümler gerçekleştirme, ayrıca PostgreSQL kullanarak ölçümleri hesaplama ve veri özellikleri ve özellik ilişkileri hakkında raporlama yeteneğimi doğruluyor.",      
        link: {
          label: "datacamp.com",
          href: "https://www.datacamp.com/certificate/SQA0012414864755",
        },
      },
      {
        title: "Yapay Zeka Temelleri",
        techStack: [
          "ML",
          "NLP",
          "LLM",
          "Generative AI",
          "ChatGPT",
        ],
        description:
          "Yapay Zeka Temelleri konusunda sertifikalıyım ve yapay zeka alt alanları için kullanım durumlarını belirleme, üretken yapay zeka'yı anlama, üretken yapay zeka araçları için istemler oluşturma ve yapay zeka ve üretken yapay zeka çözümlerinin etik hususlarını açıklama konusunda yeterlilik gösterdim.",      
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
        title: "Google Siber Güvenlik",
        techStack: [        
          "Saldırı Tespit Sistemleri",
          "Ağ Güvenliği",        
          "Ağ Mimarisi",
          "Kimlik Doğrulama Sistemleri",        
          "SIEM Araçları",
          "Linux",
          "Bash",
        ],
        description:
          "Bu sertifika uygulamalı etkinliklerden ve derslerden oluşur. Böylece adayları siber güvenlikte giriş seviyesi rollere hazırlar.",
        link: {
          label: "coursera.org",
          href: "https://coursera.org/share/1198d12171bf94766669c19c02463390",
        },
      },
      {
        title: "Algoritmik Trading",
        techStack: [
          "Side Project",
          "Python",
          "Algorithmic Trading",
          "TradingView",
          "Pine Script"
        ],
        description: "Kripto para borsası başta olmak üzere NASDAQ, NYSE ve BIST gibi borsaları çeşitli indikatörlere göre tarayan Python kodları yazıyorum. Projemin Github'daki dosyalarına karta tıklayarak ulaşabilirsiniz.",
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
        description: "Bartosz Jarocki'nin herkese açık taslağını kullanarak kendi websitemi oluşturdum. Bu sayfa ayrıca güncel özgeçmişimi göstermektedir.",
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
        description: "Oyuncusu olduğum Boğaziçi Üniversitesi buz hokeyi takımı için Tailwind CSS taslağı kullanarak website oluşturdum.",
        link: {
          label: "bogaziciblitz.com",
          href: "https://bogaziciblitz.com/",
        },
      },
    ],
  } as const;
  