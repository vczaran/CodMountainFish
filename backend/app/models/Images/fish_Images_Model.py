from datetime import datetime
from ..db import db
from ..crud_Model import CRUD

class Fish_Image(CRUD):

    collection_name = "Fish_Image"

    # Table Columns
    def __init__(self, name, url, alt):
        self.name = name
        self.url = url
        self.alt = alt
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
