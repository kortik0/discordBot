module.exports = {
  name: 'play',
  usage: '!play <-skip|pause|resume|progress if necessary> || <song name | youtube or spotify link>',
  // TODO рассмотреть идею добавления системы плейлистов.
  async execute(message, args, client) {
    try{
      switch (args[0]) {
        case '-skip' :
          return await client.player.skip(message.guild.id)
        case '-pause' :
          return await client.player.pause(message.guild.id)
        case '-resume':
          return await client.player.resume(message.guild.id)
        case '-progress':
          return message.channel.send(client.player.createProgressBar(message.guild.id, 20))
      }
      if (client.player.isPlaying(message.guild.id)) {
        return await client.player.addToQueue(message.guild.id, args.join(' '))
          .then(ev => !ev.song ? message.reply(`${ev.error.message}`) : message.reply(`I put your song at queue! - ${ev.song.name}`))
        // Enter link/name of song please!
      }
      return await client.player.play(message.member.voice.channel, args.join(' '))
        .then(ev => !ev.song ? message.reply(`${ev.error.message}`) : message.reply(`I put your song on! - ${ev.song.name}`))
      // Enter link/name of song please!
    }
    catch (e) {
      console.log(e)
    }
  }
}