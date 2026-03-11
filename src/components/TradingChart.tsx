"use client"

import { useEffect, useRef } from "react"
import { createChart } from "lightweight-charts"

export default function TradingChart(){

const chartContainerRef = useRef<HTMLDivElement>(null)

useEffect(()=>{

if(!chartContainerRef.current) return

const chart = createChart(chartContainerRef.current,{
height:400,
layout:{
background:{color:"#020617"},
textColor:"#CBD5F5"
},
grid:{
vertLines:{color:"#1e293b"},
horzLines:{color:"#1e293b"}
}
})

const candleSeries = chart.addCandlestickSeries()

candleSeries.setData([
{ time:"2024-01-01", open:69000, high:70000, low:68000, close:69500 },
{ time:"2024-01-02", open:69500, high:70500, low:69000, close:70200 },
{ time:"2024-01-03", open:70200, high:71000, low:70000, close:70800 },
{ time:"2024-01-04", open:70800, high:71500, low:70000, close:70500 },
{ time:"2024-01-05", open:70500, high:72000, low:70200, close:71500 }
])

return ()=>chart.remove()

},[])

return(

<div className="w-full rounded-xl overflow-hidden">
<div ref={chartContainerRef}/>
</div>

)

  }
