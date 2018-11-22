const em = new (require('discord.js').RichEmbed)()
const Money = require('../models/money.js')

module.exports.execCmd = (bot, message, args) => {
  const randomcash = Math.ceil(Math.random() * 300)
  const newMoney = new Money({
    userId: message.author.id,
    money: randomcash
  })
  newMoney.save()
  em
  .setTitle("You worked at the office today!")
  .setDescription(`Earnings: **${randomcash}** -------- Balance: ${newMoney.money}`)
  .setTimestamp()
  .setColor("GREEN")
  message.channel.send({embed: em})
}

module.exports.help = {name: "work"}
