import { NextResponse } from "next/server"

const API_KEY = "1bbb904ae0994fb7b2d120da18c66602"

export async function GET(
req: Request,
{ params }: { params: { symbol: string } }
){

const map:any = {
BTCUSD:"BTC/USD",
XAUUSD:"XAU/USD",
EURUSD:"EUR/USD",
GBPUSD:"GBP/USD",
USDJPY:"USD/JPY",
EURJPY:"EUR/JPY"
}

const symbol = map[params.symbol]

try{

const res = await fetch(
`https://api.twelvedata.com/price?symbol=${symbol}&apikey=${API_KEY}`
)

const data = await res.json()

return NextResponse.json({
symbol: params.symbol,
price: Number(data.price)
})

}catch{

return NextResponse.json({
symbol: params.symbol,
price:0
})

}

}
