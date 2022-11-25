import re

from bson.objectid import ObjectId
from ..database.database import search


id_param_name = 'author_id'
execution_message = '''

    Parameters: {0}
'''

def get_authors(request, is_search=False):

    print(" * LOGING IN GET AUTHORS")


    try:
        fields = []
        params = {}
        
        queryStringParameters = dict(request.args)
        pathParameters = request.view_args

        if pathParameters:
            params.update(dict(request.view_args))

        if queryStringParameters:

            if 'fields' in queryStringParameters:
                fields = queryStringParameters.pop('fields').split(",")
            

            for key, value in queryStringParameters.items():

                try:
                    value = int(value)
                except:
                    value = re.compile(f'.*{value}.*', re.IGNORECASE) if key == "name" and not is_search else re.compile(f'{value} .*', re.IGNORECASE)
                
                params.update({key: value})

        # change parameter names
        if id_param_name in params:
            params['_id'] = ObjectId(params.pop(id_param_name))

        if is_search:
            params['name']

        print(execution_message.format(set(params.keys() if params else {})))
    except KeyError as error:
        return {
            'status': False, 
            'result': 'InsufficientParametersException',
            'errorMessage': 'You passed insufficient parameters to this function.',
            'Expected parameters': "name"
        }

    result = {'data': [], 'status': False}

    songs = []
    songs = search('authors', params, fields)

    if songs:
        result.update({
            'data': songs,
            'status': True,
            'count': len(songs)
        })

    else:
        result.update({
            'error': 'NoFoundException',
            'errorMessage': 'The authors could be found'
        })
    
    return result