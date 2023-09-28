const mongoose = require('mongoose')
const Reservation2Schema = new mongoose.Schema({
    newdateStart: String,
    newDateEnd: String,
    newReservationActive: Boolean,
  reservation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    }
})

module.exports = mongoose.model('res', Reservation2Schema) 