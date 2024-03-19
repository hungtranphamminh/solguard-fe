import dynamic from 'next/dynamic'
const ErrorDisplay = dynamic(() => import('@/components/CodeEditor/CodeDisplay'), { ssr: false })
import { LocationFormatter } from '@/utils/lib/DataFormatter'

export default function ThreatCard({resultList}){

    const cardColor = (severity) => {
        if(severity==="low")return "yellow-300"
        else if(severity==="medium") return "orange-400"
        else return "red-500"
    }

    const cardBoder = (severity) => {
        if(severity==="low")return "border-yellow-300"
        else if(severity==="medium") return "border-orange-400"
        else return "border-red-500"
    }

    return (
        <div className='overflow-y-auto h-[660px]'> 

            {resultList.map((item, index)=>{
            
            return(
                <div key={index} className={`mt-4 border border-t-4 rounded-lg flex flex-col items-center justify-start p-6 w-[450px] ${cardBoder(item.level)} overflow-hidden`}>
                    <div className="flex items-center justify-start w-full">
                        <div className={` text-xl bg-${cardColor(item.level)} p-1 text-white mr-2`}>
                            {item.level[0].toUpperCase()}
                        </div>
                        <div className="font-bold text-lg">
                            {item.name}
                        </div>
                    </div>
                    <div className="w-full items-center justify-start flex mt-6 text-xs">
                        <div className=" text-[#727184] pr-4 border-r-2">
                            VULNERABILITY
                        </div>
                        <div className="pl-4 text-[#0000ee]">
                            SWC ID: {item.id}
                        </div>
                        
                    </div>
                    <div className="font-normal w-full text-xs mt-2">
                        <span className="text-[#727184] font-bold">LOCATION:</span> {LocationFormatter(item.location)}
                    </div>
                    <div className="mt-4">
                        <ErrorDisplay errorCode={item.code}/>
                    </div>
                    <div className="text-sm font-normal text-[#555463] mt-2">
                        <p>{item.description} </p>
                    </div>
                </div>
            )})}
        </div>
    )
}