"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { courses } from "@/lib/siteData";

const categoryFilters = {
  ru: ["Все курсы", "Дети", "Подростки", "Взрослые"],
  az: ["Bütün kurslar", "Uşaqlar", "Yeniyetmələr", "Böyüklər"],
};

export default function CoursesPage() {
  const { lang } = useLanguage();
  const filters = categoryFilters[lang as "ru" | "az"] ?? categoryFilters.ru;

  return (
    <main>
      {/* PAGE HERO */}
      <Reveal>
        <section className="section" style={{ background: "var(--mint)", paddingBottom: "3rem" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h1 style={{ color: "var(--teal)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>
              {lang === "ru" ? "Все курсы Trixy Academy" : "Trixy Academy kursları"}
            </h1>
            <p style={{ maxWidth: "560px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              {lang === "ru"
                ? "Выбирайте программу по возрасту, цели и уровню подготовки."
                : "Yaşa, məqsədə və hazırlıq səviyyəsinə uyğun proqram seçin."}
            </p>
          </div>
        </section>
      </Reveal>

      {/* FILTER TABS */}
      <Reveal>
        <section className="section section-alt">
          <div className="container">
            {/* Filter pills */}
            <div className="filter-tabs" style={{ marginBottom: "2.5rem" }}>
              {filters.map((f, i) => (
                <button key={f} className={`filter-tab${i === 0 ? " active" : ""}`}>
                  {f}
                </button>
              ))}
            </div>

            {/* Course cards grid */}
            <div className="courses-grid">
              {courses.map((course, i) => (
                <article key={course.slug} className="course-card">
                  <div className="course-card-img">
                    <div style={{
                      width: "100%", height: "100%", display: "flex",
                      alignItems: "center", justifyContent: "center", fontSize: "3.5rem",
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)"
                        : i % 3 === 1
                          ? "linear-gradient(135deg, #f0a070 0%, #f5c88a 100%)"
                          : "linear-gradient(135deg, var(--teal-light) 0%, #7dbde8 100%)"
                    }}>
                      {["💻", "🤖", "🧠", "🔒"][i % 4]}
                    </div>
                    <div className="student-badge">
                      <div className="student-dots"><span /><span /><span /></div>
                      +{[40, 32, 28, 22][i % 4]} {lang === "ru" ? "учеников" : "tələbə"}
                    </div>
                  </div>
                  <div className="course-card-body">
                    <p className="course-date">1 – 28 {lang === "ru" ? "числа каждого месяца" : "hər ayın"}</p>
                    <h3 className="course-card-title">
                      {lang === "ru" ? course.title : course.titleAz}
                    </h3>
                    <p className="course-card-desc" style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                      {lang === "ru" ? course.audience : course.audienceAz}
                    </p>
                    <div className="course-card-footer">
                      <div className="course-price">
                        <span className="price-new">{course.newPrice.split(" (")[0]}</span>
                        <span className="price-old">{course.oldPrice}</span>
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

      {/* WHY CHOOSE US BANNER */}
      <Reveal>
        <section className="section">
          <div className="container">
            <div className="why-banner">
              <div className="why-banner-content">
                <h2>{lang === "ru" ? "Не знаете с чего начать?" : "Hara başlayacağınızı bilmirsiniz?"}</h2>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {lang === "ru"
                    ? "Запишитесь на бесплатную консультацию — подберём программу под возраст и интенсивность."
                    : "Pulsuz məsləhət üçün yazılın — yaşa və intensivliyə uyğun proqram seçəcəyik."}
                </p>
                <Link href="/contacts" className="btn" style={{ background: "white", color: "var(--teal)", fontWeight: 800 }}>
                  {lang === "ru" ? "Получить консультацию" : "Məsləhət alın"}
                </Link>
              </div>
              <div className="why-banner-image">
                <img src="/pics/images.jpeg" alt="Trixy courses" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
