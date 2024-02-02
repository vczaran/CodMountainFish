from datetime import datetime
from ..db import db
from ..crud_Model import CRUD


class Trip(CRUD):

    collection_name = "Trip"

    # Table Columns
    def __init__(self, name, price, duration, description, availability, minimumGuest, maximumGuest):
        self.name = name
        self.price = price
        self.duration = duration
        self.description = description
        self.availability = availability
        self.minimumGuest = minimumGuest
        self.maximumGuest = maximumGuest
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
