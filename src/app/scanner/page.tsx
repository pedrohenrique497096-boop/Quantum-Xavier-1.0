"use client"

import BottomNav from "@/components/BottomNav"

export default function Scanner() {

return(

<div className="min-h-screen bg-slate-950 text-white p-6 pb-24">

<h1 className="text-3xl font-bold mb-6">
Live Scanner
</h1>

<div className="bg-slate-900 p-6 rounded-xl border border-slate-700">

<p className="text-cyan-400">
● SCANNER DE IA AO VIVO
</p>

<p className="mt-2 text-slate-300">
O Quantum Xavier AI está analisando o mercado continuamente.
</p>

</div>

<BottomNav/>

</div>

)

}
