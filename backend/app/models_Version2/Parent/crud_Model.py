from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db


class CRUD:

    @classmethod
    def save_One(cls, data):
        collection = db.db[cls.collection_name]
        result = collection.insert_one(data)
        if result:
            return {'Message': f' Item id {result.inserted_id} has been saved in {cls.collection_name} successfully', "id": result.inserted_id}
        else:
            return {'Message': "Items has not been saved"}

    @classmethod
    def save_Many(cls, data_list):
        collection = db.db[cls.collection_name]
        result = collection.insert_many(data_list)
        if result:
            return {'Message': f'Items have been saved in {cls.collection_name}', f"{cls.collection_name}s": result.inserted_ids}
        else:
            return {'Message': f'Items have not been saved in {cls.collection_name}'}

    @classmethod
    def get_ById(cls, id):
        collection = db.db[cls.collection_name]
        item = collection.find_one({"_id": id})
        if item:
            item["_id"] = str(item["_id"])
            return {'Message': f'{cls.collection_name} retrieved successfully', f"{cls.collection_name}": item}
        else:
            return {'Message': f'{cls.collection_name} not found'}, 404

    @classmethod
    def get_All(cls):
        collection = db.db[cls.collection_name]
        cursor = collection.find()
        items = list(cursor)
        if items:
            for item in items:
                item['_id'] = str(item['_id'])
            return {'Message': f'{cls.collection_name} retrieved successfully', f"{cls.collection_name}s": items}
        else:
            return {'Message': f'{cls.collection_name} not found'}, 404

    @classmethod
    def get_Aggregate(cls, pipeline):
        UserCollection = db.db[cls.collection_name]
        cursor = UserCollection.aggregate(pipeline)
        cursor_list = list(cursor)
        if cursor_list:
            for item in cursor_list:
                item['_id'] = str(item['_id'])
            return {'Message': 'Aggregation successful', 'Cursor': cursor_list}
        else:
            return {'Message': 'No results found'}, 404

    @classmethod
    def put_Update(cls, id, updated_data):
        collection = db.db[cls.collection_name]
        current_item = collection.find_one({"_id": ObjectId(id)})
        if current_item:
            result = collection.update_one(
                {"_id": ObjectId(id)}, {"$set": updated_data})
            if result.modified_count > 0:
                return {'Message': f'{cls.collection_name} updated successfully'}
        else:
            return {'Message': f'{cls.collection_name} not found'}, 404

    @classmethod
    def delete(cls, id):
        collection = db.db[cls.collection_name]
        current_item = collection.find_one({"_id": ObjectId(id)})
        if current_item:
            collection.delete_one({"_id": ObjectId(id)})
            return {'Message': f'{cls.collection_name} has been Deleted'}
        else:
            return {'Message': f'{cls.collection_name} not found'}, 404
