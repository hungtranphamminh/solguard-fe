"use client";
import dynamic from "next/dynamic";
import bg from "@/images/solshield/bg.png";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const CodeEditorNoSSR = dynamic(
  () => import("@/components/CodeEditor/Editor"),
  { ssr: false }
);
import { useCodeStore } from "@/stores/useCode";
import FileList from "@/components/CodeEditor/FileList";
import FileListEditor from "@/components/CodeEditor/FileListEditor";
import AnalysisResult from "@/components/ErrorDisplay/ErrorDisplay";
import { useEffect } from "react";

export default function MainTool() {
  const searchParams = useSearchParams();
  const recordId = searchParams.get("id");
  const [status, setStatus] = useState("");

  const [inputContractAdr, setInputContractAdr] = useState("");
  const [inputChainId, setInputChainId] = useState("");

  const [uploadMethod, setUploadMethod] = useState("file");

  const { contractCode, loadCode, changeProcess, updateRes } = useCodeStore();

  const [isDone, setIsDone] = useState(true);

  const handleFileUpload = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    loadCode(event.target.files[0], false);
    changeProcess(1);
  };

  const analyzeCode = async () => {
    setIsDone(false);
    setStatus("Analyzing smart contract");
    try {
      if (uploadMethod === "file")
        await fetch(process.env.HOST_URL + "/api/analysis/file", {
          method: "POST",
          headers: {
            "Content-Type": "form-data",
          },
          body: JSON.stringify({
            file: contractCode[0].file,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            updateRes(data.data);
            setIsDone(true);
            changeProcess(2);
          });
      else {
        await fetch(
          process.env.NEXT_PUBLIC_HOST_URL + "/api/analysis/address",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "true",
            },
            body: JSON.stringify({
              address: inputContractAdr,
              chainid: inputChainId,
              wallet_address: window.ethereum.selectedAddress,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("data result:", data);
            updateRes(data.data);
            setIsDone(true);
            changeProcess(2);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAnalysisRecord = async (id) => {
    setStatus("Fetching analysis record");
    try {
      const fetchParams =
        "?id=" + id + "&wallet_address=" + window.ethereum.selectedAddress;
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
          updateRes(data.data);
          changeProcess(2);
          setIsDone(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContract = async (prefetch) => {
    console.log(
      "fetching address with params: ",
      inputContractAdr,
      inputChainId
    );
    try {
      setIsDone(false);
      setStatus("Fetching contract code");
      let fetchParams = "";

      console.log("prefetch: ", prefetch);

      if (prefetch !== null) {
        fetchParams =
          "?address=" +
          searchParams.get("contract_address") +
          "&chainid=" +
          searchParams.get("chainid");
      } else {
        fetchParams =
          "?address=" + inputContractAdr + "&chainid=" + inputChainId;
      }

      await fetch(
        process.env.NEXT_PUBLIC_HOST_URL + "/api/source_code" + fetchParams,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
        .then((res) => {
          console.log("res: ", res);
          if (res.ok) return res.json();
        })
        .then((data) => {
          console.log("data: ", data);
          loadCode(data.data.content[0], true);
          changeProcess(1);
          setUploadMethod("address");
          if (prefetch) fetchAnalysisRecord(recordId);
          else setIsDone(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("main url is: ", process.env.NEXT_PUBLIC_HOST_URL);
    if (recordId) {
      fetchContract(true);
    }
  }, []);

  return (
    <>
      <div
        className=" h-[calc(100vh-61px)] w-full flex items-stretch mt-[61px]"
        style={{
          background: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      >
        {/* option bar */}
        <div className="w-[450px] h-full text-white flex justify-between flex-col">
          <div className="flex flex-col w-full justify-start items-center">
            <div className="mt-6 mb-4 font-bold text-2xl">
              Smart Contract Controller
            </div>
            <div className="w-[400px] bg-white flex flex-col text-[#011635] items-center justify-center py-5">
              <div className="w-full justify-start items-start flex px-3 flex-col">
                <div className="font-bold w-full mb-2">
                  Smart Contracts{`(${contractCode.length})`}:
                </div>
                {/* FileList */}
                <FileList />
                <div className="w-full flex flex-col justify-start items-center">
                  <div className="w-full font-bold mb-2">
                    Upload Smart Contract
                  </div>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    onChange={handleFileUpload}
                  />
                </div>
                <div className="w-full flex items-center justify-start flex-col">
                  <div className="w-full font-bold mt-4 mb-2">
                    Get Smart Contract From Address
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div>Contract Address:</div>
                    <input
                      type="text"
                      className="ml-2 border rounded-md border-[#020217]"
                      value={inputContractAdr}
                      onChange={(e) => setInputContractAdr(e.target.value)}
                    ></input>
                  </div>

                  <div className="flex items-center justify-between w-full mt-2">
                    <div>ChainID:</div>
                    <input
                      type="text"
                      value={inputChainId}
                      onChange={(e) => setInputChainId(e.target.value)}
                      className="ml-2 border rounded-md border-[#020217]"
                    ></input>
                  </div>

                  <button
                    className="mt-4 bg-[#011635] w-full py-[6px] text-white rounded-md"
                    onClick={() => fetchContract(null)}
                  >
                    Retrieve Contract Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main code editor */}
        <div className="grow h-full flex flex-col py-9 relative">
          {!isDone && (
            <div className=" absolute z-50 bg-black w-full h-full top-0 left-0 bg-opacity-60">
              <div className="w-full h-full">
                <div className="m-auto mt-[20vh] w-[300px] flex flex-col items-center justify-center">
                  <div className="relative h-[100px] w-[100px] ">
                    <div id="preloader">
                      <div id="loader"></div>
                    </div>
                  </div>
                  {/* state */}
                  <div className="text-white font-medium text-2xl text-center mt-6">
                    {status}
                  </div>
                </div>
              </div>
            </div>
          )}
          <FileListEditor />
          <div className=" w-full h-[600px] relative">
            <CodeEditorNoSSR contractCode={contractCode[0].textContent} />
          </div>
          <div className="bg-[#24292e] w-full flex flex-col text-white border-t items-center">
            To get better results please use complete code with imports of
            libraries used.
          </div>
          <div className="grow bg-[#24292e] w-full flex flex-col p-4 text-white items-center border-t">
            <div className="text-xs">
              By clicking “Check code” you agree to our
              <span className="text-teal-300 ml-2">Terms of Service</span>
            </div>
            <div className="w-full flex justify-end mt-6">
              <button
                className="px-[12px] py-[8px] font-bold bg-teal-400"
                onClick={() => analyzeCode()}

                // onClick={() => changeProcess(2)}
              >
                Check code
              </button>
            </div>
          </div>
        </div>
        {/* result */}
        <AnalysisResult />
      </div>
    </>
  );
}
