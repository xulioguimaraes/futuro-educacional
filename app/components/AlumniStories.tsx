import React from 'react';

export default function AlumniStories() {
  const stories = [
    {
      title: 'Do Futuro para o Mundo: Como Ana transformou sua paixão em carreira',
      image: 'Mulher com capacete',
      creator: 'Criador: Nome',
    },
    {
      title: 'Ex-aluno conquista destaque no esporte internacional',
      image: 'Atleta no ginásio',
      creator: 'Criador: Nome',
    },
    {
      title: 'Do Futuro para a Justiça: ex-aluna realiza o sonho de se tornar juíza',
      image: 'Mulher na biblioteca',
      creator: 'Criador: Nome',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase">EM ALTA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-4">
            Para Sempre Futuro
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Relembre conquistas e trajetórias de quem levou nossa escola no coração
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm text-center px-4">{story.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">
                  {story.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{story.creator}</span>
                  <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

