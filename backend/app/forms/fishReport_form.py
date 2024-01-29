from flask_wtf import FlaskForm
from wtforms import (DateTimeField, IntegerField, IntegerField)
from wtforms.validators import DataRequired


class FishReportForm(FlaskForm):
    date = DateTimeField("date")
    description = IntegerField("activity")
    images = FileField("booked")
