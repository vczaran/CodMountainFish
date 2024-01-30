from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Date(CRUD):

    # Table Columns

    def __init__(self, date, activity_Id, booked, available_space, group_Id):
        self.date = date
        self.activity_Id = activity_Id
        self.booked = booked
        self.available_space = available_space
        self.group_Id = group_Id
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    # def to_dict(self):
    #     return {
    #         "id": str(self._id),
    #         "date": self.date,
    #         "activity_Id": self.activity_Id,
    #         "booked": self.booked,
    #         "available_space": self.available_space,
    #         "created_at": self.created_at,
    #         "updated_at": self.updated_at
    #     }
