from flask import Flask


def create_app():
    app = Flask(__name__)
    
    # Registro de los Blueprints
    from .views import views_bp
    app.register_blueprint(views_bp)


    return app