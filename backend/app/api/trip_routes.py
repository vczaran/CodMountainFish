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
        Create a new Trip entry
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
    get one Trip by its Id
    """
    return jsonify(Trip.get_ById("Trip", ObjectId(id)))


@trip_routes.route('/all', methods=["GET"])
def AllTrip():
    """
    get All Trip
    """
    return jsonify({"Trip": Trip.get_All("Trip")})
