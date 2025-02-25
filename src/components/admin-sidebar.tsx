"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import type { IconType } from "react-icons";

import Email from "@/assets/nav-icons/email.svg";
import Category from "@/assets/nav-icons/category.svg";
import EmailHistory from "@/assets/nav-icons/email-history.svg";
import Pdf from "@/assets/nav-icons/pdf.svg";
import User from "@/assets/nav-icons/user.svg";
import AdminLog from "@/assets/nav-icons/adminlog.svg";
import Home from "@/assets/nav-icons/home.svg";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/sidebarlogo.svg";
import Image from "next/image";

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onPageChange: (page: string) => void;
}

interface MenuItem {
  id: string;
  icon: string;
  title: string;
  href: string;
  home?: IconType;
}

const menuItems: MenuItem[] = [
  {
    id: "home",
    icon: Home,
    title: "홈",
    href: "/admin/home",
  },
  {
    id: "admin-users",
    icon: User,
    title: "관리자 계정 관리",
    href: "/admin/admin-users",
  },
  {
    id: "pdf-files",
    icon: Pdf,
    title: "PDF 파일 관리",
    href: "/admin/pdf-files",
  },
  {
    id: "categories",
    icon: Category,
    title: "카테고리 관리",
    href: "/admin/categories",
  },
  {
    id: "admin-emails",
    icon: Email,
    title: "수집된 이메일 정보",
    href: "/admin/emails",
  },
  {
    id: "emails",
    icon: EmailHistory,
    title: "이메일 자동 전송 내역",
    href: "/admin/email-history",
  },
  {
    id: "active-logs",
    icon: AdminLog,
    title: "관리자 활동로그",
    href: "/admin/active-logs",
  },
];

export function AdminSidebar({
  isOpen,
  onToggle,
  onPageChange,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed h-[87%] w-[380px] bg-[#1a1a1a] transition-transform duration-800 ease-in-out ${
        !isOpen ? "-translate-x-full" : ""
      }`}
    >
      <div className="flex items-center justify-start mb-6 h-16 bg-[#3F3F3F] w-full px-5 text-white">
        <button onClick={onToggle} aria-label="Toggle sidebar">
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex h-full flex-col">
        <div className="flex-1 bg-[#1a1a1a] space-y-2 p-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => onPageChange(item.title)}
                className={`flex items-center gap-3 rounded-md px-6 py-4 text-base font-bold ${
                  isActive
                    ? "text-mainOrange"
                    : "text-gray-300 hover:text-mainOrange"
                }`}
              >
                <div className="flex gap-10">
                  <Image alt="" src={item.icon} height={25} width={25} />
                  <div className="relative">
                    {isActive && (
                      <span className="absolute -left-3 bg-mainOrange h-5 w-[3px] top-1/2 -translate-y-1/2"></span>
                    )}
                    {item.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="p-2 bg-[#1a1a1a] ">
          <button className="w-full flex justify-center items-center py-2">
            <Image alt="" src={logo} height={20} />
          </button>
        </div>
      </nav>
    </aside>
  );
}
