import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden h-screen max-h-[786px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/BACKGROUND.png)",
        }}
      >
        {/* Overlay para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-[#1e3a5f]/40"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full pl-24 pr-16">
          {/* Left side - Student image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              {/* Green outline frame */}
              <div className="absolute -inset-4 rounded-lg"></div>
              <div className="rounded-lg w-full  h-[500px] relative overflow-hidden">
                <Image
                  src="/student.png"
                  alt="Estudante"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 w-full lg:w-auto ml-[-40px]">
            <h1
              className="font-black text-[74px] uppercase mb-4 tracking-normal leading-[120%]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O FUTURO DOS SEUS SONHOS{" "}
              <span className="text-[#FDC938]"> É AGORA</span>!
            </h1>
            <p
              style={{ fontFamily: "var(--font-poppins)" }}
              className=" mb-8 text-gray-200 "
            >
              <span className="font-black underline">
                Matrículas 2026 abertas
              </span>
              : do Infantil ao Ensino Médio, <br /> prepare seu filho para um
              futuro de conquistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-transparent text-[#001F63] border border-[#FDC938] rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                style={{ padding: "1px 4px" }}
              >
                <span className="bg-[#FDC938] rounded-full px-6 py-2 flex items-center gap-4">
                  Conheça o seu futuro
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M1 1.00002L13 1M13 1L13 13M13 1L1.00002 13"
                      stroke="#001F63"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <button className="px-6 py-3 bg-[#89b0c882] text-[#000000] rounded-full border-[3px] border-white font-medium hover:opacity-90 flex items-center justify-center gap-2">
                Veja nosso ensino
              </button>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:opacity-80">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle
                cx="37.381"
                cy="37.381"
                r="35.381"
                stroke="#FDC938"
                strokeWidth="4"
              />
              <path
                d="M42.6875 26.7666L32.3285 37.6463C32.2479 37.7257 32.1837 37.8216 32.1398 37.9281C32.0959 38.0346 32.0732 38.1494 32.0732 38.2655C32.0732 38.3815 32.0959 38.4963 32.1398 38.6028C32.1837 38.7093 32.2479 38.8052 32.3285 38.8846L42.6875 49.7643"
                stroke="#FDC938"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:opacity-80">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle
                cx="35.381"
                cy="35.381"
                r="35.381"
                transform="matrix(-1 0 0 1 72.762 2)"
                stroke="#FDC938"
                strokeWidth="4"
              />
              <path
                d="M32.0744 26.7666L42.4335 37.6463C42.5141 37.7257 42.5783 37.8216 42.6222 37.9281C42.6661 38.0346 42.6887 38.1494 42.6887 38.2655C42.6887 38.3815 42.6661 38.4963 42.6222 38.6028C42.5783 38.7093 42.5141 38.8052 42.4335 38.8846L32.0744 49.7643"
                stroke="#FDC938"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
