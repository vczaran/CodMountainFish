from datetime import datetime
from .db import db
from .crud_Model import CRUD

class Recipe(CRUD):

    collection_name = "Recipe"

    # Table Columns
    def __init__(self, name, description, cook_Time):
        self.name = name
        self.description = description
        self.cook_Time = cook_Time
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
