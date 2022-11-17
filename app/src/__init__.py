from flask import Flask

from .routes import api

def create_app():
    app = Flask(__name__)
    
    # Registro de los Blueprints
    app.register_blueprint(api)


    return app