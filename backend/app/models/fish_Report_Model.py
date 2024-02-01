from datetime import datetime
from .db import db
from .crud_Model import CRUD


class Fish_Report(CRUD):

    collection_name = "Fish_Report"

    # Table Columns
    def __init__(self, date, description, image):
        self.date = date
        self.description = description
        self.image = image
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
