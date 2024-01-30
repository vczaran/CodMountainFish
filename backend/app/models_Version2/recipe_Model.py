from datetime import datetime
from .db import db


class Recipe:

    collection_name = "Recipe"

    # Table Columns
    def __init__(self, name, description, cook_Time):
        self.name = name
        self.description = description
        self.cook_Time = cook_Time
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        RecipeCollection = db.db[Recipe.collection_name]
        result = RecipeCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "name": self.name,
            "description": self.description,
            "cook_Time": self.cook_Time,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
