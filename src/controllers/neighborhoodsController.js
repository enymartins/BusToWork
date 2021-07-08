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
        const neighborhood = await Neighborhood.find().populate('bus_line');
        return res.status(200).json(neighborhood);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


const getByNeighborhood = async (req, res) => {
    const { search } = req.query
    try {
        const neighborhoods = await Neighborhood.find({ name: {$regex: `.*${search}.*`}}).populate('bus_line');
        if(neighborhoods == undefined){
            return res.status(404).json({ message: 'Bairro não encontrado!' })
        }
        return res.status(200).json(neighborhoods);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const updateNeighborhood = async (req, res) => {
    const findNeighborhood = await Neighborhood.findById(req.params.id);

    if (findNeighborhood == undefined) {
        return res.status(404).json({ message: 'Bairro não encontrado' })
    }

    const { name, city_area, bus_line } = req.body;

    findNeighborhood.name = name || findNeighborhood.name
    findNeighborhood.city_area = city_area || findNeighborhood.city_area
    findNeighborhood.bus_line = bus_line || findNeighborhood.bus_line

    try {
        const updatedNeighborhood = await findNeighborhood.save()
        res.status(200).send(updatedNeighborhood);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const removeNeighborhood = async (req, res) => {

    const findNeighborhood = await Neighborhood.findById(req.params.id);

    if (findNeighborhood == undefined) {
        return res.status(404).json({ message: 'Bairro não encontrado' })
    }

    try {
        await findNeighborhood.remove()
        res.status(200).send({ message: "Deletado com sucesso!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    createNeighborhood,
    getAll,
    getByNeighborhood,
    updateNeighborhood,
    removeNeighborhood
}