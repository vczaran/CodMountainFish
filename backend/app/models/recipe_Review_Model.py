from datetime import datetime
from .db import db


class recipe_Review:

    collection_name = "recipe_Review"

    # Table Columns
    def __init__(self, user_Id, recipe_Id, rating, stars):
        self.user_Id = user_Id
        self.recipe_Id = recipe_Id
        self.rating = rating
        self.stars = stars
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        recipe_ReviewCollection = db.db[recipe_Review.collection_name]
        result = recipe_ReviewCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "user_Id": self.user_Id,
            "recipe_Id": self.recipe_Id,
            "rating": self.rating,
            "stars": self.stars,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
