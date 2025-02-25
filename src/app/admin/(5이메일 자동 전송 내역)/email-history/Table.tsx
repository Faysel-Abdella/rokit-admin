"use client";

import * as React from "react";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { ITEMS_PER_PAGE, MOCK_EMAIL_HISTORY } from "./data";
import { EmailHistory } from "./types";

export function Table() {
  // States
  const [emailHistorys] = useState<EmailHistory[]>(MOCK_EMAIL_HISTORY);

  const [currentPage, setCurrentPage] = useState(1);

  // Initialize row-specific selections for language & country
  const [rowSelections, setRowSelections] = useState<
    Record<number, { language: string; country: string }>
  >(() => {
    const initial: Record<number, { language: string; country: string }> = {};
    emailHistorys.forEach((eh) => {
      initial[eh.id] = {
        language: eh.language[0]?.label || "",
        country: eh.country[0]?.label || "",
      };
    });
    return initial;
  });

  // Calculate total pages
  const totalPages = Math.ceil(emailHistorys.length / ITEMS_PER_PAGE);

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return emailHistorys.slice(startIndex, endIndex);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  // Update language for a specific row
  const handleLanguageSelect = (id: number, language: string) => {
    setRowSelections((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        language,
      },
    }));
  };

  // Update country for a specific row
  const handleCountrySelect = (id: number, country: string) => {
    setRowSelections((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        country,
      },
    }));
  };

  // Styling classes for the select elements
  const selectClasses = `
    w-full pl-4 pr-10 py-2
    bg-[#F3F3F3] text-gray-800
    appearance-none outline-none
    rounded-sm border border-[#F3F3F3]
    text-base
    cursor-pointer
    transition-colors
  `;

  const selectWrapper = `
    relative w-full md:flex-grow bg-[#F3F3F3]
    rounded-lg h-full
  `;

  return (
    <div className="w-full my-8">
      <div className="rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#6F6F6F] text-white">
              <tr className="text-base font-bold text-center">
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  No.
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  이메일 주소
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  변경 전 파일
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  변경 후 파일
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  언어
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  국가
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  다운로드 날짜
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  전송 여부
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F1F1F1] text-center text-base font-normal text-[#141414]">
              {getCurrentPageData().map((emailHistory) => (
                <tr key={emailHistory.id} className="transition-colors ">
                  <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {emailHistory.id}
                  </td>
                  <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {emailHistory.email}
                  </td>
                  <td className="border-[1px] border-[#6F6F6F] px-4 py-2">
                    {emailHistory.file}
                  </td>
                  <td className="border-[1px] border-[#6F6F6F] px-4 py-2">
                    {emailHistory.file2}
                  </td>
                  <td className="whitespace-nowrap px-0 py-0 border-[1px] border-[#6F6F6F]">
                    <div className={selectWrapper}>
                      <select
                        value={rowSelections[emailHistory.id]?.language}
                        onChange={(e) =>
                          handleLanguageSelect(emailHistory.id, e.target.value)
                        }
                        className={selectClasses}
                      >
                        {emailHistory.language.map((language) => (
                          <option key={language.key} value={language.label}>
                            {language.label}
                          </option>
                        ))}
                      </select>
                      <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-0 py-0 border-[1px] border-[#6F6F6F]">
                    <div className={selectWrapper}>
                      <select
                        value={rowSelections[emailHistory.id]?.country}
                        onChange={(e) =>
                          handleCountrySelect(emailHistory.id, e.target.value)
                        }
                        className={selectClasses}
                      >
                        {emailHistory.country.map((country) => (
                          <option key={country.key} value={country.label}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {emailHistory.createdAt}
                  </td>
                  <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                    {emailHistory.transmit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 my-8 px-4 py-2">
          <div>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaAngleDoubleLeft className="h-[15px] w-[15px]" />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaChevronLeft className="h-[15px] w-[15px]" />
            </button>
          </div>
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
            ))}
          </div>
          <div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaChevronRight className="h-[15px] w-[15px]" />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border-[1px] border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaAngleDoubleRight className="h-[15px] w-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
