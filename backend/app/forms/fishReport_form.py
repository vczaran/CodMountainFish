from flask_wtf import FlaskForm
from wtforms import DateTimeField, IntegerField, IntegerField, FileField, StringField
from wtforms.validators import DataRequired


class FishReportForm(FlaskForm):
    date = StringField("date")
    description = StringField("activity")
    images = FileField("booked")
