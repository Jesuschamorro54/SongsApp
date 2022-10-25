from flask import abort, render_template

from . import views_bp


@views_bp.route("/")
def index():
    pass


@views_bp.route("/2")
def show_post(slug):
    pass