import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#1e3a5f] text-white py-16 overflow-hidden">
      {/* Background pattern - cosmic/starry effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Image placeholder */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              {/* Green outline frame */}
              <div className="absolute -inset-4 border-4 border-green-500 rounded-lg"></div>
              <div className="bg-gray-300 rounded-lg w-full max-w-md h-96 relative overflow-hidden">
                {/* Placeholder for student image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 relative z-10">
                  <span>Imagem do Estudante</span>
                </div>
                {/* School building in background */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-300 opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 w-full lg:w-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              O FUTURO DOS SEUS SONHOS É AGORA!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Matrículas 2026 abertas: do Infantil ao Ensino Médio, prepare seu filho para um futuro de conquistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#fbbf24] text-[#1e3a5f] rounded-md font-medium hover:bg-[#f59e0b] flex items-center justify-center gap-2">
                Conheça o seu futuro
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-6 py-3 bg-[#fbbf24] text-[#1e3a5f] rounded-md font-medium hover:bg-[#f59e0b] flex items-center justify-center gap-2">
                Veja nosso ensino
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button className="w-12 h-12 rounded-full bg-[#fbbf24] text-[#1e3a5f] flex items-center justify-center hover:bg-[#f59e0b]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button className="w-12 h-12 rounded-full bg-[#fbbf24] text-[#1e3a5f] flex items-center justify-center hover:bg-[#f59e0b]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

