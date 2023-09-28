const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservations')
const Reservation2 = require('../models/Reservations2')

router.get('/', async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations)
})

router.post('/new', async (req, res) => {
  console.log('Request Body:', req.body);
    try {
     
      const { dateStarts, dateEnds, isActive } = req.body;
  
      
      const newReservation = new Reservation2(
        req.body
      );
  
      
      const savedReservation = await newReservation.save();
  
      
      res.json(savedReservation);
    } catch (error) {
      console.error("An error occurred while creating a reservation", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  


router.get('/get/:id', async (req, res) => {
  const t = await Reservation.findById({ _id : req.params.id })
  res.json(t)
})


router.delete('/delete/:id', async (req, res) => {
  const tDelete = await Reservation.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})


router.put('/update/:id', async (req, res) => {
  const tUpdate = await Reservation.updateOne(
   
  )
  res.json(tUpdate)
})



module.exports = router