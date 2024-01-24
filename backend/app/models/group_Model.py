from datetime import datetime
from .db import db

# not needed after all
class Group:

    collection_name = "Group"

    # Table Columns
    def __init__(self, user_Id, size_Of_Group, accommodations):
        self.user_Id = user_Id
        self.size_Of_Group = size_Of_Group
        self.accommodations = accommodations
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        GroupCollection = db.db[Group.collection_name]
        result = GroupCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "user_Id": self.user_Id,
            "size_Of_Group": self.size_Of_Group,
            "accommodations": self.accommodations,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
