from flask import jsonify
from datetime import datetime
from bson import ObjectId
from .db import db


class CRUD:

    def save_One(self, Table):
        print("_______________________")
        print(self.__dict__)
        print(Table)
        print("_______________________")

        collection = db.db[Table]
        result = collection.insert_one(self.__dict__)

        if result:
            return {'Message': f' Item id {str(result.inserted_id)} has been saved in {Table} successfully', "id": str(result.inserted_id)}
        else:
            return {'Message': "Items has not been saved"}

    def save_Many(self, Table, data_list):
        collection = db.db[Table]
        result = collection.insert_many(data_list)
        if result:
            return {'Message': f'Items have been saved in {Table}', f"{Table }s": result.inserted_ids}
        else:
            return {'Message': f'Items have not been saved in {Table}'}

    def get_ById(Table, id):
        collection = db.db[Table]
        item = collection.find_one({"_id": id})
        if item:
            item["_id"] = str(item["_id"])
            return {'Message': f'{Table } retrieved successfully', f"{Table}": item}
        else:
            return {'Message': f'{Table} not found'}, 404

    def get_All(Table):
        collection = db.db[Table]
        cursor = collection.find()
        items = list(cursor)
        if items:
            for item in items:
                item['_id'] = str(item['_id'])
            return {'Message': f'{Table } retrieved successfully', f"{Table }s": items}
        else:
            return {'Message': f'{Table} not found'}, 404

    def get_Aggregate(Table, pipeline):
        collection = db.db[Table]
        cursor = UserCollection.aggregate(pipeline)
        cursor_list = list(cursor)
        if cursor_list:
            for item in cursor_list:
                item['_id'] = str(item['_id'])
            return {'Message': 'Aggregation successful', 'Cursor': cursor_list}
        else:
            return {'Message': 'No results found'}, 404

    def put_Update(Table, id, updated_data):
        collection = db.db[Table]
        current_item = collection.find_one({"_id": ObjectId(id)})
        if current_item:
            result = collection.update_one(
                {"_id": ObjectId(id)}, {"$set": updated_data})
            if result.modified_count > 0:
                return {'Message': f'{Table} updated successfully'}
        else:
            return {'Message': f'{Table} not found'}, 404

    def delete(Table, id):
        collection = db.db[Table]
        current_item = collection.find_one({"_id": ObjectId(id)})
        if current_item:
            collection.delete_one({"_id": ObjectId(id)})
            return {'Message': f'{Table} has been Deleted'}
        else:
            return {'Message': f'{Table} not found'}, 404
