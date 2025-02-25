export type EmailHistory = {
  id: number;
  email: string;
  file: string;
  file2: string;
  language: { key: string; label: string }[];
  country: { key: string; label: string }[];
  createdAt: string;
  transmit: string;
};
