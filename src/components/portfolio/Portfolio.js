import Image from "next/image";
import pie from "@/assets/images/portfolio/pie.png";
import bar from "@/assets/images/portfolio/bar.png";
import col from "@/assets/images/portfolio/col.png";
import line from "@/assets/images/portfolio/line.png";

const MOCK_DATA = [
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "23:59 21/03/2024",
    status: "accepted",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "23:59 21/03/2024",
    status: "accepted",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "23:59 21/03/2024",
    status: "accepted",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "23:59 21/03/2024",
    status: "accepted",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "23:59 21/03/2024",
    status: "accepted",
  },
];

export default function Portfolio() {
  return (
    <div className="w-full px-16 mt-40 ">
      <div className="text-xl text-white mb-8 font-bold">
        Welcome back,
        <span className="bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
          0xbB...EBE6
        </span>
      </div>

      <div className="w-full flex items-center justify-between ">
        {/* pie */}
        <div className="w-[300px] h-[300px] bg-white p-4 rounded-xl">
          <div className="font-bold">Total transaction:</div>
          <div className="w-full flex items-center justify-center mt-4">
            <Image src={pie} width={180} />
          </div>
        </div>
        {/* bar */}
        <div className=" w-[700px] h-[300px] bg-white p-4 rounded-xl overflow-hidden">
          <div className="w-[700px] h-[300px] bg-white p-4 rounded-xl flex items-start justify-between">
            <div className="font-bold">Vulnerabilities summary:</div>
            <div className="w-full flex items-center justify-center mt-4">
              <Image src={bar} width={500} className="w-[500px] h-[200px]" />
            </div>
          </div>
        </div>
        {/* col */}
        <div className=" w-[700px] h-[300px] bg-white p-4 rounded-xl overflow-hidden">
          <div className="w-[700px] h-[300px] bg-white p-4 rounded-xl flex items-start justify-between">
            <div className="font-bold">dApp Visits:</div>
            <div className="w-full flex items-center justify-center mt-4">
              <Image src={col} width={500} className="w-[500px] h-[200px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-10 gap-10">
        {/* history */}
        <div className="w-2/3 bg-white p-4 rounded-xl">
          <div className="w-full flex items-center justify-between text-black border-b border-b-black">
            <div className="w-[90px] text-center border-r border-r-black m-2">
              ID
            </div>
            <div className="w-[230px] border-r border-r-black m-2">
              Contract Address
            </div>
            <div className="w-[230px] border-r border-r-black m-2">
              dApp Host
            </div>
            <div className="w-[290px] border-r border-r-black m-2">Time</div>
            <div className="w-[120px]">Status</div>
          </div>
          {MOCK_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-between text-black border-b border-b-slate-300"
              >
                <div className="w-[90px] text-center border-r border-b-slate-300 m-2">
                  {index}
                </div>
                <div className="w-[230px] border-r border-b-slate-300 m-2">
                  {item.contract}
                </div>
                <div className="w-[230px] border-r border-b-slate-300 m-2">
                  {item.dapp}
                </div>
                <div className="w-[290px] border-b-slate-300 m-2 border-r">
                  {item.time}
                </div>
                <div className="w-[120px]   uppercase">
                  {item.status === "accepted" && (
                    <span className="text-green-500">{item.status}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* chart */}
        <div className="grow h-[278px] bg-white rounded-xl p-4 overflow-hidden">
          <div className="font-bold">Total transaction:</div>
          <div className="w-full flex items-center justify-center mt-4">
            <Image src={line} width={280} />
          </div>
        </div>
      </div>
    </div>
  );
}
