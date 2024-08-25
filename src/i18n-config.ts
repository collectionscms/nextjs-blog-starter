export const i18n = {
  defaultLocale: "en-us",
  locales: ["en-us", "es", "ja", "pt-pt", "pt-br", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];