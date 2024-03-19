import { useCodeStore } from "@/stores/useCart";
import { useEffect, useState } from "react";
import LinearProgress from '@mui/material-next/LinearProgress';

import { mockupRes } from "@/stores/useCart";

export default function NoResult(){
    const {anaStat, updateRes} = useCodeStore()
    const [isChecking, setChecking] = useState(false) 

    useEffect(()=>{
        if(anaStat===1)simulateCheck()
        else if(anaStat===2)simulateCheck2()
    },[anaStat])

    const simulateCheck = () => {
        setChecking(true)
        setTimeout(()=>{
            setChecking(false)
        },3000)
    }

    const simulateCheck2 = () => {
        setChecking(true)
        setTimeout(()=>{
            setChecking(false)
            updateRes()
        },10000)
    }

    return (
        <div className="w-full h-full flex flex-col items-center ">
            <div className="w-full text-center p-8">
                {/* no code */}
                {anaStat===0 && <div className="p-10 border rounded-lg">
                    Please input the smart contract code
                </div>}
                {
                    anaStat===1 && isChecking && <div className="p-10 border rounded-lg">
                        <div className="px-10">
                            Please wait while we are checking for analyzed contracts!
                        </div>
                        <div className="p-10 mt-5">
                            <LinearProgress
                                color="primary"
                                fourColor
                                variant="indeterminate"
                            />
                        </div>
                    </div>
                }
                {
                    anaStat===1 && !isChecking && <div className="p-10 border rounded-lg"> 
                        No record of analysis result for this contract is found!
                    </div>
                }

                {
                    anaStat===2 && isChecking && <div className="p-10 border rounded-lg">
                        <div className="px-10">
                            Your contract are being analyzed!
                        </div>
                        <div className="p-10 mt-5">
                            <LinearProgress
                                color="primary"
                                fourColor
                                variant="indeterminate"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}