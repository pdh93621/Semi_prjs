import sys
import json

d = {
    "open": [1, 2, 3, 4],
    "labels": [10, 20, 30, 40]
}

sys.stdout.write(json.dumps(d))