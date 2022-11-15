from flask import abort, render_template

from ..controllers import *
from . import views


@views.route("/")
def index():
    pass


@views.route("/2")
def show_post(slug):
    pass