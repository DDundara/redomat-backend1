// const mongoose = require('mongoose')
// const CitiesSchema = new mongoose.Schema({
//   city: String,
//   author: String,
//   services: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Service',
//     },
//   ]
// })

// module.exports = mongoose.model('city', CitiesSchema)//js class that represents collection 




const mongoose = require('mongoose');

const CitiesSchema = new mongoose.Schema({
  city: String,
  author: String,
  services: {
    type: String, // Define services as a string
    default: '',  // Provide a default value as an empty string
    get: function(data) {
      try {
        // Parse the data as JSON
        
        const parsedData = JSON.parse(data);

        // Extract $id values as strings and join them with commas
        const idArray = parsedData.map(obj => obj.$id.toString());
        
        return idArray.join(',');
      } catch (error) {
        return ''; // Return an empty string if parsing fails
      }
    },
  },
});

module.exports = mongoose.model('city', CitiesSchema);


