module.exports = {
  name: 'queue',
  usage: '!queue',
  async execute(message, args, client) {
    const queue = await client.player.getQueue(message.guild.id)
    if (!queue) {
      return message.reply('Empty queue')
    }
    message.reply(
        '```Queue \n' + queue.songs.map((el, index) => {
        return `${index === 0 ? 'Now Playing' : `#${index + 1}`} - ${el.name} : ${el.duration} | ${el.author}`
      }) + '\n```'
    )
  }
}