from datetime import datetime
from .db import db


class Subscriber:

    collection_name = "Subscriber"

    # Table Columns
    def __init__(self, email ):
        self.email = email
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        SubscriberCollection = db.db[Subscriber.collection_name]
        result = SubscriberCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "email": self.email,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
