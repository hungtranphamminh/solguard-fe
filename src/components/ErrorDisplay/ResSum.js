import Image from "next/image";
import Download from "@/assets/images/download.svg";
import { useCodeStore } from "@/stores/useCode";

export default function ResSummary() {
  const { currentFileId, contractCode } = useCodeStore();
  const analysisResult = contractCode[currentFileId].analysisResult;

  const getThreatLevel = (severity) => {
    console.log("analysisResult", analysisResult);
    return analysisResult.standardize_result.result.reduce(
      (total, threat) => total + (threat.severity === severity),
      0
    );
  };

  return (
    <>
      <div className="flex items-center">
        We found{" "}
        {contractCode[currentFileId].analysisResult.standardize_result.no_error}{" "}
        issues in your code
        <button className=" ml-3 flex items-center gap-2 text-xs rounded-lg border p-1">
          Results.txt
          <Image src={Download} alt="dl image" width={23} />
        </button>
      </div>
      <div className="w-full flex items-center justify-evenly mt-1">
        <div className="text-orange-400 flex items-center text-sm">
          <div className="  bg-red-500 p-1 text-white mr-2">H</div>
          {getThreatLevel("High")} high severity
        </div>
        <div className="text-orange-400 flex items-center text-sm">
          <div className="  bg-orange-400 p-1 text-white mr-2">M</div>
          {getThreatLevel("Medium")} medium severity
        </div>
        <div className="text-orange-400 flex items-center text-sm">
          <div className="  bg-yellow-300 p-1 text-white mr-2">L</div>
          {getThreatLevel("Low")} low severity
        </div>
      </div>
    </>
  );
}
