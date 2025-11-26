"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };
  return (
    <section className=" relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/BACKGROUND-contato.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Form */}
          <div className="flex-1 w-full py-16">
            <div className="mb-6">
              <span className="text-sm font-bold text-[#1C437F] uppercase">
                ENTRE EM CONTATO
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#253858] mt-2">
                Deixe-nos uma mensagem
              </h2>
            </div>

            <form
              className="bg-[#1C437F] rounded-[30px] py-8 px-12 text-white"
              style={{
                boxShadow: "10px 10px 15px 0px #00000033",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Nome <span className="text-[#FDC938]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-6 py-4 rounded-[10px] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder-[#A9A9A9]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Sobrenome <span className="text-[#FDC938]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    className="w-full px-6 py-4 rounded-[10px] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder-[#A9A9A9]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Telefone <span className="text-[#FDC938]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                    className="w-full px-6 py-4 rounded-[10px] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder-[#A9A9A9]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    E-mail <span className="text-[#FDC938]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email@exemplo.com"
                    className="w-full px-6 py-4 rounded-[10px] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder-[#A9A9A9]"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-white">
                  Deixe-nos uma mensagem{" "}
                  <span className="text-[#FDC938]">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Sua mensagem aqui..."
                  className="w-full px-6 py-4 rounded-[10px] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#fbbf24] placeholder-[#A9A9A9]"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-transparent text-[#001F63] border border-[#FDC938] rounded-full font-semibold transition-all duration-300 flex items-center gap-2  justify-center"
                  style={{ padding: "3px" }}
                >
                  <span className="bg-[#FDC938] rounded-full px-6 py-2 flex items-center gap-4">
                    Enviar mensagem
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
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 hidden md:block relative z-20 self-end">
            <div className="relative w-full h-[700px]">
              <Image
                src="/homem-contato.png"
                alt="Colaborador"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
