const mongoose = require('mongoose');

const neighborhoodSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    city_area: {
        type: String
    },
    bus_line: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'bus_lines'
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('neighborhood', neighborhoodSchema);