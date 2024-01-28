from datetime import datetime
from .db import db


class Subscriber:

    collection_name = "Subscriber"

    # Table Columns
    def __init__(self, email ):
        self.email = email
        # properties only initialized here
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    @classmethod
    def save_One(self):
        SubscriberCollection = db.db[Subscriber.collection_name]
        result = SubscriberCollection.insert_one(self.__dict__)
        return result.inserted_id

    @classmethod
    def get_AllSubscribers():
        SubscriberCollection = db.db[Subscriber.collection_name]
        subscribers = SubscriberCollection.findAll();
        if subscribers :
            return {'Message': 'Subscriber retrieved successfully', "Subscribers": subscribers}
        else:
            return {'Message': 'Subscriber not found'}, 404

    @classmethod
    def get_SubscriberById(id):
        SubscriberCollection = db.db[Subscriber.collection_name]
        subscriber = db.db.Subscriber.find_one({"_id": id})
        if subscriber:
            user["_id"] = str(subscriber["_id"])
            return {'Message': 'Subscriber retrieved successfully', "Subscriber": subscriber}
        else:
            return {'Message': 'Subscriber not found'}, 404

    @classmethod
    def put_SubscriberUpdate(id,updatedSubscriber):
        SubscriberCollection = db.db[Subscriber.collection_name]
        currentSubscriber = SubscriberCollection.find_one({"_id": ObjectId(id)})
        if currentSubscriber:
            subscriber = SubscriberCollection.update_one({"_id": ObjectId(id)}, {"$set": updatedSubscriber.__dict__})
            if Subscriber.modified_count > 0:
                return {'Message': 'Subscriber updated successfully'}
        else:
            return {'Message': "Subscriber not found"},404

    @classmethod
    def delete_Subscriber(id):
        SubscriberCollection = db.db[Subscriber.collection_name]
        currentSubscriber = SubscriberCollection.find_one({"_id": ObjectId(id)})
        if currentSubscriber:
            SubscriberCollection.delete_one({"_id":ObjectId(id)})
            return {'Message':"Subscriber has been Deleted"}
        else:
            return {'Message':"Subscriber not found"}

    def to_dict(self):
        return {
            "id": str(self._id),
            "email": self.email,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
