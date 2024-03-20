import logo from "@/assets/images/logo.jpg";
import Image from "next/image";

export default function HeadNav({ currentSec, setSec }) {
  return (
    <div className="w-full">
      <section className="mx-auto w-full max-w-[990px] flex items-center justify-between mt-[120px]">
        {/* logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            width={45}
            height={45}
            alt="logo"
            className="rounded-full"
          />
          <div className="ml-4 text-2xl font-semibold bg-clip-text bg-gradient-to-b from-sky-400 to-sky-200 text-transparent ">
            SOLSHIELD
          </div>
        </div>
        {/* nav */}
        <div className="flex items-center gap-6 text-white font-semibold text-xl">
          {currentSec === 0 ? (
            <button className=" pb-2 border-b-4 border-b-teal-400 shadow-teal-300">
              About
            </button>
          ) : (
            <button
              className=" pb-2 border-b-4 border-b-transparent"
              onClick={() => setSec(0)}
            >
              About
            </button>
          )}
          {currentSec === 1 ? (
            <button className=" pb-2 border-b-4 border-b-teal-400 shadow-teal-300">
              Features
            </button>
          ) : (
            <button
              className=" pb-2 border-b-4 border-b-transparent"
              onClick={() => setSec(1)}
            >
              Features
            </button>
          )}
          {currentSec === 2 ? (
            <button className=" pb-2 border-b-4 border-b-teal-400 shadow-teal-300">
              Docs
            </button>
          ) : (
            <button
              className=" pb-2 border-b-4 border-b-transparent"
              onClick={() => setSec(2)}
            >
              Docs
            </button>
          )}
        </div>
        {/* faker */}
        <div></div>
      </section>
    </div>
  );
}
