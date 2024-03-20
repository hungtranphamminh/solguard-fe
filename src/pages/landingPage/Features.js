import Image from "next/image";
import bug from "@/assets/images/landing/bug.svg";
import web from "@/assets/images/landing/web.svg";
import www from "@/assets/images/landing/www.svg";
import plus from "@/assets/images/landing/plus.svg";
import bg from "@/assets/images/solshield/bg.png";
import wavebg from "@/assets/images/landing/wave.webp";

export default function Features() {
  return (
    <div className="w-full flex flex-col items-center justify-start ">
      {/* desc */}
      <p className="text-[16px] leading-5 font-semibold text-[#385168] mb-[17px]">
        BUILT FOR MORE ADVANCED INTERACTION WITH BLOCKCHAINS
      </p>
      <p className=" max-w-[800px] text-[#041E42] leading-[130%] text-[27px] font-semibold mb-9 text-center">
        As blockchain technology has emerged as a prominent trend and promising
        market in recent years, you will need a vulnerability assessment
        solution to safeguard your crypto investments.
      </p>
      {/* imgs */}
      <div className="flex items-center justify-center text-white pb-24">
        <div
          className=" px-4 py-6  w-[216px] flex flex-col items-center justify-start rounded-[5px]"
          style={{
            background: `url(${bg.src}) no-repeat`,
            backgroundColor: "#041E42",
            backgroundPosition: "0% 43px",
          }}
        >
          <Image
            src={bug}
            width={64}
            height={64}
            className="size-[64px] mb-4"
          />
          <div className="text-center">DISCOVER AND ASSESS YOUR CONTRACTS</div>
        </div>
        <Image src={plus} width={24} height={24} alt="plus" className="mx-2" />
        <div
          className=" px-4 py-6  w-[216px] flex flex-col items-center justify-start rounded-[5px] h-[200px]"
          style={{
            background: `url(${bg.src}) no-repeat`,
            backgroundColor: "#041E42",
            backgroundPosition: "33% 43px",
          }}
        >
          <Image
            src={web}
            width={64}
            height={64}
            className="size-[64px] mb-4"
          />
          <div className="text-center">FORTIFY YOUR WEB3 INTERACTIONS</div>
        </div>
        <Image src={plus} width={24} height={24} alt="plus" className="mx-2" />
        <div
          className=" px-4 py-6  w-[216px] flex flex-col items-center justify-start rounded-[5px] h-[200px]"
          style={{
            background: `url(${bg.src}) no-repeat`,
            backgroundColor: "#041E42",
            backgroundPosition: "14% 43px",
          }}
        >
          <Image
            src={www}
            width={64}
            height={64}
            className="size-[64px] mb-4"
          />
          <div className="text-center">
            GAIN VISIBILITY INTO THE PROJECTS SECURITY ISSUES
          </div>
        </div>
      </div>
      {/* summary */}
      <div
        className="w-full pt-[65px] pb-[81px]  text-center"
        style={{
          background: `url(${bg.src}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <p className="max-w-[862px] mx-auto text-white font-normal text-[30px] leading-[130%]">
          Solguard® empowers you with enhanced visibility to safeguard your
          crypto investments, secure your crypto assets, and gain insights into
          vulnerabilities and risks within crypto projects.
        </p>
      </div>
    </div>
  );
}
