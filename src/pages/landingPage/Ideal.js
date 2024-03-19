import Image from "next/image";
import investor from "@/assets/images/landing/investor.png";
import developer from "@/assets/images/landing/developer.png";

export default function IdealCustomer() {
  return (
    <section className="w-full pt-[88px] pb-[77px] ">
      <div className="w-[95%] mx-auto">
        <div className="w-full max-w-[976px] border-[8px] border-[rgba(255,255,255,0.12)] shadow-[0px_0px_84px_0px_rgba(0,0,0,0.08),0px_0px_16px_0px_rgba(0,0,0,0.04)] mx-auto">
          {/* title */}
          <div className="flex flex-col items-center w-full py-10 px-12">
            <p className="text-[#041E42] text-[25px] font-semibold mb-9">
              SOLGUARD® SHIELD and ANALYZER IS IDEAL FOR:
            </p>
          </div>
          {/* groups */}
          <div className="w-full flex items-start">
            <div className="flex px-3 w-1/2 flex-col items-center justify-start">
              <Image src={investor} height={200} />
              <p className="my-4 uppercase font-semibold text-[16px] text-[#385168]">
                Web3 Enthusiast & Investor
              </p>
              <p className="px-10 w-full text-center">
                Securing blockchain interactions through smart contracts of
                dApps
              </p>
            </div>
            <div className="h-[200px] w-[1px] bg-slate-200"></div>
            <div className=" flex px-3 w-1/2 flex-col items-center justify-start">
              <Image src={developer} height={200} />
              <p className="my-4 uppercase font-semibold text-[16px] text-[#385168]">
                Web3 Developer
              </p>
              <p className="px-10 w-full text-center">
                Discover potential threats and vulnerabilities of smart
                contracts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
