/**
 * Реквизиты оператора персональных данных и версии правовых документов.
 *
 * Единственное место, где хранятся данные о юридическом лице / ИП.
 * Значения в {{двойных фигурных скобках}} — заглушки: замените их реальными
 * реквизитами до публикации сайта.
 */
export const OPERATOR = {
  /** Полное наименование: ООО «…» либо ИП Фамилия Имя Отчество */
  name: "{{OPERATOR_NAME}}",
  inn: "{{INN}}",
  /** ОГРН для юридического лица или ОГРНИП для индивидуального предпринимателя */
  ogrn: "{{OGRN}}",
  /** Адрес места нахождения (юридический адрес) */
  address: "{{ADDRESS}}",
  /** Электронная почта для обращений субъектов персональных данных */
  email: "{{EMAIL}}",
  siteName: "CONTENTDO",
  siteUrl: "https://contentdo.ru",
} as const;

export const LEGAL_DOCS = {
  privacy: {
    path: "/privacy",
    title: "Политика конфиденциальности",
    fullTitle: "Политика в отношении обработки персональных данных",
    version: "1.0",
    /** Дата редакции в формате YYYY-MM-DD */
    updatedAt: "2026-09-15",
  },
  consent: {
    path: "/consent",
    title: "Согласие на обработку персональных данных",
    fullTitle: "Согласие на обработку персональных данных",
    version: "1.0",
    updatedAt: "2026-09-15",
  },
} as const;

/**
 * Версия согласия на cookie. Совпадает с версией Политики: при изменении
 * раздела о cookie / аналитике поднимите версию Политики — баннер будет
 * показан всем посетителям заново, а Яндекс Метрика не загрузится до нового
 * согласия.
 */
export const COOKIE_CONSENT_VERSION: string = LEGAL_DOCS.privacy.version;

const RU_MONTHS_GENITIVE = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

/** "2026-09-15" → "15 сентября 2026 г." */
export function formatLegalDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day || month < 1 || month > 12) return isoDate;
  return `${day} ${RU_MONTHS_GENITIVE[month - 1]} ${year} г.`;
}

/**
 * Формы «Связаться с нами» и «Заказать проект» отправляют данные в Netlify
 * Forms и Firebase (США). С 1 июля 2025 г. первичный сбор персональных данных
 * граждан РФ в иностранных базах данных запрещён (152-ФЗ, ст. 18 ч. 5),
 * поэтому формы отключены до переноса бэкенда в Россию. Вместо них модальное
 * окно показывает контакты из CONTACTS. Флаг также управляет текстом
 * Политики, страницей /consent, её ссылкой в подвале и sitemap.
 */
export const FORMS_ENABLED: boolean = false;

/** Контакты, которые показываются вместо форм, пока FORMS_ENABLED = false */
export const CONTACTS = {
  /** В международном формате, например «+7 900 000-00-00» */
  phone: "{{PHONE}}",
  email: OPERATOR.email,
  /** Имя пользователя Telegram без @ */
  telegram: "{{TELEGRAM}}",
} as const;

/** "+7 (900) 000-00-00" → "tel:+79000000000" */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
