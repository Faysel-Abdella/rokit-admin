export type Email = {
  id: number;
  email: string;
  file: string;
  language: { key: string; label: string }[];
  country: { key: string; label: string }[];
  createdAt: string;
};
