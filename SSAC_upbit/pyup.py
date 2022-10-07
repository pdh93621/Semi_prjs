import pyupbit
import sys
import json

graph = {}

choice = sys.argv[1:]

prices = {
    "open": int(choice[1]), 
    "high": int(choice[2]), 
    "low": int(choice[3]), 
    "close": int(choice[4]),
    "volume": 0,
    "value": 0
    }

df = pyupbit.get_ohlcv(choice[0])

for p in df:
    if prices[p]:
        graph[p] = df[p].values
    else: graph[p] = []

graph["xValues"] = df["open"].keys


json_val = json.dumps(graph)
print(graph)
#sys.stdout.write()