from flask_wtf import FlaskForm
from wtforms import (DateTimeField, BooleanField, IntegerField)
from wtforms.validators import DataRequired


class DateForm(FlaskForm):
    date = DateTimeField("date")
    activity_Id = IntegerField("activity")
    booked = BooleanField("booked")
    available_space = IntegerField("available space")
    group_Id = IntegerField("group")
