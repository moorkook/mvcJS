var express = require('express');
var router = express.Router();

const UserModel = require('../models/userModel.js');

let homeController = {
  base: function(req, res, next) {
    res.render('base', { title: 'Express', user: UserModel.getUserByName('morgan') });
  }
};
module.exports = homeController;
