from flask import Flask

from .routes import view

def create_app():
    app = Flask(__name__)
    
    # Registro de los Blueprints
    app.register_blueprint(view)


    return app