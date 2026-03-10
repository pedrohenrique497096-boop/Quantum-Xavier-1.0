"use client"

import {useEffect,useState} from "react"
import axios from "axios"

export default function Home(){

const [prices,setPrices]=useState<any[]>([])

const assets=[
"BTCUSD",
"XAUUSD",
"EURUSD",
"GBPUSD",
"USDJPY",
"EURJPY"
]

async function loadPrices(){

const results=await Promise.all(

assets.map(a=>

axios.get(`https://quantum-xavier-ai-131d.onrender.com/price/${a}`)

)

)

setPrices(results.map(r=>r.data))

}

useEffect(()=>{

loadPrices()

const interval=setInterval(loadPrices,3000)

return()=>clearInterval(interval)

},[])

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">

Quantum Xavier AI

</h1>

<div className="grid grid-cols-2 gap-4">

{prices.map((p,i)=>(

<div

key={i}

className="bg-slate-900 p-4 rounded-xl border border-slate-700"

>

<h2 className="text-lg">{p.symbol}</h2>

<p className="text-2xl">{p.price}</p>

</div>

))}

</div>

</div>

)

}
