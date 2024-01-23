from flask_wtf import FlaskForm
from wtforms import (StringField, DateTimeField, BooleanField)
from wtforms.validators import DataRequired


class ExampleForm(FlaskForm):
    name = StringField("Name")
    date = DateTimeField("Date")
    isTrue = BooleanField("is it True")
