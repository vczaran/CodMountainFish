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
    Create a new Date entry.

    The form should contain the following fields:
        - date: Date for the new entry.
        - trip_Id: ID of the associated activity.
        - booked: Boolean indicating whether the date is booked.
        - available_space: Number indicating the available space.
        - group_Id: ID of the associated group.

    Returns:
        - JSON: {"Date": "<new_date_id>"}
        - Error message if the entry is not created successfully.
    """
    form = DateForm()
    print(form.data.get("date"))
    newDate = Date(
        date=form.data.get("date"),
        trip_Id=form.data.get("trip_Id"),
        booked=form.data.get("booked"),
        available_space=form.data.get("available_space"),
        group_Id=form.data.get("group_Id")
    )
    return jsonify({"Date":  newDate.save_One("Date")})


@date_routes.route('/<string:id>', methods=["GET"])
def DateById(id):
    """
    Retrieve a Date by their unique ID.

    Parameters:
    - id (str): The unique identifier of the Date.

    Returns:
        - Date_data (dict): A dictionary containing Date information
        - Error message if the Date with the specified ID is not found.
    """
    return jsonify(Date.get_ById("Date", ObjectId(id)))


@date_routes.route('/all', methods=["GET"])
def AllDates():
    """
    Deletes a Date from the database.

    Parameters:
        - id (str): Date ID to identify the Date to be deleted.

    Returns:
        - Success message if deleted
        - Error message if it is not deleted

    """
    return jsonify({"Date": Date.get_All("Date")})
