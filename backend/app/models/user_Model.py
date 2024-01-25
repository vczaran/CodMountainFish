from datetime import datetime
from .db import db


class User:

    collection_name = "User"

    # Table Columns
    def __init__(self, firstName, lastName, phoneNumber, password, size, email, isTrue, admin ):
        self.firstName = firstName
        self.lastName = lastName
        self.phoneNumber = phoneNumber
        self.password = password
        self.size = size
        self.email = email
        self.admin = admin
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        UserCollection = db.db[User.collection_name]
        result = UserCollection.insert_one(self.__dict__)
        return result.inserted_id

    def to_dict(self):
        return {
            "id": str(self._id),
            "firstName": self.firstName,
            "lastName": self.lastName,
            "phoneNumber": self.phoneNumber,
            "password": self.password,
            "size": self.age,
            "email": self.email,
            "admin": self.admin,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
