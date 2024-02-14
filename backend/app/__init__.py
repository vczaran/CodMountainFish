import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
from bson import ObjectId
# DataBase Models
from .models import db, user_Model, date_Model, booking_Model, trip_Model
from .models.Images import fish_Images_Model, scenery_Images_Model
from .models.Reviews import trip_Review_Model, recipe_Review_Model
from .models.user_Model import User
# DataBase Configuration
from flask_pymongo import PyMongo
from .config import Config
from pymongo.server_api import ServerApi
# Api routes
from .api.fish_report_routes import fish_report_routes
from .api.auth_routes import auth_routes  # not implemented yet
from .api.user_routes import user_routes
from .api.date_routes import date_routes
from .api.review_routes import review_routes
from .api.booking_routes import booking_routes
from .api.trip_routes import trip_routes
app = Flask(__name__, static_folder='../frontend/build', static_url_path='')

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    user_dict = db.db.User.find_one({"_id": ObjectId(id)})
    user_dict["id"] = str(user_dict["_id"])
    user = User(**user_dict)
    return user

# Tell flask about our app extension
app.config.from_object(Config)
# test the environmental variable
print("===========")
mongo_uri = os.environ.get('MONGO_URI')
print(f"MONGO_URI: {mongo_uri}")
print("===========")
# connection to DB
# db = PyMongo(app)

app.register_blueprint(user_routes, url_prefix='/api/user')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(date_routes, url_prefix='/api/date')
app.register_blueprint(review_routes, url_prefix='/api/reviews')
app.register_blueprint(booking_routes, url_prefix='/api/booking')
app.register_blueprint(trip_routes, url_prefix='/api/trip')
app.register_blueprint(fish_report_routes, url_prefix='/api/fish_report')
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

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
