import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Melhor escola de Marabá! Topíssima!',
      author: 'Delzyane Ferreira',
      role: 'Mãe de aluno',
      avatar: 'DF',
    },
    {
      text: 'Orgulho de ter meus filhos com vocês!!! Parceria 2026 efetuada com sucesso!',
      author: 'Regiane Chamon',
      role: 'Mãe de aluna',
      avatar: 'RC',
    },
    {
      text: 'Excelente instituição de ensino!',
      author: 'Nome Exemplo',
      role: 'Pai de aluno',
      avatar: 'NE',
    },
  ];

  return (
    <section className="py-16 relative" style={{
      background: 'linear-gradient(to bottom, white, #e0e7ff)'
    }}>
      {/* Background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Testimonials */}
          <div className="flex-1 w-full">
            <div className="mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase">TESTEMUNHOS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2">
                O que estão falando sobre nós
              </h2>
            </div>

            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#fbbf24]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote icon */}
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1e3a5f]">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
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

          {/* Right side - Image */}
          <div className="flex-1 hidden md:block">
            <div className="bg-gray-300 rounded-lg w-full h-96 flex items-center justify-center text-gray-500">
              <span>Imagem: Colaboradora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

