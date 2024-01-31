from flask import Blueprint, jsonify, session, request
from bson import ObjectId
from datetime import datetime

from ..models.booking_Model import Booking

from ..forms.booking_form import BookingForm
from flask import current_app as app

booking_routes = Blueprint('booking', __name__)


@booking_routes.route("/new", methods=["POST"])
def newBooking():
    """
        Create a new Booking entry
    """
    form = BookingForm()
    print(form.data.get("date"))
    newBooking = Booking(
        date=form.data.get("date"),
        tripType=form.data.get("tripType"),
        phoneNumber=form.data.get("phoneNumber"),
        status=form.data.get("status"),
        partySize=form.data.get("partySize"),
        firstName=form.data.get("firstName"),
        lastName=form.data.get("lastName"),
        paid=form.data.get("paid"),
        email=form.data.get("email"),
    )
    return jsonify({"Booking":  newBooking.save_One("Booking")})


@booking_routes.route('/<string:id>', methods=["GET"])
def BookingById(id):
    """
    get one user by its Id
    """
    return jsonify(Booking.get_ById("Booking", ObjectId(id)))


@booking_routes.route('/all', methods=["GET"])
def AllBookings():
    """
    get All Booking
    """
    return jsonify({"Booking": Booking.get_All("Booking")})
