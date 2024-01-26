from flask import jsonify
from datetime import datetime
from .db import db

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(UserMixin):

    collection_name = "User"

    # Table Columns


    def __init__(self, firstName, lastName, password, phoneNumber, notes, size, email, admin):
        self.firstName = firstName
        self.lastName = lastName
        self.password = generate_password_hash(password)
        self.phoneNumber = phoneNumber
        self.notes = notes
        self.size = size
        self.email = email
        self.admin = admin
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
    # save the user

    def saveOne(self):
        UserCollection = db.db[User.collection_name]
        result = UserCollection.insert_one(self.__dict__)
        return result.inserted_id

    def saveMany(list):
        UserCollection = db.db[User.collection_name]
        result = UserCollection.insert_many()

    # get All users
    def get_AllUser():
        UserCollection = db.db[User.collection_name]
        cursor = UserCollection.find()
        users = list(cursor)
        if users:
            # Convert ObjectId to string for JSON serialization
            for user in users:
                user['_id'] = str(user['_id'])
            return {'Message': 'User retrieved successfully', "Users": users}
        else:
            return {'Message': 'User not found'}, 404

    # GET user by ID
    def get_UserById(id):
        UserCollection = db.db[User.collection_name]
        user = db.db.User.find_one({"_id": id})
        print("User in route: ", user)
        if user:
            # Convert ObjectId to string for JSON serialization
            user["_id"] = str(user["_id"])
            return {'Message': 'User retrieved successfully', "User": user}
        else:
            return {'Message': 'User not found'}, 404
    # not ready and need error fixed
    def put_UserUpdate(currentUser):
        updated_User = {
            "_id": str(currentUser["_id"]),
            "firstName": currentUser["firstName"],
            "lastName": currentUser["lastName"],
            "password": currentUser["password"],
            "phoneNumber": currentUser["phoneNumber"],
            "password": currentUser["password"],
            "size": currentUser["size"],
            "email": currentUser["email"],
            "admin": currentUser["admin"],
            "size": currentUser["size"],
            "created_at": currentUser["created_at"],
            "updated_at": datetime.utcnow()
        }
        UserCollection = db.db[User.collection_name]
        user = db.db.User.update_one({"$set": {current_user: updated_User}})
        if current_user is user:
            return {'Message': 'User retrieved successfully', "Users": users}
        else:
            return {'Message': 'User not found'}, 404

    def get_id(self):
        return str(self._id)

    def password(self):
        return self.hashed_password

    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(password_hash, password):
        return check_password_hash(password_hash, password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": str(self._id),
            "firstName": self.firstName,
            "lastName": self.lastName,
            "password": self.password,
            "phoneNumber": self.phoneNumber,
            "password": self.password,
            "size": self.size,
            "email": self.email,
            "admin": self.admin,
            "size": self.size,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
