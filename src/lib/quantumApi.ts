export async function fetchAllPrices(){

const res = await fetch("/api/prices")

const data = await res.json()

return data

}
