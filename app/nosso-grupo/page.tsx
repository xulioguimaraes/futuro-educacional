import Image from "next/image";
import ContactForm from "../components/ContactForm";
import HeroShowcase from "../components/HeroShowcase";

const historyTimeline = [
  {
    year: "2005",
    description:
      "Iniciou o Ensino Superior semipresencial em parceria com a Unopar.",
  },
  {
    year: "2009",
    description:
      "Adotou o nome atual e tornou-se parceira da Vale com a escola dos Carajás.",
  },
  {
    year: "2012",
    description:
      "Estabeleceu a meta de liderar o Enem em Marabá em até três anos.",
  },
  {
    year: "2014",
    description:
      "Passou a oferecer Ensino Técnico e conquistou o 1º lugar no Enem em Marabá, subindo no ranking estadual do 87º para o 17º lugar.",
  },
  {
    year: "2015",
    description:
      "Ficou em 6º lugar no Pará, sendo a melhor escola do interior.",
  },
  {
    year: "2017",
    description:
      "Expandiu sua estrutura para atender do Fundamental ao Ensino Médio em prédio com capacidade para mais de 500 estudantes.",
  },
];

const valueHighlights = [
  {
    title: "Missão",
    description:
      "Promover Educação de Excelência, formando cidadãos éticos, conscientes e participativos.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L3 6.5L12 11L21 6.5L12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 17L12 22L21 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12L12 17L21 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Visão",
    description: "Ser a escola referência em Educação no Norte do Brasil.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Valores",
    description: "Ética, respeito, cooperação, inovação e gratidão.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 12L10.5 14.5L16 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pilares",
    description: "Organização, disciplina e excelência pedagógica.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 20V10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 20V4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 20V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 20H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function NossoGrupoPage() {
  return (
    <main className="bg-[#F5F7FF] ">
      <HeroShowcase
        backgroundImage="/escola.jpg"
        eyebrow="Nosso Grupo"
        title="Nossa História"
      />

      <section className=" bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid  gap-12 items-start py-20 ml-24 max-w-[520px]">
            <div>
              <span className="text-sm font-bold text-[#1C437F] uppercase">
                Nosso grupo
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#17012C] mt-2 mb-6">
                Conheça a nossa história
              </h2>
              <p className="text-lg text-[#504E4E] font-medium mb-4">
                O Grupo Futuro Educacional, originado do antigo Centro Integrado
                de Ensino Êxito em Marabá, destaca-se pela excelência em
                aprovações universitárias e inovação na educação.
              </p>
              <div className="h-px w-full bg-[#E2E8F0] my-4" />
              <div className="space-y-8">
                {historyTimeline.map((item) => (
                  <div key={item.year} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                    <div>
                      <p className="text-base text-gray-700 font-medium">
                        {item.year}: {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/imagem-logo.png"
              alt="Grupo Futuro Educacional"
              fill
              className="object-contain object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#071B48] text-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <span className="uppercase text-sm tracking-[0.4em] text-[#B5FE1C] font-semibold">
            Nossos valores
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            A base que sustenta o nosso futuro
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Cada conquista da nossa comunidade escolar é guiada por valores
            inegociáveis que reforçam a confiança das famílias e dos alunos.
          </p>
        </div>
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueHighlights.map((value) => (
            <div
              key={value.title}
              className="bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg backdrop-blur-sm"
            >
              <div className="text-[#FDC938] mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-sm text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
