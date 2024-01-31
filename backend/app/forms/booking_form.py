from flask_wtf import FlaskForm
from wtforms import (DateTimeField, BooleanField,
                     IntegerField, StringField, EmailField)
from wtforms.validators import DataRequired


class BookingForm(FlaskForm):
    date = StringField("date")
    tripType = StringField("tripType")
    phoneNumber = IntegerField("phoneNumber")
    status = StringField("status")
    partySize = IntegerField("partySize")
    firstName = StringField("firstName")
    lastName = StringField("lastName")
    paid = BooleanField("paid")
    email = EmailField("email")
    time = StringField("time")
