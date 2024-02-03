from flask_wtf import FlaskForm
from wtforms import (IntegerField, StringField)
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    user_Id = IntegerField("user_Id")
    activity_Id = IntegerField("activity_Id")
    description = StringField("description")
    rating = IntegerField("rating")
    stars = IntegerField("stars")
