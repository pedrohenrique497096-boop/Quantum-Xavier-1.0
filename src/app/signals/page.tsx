"use client"

import BottomNav from "@/components/BottomNav"

export default function Signals(){

return(

<div className="min-h-screen bg-slate-950 pb-24 text-white">

<div className="mx-auto max-w-md p-4">

<h1 className="mb-6 text-3xl font-bold">
Sinais
</h1>

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

<p className="text-lg font-semibold">
XAUUSD • BUY
</p>

<p className="mt-2 text-sm text-slate-400">
Confiança 81 %
</p>

<div className="mt-4 grid grid-cols-2 gap-3 text-sm">

<p>Entrada: 5178</p>
<p>Parada: 5172</p>

<p>TP1: 5185</p>
<p>TP2: 5192</p>

<p>TP3: 5200</p>

</div>

<p className="mt-4 text-sm text-slate-300">

Liquidity grab detectado abaixo do suporte.
Possível continuação de alta no ouro.

</p>

</div>

</div>

<BottomNav/>

</div>

)

  }
