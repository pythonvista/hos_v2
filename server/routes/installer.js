var mongoose = require('mongoose');
const User = require('../models/User');
const usersController = require('../controllers/usersController');
var router = require('express').Router();

module.exports = function (app) {
    app.get('/installer', async (req, res, next) => {

        var admin = new User();
        admin.email = "admin@gmail.com";
        admin.role = "admin";
        admin.username = "MFA99999";
        admin.password = await usersController.createBcrypt("12345");
        admin.name = "Super Admin";
        admin.role = 'admin';
        admin.image = '/images/user.jpg';

        admin.save().then(function () {
            res.send(admin)
        }).catch(next);


    });
}
