import sollogo from "@/assets/images/logo.jpg";
import Image from "next/image";

export default function Product({ name, motto, description, isRec }) {
  return (
    <div className="w-[400px] h-[345px] border-8 border-[rgba(255,255,255,0.12)] rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.02),0px_30px_60px_rgba(0,0,0,0.08)] text-[#0B1F41] ">
      <div className="w-full h-[calc(100%+16px)] bg-white rounded-lg pt-9 px-8 pb-[30px] flex flex-col items-center relative">
        {isRec && (
          <div className="absolute rotate-[270deg] bg-[#0079DD] -left-[80px] text-white top-1/2 rounded-t-lg py-1 px-3">
            RECOMMEND
          </div>
        )}
        {/* logo */}
        <div className="flex items-center justify-center">
          <Image
            src={sollogo}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full mr-1"
          />
          <p className="font-bold  text-2xl ">SOLGUARD</p>
        </div>
        {/* name */}
        <p className="text-2xl font-medium mb-5">{name}</p>
        {/* motto */}
        <p className="text-[19px] leading-[30px] font-medium text-[#385168] mb-4">
          {motto}
        </p>
        {/* desc */}
        <p className="max-w-[300px] w-full text-center text-[18px] leading-[27px] font-light ">
          {description}
        </p>
      </div>
    </div>
  );
}
