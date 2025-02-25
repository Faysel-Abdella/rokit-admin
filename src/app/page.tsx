"use client";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const LoginPage = () => {
  // Reusable input style configuration
  const inputClassName = `w-full rounded-lg border-2 border-black bg-[#F5F5F5] px-6 py-3 outline-none
     placeholder:text-black placeholder:font-light focus:ring-2 focus:ring-black/50
     focus:border-black transition duration-200`;

  // Reusable label component
  const FormLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <label className="block text-2xl font-bold text-black mb-3">
      {children}
    </label>
  );

  // State for checkbox
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-xl bg-white p-8">
        {/* Logo Header */}
        <header className="flex justify-start items-center">
          <Image src={logo} alt="Logo" width={65} height={65} priority />
        </header>

        {/* Main Content */}
        <main>
          <h1 className="text-5xl font-semibold my-6">관리자 로그인</h1>

          <form>
            {/* ID Input Section */}
            <section className="mb-4 w-full">
              <FormLabel>아이디</FormLabel>
              <input
                type="text"
                placeholder="아이디를 입력해주세요."
                className={inputClassName}
              />
            </section>

            {/* Password Input Section */}
            <section className="mb-6">
              <FormLabel>비밀번호</FormLabel>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className={inputClassName}
              />
            </section>

            {/* Remember ID Checkbox Section */}
            <section className="mb-6">
              <label className="group inline-flex items-center gap-3 cursor-pointer select-none">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div
                    className="h-[26px] w-[26px] rounded-[4px] border-2 border-gray-300 transition-all duration-200 
          group-hover:border-gray-400
          peer-checked:border-black peer-checked:bg-black 
          peer-focus-visible:ring-2 peer-focus-visible:ring-black/20"
                  >
                    <FaCheck
                      className={`h-4 w-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              transition-opacity duration-200 ${
                isChecked ? "opacity-100" : "opacity-0"
              }`}
                    />
                  </div>
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  Remember ID
                </span>
              </label>
            </section>

            {/* Login Action Section */}
            <section className="flex w-full mt-[41px]">
              <Link href="/admin/admin-users" className="w-full" role="button">
                <button className="w-full px-2 py-3 text-bold text-2xl bg-black text-white rounded-lg">
                  로그인
                </button>
              </Link>
            </section>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
