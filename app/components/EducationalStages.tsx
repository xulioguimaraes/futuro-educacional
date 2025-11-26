import React from "react";
import Image from "next/image";

export default function EducationalStages() {
  const stages = [
    { name: "Infantil", image: "/ENSINO INFANTIL.svg" },
    { name: "Fundamental I", image: "/ENSINO FUNDAMENTAL II.svg" },
    { name: "Fundamental II", image: "/ENSINO FUNDAMENTAL II.svg" },
    { name: "Ensino Médio", image: "/ENSINO MÉDIO.svg" },
    { name: "Cursinho", image: "/CURSINHO.svg" },
  ];

  return (
    <section className="py-16 bg-white rounded-s-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span
            className="bg-[#1C437F] mb-8 text-white rounded-full px-4 py-2 font-semibold  inline-block"
            style={{
              fontFamily: "var(--font-poppins)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Matrículas 2026
          </span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 max-w-[950px] mx-auto">
            Conheça o{" "}
            <span className="font-extrabold text-[#1e3a5f] ">
              Grupo Futuro Educacional{" "}
            </span>
            e transforme o futuro do seu filho com a gente!
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {stages.map((stage, index) => (
            <div key={index} className="relative">
              <div className="w-full h-full flex flex-col items-center justify-center ">
                <Image
                  src={stage.image}
                  alt={stage.name}
                  width={180}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
