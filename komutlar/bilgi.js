const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**DM den Mesaj attım**! :rocket: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**⸘ Kurucu**", " GONE#0631", )
  .addField("**⸘ Yapı Numarası**", "0.1.9 ", )
  .addField("**⸘ Üretim Tarih**", " 13 Ağustos 2019 ", )
	.addField("**⸘ Bot Davet**", " [Davet Kapalıdır..🚀]", )
  .addField("**⸘ Ana sunucusu**", " [Sunucumuza Katıl](https://discord.gg/rmH2Ab) ", )
	.setThumbnail("https://cdn.discordapp.com/attachments/590244196275847188/597368593839292450/gezegen-1.png");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
