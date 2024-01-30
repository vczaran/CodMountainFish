from datetime import datetime
from ..db import db


class Activity_Review:

    collection_name = "Activity_Review"

    # Table Columns
    def __init__(self, user_Id, activity_Id, description, rating, stars):
        self.user_Id = user_Id
        self.activity_Id = activity_Id
        self.description = description
        self.rating = rating
        self.stars = stars
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        Activity_ReviewCollection = db.db[Activity_Review.collection_name]
        result = Activity_ReviewCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "user_Id": self.user_Id,
            "activity_Id": self.activity_Id,
            "description": self.description,
            "rating": self.rating,
            "stars": self.stars,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
