export async function getMarketPrices(){

const prices:any[] = []

// BTC
try{

const btc = await fetch(
"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
)

const btcData = await btc.json()

prices.push({
symbol:"BTCUSD",
price:parseFloat(btcData.price)
})

}catch{}



// GOLD
try{

const gold = await fetch(
"https://api.metals.live/v1/spot/gold"
)

const goldData = await gold.json()

prices.push({
symbol:"XAUUSD",
price:goldData[0].price
})

}catch{}



// FOREX
try{

const forex = await fetch(
"https://open.er-api.com/v6/latest/USD"
)

const data = await forex.json()

prices.push({
symbol:"EURUSD",
price:1/data.rates.EUR
})

prices.push({
symbol:"GBPUSD",
price:1/data.rates.GBP
})

prices.push({
symbol:"USDJPY",
price:data.rates.JPY
})

prices.push({
symbol:"EURJPY",
price:data.rates.JPY/data.rates.EUR
})

}catch{}

return prices

  }
