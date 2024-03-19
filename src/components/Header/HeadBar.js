"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.jpg";
export default function HeadBar() {
  return (
    <div className="w-full bg-white text-[#0B1F41] border-b-white fixed top-0 left-0">
      <div className="pr-[30px] pl-[30px] flex items-center justify-between gap-10 w-full  py-[16px] sticky top-0 left-0">
        <div className="flex  items-center justify-start gap-4">
          <Image
            src={Logo}
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          {/* <div className="font-bold text-3xl pr-4 border-r-2 bg-gradient-to-r from-zinc-50 to-teal-100 bg-clip-text text-transparent">
                    SOLGUARD 
                </div> */}
          <div className="font-bold text-[#0B1F41] text-3xl pr-4 border-r-2">
            SOLGUARD
          </div>
        </div>
        <div className="flex grow items-center justify-between">
          <div className="flex items-center justify-start gap-5">
            <button className="px-2 py-4 font-semibold text-[#0B1F41]">
              Web App
            </button>
            <button className="px-2 py-4 font-semibold">Extensions</button>
            <button className="px-2 py-4 font-semibold">Docs</button>
            <button className="px-2 py-4 font-semibold">About Us</button>
          </div>
          <div className="flex items-center justify-end gap-5">
            <button className="px-3 py-2">Log in</button>
            <button className="px-3 py-2 bg-white text-teal-500 rounded-lg">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-zinc-50 to-teal-100 shadow-md"></div>
    </div>
  );
}
