const mongoose = require('mongoose');
const Neighborhood = require('../models/neighborhoods');

const createNeighborhood = async (req, res) => {
    const neighborhood = new Neighborhood({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        city_area: req.body.city_area,
        bus_line: req.body.bus_line,
        createdAt: req.body.createdAt
    })

    const alreadyExists = await Neighborhood.findOne({ name: req.body.name });
    if (alreadyExists) {
        return res.status(409).json({ error: 'Bairro já cadastrado!' });
    }

    try {
        const newNeighborhood = await neighborhood.save()
        return res.status(201).json(newNeighborhood);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAll = async (req, res) => {
    try {
    const neighborhood = await Neighborhood.find()
    return res.status(200).json(neighborhood);
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

module.exports = {
    createNeighborhood,
    getAll
}