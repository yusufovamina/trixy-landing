import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Trixy Computer Academy (trixy.az) - IT курсы в Баку",
  description:
    "Trixy Computer Academy в Баку: IT-курсы для детей 7-14+, подростков и взрослых 15-50. Программирование, робототехника, ИИ, 3D и кибербезопасность."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <style>
          {`
            .desktop-nav { display:none; }
            .burger-btn {
              display:inline-flex; align-items:center; justify-content:center;
              width:40px; height:40px; border-radius:10px; border:1px solid rgba(253,255,255,0.4);
              color:#fdffff; background:transparent;
            }
            @media (min-width: 900px) {
              .desktop-nav { display:block; }
              .burger-btn { display:none; }
            }
          `}
        </style>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
