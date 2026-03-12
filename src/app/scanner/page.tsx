"use client"

import BottomNav from "@/components/BottomNav"
import GoldChart from "@/components/GoldChart"

export default function Scanner(){

return(

<div className="min-h-screen bg-slate-950 text-white p-4 pb-24">

<h1 className="text-3xl font-bold mb-6">
Scanner IA — XAUUSD
</h1>

<GoldChart/>

<div className="mt-6 bg-slate-900 border border-slate-800 p-4 rounded-xl">

<p className="text-cyan-400 text-lg mb-2">
Análise de IA Quantum Xavier
</p>

<p className="text-slate-300 text-sm">
A IA está analisando o gráfico do ouro em tempo real,
detectando liquidez, rompimentos de estrutura e possíveis
entradas institucionais.
</p>

</div>

<BottomNav/>

</div>

)

}
