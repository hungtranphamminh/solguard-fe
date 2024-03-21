"use client";
import bg from "@/images/solshield/bg.png";
import InstallShield from "@/components/solShield/Download";
import Features from "@/components/solShield/Features";
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
        {currentSec === 1 && <Features />}
        {currentSec === 0 && <InstallShield />}
      </div>
    </div>
  );
}
