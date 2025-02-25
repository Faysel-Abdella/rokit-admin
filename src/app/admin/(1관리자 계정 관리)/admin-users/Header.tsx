"use client";
import React from "react";
import Image from "next/image";
import img from "@/assets/headericon.svg";

const Header = () => {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src={img} alt="Header Icon" />
        <div className=" font-bold">엑셀 다운로드</div>
      </div>

      <div className="flex items-center font-bold gap-5 text-black">
        <button className="bg-white rounded-sm font-bold w-[84px] py-2">
          추가
        </button>
        <button className="bg-white w-[84px] font-bold rounded-sm py-2">
          삭제
        </button>
        <button className="bg-mainOrange rounded-sm font-bold w-[84px] py-2 ">
          저장
        </button>
      </div>
    </div>
  );
};

export default Header;
