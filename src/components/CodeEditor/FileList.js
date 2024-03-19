import { useCodeStore } from "@/stores/useCart";
import Sol from "@/assets/images/sol.svg";
import Image from "next/image";
export default function FileList() {
  const { contractCode } = useCodeStore();

  return (
    <div className="flex w-full flex-wrap gap-2 mb-5">
      {contractCode.length > 0 &&
        contractCode.map((item, index) => {
          return (
            <button
              className=" text-xs px-[12px] py-[6px] flex items-center justify-start bg-[#fafafa] border rounded-md w-fit"
              key={index}
            >
              <Image src={Sol} alt="sol icon" width={16} height={16} />
              <div>{item.name}</div>
            </button>
          );
        })}
    </div>
  );
}
