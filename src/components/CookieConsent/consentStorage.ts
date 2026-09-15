import { COOKIE_CONSENT_VERSION } from "@/legal/operator";

/** Ключ в localStorage, под которым хранится решение посетителя по cookie */
export const CONSENT_STORAGE_KEY = "contentdo.cookieConsent";

export interface ConsentRecord {
  /** Версия Политики, к которой относится решение */
  version: string;
  /** Дата и время решения (ISO 8601) */
  timestamp: string;
  /** Технически необходимые cookie — всегда разрешены */
  necessary: true;
  /** Яндекс Метрика (включая Вебвизор) */
  analytics: boolean;
}

const METRIKA_PREFIX = "_ym";

function getLocalStorage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage;
  } catch {
    // Storage may throw in private mode or when site data is blocked
    return null;
  }
}

function isConsentRecord(value: unknown): value is ConsentRecord {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.version === "string" &&
    typeof record.timestamp === "string" &&
    typeof record.analytics === "boolean"
  );
}

/**
 * Возвращает сохранённое решение или null, если решения нет, запись
 * повреждена или относится к устаревшей версии Политики.
 */
export function readConsent(): ConsentRecord | null {
  const storage = getLocalStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isConsentRecord(parsed)) return null;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = {
    version: COOKIE_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    necessary: true,
    analytics,
  };
  try {
    getLocalStorage()?.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Non-fatal: consent lives in memory for this session only
  }
  return record;
}

export function clearConsent(): void {
  try {
    getLocalStorage()?.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
}

/**
 * Удаляет cookie и записи в хранилище браузера, созданные Яндекс Метрикой
 * на домене сайта. Cookie на доменах yandex.ru удалить отсюда невозможно.
 */
export function purgeMetrikaData(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  try {
    const names = document.cookie
      .split(";")
      .map((part) => part.trim().split("=")[0])
      .filter((name) => name.startsWith(METRIKA_PREFIX));

    const host = window.location.hostname;
    const hostParts = host.split(".");
    const domains: Array<string | null> = [null, host, `.${host}`];
    if (hostParts.length > 2) {
      const root = hostParts.slice(-2).join(".");
      domains.push(root, `.${root}`);
    }

    const expiry = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    for (const name of names) {
      for (const domain of domains) {
        document.cookie = `${name}=; ${expiry}${domain ? `; domain=${domain}` : ""}`;
      }
    }
  } catch {
    // ignore
  }

  const stores: Array<() => Storage> = [
    () => window.localStorage,
    () => window.sessionStorage,
  ];
  for (const getStore of stores) {
    try {
      const store = getStore();
      const keys: string[] = [];
      for (let i = 0; i < store.length; i += 1) {
        const key = store.key(i);
        if (key && key.startsWith(METRIKA_PREFIX)) keys.push(key);
      }
      keys.forEach((key) => store.removeItem(key));
    } catch {
      // ignore
    }
  }
}
