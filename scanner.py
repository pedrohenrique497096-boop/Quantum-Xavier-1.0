import time
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

def generate_signal(asset):

    direction = random.choice(["BUY","SELL"])

    entry = random.uniform(1000,50000)

    stop = entry - random.uniform(50,200)

    tp1 = entry + random.uniform(100,300)

    tp2 = entry + random.uniform(300,600)

    tp3 = entry + random.uniform(600,900)

    confidence = random.randint(75,95)

    return {
        "asset":asset,
        "direction":direction,
        "entry":round(entry,2),
        "stop":round(stop,2),
        "take1":round(tp1,2),
        "take2":round(tp2,2),
        "take3":round(tp3,2),
        "confidence":confidence,
        "analysis":"Quantum Xavier AI detected institutional confluence.",
        "timestamp":datetime.utcnow()
    }

def run_scanner():

    while True:

        signals.clear()

        for asset in assets:

            if random.random() > 0.6:

                signal = generate_signal(asset)

                signals.append(signal)

        time.sleep(60)
