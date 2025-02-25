"use client";
import React from "react";
import Image from "next/image";
import img from "@/assets/headericon.svg";
import { Button } from "@heroui/react";

const Header = () => {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src={img} alt="Header Icon" />
        <div className=" font-bold">엑셀 다운로드</div>
      </div>

      <div className="flex items-center font-bold gap-5 text-black">
        <Button className="bg-white rounded-sm font-bold  w-[84px]">
          추가
        </Button>
        <Button className="bg-white w-[84px] font-bold rounded-sm ">
          삭제
        </Button>
        <Button className="bg-mainOrange rounded-sm font-bold w-[84px] ">
          저장
        </Button>
      </div>
    </div>
  );
};

export default Header;
