/** Languages Quest Academy speaks. English is the source; the rest are machine-translated and under review. */
export type Locale = "en" | "hi" | "kn" | "ta" | "te" | "mr" | "bn";

export interface LocaleInfo {
  id: Locale;
  /** Name in its own script. */
  native: string;
  /** Name in English. */
  english: string;
  /** BCP-47 tag for <html lang>, Intl and speech synthesis. */
  bcp47: string;
  /** Kokoro voice for Questy when one exists; otherwise the device voice is used. */
  kokoroVoice?: string;
}

export const LOCALES: LocaleInfo[] = [
  { id: "en", native: "English", english: "English", bcp47: "en-IN", kokoroVoice: "af_heart" },
  { id: "hi", native: "हिन्दी", english: "Hindi", bcp47: "hi-IN", kokoroVoice: "hf_alpha" },
  { id: "kn", native: "ಕನ್ನಡ", english: "Kannada", bcp47: "kn-IN" },
  { id: "ta", native: "தமிழ்", english: "Tamil", bcp47: "ta-IN" },
  { id: "te", native: "తెలుగు", english: "Telugu", bcp47: "te-IN" },
  { id: "mr", native: "मराठी", english: "Marathi", bcp47: "mr-IN" },
  { id: "bn", native: "বাংলা", english: "Bengali", bcp47: "bn-IN" },
];

export const localeInfo = (id: Locale | undefined) => LOCALES.find((l) => l.id === id) ?? LOCALES[0];
