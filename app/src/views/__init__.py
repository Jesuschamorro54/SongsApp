from flask import Blueprint

views_bp = Blueprint('public', __name__, template_folder='templates')

from . import routes