import { NextResponse } from "next/server"

export async function GET(
request: Request,
{ params }: { params: { symbol: string } }
){

const price = Math.random()*100000

return NextResponse.json({
symbol: params.symbol,
price: price
})

}
