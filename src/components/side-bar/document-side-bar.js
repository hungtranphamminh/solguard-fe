"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DocumentSideBar() {
  const pathName = usePathname();

  const getNavStyleMajor = (currentPathName) => {
    if (pathName.includes(currentPathName)) {
      return "py-[5px] text-teal-400 font-bold ";
    } else return "py-[5px] text-slate-400 font-medium";
  };

  const getNavStyleSub = (currentPathName) => {
    if (pathName.includes(currentPathName)) {
      return " pl-4 text-teal-400 font-bold py-[4px] border-l-2 border-teal-400 ";
    } else
      return "pl-4 py-[4px] border-l border-slate-400 text-slate-400 font-medium";
  };

  const getBlockHeight = (currentPathName) => {
    if (pathName.includes(currentPathName)) {
      return "h-auto opacity-100";
    } else return "h-auto overflow-hidden opacity-100";
  };

  useEffect(() => {
    console.log("pathName", pathName);
  }, []);

  return (
    <div className="w-[300px] h-[calc(100vh-61px)] bg-white p-4 flex flex-col sticky top-[61px] left-0">
      {/* Intro section */}
      <div className="font-bold text-base py-3">Getting Started</div>
      <>
        <Link
          href="/documents/introduction"
          className={`${getNavStyleMajor("introduction")}`}
        >
          Introduction
        </Link>
        <Link
          href="/documents/introduction"
          className={`${getNavStyleMajor("smart-contract")}`}
        >
          Smart Contract Basics
        </Link>
      </>

      {/* Web section */}
      <div className="font-bold text-base py-3">Web Application </div>
      <>
        {/* analyser section */}
        <Link
          href="/documents/web/analyser"
          className={`${getNavStyleMajor("documents/web/analyser")}`}
        >
          <div className="flex items-center">Smart Contract Analyser</div>
        </Link>
        <div
          className={`flex flex-col ${getBlockHeight(
            "/documents/web/analyser"
          )} transition-all duration-300 ease-in-out`}
        >
          <Link
            href="/documents/web/analyser/load-contract"
            className={`${getNavStyleSub(
              "/documents/web/analyser/load-contract"
            )}`}
          >
            Load Smart Contract
          </Link>
          <Link
            href="/documents/web/analyser/result"
            className={`${getNavStyleSub("/documents/web/analyser/result")}`}
          >
            Result Analysis
          </Link>
        </div>

        <Link
          href="/documents/web/statistics"
          className={`${getNavStyleMajor("/documents/web/statistics")}`}
        >
          History & Statistic
        </Link>
      </>

      {/* extension section */}
      <div className="font-bold text-base py-3">Chrome Browser Extension</div>
      <>
        <Link
          href="/documents/extension/installing"
          className={`${getNavStyleMajor("/extension/installing")}`}
        >
          Installing
        </Link>
        {/* transaction layer */}
        <Link
          href="/documents/extension/transaction-layer"
          className={`${getNavStyleMajor("/extension/transaction-layer")}`}
        >
          <div className="flex items-center">Transaction Layer</div>
        </Link>
        <div
          className={`flex flex-col ${getBlockHeight(
            "/documents/extension/transaction-layer"
          )} transition-all duration-300 ease-in-out`}
        >
          <Link
            href="/documents/extension/transaction-layer/transaction-intercepting"
            className={`${getNavStyleSub(
              "extension/transaction-layer/transaction-intercepting"
            )}`}
          >
            Intercepting Transaction
          </Link>
          <Link
            href="/documents/extension/transaction-layer/transaction-analysis"
            className={`${getNavStyleSub(
              "extension/transaction-layer/transaction-analysis"
            )}`}
          >
            Transaction Analysis
          </Link>
          <Link
            href="/documents/extension/transaction-layer/preserve-interaction"
            className={`${getNavStyleSub(
              "extension/transaction-layer/preserve-interaction"
            )}`}
          >
            Preserving Interaction Flow
          </Link>
        </div>
        {/* threat detection */}
        <Link
          href="/documents/extension/threat"
          className={`${getNavStyleMajor("/documents/extension/threat")}`}
        >
          <div className="flex items-center">Threat Scanner</div>
        </Link>
        <div
          className={`flex flex-col ${getBlockHeight(
            "/documents/extension/threat"
          )} transition-all duration-300 ease-in-out`}
        >
          <Link
            href="/documents/extension/threat/new-threat"
            className={`${getNavStyleSub("extension/threat/new-threat")}`}
          >
            Extensions' Vulnerability
          </Link>
          <Link
            href="/documents/extension/threat/tracking-guide"
            className={`${getNavStyleSub("extension/threat/tracking-guide")}`}
          >
            Tracking Guide
          </Link>
        </div>
      </>

      {/* link box */}
    </div>
  );
}
