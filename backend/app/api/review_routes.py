from flask import Blueprint, jsonify, session, request
from datetime import datetime
from bson import ObjectId

from ..models.Reviews.trip_Review_Model import Trip_Review
from ..models.Reviews.recipe_Review_Model import Recipe_Review

from ..forms.review_form import ReviewForm
from flask import current_app as app


review_routes = Blueprint('review', __name__)
# ----------------------------------------------------------------------------
# activity_Review


@review_routes.route("/trip/new", methods=["POST"])
def newTripReview():
    """
    Create a new Trip Review entry.

    The form should contain the following fields:
        - user_Id: User ID associated with the review.
        - trip_Id: Trip ID for which the review is being created.
        - description: Textual description of the trip review.
        - rating: Numeric rating for the trip.
        - stars: Number of stars given for the trip.

    Returns:
        - JSON: {"Trip_Review": {"review_id": "<new_review_id>"}}
        - Error message if the review is not created successfully.
    """
    form = ReviewForm()
    newReview = trip_Review(
        user_Id=form.data.get("user_Id"),
        trip_Id=form.data.get("trip_Id"),
        description=form.data.get("description"),
        rating=form.data.get("rating"),
        stars=form.data.get("stars")
    )
    return jsonify({"Trip_Review":  newReview.save_One("Trip_Review")})


@review_routes.route('/trip/<string:id>', methods=["GET"])
def tripReviewById(id):
    """
    Retrieve a trip by their unique ID.

    Parameters:
    - id (str): The unique identifier of the trip.

    Returns:
        - trip_data (dict): A dictionary containing trip information
        - Error message if the trip with the specified ID is not found.
    """
    return jsonify(trip_Review.get_ById("Trip_Review", ObjectId(id)))


@review_routes.route('/trip/all', methods=["GET"])
def AllTripReview():
    """
    get All Reviews
    """
    return jsonify({"Trip_Reviews": Review.get_All("Trip_Review")})

# ----------------------------------------------------------------------------
# recipe_Review


@review_routes.route("/recipe/new", methods=["POST"])
def newRecipeReview():
    """
    Create a new Recipe Review entry.

    The form should contain the following fields:
        - user_Id: User ID associated with the review.
        - activity_Id: Recipe ID for which the review is created.
        - description: Textual description of the review.
        - rating: Numeric rating given to the recipe (e.g., 4.5).
        - stars: Number of stars given to the recipe.

    Returns:
        - JSON: {"Review": {"review_id": "<new_review_id>"}}
        - Error message if the review is not created successfully.
    """
    form = ReviewForm()
    newReview = Recipe_Review(
        user_Id=form.data.get("user_Id"),
        recipe_Id=form.data.get("recipe_Id"),
        description=form.data.get("description"),
        rating=form.data.get("rating"),
        stars=form.data.get("stars")
    )
    return jsonify({"Review":  newReview.save_One("Recipe_Review")})


@review_routes.route('recipe/<string:id>', methods=["GET"])
def RecipeReviewById(id):
    """
    Retrieve a recipe by their unique ID.

    Parameters:
    - id (str): The unique identifier of the recipe.

    Returns:
        - recipe_data (dict): A dictionary containing recipe information
        - Error message if the recipe with the specified ID is not found.
    """
    return jsonify(Recipe_Review.get_ById("Recipe_Review", ObjectId(id)))


@review_routes.route('/recipe/all', methods=["GET"])
def AllRecipeReview():
    """
    Deletes a recipe from the database.

    Parameters:
        - id (str): recipe ID to identify the recipe to be deleted.

    Returns:
        - Success message if deleted
        - Error message if it is not deleted

    """
    return jsonify({"Recipe Reviews": Recipe_Review.get_All("Recipe_Review")})
