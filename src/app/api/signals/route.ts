import { NextResponse } from "next/server"

export async function GET() {

const assets = [
"BTCUSD",
"XAUUSD",
"EURUSD",
"GBPUSD",
"USDJPY",
"EURJPY"
]

const signals = assets
.filter(()=>Math.random() > 0.6)
.map(asset => {

const entry = Math.random() * 50000

return {
asset,
direction: Math.random() > 0.5 ? "BUY" : "SELL",
entry: Number(entry.toFixed(2)),
stop: Number((entry-200).toFixed(2)),
take1: Number((entry+200).toFixed(2)),
take2: Number((entry+400).toFixed(2)),
take3: Number((entry+800).toFixed(2)),
confidence: Math.floor(75 + Math.random()*20),
analysis:"Quantum Xavier AI detected institutional confluence."
}

})

return NextResponse.json(signals)

  }
