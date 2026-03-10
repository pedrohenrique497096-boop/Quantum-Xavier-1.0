"use client"

import { useEffect, useState } from "react"
import BottomNav from "@/components/BottomNav"
import { fetchSignals, type SignalItem } from "@/lib/quantumApi"

export default function SignalsPage() {
  const [signals, setSignals] = useState<SignalItem[]>([])

  useEffect(() => {
    fetchSignals().then(setSignals)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 pb-24 text-white">
      <div className="mx-auto max-w-md p-4">
        <h1 className="text-3xl font-bold">Signals</h1>

        <div className="mt-6 space-y-4">
          {signals.map((signal, index) => (
            <div
              key={`${signal.asset}-${index}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">{signal.asset}</p>
                <span className="text-cyan-400">{signal.confidence}%</span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <p>Direction: {signal.direction}</p>
                <p>Entry: {signal.entry?.toFixed(5)}</p>
                <p>Stop: {signal.stop_loss?.toFixed(5)}</p>
                <p>TP1: {signal.take_profit_1?.toFixed(5)}</p>
                <p>TP2: {signal.take_profit_2?.toFixed(5)}</p>
                <p>TP3: {signal.take_profit_3?.toFixed(5)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
