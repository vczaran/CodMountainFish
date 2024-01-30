from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(CRUD):

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
