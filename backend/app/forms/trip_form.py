from flask_wtf import FlaskForm
from wtforms import (DateTimeField, BooleanField,
                     IntegerField, StringField, EmailField)
from wtforms.validators import DataRequired


class TripForm(FlaskForm):
    name = StringField("name")
    price = IntegerField("price")
    duration = IntegerField("duration")
    description = StringField("description")
    availability = IntegerField("availability")
    minimumGuest = IntegerField("minimumGuest")
    maximumGuest = IntegerField("maximumGuest")
