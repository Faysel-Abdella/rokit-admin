"use client";

import * as React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { MOCK_USERS, ITEMS_PER_PAGE } from "./data";
import type { User } from "./types";

export function Table() {
  // States
  const [users] = React.useState<User[]>(MOCK_USERS);
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(
    new Set()
  );
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return users.slice(startIndex, endIndex);
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

  return (
    <div className="w-full my-8">
      <div className="rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#6F6F6F] text-white">
              <tr className="text-base font-bold text-center">
                <th
                  scope="col"
                  className=" border-t border-l border-r border-[#FFFFFF] px-4 py-3"
                >
                  <p>check</p>
                </th>
                <th
                  scope="col"
                  className="px-4  border-t border-l border-r border-[#FFFFFF] py-3"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="px-4  border-t border-l border-r border-[#FFFFFF] py-3   "
                >
                  관리자 이름
                </th>
                <th
                  scope="col"
                  className="px-4  border-t border-l border-r border-[#FFFFFF] py-3"
                >
                  부서명
                </th>
                <th
                  scope="col"
                  className="px-4 border-t border-l border-r border-[#FFFFFF] py-3"
                >
                  패스워드
                </th>
                <th
                  scope="col"
                  className="px-4  border-t border-l border-r border-[#FFFFFF] py-3"
                >
                  생성날짜
                </th>
                <th
                  scope="col"
                  className="px-4  border-t border-l border-r border-[#FFFFFF] py-3"
                >
                  수정날짜
                </th>
                <th
                  scope="col"
                  className="px-4  border-t border-l border-r border-[#FFFFFF] py-3  "
                >
                  패스워드 변경
                </th>
              </tr>
            </thead>
            <tbody className=" bg-[#F1F1F1] text-center text-base font-normal text-[#141414]">
              {getCurrentPageData().map((user) => {
                const isSelected = selectedRows.has(user.id);

                return (
                  <tr
                    key={user.id}
                    className={`${
                      isSelected
                        ? "bg-[#E0E0E0] font-medium"
                        : "bg-[#F1F1F1] hover:bg-[#E0E0E0]"
                    } transition-colors`}
                  >
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F]  px-4 py-3">
                      <input
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer  rounded border-gray-300 accent-[#6F6F6F]"
                        checked={isSelected}
                        onChange={() => toggleRowSelection(user.id)}
                      />
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                      {user.id}
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                      {user.department}
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                      {user.password}
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                      {user.createdAt}
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] px-4 py-2">
                      {user.updatedAt}
                    </td>
                    <td className="whitespace-nowrap border-[1px] border-[#6F6F6F] ">
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
