from flask import Flask
from flask_cors import CORS

from .routes import api

def create_app():
    app = Flask(__name__)
    cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    
    # Registro de los Blueprints
    app.register_blueprint(api)


    return app