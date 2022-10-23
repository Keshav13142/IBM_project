from flask import Blueprint, jsonify, request, abort
from backend import conn
import bcrypt
import ibm_db

auth = Blueprint("auth", __name__)

LOGIN_FEILDS = ('email', 'password')
SIGNUP_FEILDS = ('name', 'email', 'phone_number', 'password')


@auth.route("/login", methods=['POST'])
def login_user():
    print(request.json['email'])
    if bcrypt.checkpw(password.encode('utf-8'), hashed):
        print("It Matches!")
    else:
        print("It Does not Match :(")
    return {'message': "APasdasdaI is running 😮"}


@auth.route("/signup", methods=['POST'])
def register_user():
    # Check if all the required feild are present
    for feild in SIGNUP_FEILDS:
        if not (feild in request.json):
            abort(400, description='All feilds are required')

    # Sql stmt to check if email/number is already in use
    sql = f"select * from users where email='{request.json['email']}' or phone_number='{request.json['phone_number']}'"
    stmt = ibm_db.prepare(conn, sql)
    status = ibm_db.execute(stmt)
    account = ibm_db.fetch_assoc(stmt)
    if account:
        return jsonify({"error": f"Email/Phone number is alread in use!"}), 409

    # If user does not exist, then create account
    hashed_password = bcrypt.hashpw(
        request.json['password'].encode('utf-8'), bcrypt.gensalt())
    sql = f"insert into users(name,email,phone_number,password) values('{request.json['name']}','{request.json['email']}','{request.json['phone_number']}',?)"
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt, 1, hashed_password)
    status = ibm_db.execute(stmt)
    if status == True:
        return jsonify({"message": 'Successfully created account!'}), 200
