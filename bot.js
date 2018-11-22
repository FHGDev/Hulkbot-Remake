const discord = require('discord.js')
const bot = new discord.Client()
const prefix = "h:"
bot.commands = new discord.Collection()

require('fs').readdir('./commands/', (err, files) => {
   if (err) return console.log("error loading commands!");
   files.filter(f => f.split(".").pop() == "js").forEach((f,i) => {
      bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
   })
})

bot.login(process.env.tok)
