export async function getPrice(symbol:string){

const res = await fetch(`/api/price/${symbol}`)

return res.json()

}
