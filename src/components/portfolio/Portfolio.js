"use client";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import navImg from "@/images/portfolio/nav.svg";
import Link from "next/link";

const MOCK_DATA = [
  {
    contract: "0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
    id: 10,
  },
  {
    contract: "0x583031d1113ad414f02576bd6afabfb302140225",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "4 Vulnerabilities",
    id: 10,
  },
  {
    contract: "0xdd870fa1b7c4700f2bd7f44238821c26f7392148",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "2 Vulnerabilities",
    id: 10,
  },
  {
    contract: "0x5aeda56215b167893e80b4fe645ba6d5bab767de",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "0 Vulnerabilities",
    id: 10,
  },
  {
    contract: "0x6fa849c1f3c9ab610ddfd63486a155880161c1c2",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "6 Vulnerabilities",
    id: 10,
  },
  {
    contract: "0x7c20218efc2e07c8fe2532ff860d6a035c4d6f95",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "3 Vulnerabilities",
    id: 10,
  },
  {
    contract: "0x9eab4b0fc468a7f5d46228bf5a76cb52370d068d",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "3 Vulnerabilities",
  },
  {
    contract: "0x9eab4b0fc468a7f5d46228bf5a76cb52370d068d",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "3 Vulnerabilities",
  },
  {
    contract: "0x9eab4b0fc468a7f5d46228bf5a76cb52370d068d",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "3 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "dApp Interaction",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "5 Vulnerabilities",
  },
  {
    contract: "0x111...1111",
    dapp: "opensea.com",
    time: "1716126635594",
    status: "accepted",
    type: "Manual Analysis",
    severity: "5 Vulnerabilities",
  },
];

const TIME_OPTION = ["All", "24h", "7 days", "1 month"];

export default function Portfolio() {
  const [time, setTime] = useState("All");
  const [history, setHistory] = useState([]);

  const convertTimestamp = (timestamp) => {
    let dt_object = dayjs.unix(timestamp / 1000);

    let formatted_time = dt_object.format("HH:mm DD/MM/YYYY");

    return formatted_time;
  };

  const formatAddress = (address) => {
    let start = address.substring(0, 6);
    let end = address.substring(address.length - 4);
    return start + "..." + end;
  };

  const fetchHistory = async () => {
    try {
      const fetchParams = "?wallet_address=" + window.ethereum.selectedAddress;

      await fetch(
        process.env.NEXT_PUBLIC_HOST_URL + "/api/user/history" + fetchParams,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("history: ", data);
          setHistory(data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="w-full px-16 mt-40 ">
      <div className="w-full flex items-center  justify-center mt-10 gap-10">
        {/* history */}
        <div className="w-2/3 bg-white rounded-xl h-[60vh]">
          <div className="w-full flex items-center justify-between">
            {/* title */}
            <div className="font-bold text-xl py-2 px-4">
              User Interaction History
            </div>
            {/* range picker */}
            <div className="flex items-center gap-2 pr-4 py-2">
              {TIME_OPTION.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={
                      item === time
                        ? `px-2 py-1 border rounded-xl bg-[#083842] text-white text-center`
                        : "px-2 py-1 border border-black rounded-xl bg-white text-center "
                    }
                    onClick={() => setTime(item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {/* history table */}
          <div className="py-2 w-full flex items-center uppercase font-medium justify-between text-black bg-[#defeef] mt-4">
            <div className="w-[10%] text-center m-2">ID</div>
            <div className="w-[20%] m-2">Contract Address</div>
            <div className="w-[10%] m-2">Chain ID</div>
            <div className="w-[25%] m-2">Time</div>
            <div className="w-[35%]">Severity</div>
          </div>
          <div className="w-full h-[40vh] overflow-auto">
            {history.map((item, index) => {
              if (time === "24h" && item.time - Date.now() > 86400000)
                return null;
              else if (time === "7 days" && item.time - Date.now() > 604800000)
                return null;
              else if (
                time === "1 month" &&
                item.time - Date.now() > 2592000000
              )
                return null;
              else
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify- text-black border-b border-b-slate-300 group"
                  >
                    <div className="w-[10%] text-center border-r border-b-slate-300 m-2">
                      {index}
                    </div>
                    <div className="w-[20%] border-r border-b-slate-300 m-2">
                      {formatAddress(item.contract_address)}
                    </div>
                    <div className="w-[10%] border-r border-b-slate-300 m-2">
                      0x{item.chainid}
                    </div>
                    <div className="w-[25%] border-b-slate-300 m-2 border-r">
                      {convertTimestamp(item.time_created * 1000)}
                    </div>
                    <div className="w-[35%] border-b-slate-300 m-2 border-r">
                      {item.result.no_error} Vulnerabilities
                    </div>
                    <Link
                      className=" w-[26px] pr-6"
                      href={`/code-checker?id=${item.id}&contract_address=${item.contract_address}&chainid=${item.chainid}`}
                    >
                      <div className="group-hover:block hidden w-[26px]">
                        <Image src={navImg} alt="nav" width={20} height={20} />
                      </div>
                    </Link>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
