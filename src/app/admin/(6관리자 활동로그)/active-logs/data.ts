// mock-data.ts
import type { Admin } from "./types";

export const ITEMS_PER_PAGE = 4;

export const MOCK_ADMIN: Admin[] = Array.from({ length: 12 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    name: "박**",
    loginTime: "25.01.01. 13:11",
    logoutTime: "25.01.01. 13:11",
    pdfRegister: `2025-02-11 14:03
     Asd.asd.20205 업로드`,
    pdfChange: `2025-02-11 14:03
     Asd.asd.20205 변경`,
    pdfDelete: `2025-02-11 14:03 
    Asd.asd.20205 삭제`,
    download: `2025-02-11 14:03 
    이메일전송내역 엑셀 다운로드`,
  };
});
