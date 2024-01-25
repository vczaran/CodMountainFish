from flask import Blueprint, jsonify, session, request
from bson import ObjectId
from datetime import datetime

from ..models.user_Model import User
from app.models.db import db

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
