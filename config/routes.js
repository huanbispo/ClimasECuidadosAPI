const express = require('express')
const routes = express.Router()
const API_KEY = require('../utils/WeatherAPIKey')
const fetch = require('node-fetch');


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

routes.get('/getCuidadoLocal/:municipio',(req,res) =>{

    let municipio = req.params.municipio

console.log(municipio);

    fetch(
        'http://queimadas.dgi.inpe.br/api/auxiliar/municipios?pais_id=33'
    )
    .then(res => res.json())
    .then(json => { 
        let cont=0
        for (let i = 0; i < json.length; i++) {
            cont++;
            
        }
        console.log(cont);
        //res.json(json)
    })
return

    // fetch(
    //     `http://queimadas.dgi.inpe.br/api/focos/?pais_id=33`
    // )
    // .then(res => res.json())
    // .then(json => {
    //     res.json(json)
    // })



})



module.exports = routes