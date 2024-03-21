import src1 from "@/assets/images/solshield/scr1.png";
import src2 from "@/assets/images/solshield/scr2.png";
import Image from "next/image";
import bgimg1 from "@/images/solShield/bgimg.png";
import bgimg2 from "@/images/solShield/bgimg2.png";

export default function InstallShield() {
  return (
    <div className="w-full mx-auto max-w-[1000px] mt-0 flex flex-col items-center">
      {/* title */}
      <div className="relative z-[300] mt-20 font-bold text-[48px] leading-[58px] bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
        Install Solguard Shield for your browser
      </div>
      <div className="mt-10 relative w-full flex flex-col items-center justify-center">
        <div className=" relative">
          <Image
            src={src1}
            width={200}
            alt="src1"
            className="relative rotate-6 left-20 top-24 z-30"
          />
          <Image
            src={src2}
            width={300}
            alt="src2"
            className="absolute z-50 top-0 -left-20 -rotate-6"
          />
          <div
            style={{
              background: `url(${bgimg1.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[700px] h-[700px] absolute -top-32 -left-96"
          ></div>
          <div
            style={{
              background: `url(${bgimg2.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[700px] h-[700px] absolute -top-32 -left-28 rotate-180"
          ></div>
        </div>
        <div className="backdrop-blur-3xl relative bg-opacity-40 rounded-xl top-24 flex items-center justify-center p-8 z-[100] bg-white shadow-2xl">
          <button className="px-5 py-3 text-xl text-white bg-gradient-to-r from-sky-400 to-blue-500">
            Install Solguard Shield for Chrome
          </button>
        </div>
      </div>
    </div>
  );
}
