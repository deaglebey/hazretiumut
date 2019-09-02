const Discord = require('discord.js');
let user
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setAuthor(message.author.username + ` Profil Fotoğrafı.`)
.setImage(`${message.author.avatarURL} `)
.setColor("ORANGE"));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['av'],
 permLevel: 0
};

exports.help = {
 name: 'av',
 description: 'Avatarınızı Atar ',
 usage: 'av'
};
