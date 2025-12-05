const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const foodSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    video: { 
        type: String, 
        required: true, 
    },
    description: { 
        type: String,
    },
    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foodPartner',
    },
    saveCount: {
        type: Number,
        default: 0,
    },
    likeCount: {
        type: Number,
        default: 0,
    }
})

const foodModel = moongoose.model('food', foodSchema);

module.exports = foodModel;