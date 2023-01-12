// (4) Buat Schema Ikan
const mongoose = require('mongoose')

const IkanSchema = mongoose.Schema({
    // Buat Schema data
    jenisIkan: {
        type: String,
        required: true
    },
    harga: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Ikan', IkanSchema)