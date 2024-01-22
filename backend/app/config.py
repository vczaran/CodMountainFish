import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    MONGO_URI = os.environ.get('MONGODB_URI')
    MONGO_DBNAME = os.environ.get('MONGODB_DBNAME')
    MONGO_CONNECT = False  # Set to True if you want to connect immediately

    # Additional configurations for Flask-PyMongo (optional)
    # MONGO_OPTIONS = {
    #     'appname': 'your_app_name',
    #     'retryWrites': True,
    #     # Add more options as needed
    # }
