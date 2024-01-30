from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User():

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

    def save_One(self):
        UserCollection = db.db[User.collection_name]
        result = UserCollection.insert_one(self.__dict__)
        if result:
            return result.inserted_id
        else:
            return {'Message': 'User was not saved'}, 400

    def save_Many(list):
        UserCollection = db.db[User.collection_name]
        result = UserCollection.insert_many(list)
        if result:
            return result.inserted_id
        else:
            return {'Message': 'User was not saved'}, 400

    def get_UserById(id):
        UserCollection = db.db[User.collection_name]
        user = db.db.User.find_one({"_id": id})
        if user:
            # Convert ObjectId to string for JSON serialization
            user["_id"] = str(user["_id"])
            return {'Message': 'User retrieved successfully', "User": user}
        else:
            return {'Message': 'User not found'}, 404

    def get_AllUser():
        UserCollection = db.db[User.collection_name]
        cursor = UserCollection.find()
        users = list(cursor)
        if users:
            for user in users:
                user['_id'] = str(user['_id'])
            return {'Message': 'User retrieved successfully', "Users": users}
        else:
            return {'Message': 'User not found'}, 404

    def get_Aggregate(pipeline):
        UserCollection = db.db[User.collection_name]
        cursor = UserCollection.aggregate(pipeline)
        cursor_list = list(cursor)
        if cursor_list:
            for item in cursor_list:
                item['_id'] = str(item['_id'])
            return {'Message': 'Aggregation successful', 'Cursor': cursor_list}
        else:
            return {'Message': 'No results found'}, 404

    def put_UserUpdate(id, updatedUser):

        UserCollection = db.db[User.collection_name]
        currentUser = UserCollection.find_one({"_id": ObjectId(id)})
        if currentUser:
            user = UserCollection.update_one(
                {"_id": ObjectId(id)}, {"$set": updatedUser.__dict__})
            if user.modified_count > 0:
                return {'Message': 'User updated successfully'}
        else:
            return {'Message': "User not found"}, 404

    def delete_User(id):

        UserCollection = db.db[User.collection_name]
        currentUser = UserCollection.find_one({"_id": ObjectId(id)})
        if currentUser:
            UserCollection.delete_one({"_id": ObjectId(id)})
            return {'Message': "Success!! User has been Deleted"}
        else:
            return {'Message': "User not found"}

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
