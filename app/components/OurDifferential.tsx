import React from 'react';

export default function OurDifferential() {
  const differentials = [
    {
      title: 'Desenvolvimento de autonomia do estudante',
      image: 'Laptop',
    },
    {
      title: 'Resultados de aprovação',
      image: 'Celebração',
    },
    {
      title: 'Estímulo ao hábito de estudo',
      image: 'Estudo',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase">Nosso diferencial</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2">
            Com uma educação transformadora, nossos estudantes desenvolvem habilidades e valores para a vida.
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Imagem: {item.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                    {item.title}
                  </h3>
                  <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                    Veja mais
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-[#fbbf24] text-[#1e3a5f] flex items-center justify-center hover:bg-[#f59e0b] shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-[#fbbf24] text-[#1e3a5f] flex items-center justify-center hover:bg-[#f59e0b] shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

