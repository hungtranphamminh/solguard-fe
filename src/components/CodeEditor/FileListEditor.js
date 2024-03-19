import { useCodeStore } from "@/stores/useCart";

export default function FileListEditor(){
    const {contractCode, currentFileId} = useCodeStore()

    return(
        <div className="w-full border-b text-white flex">
            {contractCode.length>0 && contractCode.map((item, index) => {
                return(
                    <button 
                        className={`px-[12px] py-[6px] bg-white ${index===currentFileId?"bg-opacity-20":"bg-opacity-5"} rounded-t-md`}
                    >
                        {item.name}
                    </button>
                )
            })}
        </div>
    )
}