const mongoose = require('mongoose');

const bus_companySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    driver_name: {
        type: String,
        required: true
    },
    driver_phone: {
        type: String,
        required: true
    },
    whatsapp_group: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('bus_lines', bus_companySchema)