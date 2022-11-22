import json
import re
from flask import abort, render_template, jsonify, request
from flask import Blueprint

from  .controllers.get_authors import get_authors
from .controllers.get_songs import get_songs

api = Blueprint('api', __name__)

root_path = "/api"

@api.route(f"{root_path}/search")
def search():

    result = get_authors(request, True)
    
    if not result['status']:
        result = get_songs(request)

    return result


@api.route(f"{root_path}/songs", methods=['GET'])
def all_songs():

    """
        This function or route returns all the songs in the database
            
            The fields that are required to be consulted must be sent by 
            query parameters separated by commas and with the fields attribute

                -> ?fields=field1,field2,field3

            If you want to filter the search you can do it through the 
            field you want to filter and its value

                -> ?name='example' or &name='example'
    """
    result = get_songs(request)

    return result


@api.route(f"{root_path}/songs/<song_id>")
def unique_song(song_id):
    pass


