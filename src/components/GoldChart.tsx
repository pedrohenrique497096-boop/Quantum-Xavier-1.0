"use client"

import { useEffect, useRef } from "react"

export default function GoldChart(){

const container = useRef<HTMLDivElement>(null)

useEffect(()=>{

if(!container.current) return

container.current.innerHTML = ""

const script = document.createElement("script")
script.src = "https://s3.tradingview.com/tv.js"
script.async = true

script.onload = () => {

new (window as any).TradingView.widget({

autosize:true,

symbol:"OANDA:XAUUSD",

interval:"5",

timezone:"Etc/UTC",

theme:"dark",

style:"1",

locale:"en",

toolbar_bg:"#020617",

enable_publishing:false,

hide_top_toolbar:false,

save_image:false,

container_id:"gold_chart"

})

}

container.current.appendChild(script)

},[])

return(

<div className="w-full">

<div id="gold_chart" className="h-[420px] w-full"/>

</div>

)

  }
