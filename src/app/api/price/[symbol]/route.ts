import { NextResponse } from "next/server"

const API_KEY = "1bbb904ae0994fb7b2d120da18c66602"

const symbols = [
"BTCUSD",
"XAUUSD",
"EURUSD",
"GBPUSD",
"USDJPY",
"EURJPY"
]

export async function GET(){

const prices = []

for(const symbol of symbols){

try{

const res = await fetch(
`http://api.marketstack.com/v1/tickers/${symbol}?access_key=${API_KEY}`
)

const data = await res.json()

prices.push({
symbol,
price: data?.last || null
})

}catch{

prices.push({
symbol,
price:null
})

}

}

return NextResponse.json(prices)

}
