from datetime import datetime
from .db import db


class Example:

    collection_name = "Example"

    # Table Columns
    def __init__(self, name, date, isTrue):
        self.name = name
        self.date = date
        self.isTrue = isTrue
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        ExampleCollection = db.db[Example.collection_name]
        result = ExampleCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "name": self.name,
            "date": self.date,
            "isTrue": self.isTrue,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
