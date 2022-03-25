module.exports = {
  name: "clear",
  usage: '!clear count',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You have not permisssion to do that!')
    if (!args[0]) return message.reply('Select number of messages')
    message.channel.bulkDelete(Number(args[0]) + 1).then(mes => `Thanks for making the server cleaner! ${mes}`).catch(e => message.reply(e.message))
  }
}