// import modules
const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const moment = require('moment');

// MODELS
const destinationDB = require('./models/gallery-model.js');


// hides credentials from repo
const mongoDB = process.env.MONGODB_URL;

// setup database connection
mongoose
    .connect(mongoDB, {useNewUrlParser: true, useNewUrlParser: true})
    .then(() => console.log("DB Connected"));

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

//*************************************************************
// create express app
const app = express();
app.set('view engine', 'pug');

// MOMENT/TIME
const yearFormat="YYYY";
app.locals.moment = moment;
app.locals.yearFormat = yearFormat;
console.log(moment());

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
origin: "https://travel-experts-site.herokuapp.com/",
optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(request, response){
  response.render('index',{});
});

app.get('/register', function(request, response){
  response.render('register',{});
});

app.get('/login', function(request, response){
  response.render('login',{});
});

// Find a specific destination and return it as an object to be used in destination-info. If it doesn't exist, go to 404 page.
app.get('/:location', function(request, response){
  destinationDB.findOne({location: request.params.location}, function(err, destination) {
    if (err) return "The find all doc query encountered an error";
    destination ? response.render('destination-info', destination) : response.render('404', {})
  });
});

// This is what is fetched.
app.get('/api/destinations', function(request, response){
  destinationDB.find({}, function(err, destinationDB){
    if (err) return "Failed to load gallery database";
    response.json(destinationDB);})
});


// if no, send a 404 error as a response to the browser
app.get('*', function(req, res){
  res.send('<h1>404: Page not found.</h1>');
})

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

// unused code //