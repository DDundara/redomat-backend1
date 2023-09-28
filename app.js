
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");


const app = express()



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); 
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  
 
  
const uri = "mongodb+srv://darko:darko123@cluster0.slutd8p.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected")
  const db = mongoose.connection;
  console.log("MongoDB connected to database:", db.name);})
.catch(err => console.log(err))


app.use(bodyParser.json())


app.get("/", (req, res) => {
  res.send("yay home page")
})

const citiesRoute = require('./routes/Cities');
const ServicesRoute = require('./routes/Services');
const ReservationsRoute = require('./routes/Reservations');

app.use('/reservations', ReservationsRoute)
app.use('/cities', citiesRoute)
app.use('/services', ServicesRoute)

app.listen(3000, () => {
    console.log("Listening at port 3000")
  })