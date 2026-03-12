from fastapi import FastAPI
from ia.scanner import signals, analyze_market
import threading
import time

app = FastAPI()

@app.get("/signals")
def get_signals():
    return signals


def scanner_loop():

    while True:

        analyze_market()

        time.sleep(20)


thread = threading.Thread(target=scanner_loop)

thread.start()
