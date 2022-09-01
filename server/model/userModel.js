const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        min: 1,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: "",
    }
});

module.exports = User = mongoose.model("User", userSchema)