from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from ..models import user_Model
from ..models.db import db
from werkzeug.security import generate_password_hash, check_password_hash






def user_exists(form, field):
    # Checking if user exists
    email = field.data
    # user = User.query.filter(User.email == email).first()
    user = db.db.User.find({"email": email})
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    # user = User.query.filter(User.email == email).first()
    print("EEEEEEMAIIIIL: ", email)
    user = db.db.User.find_one({"email": email})
    print("USER: ", user["password"], password)

    if not user:
        raise ValidationError('No such user exists.')
    if not check_password_hash(user["password"], password):
        print("bad password")
        raise ValidationError('Password was incorrect.')



class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])
