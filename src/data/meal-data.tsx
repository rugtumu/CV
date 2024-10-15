interface Meal {
    name: string;
    calories: number;
  }
  
  interface Day {
    day: string;
    lunch: Meal;
    dinner: Meal;
  }
  
  interface Week {
    weekNumber: number;
    days: Day[];
  }
  
  export const MEAL_DATA: Week[] = [
    {
      weekNumber: 1,
      days: [
        {
          day: "Pazartesi",
          lunch: { name: "Izgara Tavuk ve Bulgur Pilavı", calories: 550 },
          dinner: { name: "Mercimek Çorbası ve Taze Fasulye", calories: 400 },
        },
        {
          day: "Salı",
          lunch: { name: "Ton Balıklı Makarna", calories: 600 },
          dinner: { name: "Karnıyarık ve Pilav", calories: 450 },
        },
        {
          day: "Çarşamba",
          lunch: { name: "Izgara Köfte ve Tam Buğday Makarna", calories: 620 },
          dinner: { name: "Barbunya ve Çoban Salata", calories: 420 },
        },
        {
          day: "Perşembe",
          lunch: { name: "Fırında Somon ve Esmer Pirinç", calories: 580 },
          dinner: { name: "Yoğurtlu Ispanak ve Domates Çorbası", calories: 400 },
        },
        {
          day: "Cuma",
          lunch: { name: "Tavuk Sote ve Makarna", calories: 600 },
          dinner: { name: "Kuru Fasulye ve Pilav", calories: 450 },
        },
        {
          day: "Cumartesi",
          lunch: { name: "Izgara Bonfile ve Kinoa", calories: 650 },
          dinner: { name: "Sebzeli Dolma ve Yoğurt", calories: 430 },
        },
        {
          day: "Pazar",
          lunch: { name: "Ton Balıklı Salata ve Tam Buğday Ekmeği", calories: 520 },
          dinner: { name: "Zeytinyağlı Enginar ve Bulgur Pilavı", calories: 410 },
        },
      ],
    },
    {
      weekNumber: 2,
      days: [
        {
          day: "Pazartesi",
          lunch: { name: "Izgara Tavuk Şiş ve Pirinç Pilavı", calories: 570 },
          dinner: { name: "Sebzeli Mücver ve Yoğurt", calories: 420 },
        },
        {
          day: "Salı",
          lunch: { name: "Ton Balıklı Wrap", calories: 590 },
          dinner: { name: "Bulgur Pilavı ve Zeytinyağlı Taze Fasulye", calories: 430 },
        },
        {
          day: "Çarşamba",
          lunch: { name: "Izgara Hindi ve Kinoa Salatası", calories: 610 },
          dinner: { name: "Domates Çorbası ve Patates Yemeği", calories: 400 },
        },
        {
          day: "Perşembe",
          lunch: { name: "Fırında Tavuk ve Tam Buğday Makarna", calories: 600 },
          dinner: { name: "Ezogelin Çorbası ve Nohut", calories: 450 },
        },
        {
          day: "Cuma",
          lunch: { name: "Köfte ve Patates Püresi", calories: 620 },
          dinner: { name: "Zeytinyağlı Kabak ve Yoğurt", calories: 430 },
        },
        {
          day: "Cumartesi",
          lunch: { name: "Izgara Levrek ve Sebzeli Bulgur", calories: 550 },
          dinner: { name: "Tavuklu Bezelye ve Pilav", calories: 440 },
        },
        {
          day: "Pazar",
          lunch: { name: "Ton Balığı ve Avokadolu Salata", calories: 530 },
          dinner: { name: "Pırasa Yemeği ve Yoğurt", calories: 400 },
        },
      ],
    },
    {
      weekNumber: 3,
      days: [
        {
          day: "Pazartesi",
          lunch: { name: "Izgara Tavuk Göğsü ve Kuskus", calories: 560 },
          dinner: { name: "Mercimek Çorbası ve Kısır", calories: 420 },
        },
        {
          day: "Salı",
          lunch: { name: "Ton Balıklı Tam Buğday Makarna", calories: 610 },
          dinner: { name: "Fırında Sebzeli Tavuk", calories: 460 },
        },
        {
          day: "Çarşamba",
          lunch: { name: "Izgara Bonfile ve Pilav", calories: 650 },
          dinner: { name: "Barbunya Pilaki ve Yoğurt", calories: 430 },
        },
        {
          day: "Perşembe",
          lunch: { name: "Hindi Sote ve Sebzeli Bulgur", calories: 580 },
          dinner: { name: "Sebzeli Güveç ve Salata", calories: 410 },
        },
        {
          day: "Cuma",
          lunch: { name: "Izgara Köfte ve Kinoa Salatası", calories: 620 },
          dinner: { name: "Zeytinyağlı Pırasa ve Çorba", calories: 420 },
        },
        {
          day: "Cumartesi",
          lunch: { name: "Fırında Somon ve Patates", calories: 610 },
          dinner: { name: "Zeytinyağlı Dolma ve Yoğurt", calories: 440 },
        },
        {
          day: "Pazar",
          lunch: { name: "Izgara Tavuk ve Tam Buğday Ekmeği", calories: 590 },
          dinner: { name: "Sebzeli Mücver ve Yoğurt", calories: 420 },
        },
      ],
    },
    {
      weekNumber: 4,
      days: [
        {
          day: "Pazartesi",
          lunch: { name: "Izgara Tavuk ve Esmer Pirinç", calories: 580 },
          dinner: { name: "Kabak Dolması ve Mercimek Çorbası", calories: 430 },
        },
        {
          day: "Salı",
          lunch: { name: "Ton Balıklı Wrap", calories: 610 },
          dinner: { name: "Fırında Sebzeli Köfte", calories: 450 },
        },
        {
          day: "Çarşamba",
          lunch: { name: "Izgara Hindi ve Patates Püresi", calories: 590 },
          dinner: { name: "Zeytinyağlı Taze Fasulye ve Yoğurt", calories: 420 },
        },
        {
          day: "Perşembe",
          lunch: { name: "Izgara Köfte ve Makarna", calories: 630 },
          dinner: { name: "Domates Çorbası ve Nohut", calories: 450 },
        },
        {
          day: "Cuma",
          lunch: { name: "Fırında Somon ve Kinoa", calories: 600 },
          dinner: { name: "Zeytinyağlı Enginar ve Pilav", calories: 440 },
        },
        {
          day: "Cumartesi",
          lunch: { name: "Izgara Tavuk ve Bulgur Pilavı", calories: 590 },
          dinner: { name: "Bulgur Pilavı ve Mercimek", calories: 420 },
        },
        {
          day: "Pazar",
          lunch: { name: "Ton Balıklı Salata", calories: 550 },
          dinner: { name: "Kuru Fasulye ve Pilav", calories: 460 },
        },
      ],
    },
  ];
  