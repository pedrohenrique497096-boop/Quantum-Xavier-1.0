"use client"

import { useEffect, useState } from "react"
import BottomNav from "@/components/BottomNav"
import { fetchAllPrices } from "@/lib/quantumApi"

export default function Home() {
  const [prices, setPrices] = useState<{ symbol: string; price: number }[]>([])
  const [lastUpdate, setLastUpdate] = useState("")

  async function loadPrices() {
    const data = await fetchAllPrices()
    setPrices(data)
    setLastUpdate(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    loadPrices()
    const interval = setInterval(loadPrices, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 pb-24 text-white">
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-2 text-3xl font-bold">Quantum Xavier AI</h1>
        <p className="mb-4 text-sm text-slate-400">Live prices via Quantum Xavier AI</p>

        <div className="mb-4 rounded-2xl border border-emerald-500/30 bg-slate-900 p-4">
          <p className="text-emerald-400">● MARKETS OPEN</p>
          <p className="mt-2 text-sm text-slate-400">Última atualização: {lastUpdate || "--:--:--"}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {prices.map((p) => (
            <div
              key={p.symbol}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
            >
              <p className="text-lg font-semibold">{p.symbol}</p>
              <p className="mt-3 text-2xl font-bold text-cyan-400">
                {p.price ? p.price.toFixed(5) : "Loading..."}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-slate-900 p-4">
          <p className="text-cyan-400">● AI SCANNER LIVE</p>
          <p className="mt-2 text-sm text-slate-300">
            O Quantum Xavier AI está analisando o mercado continuamente.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
                }
