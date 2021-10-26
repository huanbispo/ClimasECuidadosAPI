const express = require('express');
const bodyParse = require('body-parser');
require('dotenv').config();

const HttpError = require('./models/http-error');

// Import Routes
const climaRoutes = require('./routes/clima');
const queimadasRoutes = require('./routes/queimadas');
const indexRoutes = require('./routes/index');

const app =  express()

app.use(bodyParse.json())

// Routes
app.use('/', indexRoutes);
app.use(`/clima`, climaRoutes)
app.use(`/queimadas`, queimadasRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });

app.listen(3000, () => {
    console.log('server is running local 3000');
})

module.exports = app;