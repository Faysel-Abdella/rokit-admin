import { User } from "./types";

export const ITEMS_PER_PAGE = 4; // Changed to 4 records per page

export const MOCK_USERS: User[] = Array.from({ length: 12 }, (_, index) => {
  const id = index + 1;
  const names = [
    "김xx",
    "이xx",
    "박xx",
    "최xx",
    "정xx",
    "강xx",
    "조xx",
    "윤xx",
  ];
  return {
    id,
    name: names[index % names.length],
    department: index % 2 === 0 ? "HR" : "QA",
    password: "****",
    createdAt: "25.01.01. 13:11",
    updatedAt: "25.01.01. 13:11",
  };
});
