const em = new (require('discord.js').RichEmbed)()
const Money = require('../models/money.js')

module.exports.execCmd = (bot, message, args) => {
  const randomcash = Math.ceil(Math.random() * 300)
  Money.findOne({userID: message.author.id}, (err, data) => {
    if (!data) {
      const newMoneyz = new Money({
        userID: message.author.id,
        money: randomcash
      })
      em
      .setTitle("You worked at the office today!")
      .setDescription(`Earnings: **${randomcash}** -------- Balance: ${newMoneyz.money}`)
      .setTimestamp()
      .setColor("GREEN")
      message.channel.send({embed: em})
      newMoneyz.save()
    }
    data.money = data.money + randomcash
    data.save()
    em
    .setTitle("You worked at the office today!")
    .setDescription(`Earnings: **${randomcash}** -------- Balance: ${data.money}`)
    .setTimestamp()
    .setColor("GREEN")
    message.channel.send({embed: em})
  })
}

module.exports.help = {name: "work"}
