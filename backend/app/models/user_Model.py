from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD

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
