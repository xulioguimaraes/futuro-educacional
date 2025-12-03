"use client";

import Image from "next/image";
import ContactForm from "../components/ContactForm";
import HeroShowcase from "../components/HeroShowcase";
import ButtonWithIcon from "../components/ButtonWithIcon";
import { useState } from "react";

const educationalStages = [
  { name: "Infantil", image: "/crianças/crianca1.jpg" },
  { name: "Fundamental I", image: "/crianças/crianca2.jpg" },
  { name: "Fundamental II", image: "/crianças/crianca3.jpg" },
  { name: "Ensino Médio", image: "/crianças/crianca4.jpg" },
  { name: "Cursinho", image: "/crianças/crianca5.jpg" },
];

const stageContent = [
  {
    title: "Ensino Infantil",
    subtitle: "Exemplar no Ensino Infantil",
    image: "/ensino/IMG-ENSINO INFANTIL.png",
    background: "/ensino/BACKGROUND-ENSINO-INFANTIL.png",
    description:
      "No Ensino Infantil, cuidamos de cada etapa do desenvolvimento da criança em um ambiente acolhedor e seguro, com atividades lúdicas que despertam a curiosidade e incentivam o aprendizado contínuo.",
    highlights: [
      "Estímulo ao desenvolvimento cognitivo, motor e social.",
      "Aprendizagem através de brincadeiras e descobertas.",
      "Ambiente seguro, criativo e acolhedor.",
    ],
    section1: {
      title: "Desenvolvimento Integral",
      description:
        "Além do cuidado diário, buscamos preparar cada criança para os próximos desafios da vida escolar. Valorizamos o desenvolvimento da autonomia, do senso de responsabilidade e da convivência em grupo, sempre respeitando o ritmo individual de cada aluno.",
      image: "/crianca2/crianca3.jpg",
    },
    section2: {
      title: "Aprender Brincando",
      description:
        "Acreditamos que brincar é a forma mais natural de aprender. Por isso, nossas propostas pedagógicas unem diversão e conhecimento, criando experiências que estimulam a imaginação e a criatividade. Assim, cada criança constrói sua própria forma de compreender o mundo.",
      image: "/crianca2/crianca.jpg",
    },
  },
  {
    title: "Ensino Fundamental I",
    subtitle: "Excelência no Fundamental I",
    image: "/ensino/IMG-ENSINO FUNDAMENTAL I.png",
    background: "/ensino/BACKGROUND-ENSINO-FUNDAMENTAL I.png",
    description:
      "No Ensino Fundamental I, acompanhamos os primeiros passos acadêmicos das crianças, estimulando a leitura, a escrita, a lógica matemática e a formação de valores. Nosso objetivo é oferecer uma base sólida para o futuro, unindo conhecimento, criatividade e convivência.",
    highlights: [
      "Desenvolvimento da leitura, escrita e raciocínio lógico.",
      "Formação de valores como respeito, empatia e responsabilidade.",
      "Metodologias ativas que despertam o interesse e a autonomia.",
    ],
    section1: {
      title: "Primeiros Passos Acadêmicos",
      description:
        "No Fundamental I, ampliamos as descobertas feitas na infância e introduzimos novos desafios acadêmicos. Esse é o momento em que a criança começa a desenvolver autonomia nos estudos, consolidando habilidades de leitura, escrita e raciocínio lógico em um ambiente que também valoriza os aspectos emocionais e sociais.",
      image: "/crianca2/s2.1.png",
    },
    section2: {
      title: "Construindo Conhecimento",
      description:
        "No Fundamental I, incentivamos a curiosidade e a busca pelo saber. Nossas práticas pedagógicas estimulam a participação ativa dos alunos, promovendo a cooperação, a criatividade e o pensamento crítico. Assim, cada criança constrói bases sólidas para os próximos anos da vida escolar.",
      image: "/crianca2/s2.2.png",
    },
  },
  {
    title: "Ensino Fundamental II",
    subtitle: "Crescimento no Fundamental II",
    image: "/ensino/IMG-FUNDAMENTAL II.png",
    background: "/ensino/BACKGROUND-FUNDAMENTAL II.png",
    description:
      "No Fundamental II, os alunos aprofundam conhecimentos, desenvolvem autonomia e consolidam pensamento crítico, responsabilidade e trabalho em grupo, preparando-se para os desafios futuros.",
    highlights: [
      "Aprofundamento e pensamento crítico.",
      "Autonomia e responsabilidade.",
      "Preparação para novos desafios.",
    ],
    section1: {
      title: "Novos desafios e autonomia",
      description:
        "No Fundamental II, os alunos aprofundam os conteúdos já estudados e começam a desenvolver maior independência acadêmica. É um período de fortalecimento do pensamento crítico, da responsabilidade e da capacidade de trabalhar em grupo, preparando-os para os próximos passos da vida escolar e pessoal.",
      image: "/crianca2/s3.1.png",
    },
    section2: {
      title: "Preparação para o Futuro",
      description:
        "sNo Fundamental II, incentivamos os alunos a explorar novas áreas do conhecimento e a aplicar o que aprendem no dia a dia. Nosso objetivo é formar jovens autônomos, criativos e preparados para enfrentar desafios acadêmicos e sociais com confiança e responsabilidade.",
      image: "/crianca2/s3.2.png",
    },
  },
  {
    title: "Ensino Médio",
    subtitle: "Preparação no Ensino Médio",
    image: "/ensino/IMG-MÉDIO.png",
    background: "/ensino/BACKGROUND-ENSINO MÉDIO.png",
    description:
      "No Ensino Médio, os alunos aprofundam conhecimentos, constroem projetos de vida e se preparam para vestibulares, ENEM e futuras escolhas, desenvolvendo também valores humanos e competências para o século XXI.",
    highlights: [
      "Preparação para vestibulares e ENEM.",
      "Projetos de vida e escolhas conscientes.",
      "Formação integral e cidadania.",
    ],
    section1: {
      title: "Rumo às Grandes Conquistas",
      description:
        "No Ensino Médio, os alunos aprofundam conteúdos, preparam-se para vestibulares e ENEM e desenvolvem competências pessoais e sociais, consolidando autonomia e projetos de vida com ética e responsabilidade.",
      image: "/crianca2/s4.1.png",
    },
    section2: {
      title: "Formação para a Vida",
      description:
        "No Ensino Médio, formamos jovens críticos e responsáveis, preparados para enfrentar desafios acadêmicos, profissionais e sociais com confiança e cidadania.",
      image: "/crianca2/s4.2.png",
    },
  },
  {
    title: "Cursinho Preparatório",
    subtitle: "Aprovação no Cursinho",
    image: "/ensino/IMG-CURSINHO.png",
    background: "/ensino/BAKCGROUND-CURSINHO.png",
    description:
      "Nosso cursinho preparatório revisa e aprofunda conteúdos, com foco em vestibulares e ENEM, desenvolvendo também técnicas de estudo, disciplina e confiança para alcançar os objetivos acadêmicos.",
    highlights: [
      "Revisão e aprofundamento dos principais conteúdos.",
      "Preparação direcionada para vestibulares e ENEM.",
      "Técnicas de estudo e desenvolvimento da autoconfiança.",
    ],
    section1: {
      title: "Caminho para a Aprovação",
      description:
        "No Cursinho Preparatório, unimos revisão, simulados e acompanhamento pedagógico para fortalecer a confiança dos alunos e prepará-los para a aprovação em vestibulares e ENEM.",
      image: "/crianca2/s5.1.png",
    },
    section2: {
      title: "Construindo Resultados",
      description:
        "No Cursinho Preparatório, estimulamos hábitos de estudo, disciplina e oferecemos suporte para transformar dedicação em resultados e alcançar a aprovação.",
      image: "/crianca2/s5.2.png",
    },
  },
];

