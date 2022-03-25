module.exports = {
  name: 'userinfo',
  usage: '!userinfo <mention if necessary>',
  execute(message) {
    const target = message.mentions.users.first() || message.author

    message.channel.send(
      {embed: {
        title: `A info about ${target.username}`,
        color: '8A2BE2',
        thumbnail: {url: target.displayAvatarURL()},
        fields: [{name: 'name', value: `${target.username}`},
          {name: 'Created at', value: `${target.createdAt}`},
          {name: 'ID', value: `${target.id}`}]
      }}
    )
  }
}