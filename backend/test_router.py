from backend.auth_middleware import token_required
from flask import Blueprint, jsonify

test = Blueprint("test", __name__)


@test.route("/")
@token_required
def func(current_user):
    return jsonify(current_user)
