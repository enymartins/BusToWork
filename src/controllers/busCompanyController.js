const mongoose = require('mongoose');
const CompanyBus = require('../models/busCompany');

const createBusLine = async (req, res) => {
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

    const updateBusLine = async (req,res) => {
        const findBusCompany = await CompanyBus.findById(req.params.id);
        
        if (findBusCompany == undefined) {
            return res.status(404).json({message: 'Transporte não encontrado'})
        }  
    
        const { name, driver_name, driver_phone, whatsapp_group } = req.body;

        findBusCompany.name = name || findBusCompany.name
        findBusCompany.driver_name = driver_name || findBusCompany.driver_name
        findBusCompany.driver_phone = driver_phone || findBusCompany.driver_phone
        findBusCompany.whatsapp_group = whatsapp_group || findBusCompany.whatsapp_group

        try {
            const updatedBusCompany = await findBusCompany.save()
            res.status(200).send(updatedBusCompany)
        } catch(err) {
            res.status(500).json({ message: err.message})
        }
    }

    const removeBusLine = async (req, res) => {

        const findBusCompany = await CompanyBus.findById(req.params.id);
        
        if (findBusCompany== undefined) {
            return res.status(404).json({message: 'Transporte não encontrado'})
        }    
    
       try{
           await findBusCompany.remove()
            res.status(200).send({ message: "Deletado com sucesso!"})
       } catch(err) {
           res.status(500).json({ message: err.message})
       }
    }
    
module.exports = {
    createBusLine,
    getAll,
    updateBusLine,
    removeBusLine
}