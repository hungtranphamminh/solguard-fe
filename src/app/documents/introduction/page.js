import LinkBox from "@/components/link-box/link-box";

export default function Introduction() {
  return (
    <div className="w-full max-w-[1140px]  bg-white relative">
      <h1 className=" ml-10 mt-10 font-bold text-4xl">Introduction</h1>
      <p className="p-10">Welcome to the Solguard documentation!</p>

      <div className="w-full px-10">
        <div className="border-t border-slate-200 w-full"></div>
      </div>

      {/* intro */}
      <div className="flex flex-col gap-4 px-10 py-14 text-[16px] leading-7 tracking-wide">
        <h1 className=" font-bold text-3xl">What is Solguard?</h1>

        <p>
          The world of Decentralized Applications (dApps) is brimming with
          innovation and opportunity. However, navigating these dApps can be
          daunting, especially when it comes to understanding the underlying
          smart contracts that power them.{" "}
          <span className="px-2 text-teal-500 font-bold">Solguard</span>
          bridges this gap by providing a user-friendly suite of smart contract
          analysis tools.
        </p>
        <p>
          Solguard takes complex smart contract code and transforms it into an
          accessible format, empowering everyday users to confidently interact
          with dApps. Our platform goes beyond simple analysis, offering an
          additional layer of security. Solguard constantly scans for emerging
          threats and vulnerabilities, keeping you informed and protected in
          this dynamic landscape.
        </p>
      </div>
      <div className="w-full px-10">
        <div className="border-t border-slate-200 w-full"></div>
      </div>

      {/* Main Features */}
      <div className="flex flex-col gap-4 px-10 py-14 text-[16px] leading-7 tracking-wide">
        <h1 className=" font-bold text-3xl">Main Features</h1>

        <p>Some of the main Solguard features include:</p>
        <div className="flex flex-col">
          <div className="flex items-center w-full font-semibold py-2 border-b border-slate-200">
            <h2 className="w-[20%]">Feature</h2>
            <h2 className="w-[80%] px-4">Description</h2>
          </div>
          <div className="flex items-start w-full  py-[6px] border-b border-slate-200">
            <h2 className="w-[20%] text-teal-400 font-medium]">
              Retrieve Smart Contract
            </h2>
            <h2 className="w-[80%] px-4">
              Retrieve the smart contract code from the address and chainId for
              further inspection
            </h2>
          </div>
          <div className="flex items-start w-full  py-[6px] border-b border-slate-200">
            <h2 className="w-[20%] text-teal-400 font-medium">
              Analyze Smart Contract
            </h2>
            <h2 className="w-[80%] px-4">
              Analyze smart contract code for vulnerabilities and security
            </h2>
          </div>
          <div className="flex items-start w-full  py-[6px] border-b border-slate-200">
            <h2 className="w-[20%] text-teal-400 font-medium">
              Result Analysis
            </h2>
            <h2 className="w-[80%] px-4">
              Deep inspection of analysis results for better understanding and
              suggestions on proceeding the transaction
            </h2>
          </div>
          <div className="flex items-start w-full  py-[6px] border-b border-slate-200">
            <h2 className="w-[20%] text-teal-400 font-medium">
              Statistic Report
            </h2>
            <h2 className="w-[80%] px-4">
              Statistic report of pass interactions and analysis results
            </h2>
          </div>
          <div className="flex items-start w-full  py-[6px] ">
            <h2 className="w-[20%] text-teal-400 font-medium">
              Extension Threat Detection
            </h2>
            <h2 className="w-[80%] px-4">
              Detect and prevent newly identified threat
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full px-10">
        <div className="border-t border-slate-200 w-full"></div>
      </div>

      {/* how to use */}
      <div className="flex flex-col gap-4 px-10 py-14 text-[16px] leading-7 tracking-wide">
        <h1 className=" font-bold text-3xl">How to Use These Docs</h1>

        <p className="text-[16px] leading-7">
          Our documentation is conveniently organized on the left side of your
          screen, focusing on our two main products: the web application and the
          browser extension. Feel free to explore the documents in any order, or
          jump straight to the sections that best suit your needs.
        </p>
      </div>
      <div className="w-full px-10">
        <div className="border-t border-slate-200 w-full"></div>
      </div>

      {/* Pre-Requisite Knowledge to use */}
      <div className="flex flex-col gap-4 px-10 py-14 text-[16px] leading-7 tracking-wide">
        <h1 className=" font-bold text-3xl">Pre-Requisite Knowledge</h1>

        <p className="text-[16px] leading-7">
          Although our docs are designed to be beginner-friendly, we need to
          establish a baseline so that the docs can stay focused on general web3
          users functionality. We'll make sure to provide links to relevant
          documentation whenever we introduce a new concept.
        </p>
        <p className="text-[16px] leading-7">
          To get the most out of our documentation, it's helpful to have a basic
          understanding of blockchain technology, transactions, and smart
          contracts. Additionally, to utilize the core features of our tools
          provided by the extension when interacting with dApps, a MetaMask
          wallet account is required.
        </p>
      </div>
      <div className="w-full px-10">
        <div className="border-t border-slate-200 w-full"></div>
      </div>

      {/* link box */}
      <div className="w-full p-14 gap-10 flex flex-wrap">
        <LinkBox
          title={"Smart Contract Basics"}
          description={"Learn the basics of smart contracts"}
          link={"/documents/smart-contract-basics"}
        />
        <LinkBox
          title={"Smart Contract Analyser"}
          description={
            "Learn how to utilize the web application analyzer to retrieve and analyze smart contracts"
          }
          link={"/documents/web/analyser"}
        />
        <LinkBox
          title={"Extension Threat Detection"}
          description={
            "Unlock an extra layer of security for your dApp interactions with our Chrome extension."
          }
          link={"/documents/extension"}
        />
        <LinkBox
          title={"Architecture "}
          description={"How Solguard Works"}
          link={"/documents/architecture"}
        />
      </div>
    </div>
  );
}
