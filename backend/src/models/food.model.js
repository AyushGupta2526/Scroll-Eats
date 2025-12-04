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
    }
})

const foodModel = moongoose.model('food', foodSchema);

module.exports = foodModel;