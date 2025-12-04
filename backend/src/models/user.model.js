const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    }
}, 
    {
        timestamps: true
    }
)

const userModel = moongoose.model('User', userSchema);

module.exports = userModel;
