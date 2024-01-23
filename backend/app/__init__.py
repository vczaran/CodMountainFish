import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_pymongo import PyMongo
from .config import Config
from pymongo.server_api import ServerApi
# Api routes
from .api.example_routes import example_routes


# app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')
app = Flask(__name__)


# Tell flask about our app extension
app.config.from_object(Config)
app.register_blueprint(example_routes, url_prefix='/api/example')
# test the environmental variable
print("===========")
mongo_uri = os.environ.get('MONGO_URI')
print(f"MONGO_URI: {mongo_uri}")
print("===========")
# connection to DB
# db = PyMongo(app)

# Application Security
CORS(app)

#  we need to make sure that in production any
# request made over http is redirected to https.
# Well.........


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