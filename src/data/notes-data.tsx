interface Note {
    id: number;
    title: string;
    date: string;
    videoUrl?: string;
    points: string[];
  }


export const NOTES_DATA = [
    {
      id: 1,
      title: "Rodaj Nasıl Yapılır?",
      date: "21 Mart 2017",
      videoUrl: "https://youtu.be/RVAEFFBVrCU?si=1N-WRrxjh8zuNcUC",
      points: [
        "Bi kitap var, motosikletin yanında size veriyorlar. Hani açıp okuyalım, lütfen.",
        "Orada yazıyor. Motoru yapan adam anlatıyor.",
        "Uzun süre aynı devirde, uzun yolda rodaj yapılmaz.",
        "Devrin sürekli oynaması lazım.",
        "Rodaj Fransızca törpülemek, zımparalamak gibi bi laf.",
        "Motorun yatağında döşeğinde olan küçük tırtıkları pırtıkları rodajla temizliyoruz.",
        "Fabrikadan yeni çıkan motora biraz kalın yağ koyarlar ve fazla gazlamamamız önerilir.",
        "İlk 1000 km şu devri aşmayın şu sürati geçmeyin gibi tavsiyeler verilir.",
        "Devrin sürekli oynaması lazım. Belli bi devri de aşmamak lazım.",
        "Rodaj biter bitmez yağı değiştirmeliyiz.",
        "Metal parçaları yağda yüzmeye başlar.",
        "Daha ince bir yağ koyuyoruz (olması gereken normal yağ)",
        "Eski yağı çöpe dökmüyoruz! Çevre felaketi olur. Onların özel toplama alanları var.",
        "Her motor için farklı prosedürü olabilir.",
        "Önce okuyun. Motorun kitapçığını aç oku.",
        "Sonra kullanılması gereken yağları da anlatıyor.",
        "Rodajdan sonra motorun sağında solunda ekstradan gevşemiş bir şey var mı kontrol ettirin."
      ],
    },
    {
      id: 2,
      title: "Kask Temizliği",
      date: "17 Ekim 2016",
      videoUrl: "https://youtu.be/fiGCV673sBw?si=IV-MSvXTB0LMTiom",
      points: [
        "Balaklavasız kask takmamamız lazım.",
        "Otomobil cilası veya jant temizleme sıvısı sakın kullanma!!!",
        "Oto cilası ve pastası güzel parlatır fakat aslında boyaya zımpara etkisi yapar.",
        "Dış kabuğu yavaş yavaş inceltir ve kaskın sağlamlığından gitmeye başlar.",
        "Cam temizleme sıvısında amonyak vardır ve polikarbonat kaskların dış kabuğuna zarar verebilir!!",
        "Ayrıca içinde izopropil alkol olduğu için vizörlerin camlarını perişan eder.",
        "Oto pastası, cilası, camsiller, jant temizleyicilerden uzak duruyoruz!!!",
        "Benzin de kullanmıyoruz.",
        "KMA (Kiracı Motorlu Araçlardan) kask temizleyici. Hem vizörü hem de içini temizlemek için etkili.",
        "Şampuan ve su da kullanılabilir ucuz yöntem olarak.",
        "Çok kirlenmişse küveti ya da leğeni doldurup kaskın içini söküp kaskı leğene daldırıp bir süre tatlı tatlı ovalıyoruz",
        "ÖNEMLİ!: Kaskın söktüğümüz iç parçalarını asla sıkmıyoruz, asla çamaşır makinesine atmıyoruz çünkü içindeki polistren köpük erir. Etkisini yitirir.",
        "Keza kaskın içine asla alkollü bir sıvı veya çözücü sıkmıyoruz. O zaman o koruma işlevi olan köpük erir!",
        "Yıkadıktan sonra durulayıp kurulamaya bırakıyoruz.",
        "İç kısma asla fırça sürmüyoruz.",
        "Dış kısımlarda araları diş fırçasıyla temizleyebiliriz.",
      ],
    },
    // Eğer burada 'points' özelliği olmayan bir not varsa, onu düzeltin.
  ];
  