from flask import jsonify
from datetime import datetime
from .db import db

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User:

    collection_name = "User"

    # Table Columns
    def __init__(self, firstName, lastName, phoneNumber, password, size, email, isTrue, admin):
        self.firstName = firstName
        self.lastName = lastName
        self.password = password
        self.phoneNumber = phoneNumber
        self.password = password
        self.size = size
        self.email = email
        self.admin = admin
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    # save the user
    @staticmethod
    def save(self):
        UserCollection = db.db[User.collection_name]
        result = UserCollection.insert_one(self.__dict__)
        return result.inserted_id

    # get All users
    @staticmethod
    def get_AllUser():
        try:
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
        except PyMongoError as e:
            # Handle MongoDB-related errors
            return {'Message': f'MongoDB Error: {str(e)}'}, 500

        except Exception as e:
            # Handle other unexpected errors
            return {'Message': f'Unexpected Error: {str(e)}'}, 500

    # GET user by ID
    @staticmethod
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

    # @staticmethod
    # def is_authenticated():
    #     return True

    # @staticmethod
    # def is_active():
    #     return True

    # @staticmethod
    # def is_anonymous():
    #     return False

    # def get_id(self):
    #     return str(self._id)

    # @staticmethod
    # def check_password(password_hash, password):
    #     return check_password_hash(password_hash, password)

    # @property
    # def password(self):
    #     return self.hashed_password

    # @password.setter
    # def password(self, password):
    #     self.hashed_password = generate_password_hash(password)

    # def check_password(self, password):
    #     return check_password_hash(self.password, password)
