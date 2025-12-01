"use client";

import HeroShowcase from "../components/HeroShowcase";
import Pagination from "../components/Pagination";
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
        title="Trabalhe conosco"
      />

      {/* Vacancies Section */}
      <section className="py-12 bg-[#F5F7FF]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-[#17012C] mb-4">
            Vagas no grupo Futuro Educacional
          </h1>
          <p className="text-[#1C437F] mb-6 text-lg">
            {TOTAL_VACANCIES} vagas encontradas
          </p>
          <div className="h-px w-full bg-[#E2E8F0] mt-3 mb-4" />

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 pt-4">
            {currentVacancies.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4"
              >
                <h3 className=" font-bold text-black">{job.title}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M6.75 0C4.96052 0.00237379 3.24501 0.714295 1.97965 1.97965C0.714295 3.24501 0.00237379 4.96052 0 6.75C0 11.5959 6.28875 17.6653 6.55594 17.9212C6.60791 17.9718 6.67753 18 6.75 18C6.82247 18 6.89209 17.9718 6.94406 17.9212C7.21125 17.6653 13.5 11.5959 13.5 6.75C13.4976 4.96052 12.7857 3.24501 11.5203 1.97965C10.255 0.714295 8.53948 0.00237379 6.75 0ZM6.75 9.84375C6.13811 9.84375 5.53997 9.6623 5.0312 9.32236C4.52244 8.98241 4.12591 8.49924 3.89175 7.93393C3.65759 7.36862 3.59632 6.74657 3.7157 6.14644C3.83507 5.54631 4.12972 4.99506 4.56239 4.56239C4.99506 4.12972 5.54631 3.83507 6.14644 3.7157C6.74657 3.59632 7.36862 3.65759 7.93393 3.89175C8.49924 4.12591 8.98241 4.52244 9.32236 5.0312C9.6623 5.53997 9.84375 6.13811 9.84375 6.75C9.84326 7.57036 9.51715 8.35698 8.93707 8.93707C8.35699 9.51715 7.57036 9.84326 6.75 9.84375Z"
                      fill="#1C437F"
                    />
                  </svg>
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="mt-auto">
                  <span className="inline-block bg-[#FFF2CE] text-[#2C2C2C] border border-[#FDC938] text-xs  px-3 py-1 rounded-md mb-2">
                    {job.type}
                  </span>
                </div>
                <button className=" mx-6 bg-[#1C437F] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1C437F]/90 transition-colors">
                  Ver Vaga
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </main>
  );
}
