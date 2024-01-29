from flask_wtf import FlaskForm
from wtforms import (EmailField)
from wtforms.validators import DataRequired


class SubscriberForm(FlaskForm):
    email = EmailField("email")
