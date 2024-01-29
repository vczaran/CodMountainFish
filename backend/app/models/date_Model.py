from datetime import datetime
from .db import db


class Date:

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

    def save(self):
        DateCollection = db.db[Date.collection_name]
        result = DateCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "date": self.date,
            "activity_Id": self.activity_Id,
            "booked": self.booked,
            "available_space": self.available_space,
            "group_Id": self.group_Id,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
