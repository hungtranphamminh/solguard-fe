"use client";
import bg from "@/images/solshield/bg.png";
import Portfolio from "@/components/portfolio/Portfolio";

export default function PortfolioPage() {
  return (
    <div
      className="w-full flex flex-col items-start h-screen"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Portfolio />
    </div>
  );
}
