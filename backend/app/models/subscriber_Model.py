from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD



class Subscriber(CRUD):

    collection_name = "Subscriber"

    # Table Columns
    def __init__(self, email ):
        self.email = email
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
