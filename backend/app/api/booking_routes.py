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
    Create a new Booking entry.

    The form should contain the following fields:
        - date: Date of the booking.
        - tripType: Type of trip
        - phoneNumber: Phone number of the person making the booking.
        - status: Status of the booking .
        - partySize: Size of the booking party.
        - firstName: First name of the person making the booking.
        - lastName: Last name of the person making the booking.
        - paid: Boolean indicating whether the booking is paid.
        - email: Email address of the person making the booking.
        - time: Time of the booking.

    Returns:
        - JSON: {"Booking": {"booking_id": "<new_booking_id>"}}
        - Error message if the booking is not created successfully.
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
        time=form.data.get("time")
    )
    return jsonify({"Booking":  newBooking.save_One("Booking")})


@booking_routes.route('/<string:id>', methods=["GET"])
def BookingById(id):
    """
    Retrieve a booking by their unique ID.

    Parameters:
    - id (str): The unique identifier of the booking.

    Returns:
        - user_data (dict): A dictionary containing booking information
        - Error message if the booking with the specified ID is not found.
    """
    return jsonify(Booking.get_ById("Booking", ObjectId(id)))


@booking_routes.route('/all', methods=["GET"])
def AllBookings():
    """
    Deletes a booking from the database.

    Parameters:
        - id (str): booking ID to identify the booking to be deleted.

    Returns:
        - Success message if deleted
        - Error message if it is not deleted

    """
    return jsonify({"Booking": Booking.get_All("Booking")})
