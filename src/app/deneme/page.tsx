import React from 'react';

// Header bileşeni doğrudan burada tanımlanıyor
const Header = () => {
  return (
    <header className="bg-white shadow-md py-3 px-6">
      <nav>
        <ul className="flex justify-between items-center">
          <li><a href="/yemek" className="text-gray-500 hover:text-blue-600">Yemek</a></li>
          <li><a href="/aea" className="text-gray-500 hover:text-blue-600">AEA</a></li>
          <li><a href="/cv" className="text-gray-500 hover:text-blue-600">Özgeçmiş</a></li>
          <li><a href="/cv-turkce" className="text-gray-500 hover:text-blue-600">CV Türkçe</a></li>
        </ul>
      </nav>
    </header>
  );
}

// HomePage bileşeni Header'ı içeriyor
export default function HomePage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-8 md:p-16">
      <Header />
      <section className="mx-auto w-full max-w-full space-y-8 bg-white">
        {/* Sayfanızın içeriği burada yapılandırılacak */}
      </section>
      {/* Diğer bileşenler */}
    </main>
  );
}
