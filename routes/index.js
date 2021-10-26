const express = require("express");
const router = express.Router();

const ambeeAPI = "https://api.ambeedata.com/";
const API_KEY = process.env.ambee_API_KEY;

const headers = {
    "content-type": "application/json",
    "x-api-key": API_KEY,
    Host: "api.ambeedata.com",
  };

router.get("/", (req, res, next) => {
  console.log('teste');

  fetch(`${ambeeAPI}/latest/fire?lat=-23.537205&lng=-46.796230`, {
    method: "GET",
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

});

module.exports = router;
