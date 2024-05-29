"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.jpg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import dynamic from "next/dynamic";

export default function HeadBar() {
  const account = useAccount();
  useEffect(() => {
    console.log("login trigger", account);
    if (account.address) {
      loginPlatform();
    }
  }, [account]);

  const loginPlatform = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          wallet_address: account.address,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginExtension = () => {
    chrome.runtime.sendMessage("liknlkfmpnlbcfdbjonfgieffnklkifm", {
      action: "login",
      data: {
        evmAddress: window.ethereum.selectedAddress,
      },
    });
  };

  return (
    <div className="w-full bg-white text-[#0B1F41] border-b-white fixed top-0 left-0 z-[100]">
      <div className="pr-[30px] pl-[30px] flex items-center justify-between gap-10 w-full  py-[16px] sticky top-0 left-0">
        <Link
          className="flex  items-center justify-start gap-4"
          href={"/landing"}
        >
          <Image
            src={Logo}
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          {/* <div className="font-bold text-3xl pr-4 border-r-2 bg-gradient-to-r from-zinc-50 to-teal-100 bg-clip-text text-transparent">
                    SOLGUARD 
                </div> */}
          <div className="font-bold text-[#0B1F41] text-3xl pr-4 border-r-2">
            SOLGUARD
          </div>
        </Link>
        <div className="flex grow items-center justify-between">
          <div className="flex items-center justify-start gap-5">
            <Link
              className="px-2 py-4 font-semibold text-[#0B1F41]"
              href={"/code-checker"}
            >
              SolAnalyzer
            </Link>
            <Link className="px-2 py-4 font-semibold" href={"/sol-shield"}>
              SolShield
            </Link>
            {/* <Link className="px-2 py-4 font-semibold" href={"/"}>
              Docs
            </Link> */}
            <Link className="px-2 py-4 font-semibold" href={"/"}>
              About Us
            </Link>
          </div>
          {/* connect button */}
          <div className="flex items-center justify-end gap-5">
            {account.address && (
              <>
                <Link className="px-2 py-4 font-semibold" href={"/portfolio"}>
                  History
                </Link>
                <button
                  className="px-2 py-2 font-semibold rounded-xl  bg-green-400 text-white border shadow-sm"
                  onClick={loginExtension}
                >
                  Login Extension
                </button>
              </>
            )}
            <ConnectButton />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-zinc-50 to-teal-100 shadow-md"></div>
    </div>
  );
}
