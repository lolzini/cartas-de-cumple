import { defaultLanguage, languages, type Language } from "./config";

export function getLanguageFromURL(pathname: string): Language {
  const [, lang] = pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLanguage;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split(".");
    const translations = import.meta.glob("./translations/*.json", {
      eager: true,
    });
    const langData = translations[`./translations/${lang}.json`] as Record<
      string,
      any
    >;

    let value = langData;
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };
}

export function getLocalizedPathname(pathname: string, lang: Language) {
  const segments = pathname.split("/");
  if (segments[1] in languages) {
    segments[1] = lang;
  } else {
    segments.splice(1, 0, lang);
  }
  return segments.join("/");
}