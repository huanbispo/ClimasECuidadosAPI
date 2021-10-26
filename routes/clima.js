const express = require('express')
const fetch = require('node-fetch');
const routes = express.Router()
const API_KEY = process.env.API_KEY;


routes.get('/getClimaLocal/:lat/:lon',(req,res) =>{
    let lat = req.params.lat
    let lon = req.params.lon
    fetch(
        `https://api.hgbrasil.com/weather?key=${API_KEY}&lat=${lat}&lon=${lon}&user_ip=remote`
    )
    .then(res => res.json())
    .then(json => {
        res.json(json)
    })
})

module.exports = routes