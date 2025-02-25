"use client";

import * as React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { MOCK_ADMIN, ITEMS_PER_PAGE } from "./data";
import type { Admin } from "./types";

export function Table() {
  // States
  const [admins] = React.useState<Admin[]>(MOCK_ADMIN);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(
    new Set()
  );
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(admins.length / ITEMS_PER_PAGE);

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return admins.slice(startIndex, endIndex);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <div className="w-full my-8">
      <div className="rounded-lg shadow-sm">
        <div className="w-full overflow-x-auto">
          <table className="min-w-max divide-y divide-gray-200">
            <thead className="bg-[#6F6F6F] text-white">
              <tr className="text-base font-bold text-center">
                {/* Add fixed width to each header */}
                <th className="w-[80px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  No.
                </th>
                <th className="w-[100px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  관리자명
                </th>
                <th className="w-[120px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  로그인 시간
                </th>
                <th className="w-[120px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  로그아웃 시간
                </th>
                <th className="w-[100px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  PDF 등록
                </th>
                <th className="w-[100px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  PDF 변경
                </th>
                <th className="w-[100px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  PDF 삭제
                </th>
                <th className="w-[120px] px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  로그다운로드
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F1F1F1] text-center text-base font-normal text-[#141414]">
              {getCurrentPageData().map((admin) => (
                <tr key={admin.id} className="...">
                  {/* Add matching widths to table cells */}
                  <td className="w-[100px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.id}
                  </td>
                  <td className="w-[100px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.name}
                  </td>
                  <td className="w-[150px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.loginTime}
                  </td>
                  <td className="w-[150px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.logoutTime}
                  </td>
                  <td className="w-[100px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.pdfRegister}
                  </td>
                  <td className="w-[100px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.pdfChange}
                  </td>
                  <td className="w-[100px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.pdfDelete}
                  </td>
                  <td className="w-[120px] whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {admin.download}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-6 my-8 px-4 py-2">
          <div>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className=" px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaAngleDoubleLeft className="h-[15px] w-[15px]" />
            </button>
            {/* Previous Page */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className=" px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaChevronLeft className="h-[15px] w-[15px]" />
            </button>
          </div>
          <div>
            <div>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-[6px] border-[1px] border-[#6F6F6F] text-sm font-bold ${
                      currentPage === page
                        ? "bg-[#EE8000] text-white"
                        : "bg-[#E0E0E0] text-black"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
          <div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className=" px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaChevronRight className="h-[15px] w-[15px]" />
            </button>

            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className=" px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaAngleDoubleRight className="h-[15px] w-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
