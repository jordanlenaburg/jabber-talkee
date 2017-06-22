//Account login id
//Account password
//API key
//Account type
//User

//TODO: look into socket.io

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var config = require("../config");

var linkedAccountSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: String,
    //api: TODO: read up on oauth and how to save token from api
    login: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("LinkedAccount", linkedAccountSchema);