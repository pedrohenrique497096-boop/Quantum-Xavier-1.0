import { NextResponse } from "next/server"

let history:any[]=[]

export async function GET(){

return NextResponse.json(history)

}

export async function POST(req:Request){

const data = await req.json()

history.push(data)

return NextResponse.json({status:"saved"})

}
