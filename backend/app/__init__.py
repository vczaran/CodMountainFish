import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
# DataBase Models
from .models import db, user_Model, date_Model, booking_Model
from .models.Images import fish_Images_Model, scenery_Images_Model
from .models.Reviews import activity_Review_Model, recipe_Review_Model
# DataBase Configuration
from flask_pymongo import PyMongo
from .config import Config
from pymongo.server_api import ServerApi
# Api routes
from .api.auth_routes import auth_routes  # not implemented yet
from .api.user_routes import user_routes
from .api.date_routes import date_routes
from .api.review_routes import review_routes
from .api.booking_routes import booking_routes

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'

# Tell flask about our app extension
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/user')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(date_routes, url_prefix='/api/date')
app.register_blueprint(review_routes, url_prefix='/api/review')
app.register_blueprint(booking_routes, url_prefix='/api/booking')
# Application Security
CORS(app)


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route("/api/docs")
def api_help():
    """
    Returns all API routes and their doc strings
    """
    acceptable_methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    route_list = {rule.rule: [[method for method in rule.methods if method in acceptable_methods],
                              app.view_functions[rule.endpoint].__doc__]
                  for rule in app.url_map.iter_rules() if rule.endpoint != 'static'}
    return route_list


# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def react_root(path):
#     """
#     This route will direct to the public directory in our
#     react builds in the production environment for favicon
#     or index.html requests
#     """
#     if path == 'favicon.ico':
#         return app.send_from_directory('public', 'favicon.ico')
#     return app.send_static_file('index.html')


# @app.errorhandler(404)
# def not_found(e):
#     return app.send_static_file('index.html')
