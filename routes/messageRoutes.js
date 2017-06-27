var express = require("express");
var messageRoutes = express.Router();
var Message = require("../models/messageSchema");

//add channel info to messages will be done in angular

messageRoutes.route("/")
    .get(function (req, res) {
        Message.find(req.query, function (err, messages) {
            // console.log(req);
            if (err) return res.status(500).send(err);
            res.send(messages)
        })
    })
    .post(function (req, res) {
        var newMessage = new Message(req.body);
        newMessage.user_id = req.user._id;
        newMessage.save(function (err, createdMessage) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(createdMessage)
        })
    });

messageRoutes.route("/:id")
    .get(function (req, res) {
        Message.findOne({user_id: req.user._id, _id: req.params.id}, function (err, message) {
            if (err) return res.status(500).send(err);
            return res.send(message)
        })
    })
    .put(function (req, res) {
        Message.findOneAndUpdate({user_id: req.user._id, _id: req.params.id}, req.body, {new: true}, function (err, updatedMessage) {
            if (err) return res.status(500).send(err);
            res.send(updatedMessage)
        })
    })
    .delete(function (req, res) {
        Message.findOneAndRemove({user_id: req.user._id, _id: req.params.id}, function (err, deletedMessage) {
            if (err) return res.status(500).send(err);
            res.send(deletedMessage)
        })
    });

module.exports = messageRoutes;