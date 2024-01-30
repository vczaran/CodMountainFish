from flask import Blueprint, jsonify, session, request
from bson import ObjectId
from datetime import datetime

from ..models.date_Model import Date

from ..forms.date_form import DateForm
from flask import current_app as app

date_routes = Blueprint('date', __name__)


@date_routes.route("/new", methods=["POST"])
def newDate():
    """
        Create a new Date entry
    """
    form = DateForm()
    print(form.data.get("date"))
    newDate = Date(
        date=form.data.get("date"),
        activity_Id=form.data.get("activity_Id"),
        booked=form.data.get("booked"),
        available_space=form.data.get("available_space"),
        group_Id=form.data.get("group_Id")
    )
    return jsonify({"Date":  newDate.save_One("Date")})


@date_routes.route('/<string:id>', methods=["GET"])
def DateById(id):
    """
    get one user by its Id
    """
    return jsonify(Date.get_ById("Date", ObjectId(id)))


@date_routes.route('/all', methods=["GET"])
def AllDates():
    """
    get All Date
    """
    return jsonify({"Date": Date.get_All("Date")})
