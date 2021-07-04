const mongoose = require('mongoose');
const CompanyBus = require('../models/busCompany');

const createBusLines = async (req, res) => {
    const busLines = new CompanyBus ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        driver_name: req.body.driver_name,
        driver_phone: req.body.driver_phone,
        whatsapp_group: req.body.whatsapp_group,
        createdAt: req.body.createdAt
    })

    const alreadyExists = await CompanyBus.findOne({ name: req.body.name})
    if(alreadyExists) {
        return res.status(409).json({ error: 'Essa linha de ônibus já está cadastrada!'})
    }

    try {
        const newBusLine = await busLines.save()
        res.status(201).json(newBusLine)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}

    const getAll = async (req, res) => {
        try {
        const busLines = await CompanyBus.find()
        return res.status(200).json(busLines);
        } catch (err) {
            return res.status(500).json({ message: err.message})
        }
    }
module.exports = {
    createBusLines,
    getAll
}