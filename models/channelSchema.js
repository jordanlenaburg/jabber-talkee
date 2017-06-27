//Created by user
//Users in channel
//Public/private
//Topic
//Timestamp?

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var channelSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    public: {
        type: Boolean,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    usersInChannel: [String]
});

module.exports = mongoose.model("Channel", channelSchema);