from datetime import datetime
from .db import db


class Activity:

    collection_name = "Activity"

    # Table Columns
    def __init__(self, name ):
        self.name = name
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        ActivityCollection = db.db[Activity.collection_name]
        result = ActivityCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "name": self.name,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
