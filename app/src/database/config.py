BL = '\033[30m'  # Black
R = '\033[31m'  # Red
G = '\033[32m'  # Green
Y = '\033[33m'  # Yellow
B = '\033[34m'  # Blue
M = '\033[35m'  # Magenta
C = '\033[36m'  # Cian
W = '\033[37m'  # White
RS = '\033[39m'  # Reset


import json

from bson import ObjectId


class CustomLogger:

    def __init__(self) -> None:
        pass
    
    def info(self, message):
        print(f"{Y}{message}{RS}")

    def success(self, message):
        print(f"{G}{message}{RS}")

    def critical(self, message):
        print(f"{R}{message}{RS}")


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)



def encode(data):
    return json.loads(JSONEncoder().encode(data))

fields = {
    'songs': [
        "name",
        "author",
        "image",
        "date",
        "lyric",
        "lyric_with_chor"
    ]
}