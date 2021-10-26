const express = require("express");
const fetch = require('node-fetch');
const routes = express.Router();
require('dotenv').config();

const API_KEY = '0c30abf275a8fb309735888342c7a8c088bebfbbe53b4f29d2bd8d8695d4778c'

routes.get('/getQueimadaLocal/:lat/:lon',(req,res) =>{
  let lat = req.params.lat
  let lon = req.params.lon
  fetch(
      `https://api.ambeedata.com/latest/fire?lat=${lat}&lng=${lon}`, {
        method: 'GET',
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json',
          'hostname': "api.ambeedata.com",
      },
    }
  )
  .then(res => res.json())
  .then(json => {
      res.json(json)
  })
})

module.exports = routes;
