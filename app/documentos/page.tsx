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
    description:
      "Conteúdos exclusivos, novidades e artigos para nossa comunidade escolar.",
  },
  {
    title: "Cláusulas Gerais",
    description:
      "Informações básicas que regem o funcionamento da instituição.",
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
          <div className="max-w-[850px] mx-auto text-center">
            <p className="text-lg text-[#17012C] font-medium leading-relaxed mb-8">
              Nesta área, você encontra todos os arquivos essenciais para a sua
              jornada acadêmica. Organizamos os documentos em categorias para
              facilitar o acesso e garantir que você tenha à disposição tudo o
              que precisa, de forma rápida e prática.
            </p>
            <div className="flex justify-center">
              <Image
                src="/SETA.svg"
                alt="Scroll indicator"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="relative py-24 text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/BACK-docs.png)",
            backgroundSize: "100% 200%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2  gap-6">
            {documents.map((doc, index) => (
              <div key={index} className=" rounded-lg p-6 flex  gap-6">
                <div className="shrink-0">
                  <Image
                    src="/icon-pdf.svg"
                    alt="PDF icon"
                    width={84}
                    height={104}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-extrabold text-white mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-lg text-white/80 leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[3px] border-[#FDC938] my-4"></div>
                  <div className="mt-auto">
                    <ButtonWithIcon>Baixar PDF</ButtonWithIcon>
                  </div>
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
