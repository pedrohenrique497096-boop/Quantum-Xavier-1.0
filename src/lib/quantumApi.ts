export async function fetchAllPrices(){

try{

const res = await fetch("https://api.metals.live/v1/spot/gold")

const data = await res.json()

return [
{
symbol:"XAUUSD",
price:data[0].price
}
]

}catch{

return [
{
symbol:"XAUUSD",
price:null
}
]

}

}
