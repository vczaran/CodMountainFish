from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD


class Date(CRUD):

    collection_name = "Date"

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
