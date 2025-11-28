import Image from "next/image";
import ContactForm from "../components/ContactForm";
import HeroShowcase from "../components/HeroShowcase";
import ButtonWithIcon from "../components/ButtonWithIcon";

const educationalStages = [
  { name: "Infantil", image: "/crianças/crianca1.jpg" },
  { name: "Fundamental I", image: "/crianças/crianca2.jpg" },
  { name: "Fundamental II", image: "/crianças/crianca3.jpg" },
  { name: "Ensino Médio", image: "/crianças/crianca4.jpg" },
  { name: "Cursinho", image: "/crianças/crianca5.jpg" },
];

export default function EnsinoPage() {
  return (
    <main className="bg-white">
      <HeroShowcase
        backgroundImage="/escola.jpg"
        eyebrow="Nosso Ensino"
        title="Do infantil até a fase adulta"
      />

      {/* Educational Stages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {educationalStages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg mb-3">
                  <Image
                    src={stage.image}
                    alt={stage.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-[#1e3a5f]">
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ensino Infantil Section */}
      <section className="py-20 bg-[#071B48] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 w-32 h-32 bg-[#FDC938] rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#FDC938] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/crianças/crianca2.jpg"
                  alt="Ensino Infantil"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#FDC938] text-[#001F63] px-6 py-4 rounded-b-lg">
                <p className="font-bold text-lg">Exemplar no Ensino Infantil</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ensino Infantil
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                No Grupo Futuro Educacional, acreditamos que os primeiros anos
                de vida são fundamentais para o desenvolvimento integral da
                criança. Nosso Ensino Infantil oferece um ambiente acolhedor e
                seguro, onde cada pequeno é estimulado a explorar, descobrir e
                aprender através de atividades lúdicas que despertam a
                curiosidade e o amor pelo conhecimento.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FDC938] shrink-0 mt-1"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-white/90">
                    Estímulo ao desenvolvimento cognitivo, motor e social.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FDC938] shrink-0 mt-1"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-white/90">
                    Aprendizagem através de brincadeiras e descobertas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#FDC938] shrink-0 mt-1"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-white/90">
                    Ambiente seguro, criativo e acolhedor.
                  </p>
                </div>
              </div>
              <ButtonWithIcon>Fale conosco</ButtonWithIcon>
            </div>
          </div>
        </div>
      </section>

      {/* Desenvolvimento Integral Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                Desenvolvimento Integral
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Além do cuidado diário, preparamos cada criança para os
                desafios escolares que virão. Valorizamos a autonomia, a
                responsabilidade e a convivência em grupo, respeitando os
                ritmos individuais de cada aluno.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/crianca2/crianca3.jpg"
                  alt="Desenvolvimento Integral"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aprender Brincando Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/crianca2/crianca.jpg"
                  alt="Aprender Brincando"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                Aprender Brincando
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Brincar é a forma mais natural de aprender. Nossas propostas
                pedagógicas combinam diversão e conhecimento, estimulando a
                imaginação e a criatividade, permitindo que cada criança construa
                sua própria compreensão do mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}

