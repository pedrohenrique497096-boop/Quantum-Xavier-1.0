import { NextResponse } from "next/server"

export async function GET(){

const signals = [

{
asset:"BTCUSD",
direction:"BUY",
entry:28420,
stop:28220,
take1:28620,
take2:28820,
take3:29220,
confidence:81,
analysis:"Liquidity grab detected near support. Possible bullish continuation."
}

]

return NextResponse.json(signals)

}
