import { useLearner } from "@/lib/store";

/** The browser's / OS "Save data" hint (Android Chrome Lite mode, metered connections). */
export function browserSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return Boolean(c?.saveData);
}

/**
 * Data saver: the learner's choice in Settings, else the browser's hint. When on, lesson
 * videos load only on tap, the voice model (~90 MB) is never preloaded, and media stays light.
 */
export function dataSaverOn(): boolean {
  const v = useLearner.getState().settings.dataSaver;
  return v ?? browserSaveData();
}

/** Hook form (false until the store has hydrated, so server and first client render agree). */
export function useDataSaver(hydrated: boolean): boolean {
  const v = useLearner((s) => s.settings.dataSaver);
  return hydrated ? (v ?? browserSaveData()) : false;
}
