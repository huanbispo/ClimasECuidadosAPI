const express = require("express");
const axios = require("axios").default;
const routes = express.Router();
const API_KEY = process.env.ambee_API_KEY;


routes.get("/getQueimadasLocal/:lat/:lon", (req, res) => {
    let lat = req.params.lat;
    let lon = req.params.lon;
    
    const options = {
        method: "GET",
        headers: { "x-api-key": `${API_KEY}`, "Content-type": "application/json" },
        url: "https://api.ambeedata.com/latest/fire",
        params: { lat: `${lat}`, lng: `${lon}` },
    };
    
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

});

module.exports = routes;
