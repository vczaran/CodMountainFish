from flask import Blueprint, jsonify, session, request
from bson import ObjectId
from datetime import datetime

from ..models.user_Model import User

from app.models.db import db
# from app.models_Version2.db import db

from ..forms.user_form import UserForm
from flask import current_app as app

user_routes = Blueprint('user', __name__)


@user_routes.route("/new", methods=["POST"])
def new():
    """
    example of new user
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
    return jsonify({"user_id": str(newUser.save_One())})


@user_routes.route('/all', methods=["GET"])
def AllUser():
    """
    get All User
    """
    return User.get_AllUser()


@user_routes.route('/<string:id>', methods=["GET"])
def UserById(id):
    """
    get one user by its Id
    """
    return User.get_UserById(ObjectId(id))


@user_routes.route('/<string:id>', methods=["PUT"])
def UserUpdate(id):
    """
    update user with updated properties
    """
    form = UserForm()

    password = str(form.data.get("password"))

    if password is None:
        # Handle the case where the password is not provided
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
    delete user from database
    """
    return User.delete_User(id)
