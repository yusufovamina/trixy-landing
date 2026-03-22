"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { courses, reviews } from "@/lib/siteData";

export default function CourseDetailsPage() {
  const { lang } = useLanguage();
  const params = useParams<{ slug: string }>();
  const course = courses.find((item) => item.slug === params.slug);
  if (!course) notFound();

  return (
    <main>
      <Reveal>
        {/* SECTION: Course Hero */}
        <section className="section glass" style={{ padding: "1.1rem" }}>
          <h1>{lang === "ru" ? course.title : course.titleAz}</h1>
          <p>{lang === "ru" ? course.audience : course.audienceAz}</p>
          <p>
            {lang === "ru"
              ? "Формат: 3 месяца, от нуля до готового проекта и сертификата"
              : "Format: 3 ay, sıfırdan hazır layihəyə və sertifikata"}
          </p>
          <p>
            Цена: <span style={{ textDecoration: "line-through" }}>{course.oldPrice}</span>{" "}
            <strong style={{ color: "#d3e05a", fontSize: "1.2rem" }}>{course.newPrice}</strong>
          </p>
          <p style={{ color: "#d3e05a", fontWeight: 700 }}>
            {lang === "ru"
              ? 'Для подробностей напишите "PYTHON" в WhatsApp: 010 527 7007'
              : '"PYTHON" yazın, WhatsApp: 010 527 7007'}
          </p>
          <Image
            src={course.image}
            alt={`Баннер курса ${course.title}`}
            width={1200}
            height={640}
            style={{ width: "100%", height: "auto", borderRadius: "14px", marginTop: "0.7rem" }}
          />
        </section>
      </Reveal>

      <Reveal>
        {/* SECTION: What included */}
        <section className="section">
          <h2>{lang === "ru" ? "Что входит в курс" : "Kursa nə daxildir"}</h2>
          <div className="card-grid c3">
            {(lang === "ru"
              ? [
                  "Уверенный Python: синтаксис, ООП, структуры данных",
                  "Реальный Backend + Frontend с практикой",
                  "Готовый проект + сертификат по окончании"
                ]
              : [
                  "Güvənli Python: sintaksis, OOP, data strukturları",
                  "Real Backend + Frontend praktika ilə",
                  "Kurs sonu hazır layihə + rəsmi sertifikat"
                ]
            ).map((item) => (
              <article key={item} className="glass" style={{ padding: "0.9rem" }}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* SECTION: Program */}
        <section className="section">
          <h2>{lang === "ru" ? "Программа обучения" : "Tədris proqramı"}</h2>
          {(lang === "ru"
            ? [
                ["Модуль 1", "Python с нуля: переменные, функции, ООП и уверенная база"],
                ["Модуль 2", "Backend + Frontend: API, формы, интеграции, структура проекта"],
                ["Модуль 3", "Финальный проект, упаковка в портфолио и защита"]
              ]
            : [
                ["Modul 1", "Python sıfırdan: dəyişənlər, funksiyalar, OOP və güclü baza"],
                ["Modul 2", "Backend + Frontend: API, formalar, inteqrasiyalar, layihə strukturu"],
                ["Modul 3", "Final layihə, portfolio təqdimatı və müdafiə"]
              ]
          ).map(([title, content]) => (
            <details key={title} className="glass" style={{ padding: "0.8rem", marginBottom: "0.5rem" }}>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>{title}</summary>
              <p>{content}</p>
            </details>
          ))}
        </section>
      </Reveal>

      <Reveal>
        {/* SECTION: Teacher */}
        <section className="section glass" style={{ padding: "1rem" }}>
          <h2>{lang === "ru" ? "Преподаватель" : "Müəllim"}</h2>
          <p>
            {lang === "ru"
              ? "Анна Смирнова - Senior Developer, 8+ лет в продуктовой разработке, 300+ студентов, которые уже применяют навыки в реальных проектах."
              : "Anna Smirnova - Senior Developer, 8+ il təcrübə, 300+ tələbə ilə real layihə nəticələri."}
          </p>
        </section>
      </Reveal>

     

      <Reveal>
        {/* SECTION: Enroll form */}
        <section className="section">
          <h2>{lang === "ru" ? "Записаться на курс" : "Kursa qeydiyyat"}</h2>
          <ContactForm />
        </section>
      </Reveal>
    </main>
  );
}
