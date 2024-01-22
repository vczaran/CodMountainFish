from flask import Blueprint, jsonify, session, request

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
