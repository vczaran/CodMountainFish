from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField, PasswordField,EmailField)
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import user_Model
from app.models.db import db


class UserForm(FlaskForm):
    firstName = StringField("firstName", validators=[DataRequired()])
    lastName = StringField("lastName", validators=[DataRequired()])
    password = PasswordField("password", validators=[DataRequired()])
    phoneNumber = IntegerField("phoneNumber", validators=[DataRequired()])
    notes = StringField("notes", validators=[DataRequired()])
    size = IntegerField("size", validators=[DataRequired()])
    email = EmailField("email", validators=[DataRequired(), Email()])
    admin = BooleanField("admin")
