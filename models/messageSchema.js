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
    channel_id: {
        type: String,
        required: true
    },
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

