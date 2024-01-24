from datetime import datetime
from .db import db


class Text:

    collection_name = "Text"

    # Table Columns
    def __init__(self, page, Section, Images):
        self.page = page
        self.Section = Section
        self.Images = Images
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        TextCollection = db.db[Text.collection_name]
        result = TextCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "page": self.page,
            "Section": self.Section,
            "Images": self.Images,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
