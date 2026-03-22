"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const approachItems = {
  ru: [
    { icon: "🎯", title: "Диагностика уровня", desc: "Персональный трек обучения с первого дня — подстраиваемся под каждого ученика." },
    { icon: "💻", title: "Практика на каждом занятии", desc: "Никакой скучной теории: работаем с реальными задачами и проектами." },
    { icon: "🏆", title: "Менторская поддержка", desc: "Наши менторы сопровождают до финального результата — сертификата и проекта." },
  ],
  az: [
    { icon: "🎯", title: "Səviyyə analizi", desc: "İlk gündən fərdi inkişaf planı — hər tələbəyə uyğunlaşırıq." },
    { icon: "💻", title: "Hər dərsdə praktika", desc: "Darıxdırıcı nəzəriyyə yoxdur: real tapşırıqlar və layihələrlə işləyirik." },
    { icon: "🏆", title: "Mentor dəstəyi", desc: "Mentorlarımız son nəticəyə — sertifikata və layihəyə qədər müşayiət edir." },
  ],
};



export default function AboutPage() {
  const { lang } = useLanguage();
  const items = approachItems[lang as "ru" | "az"] ?? approachItems.ru;

  return (
    <main>
      {/* PAGE HERO */}
      <Reveal>
        <section className="section" style={{ background: "var(--mint)", paddingBottom: "3rem" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h1 style={{ color: "var(--teal)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>
              {lang === "ru" ? "О нас и почему мы" : "Haqqımızda"}
            </h1>
            <p style={{ maxWidth: "640px", margin: "0 auto 2rem", color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              {lang === "ru"
                ? "Мы не просто даём теорию. В Trixy Computer Academy дети, подростки и взрослые в Баку учатся делать проекты, мыслить как разработчики и уверенно презентовать результат."
                : "Biz yalnız nəzəriyyə vermirik. Trixy Computer Academy-də uşaqlar, yeniyetmələr və böyüklər real layihələr hazırlayır, developer kimi düşünməyi öyrənir."}
            </p>
            <Link href="/contacts" className="btn btn-primary">
              {lang === "ru" ? "Записаться на пробный урок" : "Sınaq dərsinə yazılın"}
            </Link>
          </div>
        </section>
      </Reveal>

    
      {/* OUR APPROACH */}
      <Reveal>
        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">{lang === "ru" ? "Наш подход" : "Yanaşmamız"}</h2>
            <span className="section-underline" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
              {items.map((item) => (
                <div key={item.title} style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 16px rgba(0,90,79,0.06)" }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ color: "var(--teal)", fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* MISSION */}
      <Reveal>
        <section className="section">
          <div className="container">
            <div className="why-banner">
              <div className="why-banner-content">
                <h2>{lang === "ru" ? "Наша миссия" : "Missiyamız"}</h2>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {lang === "ru"
                    ? "Сделать качественное IT-образование доступным и понятным для каждого: от школьника, который любит технологии, до взрослого, решившего сменить профессию."
                    : "Keyfiyyətli IT təhsilini hər kəs üçün əlçatan etmək: texnologiyanı sevən məktəblidən peşəsini dəyişmək istəyən böyüyə qədər."}
                </p>
                <Link href="/contacts" className="btn" style={{ background: "white", color: "var(--teal)", fontWeight: 800 }}>
                  {lang === "ru" ? "Начать обучение" : "Öyrənməyə başla"}
                </Link>
              </div>
              <div className="why-banner-image">
                <img src="/pics/technopolis-technology-children.jpg" alt="Trixy Academy" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
