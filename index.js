const fs = require("fs")

require("./Config/configConfigurate")

const config = require("./Config/config.json")
const Discord = require("discord.js")

const client = new Discord.Client()
client.commands = new Discord.Collection()

const { Player } = require("discord-music-player")
const player = new Player(client, {
  leaveOnEmpty: false,
})

client.once("ready", () => {
  console.log("Ready!")
  client.player = player
})

fs.readdirSync("./commands")
  .filter((file) => file.endsWith(".js"))
  .forEach((file, index) => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
    console.log(`${index} ${file} on my way!`)
  })

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return

  const args = message.content.slice(config.prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  if (!client.commands.has(command)) {
    return message.reply("Command doesn't exist")
  }

  try {
    client.commands.get(command).execute(message, args, client)
  } catch (e) {
    console.log(e)
    return message.reply("An error occurred while executing the command.")
  }
})

client.login(process.env.TOKEN)
