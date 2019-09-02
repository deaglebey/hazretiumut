const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let afkneden = args.slice(0).join(' ');
  let name = message.author.username
  if(!message.author.username.startsWith()){
    message.member.setNickname(`[AFK]${message.author.username}`);
  }
        if (afkneden.length < 1) {
        return message.reply('**AFK** Nedenini **__Yazman__** Lazım ');
          } else {
            message.delete();
            const afkm = new Discord.RichEmbed()
             .setTitle('Klavyeden Uzakta')
             .setDescription(`${message.author.username} AFK Nedeni: ${afkneden}`)
            return message.channel.sendEmbed(afkm)
        
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk','awardfromkeyboard'],
  permLevel: 0
};

exports.help = {
  name: 'info-afk',
  description: 'AFK Moduna geçersiniz',
  usage: 'afk sebepiniz'
};