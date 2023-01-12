// (5) Buat router Ikan
const express = require('express')
const router = express.Router() 
const Ikan = require('../models/Ikan')
const verifyToken = require('../config/verifyToken')

// Create 
router.post('/', verifyToken, async(req, res) => {
    // tampung input ikan 
    const ikanPost = new Ikan({
        jenisIkan: req.body.jenisIkan,
        harga: req.body.harga,
        stock: req.body.stock
    })

    try {
        // simpan data 
        const ikan = await ikanPost.save()
        // response
        res.json(ikan)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const ikan = await Ikan.find()
        res.json(ikan)
    } catch (error) {
        res.json({message: error})
    }
})

// Update 
router.put('/:ikanId', async(req, res) => {
    // tampung input ikan 
    const data = {
        jenisIkan: req.body.jenisIkan,
        harga: req.body.harga,
        stock: req.body.stock
    }

    try {
        // update data 
        const ikan = await Ikan.updateOne({_id: req.params.ikanId}, data)
        // response
        res.json(ikan)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:ikanId', async(req, res) => {
    try {
        // delete data 
        const ikan = await Ikan.deleteOne({_id: req.params.ikanId})
        // response
        res.json(ikan)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router