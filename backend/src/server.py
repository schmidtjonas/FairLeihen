from flask import Flask, request, abort, jsonify

import hashlib, binascii, os
 
def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')
 
def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    salt = stored_password[:64]
    stored_password = stored_password[64:]
    pwdhash = hashlib.pbkdf2_hmac('sha512', 
                                  provided_password.encode('utf-8'), 
                                  salt.encode('ascii'), 
                                  100000)
    pwdhash = binascii.hexlify(pwdhash).decode('ascii')
    return pwdhash == stored_password




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


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')