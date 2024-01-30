from datetime import datetime
from ..db import db
from ..crud_Model import CRUD


class Activity_Review(CRUD):

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
