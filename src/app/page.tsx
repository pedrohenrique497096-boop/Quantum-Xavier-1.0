"use client"

import { useEffect, useState } from "react"
import BottomNav from "@/components/BottomNav"
import { fetchAllPrices } from "@/lib/quantumApi"

export default function Home() {

const [price,setPrice] = useState<number | null>(null)
const [lastUpdate,setLastUpdate] = useState("")

async function loadPrice(){

const data = await fetchAllPrices()

if(data && data.length > 0){

setPrice(data[0].price)

}

setLastUpdate(new Date().toLocaleTimeString())

}

useEffect(()=>{

loadPrice()

const interval = setInterval(loadPrice,5000)

return ()=>clearInterval(interval)

},[])

return(

<div className="min-h-screen bg-slate-950 pb-24 text-white">

<div className="mx-auto max-w-md p-4">

<h1 className="mb-2 text-3xl font-bold">
Quantum Xavier IA
</h1>

<p className="mb-4 text-sm text-slate-400">
Preço do ouro em tempo real
</p>

<div className="mb-6 rounded-2xl border border-emerald-500/30 bg-slate-900 p-4">

<p className="text-emerald-400">
● MERCADO DO OURO AO VIVO
</p>

<p className="mt-2 text-sm text-slate-400">
Última atualização: {lastUpdate || "--:--:--"}
</p>

</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

<p className="text-lg font-semibold">
XAUUSD
</p>

<p className="mt-3 text-3xl font-bold text-cyan-400">

{price ? price.toFixed(2) : "Carregando..."}

</p>

</div>

<div className="mt-6 rounded-2xl border border-cyan-500/30 bg-slate-900 p-4">

<p className="text-cyan-400">
● SCANNER DE IA AO VIVO
</p>

<p className="mt-2 text-sm text-slate-300">

A IA Quantum Xavier está analisando continuamente o
mercado do ouro em tempo real.

</p>

</div>

</div>

<BottomNav/>

</div>

)

}
