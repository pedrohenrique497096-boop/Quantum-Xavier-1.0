import "./globals.css"

export const metadata = {
title:"Quantum Xavier AI",
description:"AI Trading Assistant"
}

export default function RootLayout({
children
}:{children:React.ReactNode}){

return(

<html lang="en">

<body>

{children}

</body>

</html>

)

}
