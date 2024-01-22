import os
from flask_pymongo import PyMongo
from pymongo import MongoClient

client = MongoClient(os.environ.get('MONGO_URI'))
db = client['db']

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

print("===========")
mongo_uri = os.environ.get('MONGO_URI')
print(f"MONGO_URI: {mongo_uri}")
print("===========")
