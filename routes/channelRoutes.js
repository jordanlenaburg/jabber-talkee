//get messages from a channel
//post messages to a channel

var express = require("express");
var channelRoutes = express.Router();
var Channel = require("../models/channelSchema");

channelRoutes.route("/")
    .get(function (req, res) {
        Channel.find({$or: [{user_id: req.user._id}, {usersInChannel: req.user._id}, {public: true}]}, function (err, channels) {
            if (err) return res.status(500).send(err);
            res.send(channels)
        });
    })
    .post(function (req, res) {
        var newChannel = new Channel(req.body);
        newChannel.user_id = req.user._id;
        newChannel.save(function (err, createdChannel) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(createdChannel)
        })
    });

channelRoutes.route("/:id")
    .get(function (req, res) {
        Channel.findOne({
            // user_id: req.user._id,
            _id: req.params.id
        }, function (err, channel) {
            if (err) return res.status(500).send(err);
            return res.send(channel)
        })
    })
    .put(function (req, res) {
        Channel.findOneAndUpdate({
                // user_id: req.user._id,
                _id: req.params.id
            },
            {$set:
            {topic: req.body.topic},
            $push: {usersInChannel: req.body.addedUser}},
            {new: true}, function (err, updatedChannel) {
                if (err) return res.status(500).send(err);
                console.log(req.body);
                res.send(updatedChannel)
            })
    })
    .delete(function (req, res) {
        Channel.findOneAndRemove({user_id: req.user._id, _id: req.params.id}, function (err, deletedChannel) {
            if (err) return res.status(500).send(err);
            res.send(deletedChannel)
        })
    });

module.exports = channelRoutes;