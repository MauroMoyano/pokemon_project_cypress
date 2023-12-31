const express = require('express');
const router = express.Router();
const { Type } = require('../db')

router.get('/', async (req, res) => {
    const response = await Type.findAll();
    res.status(200).json(response);
})

module.exports = router;