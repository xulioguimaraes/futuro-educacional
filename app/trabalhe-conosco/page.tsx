"use client";

import Image from "next/image";
import HeroShowcase from "../components/HeroShowcase";
import { useState } from "react";

const jobVacancies = [
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
  {
    title: "Orientador(a) pedagógico(a) - Ciências Humanas",
    location: "Marabá - PA",
    type: "Presencial",
  },
];

const ITEMS_PER_PAGE = 15;
const TOTAL_VACANCIES = 10;
const TOTAL_PAGES = 3;

export default function TrabalheConoscoPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentVacancies = jobVacancies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="bg-[#F5F7FF] min-h-screen">
      <HeroShowcase
        backgroundImage="/escola.jpg"
        eyebrow=""
        title="Vagas no grupo Futuro Educacional"
      />

      {/* Vacancies Section */}
      <section className="py-12 bg-[#F5F7FF]">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-8">
            {TOTAL_VACANCIES} vagas encontradas
          </p>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentVacancies.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold text-[#001F63]">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <Image
                    src="/mapa.svg"
                    alt="Localização"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="mt-auto">
                  <span className="inline-block bg-[#FDC938] text-[#001F63] text-xs font-semibold px-3 py-1 rounded-md mb-4">
                    {job.type}
                  </span>
                </div>
                <button className="w-full bg-[#1C437F] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1C437F]/90 transition-colors">
                  Ver Vaga
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                currentPage === 1
                  ? "bg-gray-100 border-gray-300"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={currentPage === 1 ? "text-gray-400" : "text-[#001F63]"}
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentPage === page
                    ? "bg-[#1C437F] text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {String(page).padStart(2, "0")}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === TOTAL_PAGES}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === TOTAL_PAGES
                  ? "bg-gray-200"
                  : "bg-[#1C437F] hover:bg-[#1C437F]/90"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

