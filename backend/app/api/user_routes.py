from flask import Blueprint, jsonify, session, request
from datetime import datetime

from ..models.user_Model import User

user_routes = Blueprint('user', __name__)


@user_routes.route("/new", methods=["POST"])
def new():
    """
    example of new user
    """
    new_User = User(
        # ====== when working with Forms ======
        # name = form.data["name"],
        # date = form.data["date"],
        # isTrue = form.data["isTrue"]
        # ====== sample for database ======
        firstName="Allen",
        lastName="Black",
        password="",
        phoneNumber="",
        notes="",
        size="",
        email="",
        admin=""
    )
    new_User.save()
    return {'Message': 'User saved successfully'}


@user_routes.route('/user', methods=["GET"])
def getUserId():
    """
    get All User
    """
    return User.getAllUser()
