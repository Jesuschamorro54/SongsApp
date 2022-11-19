import pymongo
import urllib

from . import enviormentdb as environ
from .config import CustomLogger, encode
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


logger = CustomLogger()


class Database:

    def connect_db(self):

        """
        ### connect
        
        @return `connection`       
        """

        connection = None

        username = urllib.parse.quote_plus(environ.DB_USER)
        password = urllib.parse.quote_plus(environ.DB_PASSWORD)
        
        ENDPOINT = f"mongodb+srv://{username}:{password}@{environ.DB_ENDPOINT}?retryWrites=true&w=majority"

        logger.info(" * Connecting with database...")

        # connect to the Mongo database
        try:
            connection = MongoClient(ENDPOINT, server_api=ServerApi('1'))['songsApp']
            logger.success(" * Successful connection to database")

        except pymongo.errors.PyMongoError as e:
            logger.critical(f" * ERROR: Could not connect to Mongo instance. {e}")
            connection = None

        return connection


def search(table, params=None):

    result = []
    table = connection[table]

    if table != None:
        result  = list(table.find())

    return encode(result)






## Database connection instance
connection = Database().connect_db()


"""
Dame de tu vida y de tu {REm}tiempo, {LAm}Suficientes {LA}para ver |
{FA}Dentro de tus ojos el {REm}momento,  {LAm}Que {LA}me obligue a renacer |
{FA}Dame {REm}vida y dame aliento, {LAm}Que {LA}yo ya perdí el conocimiento |
{LA#}Solo {REm}quédate un momento, {LAm}Hasta {LA}evaporarnos en el viento ||

CORO|
{LA#}No hay {DO}motivos, {FA}Para decirnos {LA}adiós tan pronto |
{LA#}Sigo {DO}vivo, {FA}Créemelo, {LA}mi amor no soy tan tonto |
{LA#}Si tú {DO}quisieras esta {FA}noche, Ir a {LA}bailar un chachachá | 
{LA}Yo {DO}te puedo enamorar||

Dame de tu vida y de tu {REm}tiempo, {LAm}Suficientes {LA}para ver |
{FA}Dentro de tus ojos el {REm}momento,  {LAm}Que {LA}me obligue a renacer |
{FA}Dame {REm}vida y dame aliento, {LAm}Que {LA}yo ya perdí el conocimiento |
{LA#}Solo {REm}quédate un momento, {LAm}Hasta {LA}evaporarnos en el viento ||

"""