import random
import time

signals = []

def analyze_market():

    asset = "BTCUSD"

    entry = random.randint(68000,70000)

    signal = {
        "asset": asset,
        "direction": "BUY",
        "entry": entry,
        "stop": entry-200,
        "take1": entry+200,
        "take2": entry+400,
        "take3": entry+800,
        "confidence": random.randint(70,90),
        "analysis":"Detecção de liquidez institucional e rompimento de estrutura."
    }

    signals.clear()
    signals.append(signal)


def start_scanner():

    while True:

        analyze_market()

        time.sleep(30)
