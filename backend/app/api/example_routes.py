from flask import Blueprint, jsonify, session, request
from datetime import datetime

from ..models.exampleModel import Example

example_routes = Blueprint('example', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@example_routes.route('/')
def example():
    """
    Example description.
    """
    return {'Message': ['Returning a String']}


@example_routes.route('/new')
def new():
    """
    example of new example
    """
    new_Example = Example(
        # ====== when working with Forms ======
        # name = form.data["name"],
        # date = form.data["date"],
        # isTrue = form.data["isTrue"]
        name="Jane Doe",
        date="2024-10-5",
        isTrue=False
    )
    print(new_Example)
    new_Example.save()
    return {'Message': 'Example saved successfully'}
