export async function fetchAllPrices(){

const symbols = [
"BTCUSD",
"XAUUSD",
"EURUSD",
"GBPUSD",
"USDJPY",
"EURJPY"
]

const prices = await Promise.all(

symbols.map(async(symbol)=>{

const res = await fetch(`/api/price/${symbol}`)
const data = await res.json()

return {
symbol,
price: data.price
}

})

)

return prices

}
