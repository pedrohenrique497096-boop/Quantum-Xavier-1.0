import { NextResponse } from "next/server"
import { getMarketPrices } from "@/lib/marketData"

export async function GET(){

const prices = await getMarketPrices()

return NextResponse.json(prices)

}
