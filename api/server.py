from fastapi import FastAPI
from ia.scanner import signals, start_scanner
import threading

app = FastAPI()

@app.get("/signals")
def get_signals():
    return signals


def run_scanner():
    start_scanner()


thread = threading.Thread(target=run_scanner)
thread.start()
