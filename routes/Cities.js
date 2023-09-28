const express = require('express');
const router = express.Router();
const City = require('../models/Cities')


router.get('/', async (req, res) => {
  const cities = await City.find();
  res.json(cities)
})


router.post('/new', async (req, res) => {
  
  const newCity = new City(
    
     { 
        author:"Flanders", 
        city:"Zagreb"
      } 
  ); 
  const savedCity = await newCity.save() 
  res.json(savedCity) 
});


router.get('/get/:id', async (req, res) => {
  const t = await City.findById({ _id : req.params.id })
  res.json(t)
})


router.delete('/delete/:id', async (req, res) => {
  const tDelete = await City.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})


router.put('/update/:id', async (req, res) => {
  const tUpdate = await City.updateOne(
   
    
   
    {
      author: "Bart",
      todo: "Skating"
    } 
  )
  res.json(tUpdate)
})



module.exports = router