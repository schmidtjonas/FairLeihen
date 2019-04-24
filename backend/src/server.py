from flask import Flask, request, abort, jsonify, g, current_app
from flask.cli import with_appcontext
import sqlite3
import click

from hashing import hash_password, verify_password
from database import *

app = Flask(__name__)



users = {}

@app.route('/')
def hello():
    return 'hello\n'

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    user_exists = username in users.keys()

    if username is None or not user_exists:
        abort(401)
    
    elif verify_password(users[username]['password'], password):
        return jsonify({
            'status': 'OK',
            'message': 'Successfully logged in'
            })
    abort(403)


@app.route('/register', methods=['POST'])
def register():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    email = request.json.get('email', None)

    if username in users.keys() or username is None or username == '' or email is None or password is None:
        abort(400)

    else:
        users[username] = {
            'password': hash_password(password),
            'email': email
        }
        return jsonify({
            'status': 'OK',
            'message': 'Successfully registered'
            })

@app.route('/getProduct/<productID>')
def getProduct(productID):
    pass


if __name__ == '__main__':
    init_app(app)
    app.run(debug=True, host='0.0.0.0')
