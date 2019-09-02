const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('ORANGE')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`yolcu` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(':rocket: **Bu Komutu Kullanmak İçin** \`Yönetici\` **İznine Sahip Olmalısın!**');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.channel.send('**Hangi Kullanıcının Rolünü Alcam Yazmadın!**').catch(console.error);
  if (rol.length < 1) return message.channel.send('**Hangi Rolü O Kişiden Alcağımı Belirtmediniz!** :rocket:');
user.removeRole(rol);
  message.channel.send("**Rol Başarıyla Alındı!** :rocket:")

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rv'],
  permLevel: 1
};

exports.help = {
  name: 'yolcu',
  description: 'İstediğiniz Kişiden İstediğiniz Rolü Alır.',
  usage: 'yolcu'
};