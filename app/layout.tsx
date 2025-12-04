import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900", "700", "500", "800"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Futuro Educacional - O futuro dos seus sonhos é agora!",
  description:
    "Matrículas 2026 abertas: do Infantil ao Ensino Médio, prepare seu filho para um futuro de conquistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
