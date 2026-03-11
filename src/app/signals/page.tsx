"use client"

import { useEffect, useState } from "react"
import BottomNav from "@/components/BottomNav"

export default function Signals(){

const [signals,setSignals] = useState<any[]>([])

useEffect(()=>{

fetch("/api/signals")
.then(res => res.json())
.then(data => setSignals(data))

},[])

return(

<div className="min-h-screen bg-slate-950 text-white p-6">

<h1 className="text-3xl font-bold mb-6">
Signals
</h1>

<div className="space-y-4">

{signals.map((signal,index)=>(

<div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800">

<div className="text-xl font-bold mb-2">
{signal.asset} • {signal.direction}
</div>

<div className="text-sm text-slate-400 mb-4">
Confidence {signal.confidence}%
</div>

<div className="grid grid-cols-2 gap-2 text-sm">

<div>Entry: {signal.entry}</div>
<div>Stop: {signal.stop}</div>
<div>TP1: {signal.take1}</div>
<div>TP2: {signal.take2}</div>
<div>TP3: {signal.take3}</div>

</div>

</div>

))}

</div>

<BottomNav/>

</div>

)

}
