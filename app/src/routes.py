from flask import abort, render_template
from flask import Blueprint

from .controllers import *

view = Blueprint('views', __name__, template_folder='templates')


@view.route("/")
def index():
    return render_template('index.html')


@view.route("/2")
def show_post(slug):
    pass