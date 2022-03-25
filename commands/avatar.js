module.exports = {
  name: 'avatar',
  usage: '!avatar <mention if necessary>',
  execute(message) {
    const target = message.mentions.users.first() || message.author

    message.reply({files: [
        {
          attachment: target.displayAvatarURL({size: 512}),
          name: 'avatar.webp'
        }
      ]})
  }
}