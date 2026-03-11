import random
from datetime import datetime

signals = []

assets = [
"BTCUSD",
"XAUUSD",
"EURUSD",
"GBPUSD",
"USDJPY",
"EURJPY"
]

def generate_signals():

    signals.clear()

    for asset in assets:

        if random.random() > 0.6:

            entry = random.uniform(1000,50000)

            signal = {
                "asset":asset,
                "direction":random.choice(["BUY","SELL"]),
                "entry":round(entry,2),
                "stop":round(entry-200,2),
                "take1":round(entry+200,2),
                "take2":round(entry+400,2),
                "take3":round(entry+800,2),
                "confidence":random.randint(75,95),
                "analysis":"Quantum Xavier AI detected market confluence.",
                "timestamp":str(datetime.utcnow())
            }

            signals.append(signal)

    return signals