export default function EnsinoPage() {
  const [selectedStage, setSelectedStage] = useState(0);
  const currentContent = stageContent[selectedStage];

  return (
    <main className="bg-white">
      <HeroShowcase
        backgroundImage="/escola.jpg"
        eyebrow="Nosso Ensino"
        title="Do infantil até a fase adulta"
      />

      {/* Educational Stages Section */}
      <section className="pt-8 md:pt-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Mobile: Horizontal scroll */}
          <div className="flex md:hidden overflow-x-auto pb-4 gap-4 -mx-4 px-4 scrollbar-hide">
            {educationalStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center shrink-0">
                <button
                  onClick={() => setSelectedStage(index)}
                  className={`flex relative flex-col items-center cursor-pointer transition-all duration-300 ${
                    selectedStage === index ? "scale-105" : "hover:opacity-100"
                  }`}
                >
                  <div
                    className={`relative w-24 h-32 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      selectedStage === index
                        ? "bg-[#1C437F] border-[#1C437F]"
                        : "border-[#1C437F]"
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.name}
                      fill
                      className="object-scale-down scale-[0.8]"
                    />
                  </div>
                  <span
                    className={`min-w-[100px] text-xs text-center absolute whitespace-nowrap bottom-6 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                      selectedStage === index
                        ? "bg-[#FDC938] text-[#1C437F] font-semibold"
                        : "bg-[#1C437F] text-white font-normal"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
                {/* Line indicator */}
                <div
                  className={`transition-all duration-300 ${
                    selectedStage === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: "5px",
                    height: "40px",
                    backgroundColor: "#1C437F",
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-6">
            {educationalStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => setSelectedStage(index)}
                  className={`flex relative flex-col items-center cursor-pointer transition-all duration-300 ${
                    selectedStage === index ? "scale-105" : "hover:opacity-100"
                  }`}
                >
                  <div
                    className={`relative w-40 h-56 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      selectedStage === index
                        ? "bg-[#1C437F] border-[#1C437F]"
                        : "border-[#1C437F]"
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.name}
                      fill
                      className="object-scale-down scale-[0.8]"
                    />
                  </div>
                  <span
                    className={`${
                      index === 0 || index === 4
                        ? "min-w-[135px]"
                        : "min-w-[170px]"
                    } text-sm text-center absolute whitespace-nowrap bottom-11 left-1/2 transform -translate-x-1/2  px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedStage === index
                        ? "bg-[#FDC938] text-[#1C437F] font-semibold"
                        : "bg-[#1C437F] text-white font-normal "
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
                {/* Line indicator */}
                <div
                  className={`transition-all duration-300 ${
                    selectedStage === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: "7px",
                    height: "64px",
                    backgroundColor: "#1C437F",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-12 md:py-20 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundImage: `url(${currentContent.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative pl-0 md:pl-12 order-2 lg:order-1">
              <div className="relative max-w-[320px] md:max-w-[480px] h-[400px] md:h-[600px] mx-auto lg:mx-0">
                <Image
                  src={currentContent.image}
                  alt={currentContent.title}
                  fill
                  className="object-contain rounded-lg transition-all duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6">
                {currentContent.title}
              </h2>
              <p className="text-base md:text-lg text-white/90 font-medium mb-4 md:mb-6 leading-relaxed">
                {currentContent.description}
              </p>
              <div className="border-t border-[#DEE6F1] my-4"></div>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-left">
                {currentContent.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start md:items-center gap-2">
                    <div className="w-5 h-5 bg-[#FDC938] rounded-full mr-2 flex items-center justify-center shrink-0 mt-0.5 md:mt-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3594 0.304688C10.6641 0.585938 10.6641 1.07812 10.3594 1.35938L4.35938 7.35938C4.07812 7.66406 3.58594 7.66406 3.30469 7.35938L0.304688 4.35938C0 4.07812 0 3.58594 0.304688 3.30469C0.585938 3 1.07812 3 1.35938 3.30469L3.82031 5.76562L9.30469 0.304688C9.58594 0 10.0781 0 10.3594 0.304688Z"
                          fill="#1C437F"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-medium text-sm md:text-base">{highlight}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <ButtonWithIcon>Fale conosco</ButtonWithIcon>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Dynamic */}
      <section className="pt-12 md:pt-20 pb-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1e3a5f] mb-3 md:mb-4">
                {currentContent.section1.title}
              </h2>
              <p className="text-base md:text-lg text-[#504E4E] leading-relaxed max-w-[480px] mx-auto lg:mx-0">
                {currentContent.section1.description}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative max-w-[400px] md:max-w-[560px] w-full">
                {/* 2 bordas decorativas do lado direito - hidden on mobile */}
                <div className="hidden md:block absolute top-0 h-56 right-[28px] w-full rounded-full border-2 border-[#FDC938]"></div>
                <div className="hidden md:block absolute top-0 h-56 right-[14px] w-full rounded-full border-2 border-[#1C437F]"></div>
                <div className="relative w-full h-48 md:h-56 rounded-full overflow-hidden">
                  <Image
                    src={currentContent.section1.image}
                    alt={currentContent.section1.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Dynamic */}
      <section className="pt-5 pb-12 md:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 mt-6 lg:mt-0">
              <div className="relative max-w-[400px] md:max-w-[560px] w-full">
                {/* 2 bordas decorativas do lado esquerdo - hidden on mobile */}
                <div className="hidden md:block absolute top-0 left-[28px] w-full h-56 rounded-full border-2 border-[#FDC938]"></div>
                <div className="hidden md:block absolute top-0 left-[14px] w-full h-56 rounded-full border-2 border-[#1C437F]"></div>
                <div className="relative w-full h-48 md:h-56 rounded-full overflow-hidden">
                  <Image
                    src={currentContent.section2.image}
                    alt={currentContent.section2.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 ml-0 lg:ml-12 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1e3a5f] mb-3 md:mb-4">
                {currentContent.section2.title}
              </h2>
              <p className="text-base md:text-lg text-[#504E4E] leading-relaxed">
                {currentContent.section2.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
