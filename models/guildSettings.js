const mongoose = require('mongoose')

module.exports = mongoose.model("GSettings", mongoose.Schema({
  guildID: String,
  premiumState: { type: Boolean, default: false },
  prefix: String,
  welcomechannel: String,
  modchannel: String
}))
