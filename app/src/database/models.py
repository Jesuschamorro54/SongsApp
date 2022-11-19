import json
from config import fields

class Song:

    def __init__(self, data: dict):
        self.name = data.pop('name')
        self.author  = data.pop('author', '')
        self.image = data.pop('image', '')
        self.date = data.pop('date', '')
        self.lyric = data.pop('lyric', '')
        self.lyric_with_chord = data.pop('lyric_with_chord', '')

    def __str__(self):
        data = {
            "name": self.name,
            "author": self.author,
            "image": self.image,
            "date": self.date,
            "lyric": self.lyric,
            "lyric_with_chord": self.lyric_with_chord
        }

        return json.dumps(data)

    def attr(self) -> dict:

        data: dict = {
            "name": self.name,
            "author": self.author,
            "image": self.image,
            "date": self.date,
            "lyric": self.lyric,
            "lyric_with_chord": self.lyric_with_chord
        }

        return (data)


            

