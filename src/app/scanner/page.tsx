"use client"

import { useEffect } from "react"
import BottomNav from "@/components/BottomNav"

export default function Scanner(){

useEffect(()=>{

const script = document.createElement("script")
script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
script.async = true

script.innerHTML = JSON.stringify({
autosize:true,
symbol:"BINANCE:BTCUSDT",
interval:"15",
timezone:"Etc/UTC",
theme:"dark",
style:"1",
locale:"en",
hide_side_toolbar:false,
allow_symbol_change:true,
container_id:"tv_chart"
})

document.getElementById("tv_chart")?.appendChild(script)

},[])

return(

<div className="min-h-screen bg-slate-950 text-white pb-24">

<div className="p-4">

<h1 className="text-3xl font-bold mb-4">
Scanner IA
</h1>

<div id="tv_chart" style={{height:"500px"}} />

<div className="mt-6 p-4 bg-slate-900 rounded-xl border border-slate-800">

<p className="text-cyan-400 mb-2">
Quantum Xavier AI Analysis
</p>

<p className="text-slate-300 text-sm">
Scanning liquidity zones, trend structure and institutional levels...
</p>

</div>

</div>

<BottomNav/>

</div>

)

}
