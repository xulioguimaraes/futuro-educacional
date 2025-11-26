import React from 'react';

export default function EducationalStages() {
  const stages = [
    { name: 'Infantil', image: 'Menina' },
    { name: 'Fundamental I', image: 'Menino' },
    { name: 'Fundamental II', image: 'Menina' },
    { name: 'Ensino Médio', image: 'Menino' },
    { name: 'Cursinho', image: 'Menina' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase">Matrículas 2026</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-2 mb-4">
            Conheça o Grupo Futuro Educacional e transforme o futuro do seu filho com a gente!
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="relative"
            >
              <div
                className="w-48 h-72 overflow-hidden bg-white rounded-3xl border-4 border-blue-200 shadow-lg relative"
                style={{
                  clipPath: 'ellipse(50% 45% at 50% 50%)',
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-6 pt-12">
                  <div className="w-28 h-28 rounded-full bg-blue-100 mb-6 flex items-center justify-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-300 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f] text-center z-10 relative">{stage.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

