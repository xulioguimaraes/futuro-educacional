"use client";

import { useState } from "react";
import Link from "next/link";
import Pagination from "../components/Pagination";
import type { JobVacancy } from "../../../sanity/lib/fetch";

interface JobVacanciesClientProps {
  vacancies: JobVacancy[];
}

const ITEMS_PER_PAGE = 15;

export default function JobVacanciesClient({ vacancies }: JobVacanciesClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(vacancies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentVacancies = vacancies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-8 md:py-12 bg-[#F5F7FF]">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#17012C] mb-2 md:mb-4 text-center md:text-left">
          Vagas no grupo Futuro Educacional
        </h1>
        <p className="text-[#1C437F] mb-4 md:mb-6 text-base md:text-lg text-center md:text-left">
          {vacancies.length} vagas encontradas
        </p>
        <div className="h-px w-full bg-[#E2E8F0] mt-3 mb-4" />

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 pt-4">
          {currentVacancies.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex flex-col gap-3 md:gap-4"
            >
              <h3 className="text-sm md:text-base font-bold text-black">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                >
                  <path
                    d="M6.75 0C4.96052 0.00237379 3.24501 0.714295 1.97965 1.97965C0.714295 3.24501 0.00237379 4.96052 0 6.75C0 11.5959 6.28875 17.6653 6.55594 17.9212C6.60791 17.9718 6.67753 18 6.75 18C6.82247 18 6.89209 17.9718 6.94406 17.9212C7.21125 17.6653 13.5 11.5959 13.5 6.75C13.4976 4.96052 12.7857 3.24501 11.5203 1.97965C10.255 0.714295 8.53948 0.00237379 6.75 0ZM6.75 9.84375C6.13811 9.84375 5.53997 9.6623 5.0312 9.32236C4.52244 8.98241 4.12591 8.49924 3.89175 7.93393C3.65759 7.36862 3.59632 6.74657 3.7157 6.14644C3.83507 5.54631 4.12972 4.99506 4.56239 4.56239C4.99506 4.12972 5.54631 3.83507 6.14644 3.7157C6.74657 3.59632 7.36862 3.65759 7.93393 3.89175C8.49924 4.12591 8.98241 4.52244 9.32236 5.0312C9.6623 5.53997 9.84375 6.13811 9.84375 6.75C9.84326 7.57036 9.51715 8.35698 8.93707 8.93707C8.35699 9.51715 7.57036 9.84326 6.75 9.84375Z"
                    fill="#1C437F"
                  />
                </svg>
                <span className="text-xs md:text-sm">{job.location}</span>
              </div>
              <div className="mt-auto">
                <span className="inline-block bg-[#FFF2CE] text-[#2C2C2C] border border-[#FDC938] text-xs px-3 py-1 rounded-md mb-2">
                  {job.type}
                </span>
              </div>
              <Link 
                href={`/trabalhe-conosco/${job._id}`}
                className="mx-0 md:mx-6 bg-[#1C437F] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1C437F]/90 transition-colors text-sm md:text-base text-center block"
              >
                Ver Vaga
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}

