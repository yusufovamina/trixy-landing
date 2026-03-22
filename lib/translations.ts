export type Lang = "ru" | "az";

export const translations = {
  ru: {
    nav: {
      home: "Главная",
      courses: "Курсы",
      about: "О нас",
      reviews: "Отзывы",
      contacts: "Контакты"
    },
    common: {
      enroll: "Записаться на бесплатный пробный урок",
      trial: "Бесплатный пробный урок",
      send: "Отправить заявку",
      lang: "Язык"
    },
    brand: {
      title: "Trixy Computer Academy",
      tagline: "trixy.az - IT-образование для детей, подростков и взрослых в Баку."
    },
    contacts: {
      title: "Контакты",
      formTitle: "Форма обратной связи",
      writePython: 'Для подробностей напишите "PYTHON" в WhatsApp.'
    }
  },
  az: {
    nav: {
      home: "Ana səhifə",
      courses: "Kurslar",
      about: "Haqqımızda",
      reviews: "Rəylər",
      contacts: "Əlaqə"
    },
    common: {
      enroll: "Pulsuz sınaq dərsinə yazıl",
      trial: "Pulsuz sınaq dərs",
      send: "Müraciət göndər",
      lang: "Dil"
    },
    brand: {
      title: "Trixy Computer Academy",
      tagline: "trixy.az - Bakıda uşaqlar, yeniyetmələr və böyüklər üçün IT təhsili."
    },
    contacts: {
      title: "Əlaqə",
      formTitle: "Qeydiyyat forması",
      writePython: '"PYTHON" yazın və ətraflı məlumat alın.'
    }
  }
} as const;
