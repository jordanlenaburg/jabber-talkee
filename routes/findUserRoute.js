var express = require("express");
var userRoutes = express.Router();
var User = require("../models/userSchema");

userRoutes.route("/")
    .get(function (req, res) {
        // console.log(req);
        User.find({username: req.query.usersInChannel}, function (err, user) {
            if (err) return res.status(500).send(err);
            res.send(user)
        });
    });
userRoutes.route("/:user")
    .get(function (req, res) {
        // console.log(req);
        User.find({user_id: req.user._id}, function (err, user) {
            if (err) return res.status(500).send(err);
            res.send(req.user)
        });
    });

module.exports = userRoutes;