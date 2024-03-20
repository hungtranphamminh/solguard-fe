import Image from "next/image";
import bgImage from "@/assets/images/solshield/bgimg.png";
import bgImage2 from "@/assets/images/solshield/bgimg2.png";
import main1bg from "@/assets/images/solshield/main1bg.png";
import extra from "@/assets/images/solshield/extra.png";
import portfolio from "@/assets/images/solshield/portfolio.png";

export default function About() {
  return (
    <div className="w-full mx-auto max-w-[1000px] mt-0">
      {/* get started */}
      <div className="flex items-center">
        <div className="max-w-[490px]">
          <div className="font-bold text-[48px] leading-[58px] bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
            Get started with Solguard Portfolio
          </div>
          <div className="font-normal text-white text-[16px] leading-[22px] my-8">
            With Soulguard Shield installed, start enjoying the convenience of
            tracking and managing your web3 everything, all in one place.
          </div>
          <button className=" py-2 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[16px] leading-[21px] font-normal ">
            View Soulguard Portfolio
          </button>
        </div>
        <div className="relative w-1/2 h-[500px]">
          <div
            className=" -right-96 absolute ml-10 w-[830px] h-[440px] flex items-center justify-center"
            style={{
              background: `url(${bgImage2.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Image
              src={portfolio}
              width={500}
              className=" bg-white rounded-[10px]"
            />
          </div>
        </div>
      </div>
      {/* security assets */}
      <div className="flex items-center -mt-10">
        <div className="relative w-1/2 h-[500px]">
          <div
            className=" -left-80 absolute ml-10 w-[730px] h-[540px] flex items-center justify-center"
            style={{
              background: `url(${bgImage.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image src={main1bg} width={500} className="rounded-[10px]" />
          </div>
        </div>
        <div className="max-w-[490px]">
          <div className="font-bold text-[24px] leading-[36px] bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
            Aware of potential threat with SolAnalyzer
          </div>
          <div className="font-normal text-white text-[16px] leading-[22px] my-8">
            With SolAnalyzer, you'll receive notifications about potential
            vulnerabilities and risks in your upcoming interactions with Web3
            projects by analyzing their core component: their smart contracts.
          </div>
        </div>
      </div>

      {/* another layer  */}
      <div className="flex items-center mt-2">
        <div className="max-w-[490px]">
          <div className="font-bold text-[24px] leading-[36px] bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
            Built-in extra layer of security
          </div>
          <div className="font-normal text-white text-[16px] leading-[22px] my-8">
            Available as a browser extension, Solguard provides you with an
            additional strong layer of security when interacting with dApps and
            blockchains, enhancing the security of your crypto assets and
            investments.
          </div>
        </div>
        <div className="relative w-1/2 h-[500px]">
          <div
            className=" -right-96 absolute ml-10 w-[830px] h-[440px] flex items-center justify-center"
            style={{
              background: `url(${bgImage2.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Image
              src={extra}
              width={500}
              className=" bg-white rounded-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
