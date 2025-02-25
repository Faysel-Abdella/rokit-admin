"use client";
import React, { useState, useCallback } from "react";
import { AdminSidebar } from "./admin-sidebar";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "@heroui/button";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("관리자 계정 관리");

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handlePageChange = useCallback((page: string) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#141414] text-white">
      {/* Sidebar */}
      <div className="relative">
        <AdminSidebar
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
          onPageChange={handlePageChange}
        />

        {/* Show arrow button only when sidebar is hidden */}
        {!isSidebarOpen && (
          <Button
            variant="ghost"
            onClick={() => setIsSidebarOpen(true)}
            className="fixed flex justify-center items-center left-0 top-3 w-10 h-10 z-50 text-white bg-[#3F3F3F]  rounded-lg "
            aria-label="Show sidebar"
          >
            <FaChevronRight className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-200 bg-[#141414] ${
          isSidebarOpen ? "ml-[380px]" : "ml-3"
        }`}
      >
        <div className="bg-[#141414] ml-12 py-6">
          <nav className="flex items-center gap-2 text-lg">
            <span>홈</span>
            <span>&gt;</span>
            <span>{currentPage}</span>
          </nav>
        </div>
        <main className=" bg-[#141414] max-w-[1300px]">{children}</main>
      </div>
    </div>
  );
}
