from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import user_Model
from app.models.db import db






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
    print("&&&&&&&&&&&&&&&&&&&& log in form, user: ", user)
    print("password----- ", user["password"])
    if not user:
        raise ValidationError('No such user exists.')
    # if not user.check_password(password):
    #     raise ValidationError('Password was incorrect.')
    if not user["password"] == password:
        print("bad passowrd")
        raise ValidationError('Password was incorrect.')



class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])
