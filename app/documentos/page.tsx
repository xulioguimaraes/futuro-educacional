import Image from "next/image";
import ContactForm from "../components/ContactForm";
import HeroShowcase from "../components/HeroShowcase";
import ButtonWithIcon from "../components/ButtonWithIcon";

const documents = [
  {
    title: "Manual do Estudante",
    description: "Guia completo com orientações sobre a vida acadêmica.",
  },
  {
    title: "Proposta Pedagógica",
    description: "Conheça nossa metodologia e princípios educacionais.",
  },
  {
    title: "Revista Futuro",
    description: "Conteúdos exclusivos, novidades e artigos para nossa comunidade escolar.",
  },
  {
    title: "Cláusulas Gerais",
    description: "Informações básicas que regem o funcionamento da instituição.",
  },
  {
    title: "Contratos",
    description: "Documentos formais de vínculo acadêmico.",
  },
  {
    title: "Termos e Condições",
    description: "Regras de uso e responsabilidades.",
  },
  {
    title: "Regimento Interno",
    description: "Normas e diretrizes que organizam o dia a dia escolar.",
  },
];

export default function DocumentosPage() {
  return (
    <main className="bg-white">
      <HeroShowcase
        backgroundImage="/escola.jpg"
        eyebrow=""
        title="Documentos Importantes"
      />

      {/* Introductory Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Aqui você encontra os arquivos acadêmicos essenciais, organizados
              por categorias para facilitar o acesso rápido e prático.
            </p>
            <div className="flex justify-center">
              <Image
                src="/SETA.svg"
                alt="Scroll indicator"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-[#071B48] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0">
                    <Image
                      src="/icon-pdf.svg"
                      alt="PDF icon"
                      width={84}
                      height={104}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="w-full bg-[#FDC938] text-[#001F63] font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FDC938]/90 transition-colors">
                    Baixar PDF
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V15M8 15L1 8M8 15L15 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}

