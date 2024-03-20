"use client";
import bg from "@/assets/images/solshield/bg.png";
import About from "@/components/solShield/About";
import HeadNav from "@/components/solShield/HeadNav";
import { useState } from "react";
export default function SolShield() {
  const [currentSec, setSec] = useState(0);
  return (
    <div
      className="w-full flex flex-col items-start h-screen"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <HeadNav currentSec={currentSec} setSec={setSec} />
      <div className="w-full flex flex-col items-start h-[800px] overflow-y-auto">
        {currentSec === 0 && <About />}
      </div>
    </div>
  );
}
