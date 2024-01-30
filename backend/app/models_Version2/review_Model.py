from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Review(CRUD):

    # Table Columns

    def __init__(self, user_Id, activity_Id, description, rating, stars):

        self.user_Id = user_Id
        self.activity_Id = activity_Id
        self.description = description
        self.rating = rating
        self.stars = stars
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
