import { NextResponse } from "next/server"

export async function GET(
req: Request,
{ params }: { params: { symbol: string } }
){

const map:any = {
BTCUSD:"BTCUSDT",
XAUUSD:"BTCUSDT",
EURUSD:"ETHUSDT",
GBPUSD:"BNBUSDT",
USDJPY:"SOLUSDT",
EURJPY:"ADAUSDT"
}

const symbol = map[params.symbol] || "BTCUSDT"

try{

const res = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)

const data = await res.json()

return NextResponse.json({
symbol: params.symbol,
price: Number(data.price)
})

}catch{

return NextResponse.json({
symbol: params.symbol,
price: 0
})

}

}
