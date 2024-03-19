"use client";
import dynamic from "next/dynamic";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const CodeEditorNoSSR = dynamic(
  () => import("@/components/CodeEditor/Editor"),
  { ssr: false }
);
import { useCodeStore } from "@/stores/useCart";
import FileList from "@/components/CodeEditor/FileList";
import FileListEditor from "@/components/CodeEditor/FileListEditor";
import AnalysisResult from "@/components/ErrorDisplay/ErrorDisplay";

export default function MainTool() {
  const { contractCode, loadCode, changeProcess } = useCodeStore();

  const handleFileUpload = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }

    loadCode(event.target.files[0]);
    changeProcess(1);
  };

  return (
    <>
      <div className="bg-[#020217] h-[calc(100vh-90px)] w-full flex items-stretch">
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
                    ></input>
                  </div>

                  <div className="flex items-center justify-between w-full mt-2">
                    <div>ChainID:</div>
                    <select id="cars" name="chainId">
                      <option value="Ethereum Mainnet">Ethereum Mainnet</option>
                      <option value="Sepolia Tesnet">Sepolia Tesnet</option>
                    </select>
                  </div>

                  <button className="mt-4 bg-[#011635] w-full py-[6px] text-white rounded-md">
                    Retrieve Contract Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start items-center mb-9 ">
            <div className="mt-6 mb-4 font-bold text-2xl">Analysis Option</div>
            <div className="w-[400px] bg-white flex flex-col pb-10 text-[#011635] items-center justify-center pt-5">
              <div className="w-full px-4 font-bold text-xl">Tools</div>
              <div className="w-full px-6">
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Mythril" />
                  <FormControlLabel control={<Checkbox />} label="Slither" />
                  <FormControlLabel control={<Checkbox />} label="Securify" />
                  <FormControlLabel control={<Checkbox />} label="All" />
                </FormGroup>
              </div>
              <div className="mt-2 text-sm px-2 text-[#555463]">
                Note: Selecting numerous tools will result in a longer analysis
                time.
              </div>
            </div>
          </div>
        </div>
        {/* main code editor */}
        <div className="grow h-full flex flex-col py-9">
          <FileListEditor />
          <div className=" w-full h-[600px]">
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
                onClick={() => changeProcess(2)}
              >
                Check code
              </button>
            </div>
            <div className="w-full flex justify-end mt-2">1/3 scans left</div>
          </div>
        </div>
        {/* result */}

        <AnalysisResult />
      </div>
    </>
  );
}
