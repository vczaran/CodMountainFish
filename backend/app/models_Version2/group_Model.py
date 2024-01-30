from datetime import datetime
from .db import db
from .crud_Model import CRUD

# not needed after all


class Group(CRUD):

    collection_name = "Group"

    # Table Columns
    def __init__(self, user_Id, size_Of_Group, accommodations):
        self.user_Id = user_Id
        self.size_Of_Group = size_Of_Group
        self.accommodations = accommodations
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
