"use client"

export default function GoldChart(){

return(

<div className="w-full h-[500px] rounded-xl overflow-hidden">

<iframe
src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=5&hidesidetoolbar=1&theme=dark"
className="w-full h-full border-0"
/>

</div>

)

}
