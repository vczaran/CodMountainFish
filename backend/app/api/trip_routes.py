from flask import Blueprint, jsonify, session, request
from bson import ObjectId
from datetime import datetime

from ..models.trip_Model import Trip

from ..forms.trip_form import TripForm
from flask import current_app as app

trip_routes = Blueprint('trip', __name__)


@trip_routes.route("/new", methods=["POST"])
def newTrip():
    """
    Create a new trip.

    The form should contain the following fields:
        - name: Name of the trip.
        - price: Price of the trip.
        - duration: Duration of the trip.
        - description: Description of the trip.
        - availability: Availability status of the trip.
        - minimumGuest: Minimum number of guests for the trip.
        - maximumGuest: Maximum number of guests for the trip.

    Returns:
        - JSON: {"Trip": "<new_trip_id>"}
        - Error message if the trip is not created successfully.
    """
    form = TripForm()
    newTrip = Trip(
        name=form.data.get("name"),
        price=form.data.get("price"),
        duration=form.data.get("duration"),
        description=form.data.get("description"),
        availability=form.data.get("availability"),
        minimumGuest=form.data.get("minimumGuest"),
        maximumGuest=form.data.get("maximumGuest")
    )
    return jsonify({"Trip":  newTrip.save_One("Trip")})


@trip_routes.route('/<string:id>', methods=["GET"])
def TripById(id):
    """
    Retrieve a trip by their unique ID.

    Parameters:
    - id (str): The unique identifier of the trip.

    Returns:
        - trip_data (dict): A dictionary containing trip information
        - Error message if the trip with the specified ID is not found.
    """
    return jsonify(Trip.get_ById("Trip", ObjectId(id)))


@trip_routes.route('/all', methods=["GET"])
def AllTrip():
    """
    Deletes a trip from the database.

    Parameters:
        - id (str): trip ID to identify the trip to be deleted.

    Returns:
        - Success message if deleted
        - Error message if it is not deleted
    """
    return jsonify({"Trip": Trip.get_All("Trip")})
