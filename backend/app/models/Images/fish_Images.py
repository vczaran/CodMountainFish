from datetime import datetime
from .db import db


class Fish_Image:

    collection_name = "Fish_Image"

    # Table Columns
    def __init__(self, name, url, alt):
        self.name = name
        self.url = url
        self.alt = alt
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        Fish_ImageCollection = db.db[Fish_Image.collection_name]
        result = Fish_ImageCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "name": self.name,
            "alt": self.alt,
            "url": self.url,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
