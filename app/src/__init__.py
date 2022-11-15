from flask import Flask


def create_app():
    app = Flask(__name__)
    
    # Registro de los Blueprints
    from .views import views
    app.register_blueprint(views)


    return app