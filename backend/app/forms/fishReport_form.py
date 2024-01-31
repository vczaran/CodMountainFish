from flask_wtf import FlaskForm
from wtforms import DateTimeField, IntegerField, IntegerField, FileField, StringField, DateField
from wtforms.validators import DataRequired


class FishReportForm(FlaskForm):
    date = StringField("date")
    description = StringField("description")
    images = StringField("images")
