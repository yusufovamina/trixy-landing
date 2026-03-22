"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  /* ── COURSE DATA (same as before) ── */
  const courseCards =
    lang === "ru"
      ? [
        {
          title: "Proqramlaşdırma / Программирование",
          duration: "2-летняя программа",
          desc: "Базовое кодирование, веб-логика, первые проекты и развитие алгоритмического мышления.",
          icon: "💻",
          students: 40,
          oldPrice: "490 AZN",
          newPrice: "329 AZN"
        },
        {
          title: "Robototexnika / Робототехника",
          duration: "3-летняя программа",
          desc: "Сборка, электроника и инженерные проекты для детей 9-14 лет.",
          icon: "🤖",
          students: 32,
          oldPrice: "450 AZN",
          newPrice: "299 AZN"
        },
        {
          title: "Süni intellekt / Искусственный интеллект",
          duration: "2-летняя программа",
          desc: "Практика AI-инструментов, компьютерное мышление и прикладные мини-проекты.",
          icon: "🧠",
          students: 28,
          oldPrice: "490 AZN",
          newPrice: "329 AZN"
        },
        {
          title: "Kibertəhlükəsizlik / Кибербезопасность",
          duration: "5-летняя программа",
          desc: "Цифровая грамотность, безопасность данных и основы этичного хакинга.",
          icon: "🔐",
          students: 22,
          oldPrice: "470 AZN",
          newPrice: "315 AZN"
        }
      ]
      : [
        {
          title: "Proqramlaşdırma / Программирование",
          duration: "2 illik proqram",
          desc: "Kodlaşdırma əsasları, veb məntiqi və ilk layihələrlə alqoritmik düşüncənin inkişafı.",
          icon: "💻",
          students: 40,
          oldPrice: "490 AZN",
          newPrice: "329 AZN"
        },
        {
          title: "Robototexnika / Робототехника",
          duration: "3 illik proqram",
          desc: "Yığım, elektronika və 9-14 yaş üçün mühəndislik layihələri.",
          icon: "🤖",
          students: 32,
          oldPrice: "450 AZN",
          newPrice: "299 AZN"
        },
        {
          title: "Süni intellekt / Искусственный интеллект",
          duration: "2 illik proqram",
          desc: "AI alətləri ilə praktika, kompüter düşüncəsi və tətbiqi mini-layihələr.",
          icon: "🧠",
          students: 28,
          oldPrice: "490 AZN",
          newPrice: "329 AZN"
        },
        {
          title: "Kibertəhlükəsizlik / Кибербезопасность",
          duration: "5 illik proqram",
          desc: "Rəqəmsal savadlılıq, məlumatların qorunması və etik hacking əsasları.",
          icon: "🔐",
          students: 22,
          oldPrice: "470 AZN",
          newPrice: "315 AZN"
        }
      ];

  const categoryItems =
    lang === "ru"
      ? [
        { icon: "💻", label: "Программирование", desc: "Кодирование, алгоритмы, веб-проекты" },
        { icon: "🤖", label: "Робототехника", desc: "Сборка, электроника, STEM-проекты" },
        { icon: "🧠", label: "Искусственный интеллект", desc: "AI-инструменты и мини-проекты" },
        { icon: "🔐", label: "Кибербезопасность", desc: "Цифровая грамотность и безопасность" }
      ]
      : [
        { icon: "💻", label: "Proqramlaşdırma", desc: "Kodlaşdırma, alqoritmlər, veb layihələr" },
        { icon: "🤖", label: "Robototexnika", desc: "Yığım, elektronika, STEM layihələri" },
        { icon: "🧠", label: "Süni intellekt", desc: "AI alətləri və mini-layihələr" },
        { icon: "🔐", label: "Kibertəhlükəsizlik", desc: "Rəqəmsal savadlılıq və təhlükəsizlik" }
      ];

  const filterTabs =
    lang === "ru"
      ? ["Все программы", "Для детей", "Для подростков", "Для взрослых", "С нуля"]
      : ["Bütün proqramlar", "Uşaqlar üçün", "Yeniyetmələr üçün", "Böyüklər üçün", "Sıfırdan"];

  const advantages =
    lang === "ru"
      ? [
        "Малые группы и персональная обратная связь.",
        "Проектный формат с реальными результатами.",
        "Академическая дисциплина + современный digital-подход."
      ]
      : [
        "Kiçik qruplar və fərdi rəy sistemi.",
        "Real nəticə verən layihə əsaslı format.",
        "Akademik intizam + müasir digital yanaşma."
      ];

  return (
    <main>
      {/* ── HERO SECTION ── */}
      <Reveal>
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">
              🚀 {lang === "ru" ? "Начни учиться сейчас" : "İndi öyrənməyə başla"}
            </span>
            <h1 className="hero-title">
              {lang === "ru"
                ? "Развивай навыки с онлайн-курсами Trixy Computer Academy"
                : "Trixy Computer Academy ilə bacarıqlarını inkişaf etdir"}
            </h1>
            <p style={{ color: "var(--text-muted)", maxWidth: "480px", marginBottom: "1.5rem" }}>
              {lang === "ru"
                ? "Современная академия в Баку: программирование, робототехника, AI и кибербезопасность для детей 7–50 лет."
                : "Bakıda müasir akademiya: 7–50 yaş üçün proqramlaşdırma, robototexnika, AI və kibertəhlükəsizlik."}
            </p>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <Link href="/courses" className="btn btn-orange">
                {lang === "ru" ? "Смотреть курсы" : "Kurslara bax"}
              </Link>
              <Link href="/contacts" className="btn btn-outline" style={{ color: "var(--teal)", borderColor: "var(--teal)" }}>
                {lang === "ru" ? "Записаться" : "Qeydiyyat"}
              </Link>
            </div>
            
          </div>
          <div className="hero-image-side">
            <img
              src="/pics/technopolis-technology-children.jpg"
              alt={lang === "ru" ? "Ученики академии" : "Akademiya tələbələri"}
            />
          </div>
        </section>
      </Reveal>

      {/* ── POPULAR COURSES ── */}
      <Reveal>
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              {lang === "ru" ? "Популярные курсы" : "Populyar kurslar"}
            </h2>
            <span className="section-underline" />
            <p className="section-desc">
              {lang === "ru"
                ? "Trixy Academy — мощная образовательная экосистема, объединяющая всё необходимое для старта в IT."
                : "Trixy Academy - IT sahəsinə başlamaq üçün lazım olan hər şeyi birləşdirən güclü təhsil ekosistemi."}
            </p>

            <div className="filter-tabs">
              {filterTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`filter-tab${i === 0 ? " active" : ""}`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="courses-grid">
              {courseCards.map((card, i) => (
                <article key={card.title} className="course-card">
                  <div className="course-card-img">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "3.5rem",
                        background: i % 2 === 0
                          ? "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)"
                          : i % 3 === 1
                            ? "linear-gradient(135deg, #f0a070 0%, #f5c88a 100%)"
                            : "linear-gradient(135deg, var(--teal-light) 0%, #7dbde8 100%)"
                      }}
                    >
                      {card.icon}
                    </div>
                    <div className="student-badge">
                      <div className="student-dots">
                        <span /><span /><span />
                      </div>
                      + {card.students} {lang === "ru" ? "учеников" : "tələbə"}
                    </div>
                  </div>
                  <div className="course-card-body">
                    <p className="course-date">1 – 28 {lang === "ru" ? "числа каждого месяца" : "hər ayın"}</p>
                    <h3 className="course-card-title">{card.title}</h3>
                    <p className="course-card-desc">{card.desc}</p>
                    <div className="course-card-footer">
                      <div className="course-price">
                        <span className="price-new">{card.newPrice}</span>
                        <span className="price-old">{card.oldPrice}</span>
                      </div>
                      <Link href="/contacts" className="btn-enroll">
                        {lang === "ru" ? "Записаться" : "Qeydiyyat"}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── COURSES CATEGORY ── */}
      <Reveal>
        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">
              {lang === "ru" ? "Направления обучения" : "Tədris istiqamətləri"}
            </h2>
            <span className="section-underline" />
            <p className="section-desc">
              {lang === "ru"
                ? "Trixy Academy — мощная образовательная экосистема, объединяющая всё необходимое для успешного старта в IT."
                : "Trixy Academy - uğurlu IT başlanğıcı üçün lazım olan hər şeyi birləşdirən güclü təhsil ekosistemi."}
            </p>

            <div className="categories-grid">
              {categoryItems.map((cat, i) => (
                <div
                  key={cat.label}
                  className={`category-card${activeCategory === i ? " active" : ""}`}
                  onClick={() => setActiveCategory(i)}
                >
                  <div className="category-icon">{cat.icon}</div>
                  <h3>{cat.label}</h3>
                  <p>{cat.desc}</p>
                  <span className="btn-more">
                    {activeCategory === i
                      ? lang === "ru" ? "Смотреть курсы" : "Kurslara bax"
                      : lang === "ru" ? "подробнее" : "ətraflı"}
                  </span>
                </div>
              ))}
            </div>

            <div className="view-all-wrap">
              <Link href="/courses" className="btn btn-outline" style={{ color: "var(--teal)", borderColor: "var(--teal)" }}>
                {lang === "ru" ? "Все направления" : "Bütün istiqamətlər"}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── WHY CHOOSE US BANNER ── */}
      <Reveal>
        <section className="section">
          <div className="container">
            <div className="why-banner">
              <div className="why-banner-content">
                <h2>
                  {lang === "ru"
                    ? "Почему стоит выбрать нас?"
                    : "Niyə bizi seçməlisiniz?"}
                </h2>
                <ul className="why-check-list">
                  {advantages.map((adv) => (
                    <li key={adv}>
                      <span className="check-icon">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
                <Link href="/contacts" className="btn" style={{ background: "white", color: "var(--teal)", fontWeight: 800 }}>
                  {lang === "ru" ? "Записаться сейчас" : "İndi qeydiyyat"}
                </Link>
              </div>
              <div className="why-banner-image">
                <img
                  src="/pics/technopolis-technology-children.jpg"
                  alt={lang === "ru" ? "Обучение в Trixy" : "Trixy-də öyrənmə"}
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── BENEFITS / CHOOSE YOUR PROGRAM ── */}
      <Reveal>
        <section className="section section-alt">
          <div className="container">
            <div className="benefits-section">
              <div>
                <span className="benefits-label">
                  {lang === "ru" ? "Преимущества" : "Üstünlüklər"}
                </span>
                <h2 className="benefits-title">
                  {lang === "ru" ? "Выбери свою программу" : "Öz proqramını seç"}
                </h2>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="feature-icon teal">🗂️</span>
                    <p>
                      {lang === "ru"
                        ? "Малые группы — каждому ученику уделяется индивидуальное внимание."
                        : "Kiçik qruplar — hər tələbəyə fərdi diqqət yetirilir."}
                    </p>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon orange">🎯</span>
                    <p>
                      {lang === "ru"
                        ? "Проекты выходят вперёд — по результатам обучения есть реальный продукт."
                        : "Layihələr önündədir — öyrənmənin nəticəsinde real məhsul olur."}
                    </p>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon green">👥</span>
                    <p>
                      {lang === "ru"
                        ? "Преподаватель всегда может легко увидеть всех учеников и их прогресс."
                        : "Müəllim həmişə bütün tələbələri və onların tərəqqisini asanlıqla görə bilir."}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="benefits-card">
                <img
                  src="/pics/images.jpeg"
                  alt={lang === "ru" ? "Программа обучения" : "Tədris proqramı"}
                  style={{ borderRadius: "22px" }}
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>



      {/* ── FINAL CTA (Wix Form) ── */}
      <Reveal>
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ color: "var(--teal)", fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}>
                {lang === "ru" ? "Запишитесь на бесплатный пробный урок" : "Pulsuz sınaq dərsinə yazılın"}
              </h2>
              <p style={{ marginBottom: "2rem" }}>
                {lang === "ru"
                  ? "Оцените формат, преподавателя и программу до старта."
                  : "Başlamadan əvvəl formatı, müəllimi və proqramı qiymətləndirin."}
              </p>
              <img
                src="/pics/kids.png"
                alt={lang === "ru" ? "Дети учатся программировать" : "Uşaqlar proqramlaşdırma öyrənir"}
                style={{ width: "100%", borderRadius: "20px", boxShadow: "0 8px 32px rgba(0,90,79,0.10)" }}
              />
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
