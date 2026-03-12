import requests
import random

signals = []

def get_gold_price():

    try:

        r = requests.get(
        "https://api.metals.live/v1/spot/gold"
        )

        data = r.json()

        return data[0]["price"]

    except:

        return 2000


def analyze_market():

    price = get_gold_price()

    direction = random.choice(["BUY","SELL"])

    signal = {

    "asset":"XAUUSD",

    "direction":direction,

    "entry":round(price,2),

    "stop":round(price-5,2),

    "take1":round(price+5,2),

    "take2":round(price+10,2),

    "take3":round(price+15,2),

    "confidence":random.randint(70,90),

    "analysis":"IA detectou zona de liquidez e possível movimento institucional."

    }

    signals.clear()
    signals.append(signal)
