// mock-data.ts
import type { Category } from "./types";

export const ITEMS_PER_PAGE = 4;

export const MOCK_CATEGORY: Category[] = Array.from(
  { length: 12 },
  (_, index) => {
    const id = index + 1;

    return {
      id,
      category: "Skin",
      product: "Kit",
      language: [
        { key: "korean", label: "Korean" },
        { key: "italian", label: "Italian" },
        { key: "danish", label: "Danish" },
        { key: "english", label: "English" },
        { key: "german", label: "German" },
      ],
      country: [
        { key: "korea", label: "Korea" },
        { key: "italy", label: "Italy" },
        { key: "denmark", label: "Denmark" },
        { key: "england", label: "England" },
        { key: "germany", label: "Germany" },
      ],
      createdAt: "25.01.01. 13:11",
    };
  }
);
