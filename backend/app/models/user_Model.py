from flask import jsonify
from datetime import datetime
from flask_login import UserMixin
from .db import db
from .crud_Model import CRUD
from werkzeug.security import generate_password_hash, check_password_hash


class User(CRUD, UserMixin):

    collection_name = "User"
    # Table Columns

    def __init__(self, **kwargs):
        print("KWARGS : ", kwargs)
        self.id = kwargs["id"]
        self.firstName = kwargs["firstName"]
        self.lastName = kwargs["lastName"]
        self.password = generate_password_hash(kwargs["password"])
        self.phoneNumber = kwargs["phoneNumber"]
        self.notes = kwargs["notes"]
        self.size = kwargs["size"]
        self.email = kwargs["email"]
        self.admin = kwargs["admin"]
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def to_dict(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "phoneNumber": self.phoneNumber,
            "notes": self.notes,
            "size": self.size,
            "email": self.email,
            "admin": self.admin,
        }
