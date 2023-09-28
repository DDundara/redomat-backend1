const mongoose = require('mongoose')
const ReservationSchema = new mongoose.Schema({
  dateStarts: Date,
  dateEnds: Date,
  reservationActive: Boolean,
  reservation: {
    type: String, 
    default: '',  
    get: function(data) {
      try {
        
        const parsedData = JSON.parse(data);

      
        const id = parsedData.map(obj => obj.$id.toString());
        console.log("unutar scheme",id)
        return id;
      } catch (error) {
        return ''; 
      }
    },
  },
})

module.exports = mongoose.model('reservation', ReservationSchema)