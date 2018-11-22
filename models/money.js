const mongoose = require('mongoose')

const money = mongoose.Schema({
   userID: String,
   money: { type: Number, default: 0 }
})

module.exports = mongoose.model("money", money)
