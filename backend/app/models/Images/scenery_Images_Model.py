from datetime import datetime
from ..db import db
from ..crud_Model import CRUD


class Scenery_Image(CRUD):

    collection_name = "Scenery_Image"

    # Table Columns
    def __init__(self, name, url, alt):
        self.name = name
        self.url = url
        self.alt = alt
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
