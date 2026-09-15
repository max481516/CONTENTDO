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
