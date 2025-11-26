import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-16 relative" style={{
      background: 'linear-gradient(to bottom, white, #e0e7ff)'
    }}>
      {/* Background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Form */}
          <div className="flex-1 w-full">
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase">ENTRE EM CONTATO</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2">
                Deixe-nos uma mensagem
              </h2>
            </div>

            <form className="bg-[#1e3a5f] rounded-lg p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Nome*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Sobrenome*</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">E-mail*</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Celular*</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-md bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Sua mensagem*</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#fbbf24] text-[#1e3a5f] rounded-md font-medium hover:bg-[#f59e0b] flex items-center justify-center gap-2"
              >
                Enviar mensagem
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 hidden md:block">
            <div className="bg-gray-300 rounded-lg w-full h-96 flex items-center justify-center text-gray-500">
              <span>Imagem do Colaborador</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

