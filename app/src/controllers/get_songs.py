import re

from bson.objectid import ObjectId
from ..database.database import search


id_param_name = 'song_id'

execution_message = '''

    Parameters: {0}
'''

def get_songs(request):

    print(" * LOGING IN GET SONGS")

    fields = []
    params = {}
    
    result = {'data': [], 'status': False}

    queryStringParameters = dict(request.args)
    pathParameters = request.view_args

    if pathParameters:
        params.update(dict(request.view_args))

    if queryStringParameters:

        if 'fields' in queryStringParameters:
            fields = queryStringParameters.pop('fields').split("-")
        

        for key, value in queryStringParameters.items():

            try:
                value = int(value)
            except:
                value = re.compile(f'.*{value}.*', re.IGNORECASE) if key == "name" else value
            
            params.update({key: value})

    # change parameter names
    if id_param_name in params:
        params['_id'] = ObjectId(params.pop(id_param_name))

    print(execution_message.format(set(params.keys()) if params else {}))

    songs = []
    songs = search('songs', params, fields)

    if songs:
        result.update({
            'data': songs,
            'status': True,
            'count': len(songs)
        })

    else:
        result.update({
            'error': 'NoFoundException',
            'errorMessage': 'The songs could be found'
        })
    
    return result