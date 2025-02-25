// mock-data.ts
import type { EmailHistory } from "./types";

export const ITEMS_PER_PAGE = 4;

export const MOCK_EMAIL_HISTORY: EmailHistory[] = Array.from(
  { length: 12 },
  (_, index) => {
    const id = index + 1;

    return {
      id,
      email: "aaa@a***.com",
      file: "Asd.ddd.ver2025",
      file2: "Asd.ddd.ver2026",
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
      transmit: "성공",
    };
  }
);
