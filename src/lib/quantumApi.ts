const BASE_URL = "https://quantum-xavier-ai-131d.onrender.com"

export const ASSETS = [
  "BTCUSD",
  "XAUUSD",
  "EURUSD",
  "GBPUSD",
  "USDJPY",
  "EURJPY"
]

export type SignalItem = {
  asset: string
  direction?: string
  entry: number
  stop_loss?: number
  stop?: number
  take_profit_1?: number
  take_profit_2?: number
  take_profit_3?: number
  take1?: number
  take2?: number
  take3?: number
  confidence: number
  analysis?: string
  timestamp?: string
}

export async function fetchPrice(symbol: string) {
  const res = await fetch(`${BASE_URL}/price/${symbol}`, { cache: "no-store" })
  const data = await res.json()
  return data
}

export async function fetchAllPrices() {
  const results = await Promise.all(
    ASSETS.map(async (symbol) => {
      try {
        const data = await fetchPrice(symbol)
        return {
          symbol,
          price: Number(data?.price ?? 0)
        }
      } catch {
        return {
          symbol,
          price: 0
        }
      }
    })
  )

  return results
}

export async function fetchSignals(): Promise<SignalItem[]> {
  const res = await fetch(`${BASE_URL}/signals`, { cache: "no-store" })
  const data = await res.json()

  if (!Array.isArray(data)) return []

  return data.map((item: any) => ({
    asset: item.asset,
    direction: item.direction ?? (item.analysis?.toLowerCase().includes("sell") ? "SELL" : "BUY"),
    entry: Number(item.entry ?? 0),
    stop_loss: Number(item.stop_loss ?? item.stop ?? 0),
    take_profit_1: Number(item.take_profit_1 ?? item.take1 ?? 0),
    take_profit_2: Number(item.take_profit_2 ?? item.take2 ?? 0),
    take_profit_3: Number(item.take_profit_3 ?? item.take3 ?? 0),
    confidence: Number(item.confidence ?? 0),
    analysis: item.analysis ?? "",
    timestamp: item.timestamp ?? new Date().toISOString()
  }))
}

export async function fetchChart(symbol: string) {
  const res = await fetch(`${BASE_URL}/chart/${symbol}`, { cache: "no-store" })
  const data = await res.json()
  return data
}

export function saveSignalsToHistory(signals: SignalItem[]) {
  if (typeof window === "undefined") return

  const todayKey = getTodayHistoryKey()
  const current = localStorage.getItem(todayKey)
  const parsed = current ? JSON.parse(current) : []

  const merged = [...signals, ...parsed]

  const unique = merged.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (s) =>
          s.asset === item.asset &&
          s.entry === item.entry &&
          s.timestamp === item.timestamp
      )
  )

  localStorage.setItem(todayKey, JSON.stringify(unique.slice(0, 300)))
}

export function getTodayHistory() {
  if (typeof window === "undefined") return []
  const todayKey = getTodayHistoryKey()
  const current = localStorage.getItem(todayKey)
  return current ? JSON.parse(current) : []
}

function getTodayHistoryKey() {
  const now = new Date()
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
  return `quantum-history-${key}`
}
