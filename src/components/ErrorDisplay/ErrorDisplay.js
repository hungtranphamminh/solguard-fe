import { useCodeStore } from "@/stores/useCode";
import NoResult from "./NoResult";
import ResSummary from "./ResSum";
import ThreatCard from "./ThreatCard";

export default function AnalysisResult() {
  const { currentFileId, contractCode } = useCodeStore();
  const analysisResult = contractCode[currentFileId].analysisResult;

  return (
    <div className="w-[600px] flex flex-col items-center justify-start ">
      <div className="mt-6 mb-4 font-bold text-2xl text-white flex items-center justify-between">
        Analysis Result
      </div>
      <div className="w-full px-6">
        <div className="flex flex-col items-center bg-white w-full pt-5 font-bold text-xl pb-5">
          {contractCode[currentFileId].analysisResult.length === 0 ? (
            <NoResult />
          ) : (
            <>
              <ResSummary />
              <ThreatCard resultList={analysisResult} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
