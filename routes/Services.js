const express = require('express');
const router = express.Router();
const Service = require('../models/Services')

router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services)
})


router.post('/new', async (req, res) => {
  
  const newService = new Service(
    
     { 
        serviceName:"Flanders", 
        durationMins:60
      } 
  ); 
  const savedService = await newService.save() 
  res.json(savedService) 
});


router.get('/get/:id', async (req, res) => {
  const t = await Service.findById({ _id : req.params.id })
  res.json(t)
})


router.delete('/delete/:id', async (req, res) => {
  const tDelete = await Service.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})


router.put('/update/:id', async (req, res) => {
  const tUpdate = await Service.updateOne(
    
    
   
    {
      serviceName: "Bart",
      durationMins: 60
    } 
  )
  res.json(tUpdate)
})



module.exports = router