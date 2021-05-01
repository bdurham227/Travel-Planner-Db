const router = require('express').Router();

const { Trip } = require('../../models');

router.post('/', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err)
    }
})