import logging
import pymysql
import enviormentdb as environ

# declare a logger
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def connect_db():
    """
    ### connect
    @params `db` : diccionario que contiene los parametros para realizar la coneccion a la base de datos
    
    @return `connection`       
    """
    connection, cursor = None
    
    # MySQL database connection data
    params = {
        'host': environ.DB_ENDPOINT,
        'user': environ.DB_USER,
        'password': environ.DB_PASSWORD,
        'db': environ.DB_NAME,
        'connect_timeout': 2,
        'cursorclass': pymysql.cursors.DictCursor,
    }

    # connect to the MySQL database
    try:
        connection = pymysql.connect(**params)
    except pymysql.MySQLError as e:
        logger.critical('Could not connect to MySQL instance. {}'.format(e))
        
    
    return connection


def execute_query(query, rw = False):
    
    data = {}
    
    conn = connect_db(rw)
    
    try:
        with conn.cursor() as cursor:

            cursor.execute(query)
            data = cursor.lastrowid if rw and ('SELECT' not in query) else cursor.fetchall()
                
            if rw:
                conn.commit()

    except Exception as e:
        logger.error('ERROR: Could not execute SQL query. {}'.format(e))
        data = {}  
    return data


def search():
    pass


def insert():
    pass


def update():
    pass

