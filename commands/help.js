module.exports = {
  name: 'help',
  usage: '!help',
  execute(message, args, client) {
    message.reply(
      {embed: {
          title: `All command`,
          color: '61304B',
          fields: [
            client.commands.map(el => {
              return {name: el.name, value: el.usage}
            })
          ]
        }}
    )
  }
}