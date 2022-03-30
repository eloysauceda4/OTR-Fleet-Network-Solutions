const { Companies, Services } = require("../models");



const getAllCompanies = async (req, res) => {
    try {
        const companies = await Companies.find({})
        return res.status(200).json({ companies })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCompaniesById = async (req, res) => {
    try {
        const {id} = req.params;
        const companies = await Companies.findById(id)
        if (companies) {
            return res.status(200).json({ companies });
        }
        return res.status(404).send('Companies with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllServices = async (req, res) => {
    try {
        const services = await Services.find({})
        return res.status(200).json({ services })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getServicesById = async (req, res) => {
    try {
        const {id} = req.params;
        const companies = await Services.findById(id)
        if (companies) {
            return res.status(200).json({ companies });
        }
        return res.status(404).send('Services with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getCompaniesById,
    getAllCompanies,
    getServicesById,
    getAllServices
}