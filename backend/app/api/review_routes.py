from flask import Blueprint, jsonify, session, request
from datetime import datetime
from bson import ObjectId

from ..models_Version2.review_Model import Review
from ..forms.review_form import ReviewForm
from flask import current_app as app


review_routes = Blueprint('review_routes', __name__)


@review_routes.route("/new", methods=["POST"])
def newReview():
    """
        Create a new Review entry
    """
    form = ReviewForm()
    newReview = Review(
        user_Id=form.data.get("user_Id"),
        activity_Id=form.data.get("activity_Id"),
        description=form.data.get("description"),
        rating=form.data.get("rating"),
        stars=form.data.get("stars")
    )
    return jsonify({"Review":  newReview.save_One("Review")})


@review_routes.route('/<string:id>', methods=["GET"])
def ReviewById(id):
    """
    get one Reviews by its Id
    """
    return jsonify(Review.get_ById("Review", ObjectId(id)))


@review_routes.route('/all', methods=["GET"])
def AllReviews():
    """
    get All Reviews
    """
    return jsonify({"Reviews": Review.get_All("Review")})
