from scanner import run_scanner
import threading

threading.Thread(target=run_scanner, daemon=True).start()
