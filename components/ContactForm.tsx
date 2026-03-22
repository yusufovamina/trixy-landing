"use client";

import { useLanguage, useT } from "@/components/LanguageProvider";

export function ContactForm() {
  const { lang } = useLanguage();
  const t = useT();

  return (
    <form className="glass-form" style={{ padding: "2rem" }}>
      <label>
        {lang === "ru" ? "Имя" : "Ad"}
        <input type="text" name="name" placeholder="Как к вам обращаться?" required />
      </label>
      <label>
        {lang === "ru" ? "Телефон / WhatsApp" : "Telefon / WhatsApp"}
        <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
      </label>
      <label>
        {lang === "ru" ? "Email (опционально)" : "Email (istəyə bağlı)"}
        <input type="email" name="email" placeholder="name@example.com" />
      </label>
      <label>
        {lang === "ru" ? "Сообщение" : "Mesaj"}
        <textarea
          name="message"
          rows={4}
          placeholder={
            lang === "ru"
              ? 'Напишите "PYTHON" для подробностей или задайте вопрос'
              : '"PYTHON" yazın və sualınızı göndərin'
          }
          required
        />
      </label>
      <button className="btn btn-primary" style={{ marginTop: "0.9rem", width: "100%" }}>
        {t.common.send}
      </button>
    </form>
  );
}
