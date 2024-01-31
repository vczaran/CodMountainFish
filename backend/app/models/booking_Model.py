from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db
from .crud_Model import CRUD


class Booking(CRUD):

    collection_name = "Booking"

    # Table Columns

    def __init__(self, date, tripType, phoneNumber, status, partySize, firstName, lastName, paid, email ):
        self.date = date
        self.tripType = tripType
        self.phoneNumber = phoneNumber
        self.status = status
        self.partySize = partySize
        self.firstName = firstName
        self.lastName = lastName
        self.paid = paid
        self.email = email
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
