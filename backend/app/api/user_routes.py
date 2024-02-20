from flask import Blueprint, jsonify, session, request
from bson import ObjectId
from datetime import datetime

from ..models.user_Model import User
from ..models.db import db

from ..forms.user_form import UserForm
from flask import current_app as app

user_routes = Blueprint('user', __name__)


@user_routes.route("/new", methods=["POST"])
def new():
    """
    Create a new user.

    The form should contain the following fields:
        - firstName: First name of the user.
        - lastName: Last name of the user.
        - password: User's password (required).
        - phoneNumber: User's phone number.
        - notes: Additional notes or comments about the user.
        - size: User's size information.
        - email: User's email address.
        - admin: Boolean indicating whether the user has admin privileges.

    Returns:
        - JSON: {"user_id": "<new_user_id>"}
        - Error message if it is not created
    """
    form = UserForm()

    password = str(form.data.get("password"))
    if password is None:
        return jsonify({"error": "Password is required"}), 400

    newUser = User(
        firstName=form.data.get("firstName"),
        lastName=form.data.get("lastName"),
        password=password,
        phoneNumber=form.data.get("phoneNumber"),
        notes=form.data.get("notes"),
        size=form.data.get("size"),
        email=form.data.get("email"),
        admin=form.data.get("admin")
    )
    return jsonify({"user_id": str(newUser.save_One("User"))})


@user_routes.route('/all', methods=["GET"])
def AllUser():
    """
    Retrieves a list of all users.

    Returns:
        - JSON: A JSON response containing the information of all users.
        - Error message if the users are not found.
    """
    return User.get_AllUser()


@user_routes.route('/<string:id>', methods=["GET"])
def UserById(id):
    """
    Retrieve a user by their unique ID.

    Parameters:
    - id (str): The unique identifier of the user.

    Returns:
        - user_data (dict): A dictionary containing user information
        - Error message if the user with the specified ID is not found.
    """
    return User.get_UserById(ObjectId(id))


@user_routes.route('/<string:id>', methods=["PUT"])
def UserUpdate(id):
    """
    Update user with provided properties.

    Parameters:
    - id (str): User ID to identify the user to be updated.

    The form should contain the following fields:
        - firstName: First name of the user.
        - lastName: Last name of the user.
        - password: User's password (required).
        - phoneNumber: User's phone number.
        - notes: Additional notes or comments about the user.
        - size: User's size information.
        - email: User's email address.
        - admin: Boolean indicating whether the user has admin privileges.

    Returns:
        - JSON: {"user_id": "<user_id>"}
        - Error message if it is not updated
    """
    form = UserForm()

    password = str(form.data.get("password"))

    if password is None:
        return jsonify({"error": "Password is required"}), 400

    updateUser = User(
        firstName=form.data.get("firstName"),
        lastName=form.data.get("lastName"),
        password=password,
        phoneNumber=form.data.get("phoneNumber"),
        notes=form.data.get("notes"),
        size=form.data.get("size"),
        email=form.data.get("email"),
        admin=form.data.get("admin")
    )
    return User.put_UserUpdate(id, updateUser)


@user_routes.route('/<string:id>', methods=["DELETE"])
def DeleteUser(id):
    """
    Deletes a user from the database.

    Parameters:
        - id (str): User ID to identify the user to be deleted.

    Returns:
        - Success message if deleted
        - Error message if it is not deleted

    """
    return User.delete_User(id)
