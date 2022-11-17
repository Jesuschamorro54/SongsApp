import json
from flask import abort, render_template, jsonify
from flask import Blueprint

from .database.database import search

api = Blueprint('api', __name__)

root_path = "/api"



@api.route(f"{root_path}/songs")
def all_songs():

    songs = []
    result = {'data': [], 'status': False}

    # songs = search('songs')

    if songs:
        result.update({
            'data': songs,
            'status': True
        })

    else:
        result.update({
            'error': 'NoFoundException',
            'errorMessage': 'The songs could be found'
        })

    return result


@api.route(f"{root_path}/songs/<song_id>")
def unique_song(song_id):
    songs = []
    songs = search('songs')
