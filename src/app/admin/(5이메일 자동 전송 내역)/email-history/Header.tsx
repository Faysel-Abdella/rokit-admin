"use client";
import img from "@/assets/headericon.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src={img} alt="Header Icon" />
        <div className=" font-bold">엑셀 다운로드</div>
      </div>
    </div>
  );
};

export default Header;
