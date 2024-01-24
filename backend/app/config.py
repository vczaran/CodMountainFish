import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    MONGO_URI = os.environ.get('MONGO_URI')
    MONGO_DBNAME = os.environ.get('MONGO_DBNAME')

    # Additional configurations for Flask-PyMongo (optional)
    # MONGO_OPTIONS = {
    #     'appname': 'your_app_name',
    #     'retryWrites': True,
    #     # Add more options as needed
    # }
