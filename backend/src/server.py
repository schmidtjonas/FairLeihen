from flask import Flask, request, abort, jsonify, g, current_app
from flask.cli import with_appcontext
#import sqlite3

from hashing import hash_password, verify_password
from flask_sqlalchemy import SQLAlchemy

from database import *
import os

app = Flask(__name__)

projectDir = os.getcwd()[:-3] + 'data'
databaseFile = 'sqlite:///{}'.format(projectDir + '/fairleihen.db')

app.config['SQLALCHEMY_DATABASE_URI'] = databaseFile

db = SQLAlchemy(app)


@app.route('/')
def hello():
    return 'hello\n'

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    userExists = User.query.filter_by(username=username).first() is not None

    if not userExists:
        abort(401)
    
    elif verify_password(User.query.filter_by(username=username).first().password, password):
        return jsonify({
            'status': 'OK',
            'message': 'Successfully logged in'
            })
    abort(403)


@app.route('/register', methods=['POST'])
def register():
    username = request.json.get('username', None)
    password = hash_password(request.json.get('password', None))
    email = request.json.get('email', None)

    userExists = User.query.filter_by(username=username).first() is not None
    emailExists = User.query.filter_by(email=email).first() is not None

    if userExists or emailExists:
        abort(400)

    else:
        db.session.add(User(username=username, email=email, password=password))
        db.session.commit()
        print(User.query.all())

        return jsonify({
            'status': 'OK',
            'message': 'Successfully registered'
            })

@app.route('/getProduct/<productID>')
def getProduct(productID):
    pass


if __name__ == '__main__':
    print(User.query.all())

    app.run(debug=True, host='0.0.0.0') 