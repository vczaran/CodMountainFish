from flask import Blueprint, jsonify, session, request
from datetime import datetime
from bson import ObjectId

from ..models_Version2.Reviews import activity_Review_Model, recipe_Review_Model
from ..forms.review_form import ReviewForm
from flask import current_app as app


review_routes = Blueprint('review_routes', __name__)
# ----------------------------------------------------------------------------
# activity_Review


@review_routes.route("/activity/new", methods=["POST"])
def newActivityReview():
    """
        Create a new Review entry
    """
    form = ReviewForm()
    newReview = Activity_Review(
        user_Id=form.data.get("user_Id"),
        activity_Id=form.data.get("activity_Id"),
        description=form.data.get("description"),
        rating=form.data.get("rating"),
        stars=form.data.get("stars")
    )
    return jsonify({"Activity_Review":  newReview.save_One("Activity_Review")})


@review_routes.route('/activity/<string:id>', methods=["GET"])
def ActivityReviewById(id):
    """
    get one Reviews by its Id
    """
    return jsonify(Activity_Review.get_ById("Activity_Review", ObjectId(id)))


@review_routes.route('/activity/all', methods=["GET"])
def AllActivityReview():
    """
    get All Reviews
    """
    return jsonify({"Activity_Reviews": Review.get_All("Activity_Review")})

# ----------------------------------------------------------------------------
# recipe_Review


@review_routes.route("/recipe/new", methods=["POST"])
def newRecipeReview():
    """
        Create a new Review entry
    """
    form = ReviewForm()
    newReview = Recipe_Review(
        user_Id=form.data.get("user_Id"),
        recipe_Id=form.data.get("activity_Id"),
        description=form.data.get("description"),
        rating=form.data.get("rating"),
        stars=form.data.get("stars")
    )
    return jsonify({"Review":  newReview.save_One("Recipe_Review")})


@review_routes.route('recipe/<string:id>', methods=["GET"])
def RecipeReviewById(id):
    """
    get one Reviews by its Id
    """
    return jsonify(Recipe_Review.get_ById("Recipe_Review", ObjectId(id)))


@review_routes.route('/recipe/all', methods=["GET"])
def AllRecipeReview():
    """
    get All Recipe Reviews
    """
    return jsonify({"Recipe Reviews": Recipe_Review.get_All("Recipe_Review")})
