from flask import Blueprint, jsonify, session, request
from ..models import db, User
from ..forms import LoginForm
from bson import ObjectId

from flask_login import current_user, login_user, logout_user, LoginManager

auth_routes = Blueprint('auth', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    print("AUTHENTICATE ROUTE")
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_dict = db.db.User.find_one({"email": form.data['email']})
        user_dict["id"] = str(user_dict["_id"])
        user = User(**user_dict)
        print("USER: -> ", user)
        login_user(user, remember=True)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
