const mongoose = require('mongoose')
const ServiceSchema = new mongoose.Schema({
  serviceName: String,
  durationMins: Number
})

module.exports = mongoose.model('service', ServiceSchema)