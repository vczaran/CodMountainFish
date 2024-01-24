from datetime import datetime
from .db import db


class Fish_Report:

    collection_name = "Fish_Report"

    # Table Columns
    def __init__(self):
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        Fish_ReportCollection = db.db[Fish_Report.collection_name]
        result = Fish_ReportCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
