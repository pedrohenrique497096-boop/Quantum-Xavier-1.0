"use client"

import { useEffect, useState } from "react"
import BottomNav from "@/components/BottomNav"
import { fetchSignals, saveSignalsToHistory, type SignalItem } from "@/lib/quantumApi"

export default function ScannerPage() {
  const [signals, setSignals] = useState<SignalItem[]>([])
  const [lastUpdate, setLastUpdate] = useState("")

  async function loadSignals() {
    const data = await fetchSignals()
    setSignals(data)
    saveSignalsToHistory(data)
    setLastUpdate(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    loadSignals()
    const interval = setInterval(loadSignals, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 pb-24 text-white">
      <div className="mx-auto max-w-md p-4">
        <h1 className="text-3xl font-bold">Live Scanner</h1>
        <p className="mt-2 text-sm text-slate-400">
          Quantum Xavier AI signals • Last updated: {lastUpdate || "--:--:--"}
        </p>

        <div className="mt-4 rounded-2xl border border-cyan-500/30 bg-slate-900 p-4">
          <p className="text-cyan-400">● ACTIVE</p>
          <p className="mt-2 text-sm text-slate-300">
            O Quantum Xavier AI está analisando o mercado continuamente.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {signals.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
              <p className="text-xl font-semibold">Waiting for AI Analysis</p>
              <p className="mt-2 text-sm text-slate-400">
                Nenhum sinal ativo no momento.
              </p>
            </div>
          ) : (
            signals.map((signal, index) => (
              <div
                key={`${signal.asset}-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">{signal.asset}</p>
                  <span
                    className={`rounded-lg px-3 py-1 text-sm font-semibold ${
                      signal.direction === "SELL"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {signal.direction}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-800 p-3">
                    <p className="text-slate-400">Entry</p>
                    <p className="font-bold text-cyan-400">{signal.entry?.toFixed(5)}</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-3">
                    <p className="text-slate-400">Confidence</p>
                    <p className="font-bold text-emerald-400">{signal.confidence}%</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-3">
                    <p className="text-slate-400">Stop Loss</p>
                    <p className="font-bold text-red-400">{signal.stop_loss?.toFixed(5)}</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-3">
                    <p className="text-slate-400">Take Profit 1</p>
                    <p className="font-bold text-emerald-400">{signal.take_profit_1?.toFixed(5)}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-300">{signal.analysis}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
