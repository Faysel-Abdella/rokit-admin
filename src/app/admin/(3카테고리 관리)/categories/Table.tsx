"use client";

import * as React from "react";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { ITEMS_PER_PAGE, MOCK_CATEGORY } from "./data";
import type { Category } from "./types";
import { HiChevronDown } from "react-icons/hi";

export function Table() {
  // Use MOCK_CATEGORY as our data source
  const [categories] = useState<Category[]>(MOCK_CATEGORY);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // Initialize a state to store selections for each row (language & country)
  const [rowSelections, setRowSelections] = useState<
    Record<number, { language: string; country: string }>
  >(() => {
    const initialSelections: Record<
      number,
      { language: string; country: string }
    > = {};
    categories.forEach((cat) => {
      initialSelections[cat.id] = {
        language: cat.language[0]?.label || "",
        country: cat.country[0]?.label || "",
      };
    });
    return initialSelections;
  });

  // Calculate total pages
  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return categories.slice(startIndex, endIndex);
  };

  // Handle row selection
  const toggleRowSelection = (id: number) => {
    const newSelected = new Set(selectedRows);
    if (selectedRows.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  // Update the language selection for a specific row
  const handleLanguageSelect = (id: number, language: string) => {
    setRowSelections((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        language,
      },
    }));
  };

  // Update the country selection for a specific row
  const handleCountrySelect = (id: number, country: string) => {
    setRowSelections((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        country,
      },
    }));
  };

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
                <th className="border-t border-l border-r border-[#FFFFFF] px-4 py-3">
                  check
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  No.
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  대분류
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  제품명
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  언어
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  국가
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  카테고리 생성 날짜
                </th>
                <th className="px-4 border-t border-l border-r border-[#FFFFFF] py-3">
                  카테고리 수정
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F1F1F1] text-center text-base font-normal text-[#141414]">
              {getCurrentPageData().map((category) => {
                const isSelected = selectedRows.has(category.id);

                return (
                  <tr
                    key={category.id}
                    className={`${
                      isSelected ? "bg-[#E0E0E0] font-medium" : "bg-[#F1F1F1] "
                    } transition-colors`}
                  >
                    <td className="whitespace-nowrap border border-[#6F6F6F] px-4 py-3">
                      <input
                        type="checkbox"
                        className="h-5 cursor-pointer w-5 rounded border-gray-300 accent-[#6F6F6F]"
                        checked={isSelected}
                        onChange={() => toggleRowSelection(category.id)}
                      />
                    </td>
                    <td className="whitespace-nowrap border border-[#6F6F6F] px-4 py-2">
                      {category.id}
                    </td>
                    <td className="border border-[#6F6F6F] px-4 py-2">
                      {category.category}
                    </td>
                    <td className="border border-[#6F6F6F] px-4 py-2">
                      {category.product}
                    </td>
                    <td className="whitespace-nowrap px-0 py-0 border border-[#6F6F6F]">
                      <div className={selectWrapper}>
                        <select
                          value={rowSelections[category.id]?.language}
                          onChange={(e) =>
                            handleLanguageSelect(category.id, e.target.value)
                          }
                          className={selectClasses}
                        >
                          {category.language.map((language) => (
                            <option key={language.key} value={language.label}>
                              {language.label}
                            </option>
                          ))}
                        </select>
                        <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-0 py-0 border border-[#6F6F6F]">
                      <div className={selectWrapper}>
                        <select
                          value={rowSelections[category.id]?.country}
                          onChange={(e) =>
                            handleCountrySelect(category.id, e.target.value)
                          }
                          className={selectClasses}
                        >
                          {category.country.map((country) => (
                            <option key={country.key} value={country.label}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                        <HiChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border border-[#6F6F6F] px-4 py-2">
                      {category.createdAt}
                    </td>
                    <td className="whitespace-nowrap border border-[#6F6F6F]">
                      <button className="rounded bg-[#141414] w-[70%] py-2 text-base font-semibold text-white transition-colors hover:bg-gray-800">
                        수정
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 my-8 px-4 py-2">
          <div>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaAngleDoubleLeft className="h-[15px] w-[15px]" />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaChevronLeft className="h-[15px] w-[15px]" />
            </button>
          </div>
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 border border-[#6F6F6F] text-sm font-bold ${
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
              className="px-3 py-2 border border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaChevronRight className="h-[15px] w-[15px]" />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-[#6F6F6F] bg-[#E0E0E0] text-black disabled:opacity-50"
            >
              <FaAngleDoubleRight className="h-[15px] w-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
