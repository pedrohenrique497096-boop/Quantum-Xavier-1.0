"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { href: "/", label: "Home" },
  { href: "/scanner", label: "Scanner" },
  { href: "/signals", label: "Signals" },
  { href: "/history", label: "History" },
  { href: "/statistics", label: "Stats" }
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-3">
        {items.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-3 py-2 text-sm ${
                active ? "bg-cyan-500/20 text-cyan-400" : "text-slate-400"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
