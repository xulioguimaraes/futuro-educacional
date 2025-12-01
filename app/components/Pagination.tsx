"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          currentPage === 1
            ? "bg-gray-100"
            : "bg-[#ECF8FF] hover:bg-[#ECF8FF]/80"
        }`}
      >
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59268 0.221895C9.66319 0.292053 9.71913 0.37545 9.7573 0.467295C9.79548 0.559139 9.81513 0.657622 9.81513 0.757084C9.81513 0.856547 9.79548 0.955027 9.7573 1.04687C9.71913 1.13872 9.66319 1.22211 9.59268 1.29227L1.82424 9.05742L9.59268 16.8259C9.66296 16.8961 9.71871 16.9796 9.75675 17.0714C9.79479 17.1632 9.81436 17.2617 9.81436 17.3611C9.81436 17.4604 9.79479 17.5589 9.75675 17.6507C9.71871 17.7425 9.66296 17.826 9.59268 17.8962C9.5224 17.9665 9.43896 18.0223 9.34714 18.0603C9.25531 18.0983 9.15689 18.1179 9.0575 18.1179C8.9581 18.1179 8.85968 18.0983 8.76785 18.0603C8.67603 18.0223 8.59259 17.9665 8.52231 17.8962L0.222793 9.59096C0.152193 9.52086 0.0961597 9.43748 0.0579228 9.34563C0.0196858 9.25378 1.06879e-07 9.15527 1.08065e-07 9.05577C1.09251e-07 8.95628 0.0196858 8.85777 0.0579228 8.76592C0.0961598 8.67407 0.152193 8.59069 0.222793 8.52059L8.5256 0.221895C8.59553 0.151592 8.67867 0.0958062 8.77023 0.0577375C8.8618 0.0196687 8.95998 7.06787e-05 9.05914 7.06799e-05C9.1583 7.06811e-05 9.25649 0.0196687 9.34805 0.0577375C9.43961 0.0958062 9.52275 0.151592 9.59268 0.221895Z"
            fill="#504E4E"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            currentPage === page
              ? "border border-[#1C437F] text-[#1C437F] font-bold"
              : "bg-[#ECF8FF] text-gray-500 hover:bg-[#ECF8FF]/80"
          }`}
          style={
            currentPage === page
              ? { fontWeight: 700, backgroundColor: "transparent" }
              : { fontWeight: 700 }
          }
        >
          {String(page).padStart(2, "0")}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          currentPage === totalPages
            ? "bg-gray-100"
            : "bg-[#1C437F] hover:bg-[#1C437F]/90"
        }`}
      >
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.222746 17.896C0.152244 17.8259 0.0962993 17.7425 0.0581247 17.6506C0.0199501 17.5588 0.000297737 17.4603 0.000297741 17.3608C0.000297746 17.2614 0.0199501 17.1629 0.0581247 17.071C0.0962994 16.9792 0.152244 16.8958 0.222746 16.8256L7.99119 9.0605L0.222747 1.29205C0.152465 1.22177 0.0967159 1.13834 0.0586795 1.04651C0.0206432 0.954682 0.00106617 0.856261 0.00106617 0.756868C0.00106618 0.657475 0.0206432 0.559054 0.0586796 0.467227C0.0967159 0.375399 0.152465 0.291963 0.222747 0.221681C0.293029 0.151399 0.376466 0.0956487 0.468293 0.0576125C0.560122 0.0195763 0.65854 -4.0026e-07 0.757934 -3.95916e-07C0.857327 -3.91571e-07 0.955748 0.0195763 1.04757 0.0576125C1.1394 0.0956487 1.22284 0.151399 1.29312 0.221681L9.59264 8.52696C9.66324 8.59706 9.71927 8.68044 9.75751 8.77229C9.79574 8.86414 9.81543 8.96265 9.81543 9.06215C9.81543 9.16164 9.79574 9.26015 9.75751 9.352C9.71927 9.44385 9.66324 9.52723 9.59264 9.59733L1.28983 17.896C1.2199 17.9663 1.13676 18.0221 1.04519 18.0602C0.953633 18.0983 0.855449 18.1178 0.756287 18.1178C0.657126 18.1178 0.558942 18.0983 0.467379 18.0602C0.375816 18.0221 0.292678 17.9663 0.222746 17.896Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
