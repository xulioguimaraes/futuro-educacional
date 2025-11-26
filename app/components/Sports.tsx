import React from 'react';

export default function Sports() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="flex-1">
            <div className="bg-gray-300 rounded-lg w-full h-96 flex items-center justify-center text-gray-500">
              <span>Imagem: Atletas com Troféu</span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            <span className="text-sm font-semibold text-blue-600 uppercase">ESPORTES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-4">
              Conheça os destaques esportivos dos nossos estudantes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              O esporte formando campeões e cidadãos.
            </p>
            <button className="px-6 py-3 bg-[#fbbf24] text-[#1e3a5f] rounded-md font-medium hover:bg-[#f59e0b] flex items-center gap-2">
              Conheça todas modalidades
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

