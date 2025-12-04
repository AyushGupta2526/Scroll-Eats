const moongoose = require('mongoose');

const foodPartnerSchema = new moongoose.Schema({
    name: { type: String, required: true },
    contactName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const foodPartnerModel = moongoose.model('foodPartner', foodPartnerSchema);

module.exports = foodPartnerModel;