"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage, useT } from "@/components/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useT();

  const navLinks = [
    { href: "/", label: lang === "ru" ? "Главная" : "Ana səhifə" },
    { href: "/courses", label: lang === "ru" ? "Курсы" : "Kurslar" },
    { href: "/about", label: lang === "ru" ? "О нас" : "Haqqımızda" },
    { href: "/contacts", label: lang === "ru" ? "Контакты" : "Əlaqə" }
  ];

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="logo-mark">
            <img src="/pics/image.png" alt="Trixy Academy" style={{ height: "38px", width: "auto", borderRadius: "8px" }} />
            <span style={{ color: "var(--teal)" }}>Trixy Academy</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button
              className="btn btn-outline"
              onClick={() => setLang(lang === "ru" ? "az" : "ru")}
              type="button"
              style={{ padding: "0.5rem 0.75rem", fontSize: "0.85rem" }}
            >
              {lang.toUpperCase()}
            </button>
            <Link href="/contacts" className="btn btn-primary" style={{ fontSize: "0.88rem" }}>
              {lang === "ru" ? "Записаться" : "Qeydiyyat"}
            </Link>
            <button
              className="burger-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label="Открыть меню"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="mobile-nav">
          <div className="container">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
