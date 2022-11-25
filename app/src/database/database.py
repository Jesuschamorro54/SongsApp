import pymongo
import urllib


from . import enviormentdb as environ
from .config import CustomLogger, encode, fields as ModelFields

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


def search(table, params={}, fields = []):

    result = []
    query_fields = {}

    # Filter fields
    for field in fields:
        if field in ModelFields[table]:
            query_fields.update({field: 1})

    table = connection[table]

    # print("searching params: ", params)

    if table != None:
        result  = list(table.find(params, query_fields))

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
"""
llegaste a mi como un sol <br>despejando el cielo gris <br>y tu luz alumbro <br>donde nadie pudo entrar <br>donde había oscuridad <br>ahora estas tú <br><br>todo es perfecto en verdad <br>nada tengo que inventar <br>eres vida, eres mas <br>de lo que siempre soñé <br>necesito de tu fe <br>para entender <br><br><br><b>CORO<b> <br><br>como me cambio de piel <br>y como vuelvo a nacer <br>como le puedo explicar al corazón <br>que no hay peligro al creer en este amor<br><br>como se puede romper <br>el miedo eterno a caer <br>como le puedo enseñar a la razón <br>que equivocarse es humano <br>y es necesario el dolor <br>ven ayúdame a aprender eh eh<br>como me cambio de piel <br><br><br>perdóname si no se <br>caminar sin tropezar <br>es difícil burlar <br>los temores del ayer <br>necesito de tu fe <br>para entender <br><br><br><b>CORO<b> <br><br>como me cambio de piel <br>y como vuelvo a nacer <br>como le puedo explicar al corazón <br>que no hay peligro al creer en este amor <br>como se puede romper <br>el miedo eterno a caer<br>como le puedo enseñar a la razón<br>que equivocarse es humano<br>y es necesario el dolor<br>ven ayúdame a aprender<br>como me cambio de piel<br><br><br>eso! <br><br>y como cambio, como cambio de piel <br>como vuelvo a nacer <br><br>dime tu como le hablo <br>como le digo, como le hago entender<br><br>como cambio, como cambio de piel<br><br>dime como cambio, es que no se<br>liberame los temores del ayer<br>ayudame<br>ayudame<br><br>hay vida mia ven ayudame<br>te necesito ven ayúdame<br>como cambio, y como cambio<br>como me cambio de piel<br>y como vuelvo a nacer<br>no hay peligro al creer, en el amor<br>
"""