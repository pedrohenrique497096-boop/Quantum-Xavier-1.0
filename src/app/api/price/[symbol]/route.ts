import { NextResponse } from "next/server"

export async function GET(
req: Request,
{ params }: { params: { symbol: string } }
){

try{

const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,binancecoin&vs_currencies=usd")

const data = await res.json()

const map:any = {

BTCUSD:data.bitcoin.usd,
XAUUSD:data.ethereum.usd,
EURUSD:data.solana.usd,
GBPUSD:data.binancecoin.usd,
USDJPY:data.cardano.usd,
EURJPY:data.ethereum.usd

}

return NextResponse.json({
symbol: params.symbol,
price: map[params.symbol] || 0
})

}catch{

return NextResponse.json({
symbol: params.symbol,
price:0
})

}

}
