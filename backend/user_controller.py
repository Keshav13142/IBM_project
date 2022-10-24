from flask import Blueprint, jsonify, request
from auth_middleware import token_required
from backend import conn, config
import bcrypt
import jwt
import ibm_db

user= Blueprint("user", __name__)
# LOGIN_FEILDS = ('email', 'password')
@user.route("/skills", methods=['POST','GET'])
@token_required
def skill_user(current_user):
    if request.method == 'GET':
        id = current_user['id']
        result_skills = f"select skills from users where id='{id}'"
        stmt = ibm_db.prepare(conn, result_skills)
        ibm_db.execute(stmt)
        user = ibm_db.fetch_assoc(stmt)
        if user:
            return jsonify({"skills":result_skills}), 200
        else:
            return jsonify({"error": "Invalid credentials!"}), 401
    else:
        id=current_user['id']
        result_skills=request.json['skills']
        
        sql = "SELECT result_skills FROM users WHERE id =?"
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt,1,id)
        ibm_db.execute(stmt)
        insert_sql = "INSERT INTO users VALUES (?,?)"
        prep_stmt = ibm_db.prepare(conn, insert_sql)
        ibm_db.bind_param(prep_stmt, 2, result_skills)
        ibm_db.execute(prep_stmt)
        
@user.route('/list')
def list():
    skills_list = []
    sql = "SELECT result_skills FROM users"
    stmt = ibm_db.exec_immediate(conn, sql)
    dictionary = ibm_db.fetch_both(stmt)
    while dictionary != False:
        # print ("The Name is : ",  dictionary)
        skills_list.append(dictionary)
        dictionary = ibm_db.fetch_both(stmt)

    return render_template("list.html", items = skills_list)
        
       
