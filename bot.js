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

bot.on('ready', () => {
  console.log(bot.user)
  bot.user.setActivity(`for h:help | Hulkbot Remake`, {type: "WATCHING"})
})

bot.on('message', message => {
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const log_cmd = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(log_cmd)
  
  if (!message.content.startsWith(prefix)) return;
  if (!message.author.bot) return;
  if (!message.guild) return;
  
  if (cmd) {
    cmd.execCmd(bot, message, args)
    console.log(`${message.author.username} used the ${log_cmd} command.`);
  }
})

bot.login(process.env.tok)
