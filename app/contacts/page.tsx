"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const contactItems = [
  { icon: "📍", label: { ru: "Адрес", az: "Ünvan" }, value: "Həsən Bəy Zərdabi 99 (Qələbə Residence), Bakı — Yasamal rayonu" },
  { icon: "📞", label: { ru: "Телефон", az: "Telefon" }, value: "+994 10 527 7007" },
  { icon: "💬", label: { ru: "WhatsApp ", az: "WhatsApp" }, value: "+994 10 527 7007" },
  { icon: "🕐", label: { ru: "Часы работы", az: "İş saatları" }, value: { ru: "Пн – Сб: 09:00 – 20:00", az: "B.e – Ş: 10:00 – 19:00" } },
];

export default function ContactsPage() {
  const { lang } = useLanguage();

  return (
    <main>
      {/* PAGE HERO */}
      <Reveal>
        <section className="section" style={{ background: "var(--mint)", paddingBottom: "3rem" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h1 style={{ color: "var(--teal)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>
              {lang === "ru" ? "Связаться с нами" : "Bizimlə əlaqə"}
            </h1>
            <p style={{ maxWidth: "500px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              {lang === "ru"
                ? "Мы в Баку — приходите лично или напишите в WhatsApp для быстрого ответа."
                : "Biz Bakıdayıq — şəxsən gəlin və ya sürətli cavab üçün WhatsApp-a yazın."}
            </p>
          </div>
        </section>
      </Reveal>

      {/* CONTACTS + FORM */}
      <Reveal>
        <section className="section section-alt">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>

              {/* Left: contact details */}
              <div>
                <h2 style={{ color: "var(--teal)", fontWeight: 800, marginBottom: "1.5rem" }}>
                  {lang === "ru" ? "Наши контакты" : "Əlaqə məlumatları"}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {contactItems.map((item) => (
                    <div key={item.label.ru} style={{
                      display: "flex", gap: "1rem", alignItems: "flex-start",
                      background: "var(--white)", border: "1.5px solid var(--border)",
                      borderRadius: "14px", padding: "1rem 1.2rem",
                      boxShadow: "0 2px 10px rgba(0,90,79,0.05)"
                    }}>
                      <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--teal)", fontSize: "0.85rem", marginBottom: "0.2rem" }}>
                          {item.label[lang as "ru" | "az"] ?? item.label.ru}
                        </div>
                        <div style={{ color: "var(--text-dark)", lineHeight: 1.5 }}>
                          {typeof item.value === "string"
                            ? item.value
                            : item.value[lang as "ru" | "az"] ?? item.value.ru}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div style={{ marginTop: "1.8rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>

                  <a
                    href="https://wa.me/994105277007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: "0.9rem", padding: "0.5rem 1.2rem" }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/trixy.az"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ color: "var(--teal)", borderColor: "var(--teal)", fontSize: "0.9rem", padding: "0.5rem 1.2rem" }}
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Right: Quick CTA */}
              <div>
                <h2 style={{ color: "var(--teal)", fontWeight: 800, marginBottom: "1.5rem" }}>
                  {lang === "ru" ? "Записаться на пробный урок" : "Sınaq dərsinə yazılın"}
                </h2>
                <div style={{
                  background: "var(--white)", border: "1.5px solid var(--border)",
                  borderRadius: "20px", padding: "2rem",
                  boxShadow: "0 4px 20px rgba(0,90,79,0.07)"
                }}>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {lang === "ru"
                      ? "Напишите нам в WhatsApp — ответим за 5 минут и подберём удобное время для пробного урока."
                      : "Bizə WhatsApp-da yazın — 5 dəqiqəyə cavab verəcəyik və sınaq dərsi üçün rahat vaxt seçəcəyik."}
                  </p>
                  <a
                    href="https://wa.me/994105277007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem" }}
                  >
                    💬 {lang === "ru" ? "Написать в WhatsApp" : "WhatsApp-a yazın"}
                  </a>
                  <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                    <p style={{ margin: 0, fontWeight: 700, color: "var(--teal)", marginBottom: "0.3rem" }}>
                      📞 +994 10 527 7007
                    </p>
                    <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      {lang === "ru" ? "Пн – Сб: 10:00 – 19:00" : "B.e – Ş: 10:00 – 19:00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* GOOGLE MAPS */}
      <Reveal>
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              {lang === "ru" ? "Мы на карте" : "Xəritədə biz"}
            </h2>
            <span className="section-underline" />
            <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "2rem" }}>
              {lang === "ru"
                ? "Həsən Bəy Zərdabi 99, Qələbə Residence — Yasamal, Bakı"
                : "Həsən Bəy Zərdabi 99, Qələbə Residence — Yasamal, Bakı"}
            </p>
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,90,79,0.12)", border: "2px solid var(--border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.4826765272064!2d49.805603067999854!3d40.38746049093245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dd70aff2b07%3A0xf12ae6410db2b164!2zUcmZbMmZYsmZIFJlc2lkZW5jZQ!5e0!3m2!1sru!2saz!4v1774208833467!5m2!1sru!2saz"
                width="100%"
                height="440"
                style={{ border: "none", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trixy Academy on Google Maps"
              />
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
