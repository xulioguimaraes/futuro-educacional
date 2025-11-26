import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="relative z-30 ">
        <div className="container mx-auto fixed top-0 left-0 right-0">
          <div className="bg-[#001545] text-white text-sm py-2">
            <div className="container mx-auto px-8 flex justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/phone.png"
                    alt="Telefone"
                    width={16}
                    height={16}
                    className="object-scale-down"
                  />
                  <span>(94) 98100-0798</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/mail.png"
                    alt="Email"
                    width={16}
                    height={16}
                    className="object-scale-down"
                  />
                  <span>contato@grupofuturoeducacional.com.br</span>
                </div>
              </div>
              {/* Social Media Icons */}
              <div className="hidden lg:flex items-center gap-5">
                <a
                  href="#"
                  className="w-4 h-4 flex items-center justify-center hover:opacity-80"
                >
                  <Image
                    src="/fb.svg"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="object-scale-down"
                  />
                </a>
                <a
                  href="#"
                  className="w-4 h-4 flex items-center justify-center hover:opacity-80"
                >
                  <Image
                    src="/in.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="object-scale-down"
                  />
                </a>
                <a
                  href="#"
                  className="w-4 h-4 flex items-center justify-center hover:opacity-80"
                >
                  <Image
                    src="/x.svg"
                    alt="Twitter/X"
                    width={16}
                    height={16}
                    className="object-scale-down"
                  />
                </a>
                <a
                  href="#"
                  className="w-4 h-4 flex items-center justify-center hover:opacity-80"
                >
                  <Image
                    src="/yt.svg"
                    alt="YouTube"
                    width={16}
                    height={16}
                    className="object-scale-down"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className=" relative z-20 text-white py-4">
        <div className="container fixed top-[35px] left-0 right-0 rounded-b-[30px] mx-auto px-8 flex items-center justify-between bg-gradient-to-r from-[#001F63] to-[#002576]">
          {/* Logo */}
          <Link href="/" className="flex items-center ">
            <Image
              src="/logo-futuro.png"
              alt="Grupo Futuro Educacional"
              width={230}
              height={60}
              className="h-[100px] object-cover"
            />
          </Link>

          {/* Navigation Links */}
          <Navigation />
        </div>
      </nav>
    </>
  );
}
