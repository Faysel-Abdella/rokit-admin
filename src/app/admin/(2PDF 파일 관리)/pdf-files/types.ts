// types.ts
export type FileData = {
  id: number;
  fileName: string;
  category: string;
  productName: string;
  language: { key: string; label: string }[];
  country: { key: string; label: string }[];
  uploadDate: string;
  modifiedDate: string;
};
