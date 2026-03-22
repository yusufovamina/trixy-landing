"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");

  const categories = [
    lang === "ru" ? "Программирование" : "Proqramlaşdırma",
    lang === "ru" ? "Робототехника" : "Robototexnika",
    lang === "ru" ? "Искусственный интеллект" : "Süni intellekt",
    lang === "ru" ? "Кибербезопасность" : "Kibertəhlükəsizlik",
    lang === "ru" ? "3D-моделирование" : "3D Modelləşdirmə"
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo">
              <img src="/pics/image.png" alt="Trixy Academy" style={{ height: "38px", width: "auto", borderRadius: "8px" }} />
              <span>Trixy Academy</span>
            </div>
            <div className="footer-contact-line">
              <span className="footer-contact-icon">📍</span>
              <span>{lang === "ru" ? "Адрес:" : "Ünvan:"} Həsən Bəy Zərdabi 99 (Qələbə Residence), Bakı</span>
            </div>
            <div className="footer-contact-line">
              <span className="footer-contact-icon">📞</span>
              <span>+994 10 527 7007</span>
            </div>
            <div className="footer-contact-line">
              <span className="footer-contact-icon">🕐</span>
              <span>{lang === "ru" ? "Пн–Сб: 9:00–20:00" : "B.e–Ş: 9:00–20:00"}</span>
            </div>
            
          </div>

          {/* Categories */}
          <div className="footer-col">
            <h4>{lang === "ru" ? "Направления" : "İstiqamətlər"}</h4>
            {categories.map((c) => (
              <Link key={c} href="/courses">{c}</Link>
            ))}
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4>{lang === "ru" ? "Страницы" : "Səhifələr"}</h4>
            <Link href="/">{lang === "ru" ? "Главная" : "Ana səhifə"}</Link>
            <Link href="/courses">{lang === "ru" ? "Курсы" : "Kurslar"}</Link>
            <Link href="/about">{lang === "ru" ? "О нас" : "Haqqımızda"}</Link>
            <Link href="/contacts">{lang === "ru" ? "Контакты" : "Əlaqə"}</Link>
          </div>

          
        </div>

        <div className="footer-bottom">
          2026 © Trixy Computer Academy — {lang === "ru" ? "Баку, Азербайджан" : "Bakı, Azərbaycan"}
        </div>
      </div>
    </footer>
  );
}
