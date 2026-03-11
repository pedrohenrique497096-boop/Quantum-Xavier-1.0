useEffect(()=>{

function load(){

fetch("/api/signals")
.then(res=>res.json())
.then(data=>setSignals(data))

}

load()

const interval = setInterval(load,15000)

return ()=>clearInterval(interval)

},[])
