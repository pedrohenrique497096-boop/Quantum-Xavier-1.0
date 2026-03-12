export async function fetchAllPrices() {

try {

const res = await fetch(
`https://api.gold-api.com/price/XAUUSD`
)

const data = await res.json()

return [
{
symbol: "XAUUSD",
price: data.price
}
]

} catch(e) {

return []

}

}
