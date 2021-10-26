const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Clima e Cuidados API',
    version: '1.0.1'
  });
});

module.exports = router;