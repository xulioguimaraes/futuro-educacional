import React from "react";
import Image from "next/image";
import ButtonWithIcon from "./ButtonWithIcon";

export default function Sports() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/BACKGROUND-sport.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Athletes image - fixed at bottom of section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="relative w-full h-96">
              <Image
                src="/freepik__background__78261 1.png"
                alt="Atletas com Troféu"
                fill
                className="object-contain"
                style={{ objectPosition: "bottom" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left side - Spacer for image */}
          <div className="flex-1 hidden md:block"></div>

          {/* Right side - Content */}
          <div className="flex-1">
            <span className="text-sm font-bold text-[#1C437F] uppercase">
              ESPORTES
            </span>
            <h2
              className="text-[40px] md:text-4xl mt-2 mb-4 text-[#17012C]"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 800,
                lineHeight: "130%",
                letterSpacing: "1.5px",
              }}
            >
              Conheça os destaques esportivos dos nossos estudantes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              O esporte formando campeões e cidadãos.
            </p>
            <ButtonWithIcon>Conheça todas modalidades</ButtonWithIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
