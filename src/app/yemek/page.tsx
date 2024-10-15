"use client";

import { MEAL_DATA } from "@/data/meal-data";
import { useEffect, useState } from "react";

export default function MealPlanPage() {
  const [currentDay, setCurrentDay] = useState<number>(0); // Pazartesi 0, Pazar 6
  const [currentWeek, setCurrentWeek] = useState<number>(1); // Dinamik haftayı belirlemek için

  useEffect(() => {
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi
    const mondayBasedDayOfWeek = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1; // Pazartesi'yi 0 yapıyoruz

    // 1 Ocak'tan itibaren geçen haftaları bulalım
    const startOfYear = new Date(today.getFullYear(), 0, 1); // 1 Ocak
    const dayOfWeekOnStartOfYear = startOfYear.getDay(); // 1 Ocak hangi gün?
    const adjustedStartOfYear = new Date(
      startOfYear.getTime() - (dayOfWeekOnStartOfYear - 1) * 24 * 60 * 60 * 1000
    ); // 1 Ocak'ı Pazartesi olarak kabul ediyoruz

    const millisecondsInAWeek = 7 * 24 * 60 * 60 * 1000;
    const diff = today.getTime() - adjustedStartOfYear.getTime();
    const weekNumber = Math.floor(diff / millisecondsInAWeek) % MEAL_DATA.length; // 4 haftalık döngü

    setCurrentDay(mondayBasedDayOfWeek);
    setCurrentWeek(weekNumber + 1); // Hafta 1'den başlasın
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Aylık Yemek Planı</h1>
      {MEAL_DATA.map((week, weekIndex) => (
        <div key={week.weekNumber} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hafta {week.weekNumber}</h2>
          <table className="min-w-full table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 w-1/6">Gün</th>
                <th className="border border-gray-300 px-4 py-2 w-5/12">Öğle</th>
                <th className="border border-gray-300 px-4 py-2 w-5/12">Akşam</th>
              </tr>
            </thead>
            <tbody>
              {week.days.map((day, index) => (
                <tr
                  key={day.day}
                  className={
                    weekIndex === currentWeek - 1 && index === currentDay
                      ? "bg-yellow-100 font-bold"
                      : ""
                  }
                >
                  <td className="border border-gray-300 px-4 py-2">{day.day}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {day.lunch.name} - {day.lunch.calories} kalori
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {day.dinner.name} - {day.dinner.calories} kalori
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
