from fastapi import FastAPI
from ai.scanner import generate_signals

app = FastAPI()

@app.get("/signals")
def get_signals():
    return generate_signals()
