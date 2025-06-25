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
    location: "İzmir, Türkiye",
    locationLink: "https://www.google.com/maps/place/Istanbul/",
    about:
      "Veri Analisti | Veri Bilimcisi | Matematikçi",
    summary:
      `Bir veri analisti olarak, hem büyük veri setlerini analiz ederek içgörüler elde etme hem de karmaşık veri problemlerini çözmek için modeller geliştirme konusunda yetkinim. Uzmanlık alanlarım arasında veri temizleme, veri görselleştirme ve veri yönetimi bulunmakta, ayrıca makine öğrenimi ve istatistiksel modelleme konusunda deneyim sahibiyim. Python, SQL ve Tableau gibi araçları kullanarak ham veriyi uygulanabilir içgörülere ve tahmine dayalı çözümlere dönüştürüyorum. Ayrıca, büyük veri işleme araçları ve bulut platformları ile çalışarak veri odaklı karar alma süreçlerini optimize ediyorum.`,
    summaryPoints: [
    "Büyük veri setlerini analiz ederek içgörü çıkarma ve modeller geliştirme",
    "Veri temizleme, görselleştirme ve yönetimi",
    "Makine öğrenimi ve istatistiksel modelleme tekniklerine aşina",
    "Ham verileri Python, SQL ve Tableau kullanarak anlamlı analizlere dönüştürme",
    "Karar alma süreçlerini kolaylaştırmak için büyük veri işleme araçları ve bulut platformları kullanımı",
    ],
    avatarUrl: "@/public/images/avatar.jpg",
    personalWebsiteUrl: "https://www.umutgur.com/",
    hobbies: [
    "Boğaziçi Üniversitesi Buz Sporları Takımı yönetim kurulu üyesi (sayman) [2023-2024]",
    "Boğaziçi Üniversitesi Buz Hokey Takımı (Boğaziçi Blitz) aktif üyesi ve oyuncusu [2022-2024]",
    "Matematik Dünyası Dergisi'nin Boğaziçi Üniversitesi temsilcisi [2021-2022]",
    "Bilim Kulübü Matematik Kurulu başkanı [2020-2021]",
    "Bilim Kulübü Matematik Kurulu kurucu üyesi [2019]",
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
        school: "Boğaziçi Üniversitesi",
        degree: "Matematik Lisans Derecesi",
        start: "2018",
        end: "2024",
        range: "2018 - 2024",
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
        range: "2023",
        description:
          "10 haftalık bir süreç boyunca, verileri analiz etme ve veri bilimi gibi konuları kapsayan çeşitli projeler üzerinde çalıştık. Bu süreçte sadece iş ortamındaki gibi takım çalışması deneyimi yaşamakla kalmadım, aynı zamanda veri analizi ve veri bilimi becerilerimi de önemli ölçüde geliştirdim.",
        responsibilities: [
        "Yoğun geçen 10 haftalık veri bilimi ve analiz programını tamamladım",
        "Gerçek dünya veri analizi ve veri bilimi projelerinde çalıştım",
        "İş dünyası dinamiklerini simüle eden ekip çalışmalarında yer aldım",
        "Veri analizi ve veri bilimi becerilerini önemli ölçüde geliştirdim"
      ]
      },
      /*{
        company: "Mentor Özel Ders",
        link: "https://mentorozelders.com/",
        badges: ["Serbest Çalışan"],
        title: "Instructor",
        start: "2022",
        end: "2024",
        range: "2022 - 2024",
        description:
          "Yaklaşık iki yıldır lise seviyesinde Matematik ve Fiziğin yanı sıra İngilizce, Kalkülüs ve Fizik 101 dersleri veriyorum.",
      },*/
      {
        company: "Türkiye Buz Hokeyi Federasyonu",
        link: "https://tbhf.org.tr/",
        badges: [],
        title: "Buz Pateni Eğitmeni",
        start: "Mart",
        end: "2024",
        range: "2024",
        description:
          "Bir aylık bir süreç boyunca Beykoz Buz Pistinde temel kayma eğitimi verdim ve insanları buz hokeyi branşıyla tanıştırdım.",
        responsibilities: [
        "Beykoz Buz Pisti'nde bir ay boyunca temel kayma eğitimi verdim",
        "Katılımcılara buz hokeyinin temel prensiplerini ve tekniklerini tanıttım",
        "Buz pateni başlangıç seviyesindeki bireyler için eğitim programları geliştirdim"
      ]
      },
      {
        company: "Scale AI",
        link: "https://scale.com/",
        badges: [],
        title: "RLHF - Kodlama Ekibi",
        start: "Eylül 2024",
        range: "2024 - Günümüz",
        end: "Günümüz",
        description:
          "Yüksek kaliteli istemler oluşturarak ve hataları belirlemek ve düzeltmek için gelişmiş ölçümler kullanarak model yanıtlarını değerlendirerek AI modellerinin geliştirilmesine katkıda bulunmak. Code generation, synthesis ve debugging görevlerine odaklanarak Python içeren kodlama projeleri üzerinde çalışmak.",
        responsibilities: [
        "Yüksek kaliteli promptlar oluşturarak yapay zeka modellerini geliştirme",
        "Hataları tespit etmek ve düzeltmek için gelişmiş metriklerle model çıktılarının değerlendirilmesi",
        "Kod üretimi ve sentezi odaklı Python projelerinde çalışmak",
        "Hata ayıklama görevlerini yürütmek ve model performansını optimize etmek"
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
        "~80 saatlik, sınavlı ve sunumlu sertifika programı.",      
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
        "~80 saatlik ve sınavlı sertifika programı.",    
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
        "~90 saatlik ve sınavlı sertifika programı.",  
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
        "~50 saatlik ve sınavlı sertifika programı.",
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
        "~20 saatlik sertifika programı.",
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
        ],
        description:
        "~60 saatlik sertifika programı.",
        link: {
          label: "coursera.org",
          href: "https://coursera.org/share/1198d12171bf94766669c19c02463390",
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
        description: "Once UI taslağı kullanarak kişisel web sitemi oluşturdum.",
        link: {
          label: "umutgur.com",
          href: "https://umutgur.com/",
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
        description: "Kripto para borsası ve ABD borsalarını çeşitli indikatörlere göre tarayan Python kodları yazdım.",
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
        description: "Oyuncusu olduğum Boğaziçi Üniversitesi buz hokeyi takımı için Tailwind CSS taslağı kullanarak website oluşturdum.",
        link: {
          label: "bogaziciblitz.com",
          href: "https://bogaziciblitz.com/",
        },
      },*/
    ],
  } as const;
  