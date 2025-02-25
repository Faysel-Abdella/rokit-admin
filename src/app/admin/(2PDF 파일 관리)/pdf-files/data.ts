// mock-data.ts
import type { FileData } from "./types";

export const ITEMS_PER_PAGE = 4;

export const MOCK_FILE: FileData[] = Array.from({ length: 12 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    fileName: "abc.2025 (구버전)",
    category: "Skin",
    productName: "Kit",
    language: [
      { key: "korean", label: "Korean" },
      { key: "italian", label: "Italian" },
      { key: "danish", label: "Danish" },
      { key: "english", label: "English" },
      { key: "german", label: "German" },
    ],
    country: [
      { key: "korean", label: "Korean" },
      { key: "italian", label: "Italian" },
      { key: "danish", label: "Danish" },
      { key: "english", label: "English" },
      { key: "german", label: "German" },
    ],
    uploadDate: "25.01.01. 13:11",
    modifiedDate: "25.01.01. 13:11",
  };
});
