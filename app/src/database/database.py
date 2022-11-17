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