//Created by user
//Users in channel
//Public/private
//Topic
//Timestamp?

var mongoose = require("mongoose");
var Schema = new mongoose.Schema;

var channelSchema = new Schema({
    createdByUser_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    public: Boolean,
    topic: String,
    usersInChannel_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }]
});

module.exports = mongoose.model("Channel", channelSchema);