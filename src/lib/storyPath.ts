import type { Lang } from "../types";

/** FR story pages live at /story/<id>; Creole pages at /ht/story/<id>. */
export const storyPath = (id: string, lang: Lang) => (lang === "ht" ? `/ht/story/${id}` : `/story/${id}`);
