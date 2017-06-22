//Created by user
//Sent in channel
//Application used -- FB, Google, Twitter, JabberTalkee, etc.
//message text
//Timestamp?
//Direct recipients -- @user
//Indirect recipients -- channel

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // channel_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Channel",
    //     required: true
    //     // if channel is private, all people are considered direct recipients
    // },
    application: String,
    // directRecipients_id: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // }],
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Message", messageSchema);

