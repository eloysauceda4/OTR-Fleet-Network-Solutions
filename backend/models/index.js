const mongoose = require('mongoose')
const CompaniesSchema = require('./companies')
const ServicesSchema = require('./services')


const Companies = mongoose.model('companies', CompaniesSchema)
const Services = mongoose.model('services', ServicesSchema)


module.exports = {
Companies,
Services
}