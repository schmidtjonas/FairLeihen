from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from server import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

""" class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Integer(10),  nullable=False)
    street = db.Column(db.String(100), nullable=False)
    plz = db.Column(db.Integer(10),  nullable=False)
    town = db.Column(db.Integer(100),  nullable=False)
    category = db.Column(db.String(100), nullable=False)
    userID = db.Column(db.Integer, nullable=False) 


    def __repr__(self):
        return '<Product %r>' % self.title"""