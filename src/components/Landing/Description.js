'use client'

import descbg from "@/assets/images/landing/hero-bg-mob.png"
import Product from "./Product"
import { useState } from "react"

const PRODUCTS = [{
  name: "Solguard Shield",
  motto: "Built as an Extra Layer of Security",
  description:"Scan your blockchain interactions through dapps, discover risks and secure your crypto assets.",
  isRec:true
},{
  name: "Solguard Analyzer",
  motto: "Code Vulnerability Assessment",
  description:"Scan your smart contract code, identify you vulnerabilities and assess their threat level",
  isRec:false
}]

export default function Description(){
  const [currentPlan, setPlan] = useState(false)
  return( 
    <div className=" relative w-full h-fit pt-[49px] flex flex-col items-center justify-start" style={{
      background: `url(${descbg.src})`,
      backgroundPosition:"center",
      backgroundSize:"cover"
    }}>
      {/* motto */}
      <p className="text-[43px] leading-[51px] font-semibold text-white max-w-[630px] w-full text-center mb-4">CLOSE YOUR VULNERABLITY GAP WITH SOLGUARD®</p>
      {/* product subtitle */}
      <p className=" max-w-[600px] text-[20pxp leading-[30px] font-semibold w-full text-center text-white">
        SOLGUARD® helps you accurately identify, investigate and prioritize vulnerabilities. Secure your crypto investment and others interactions with blockchain.
      </p>
      {/* products */}
      <div className="mt-10 flex max-w-[750px] w-full relative h-[345px]">
        <div className={`absolute left-5 ${!currentPlan?' z-20 bottom-0 ':' z-10 -bottom-14 opacity-80 '} w-[400px] h-[345px]  text-[#0B1F41]`} onClick={()=>setPlan(false)}>
          <Product {...PRODUCTS[0]}/>
        </div>
        <div className={`absolute right-5 ${currentPlan?' z-20 bottom-0 ':' z-10 -bottom-14 opacity-80 '}`} onClick={()=>setPlan(true)}>
          <Product {...PRODUCTS[1]} />
        </div>
      </div>
      {/* product price */}
      <div className="flex items-center justify-center w-full relative z-40 bg-white h-36">
        <div className="w-full max-w-[766px] relative">
          {/* 1st plan */}
          {!currentPlan && <div className="w-full max-w-[300px] absolute -top-[100px] left-[82px]">
            <button className="h-[56px] text-white flex items-center justify-center w-full bg-[#0079DD] text-[18px] leading-[26px] font-semibold rounded-[3px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.12)]">
              Try now
            </button>
            <div className="mt-1 pb-2.5 text-center text-[#041438]">
                <span className="text-[#025FAA] font-semibold underline underline-[#025FAA]">Buy Now</span> and Get Free <br/> Solguard Support
            </div>
          </div>}
          {currentPlan && <div className="w-full max-w-[300px] absolute -top-[100px] right-[75px]">
            <button className="h-[56px] text-white flex items-center justify-center w-full bg-[#0079DD] text-[18px] leading-[26px] font-semibold rounded-[3px] shadow-[0px_3px_5px_0px_rgba(0,0,0,0.12)]">
              Try now
            </button>
            <div className="mt-1 pb-2.5 text-center text-[#041438]">
                <span className="text-[#025FAA] font-semibold underline underline-[#025FAA]">Buy Now</span> and Get Free <br/> Solguard Support
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}