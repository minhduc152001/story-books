const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleID: {
        type: String,
        require: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    image: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);