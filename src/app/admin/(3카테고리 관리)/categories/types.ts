export type Category = {
  id: number;
  category: string;
  product: string;
  language: { key: string; label: string }[];
  country: { key: string; label: string }[];
  createdAt: string;
};
