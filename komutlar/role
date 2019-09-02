const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':rocket: ** Bu Komudu Kullanmak İçin** `Rolleri Yönet` **Yetkisine Sahip Olmalısın!**').setColor("RED"));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:rocket: ** Lütfen Bir Kullanıcı İsmi Giriniz!**\n\n**Örnek:** \` m/ra <@kullanıcı> <@rol>\``).setColor("RED"));
    let role = message.mentions.roles.first()
    
     if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(` :rocket: ** Lütfen Bir Rol İsmi Giriniz!**\n\n**Örnek:** \`m/ra <@kullanıcı> <@rol>\``).setColor("RED"));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:rocket: ** Bu Rolü Bulamıyorum!**\n\n**Örnek:** \`m/ra <@kullanıcı> <@rol>\``).setColor("RED"));

  if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':rocket: ** Rolü Vermek İstediğiniz Kullanıcı Zaten Bu Rolde**').setColor("RED"));
    await (rMember.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:rocket: **${rMember} **İsimli **Kullanıcıya** \`${role.name}\` **İsimli Rol Başarıyla Verildi.**`).setColor('ORANGE'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ra'],
  permLevel: 1
};

exports.help = {
  name: "marslı",
  description: "Sunucuda Etiketlediğiniz Bir Üye İstediğiniz Rolü Verir Bot.",
  usage: "marslı"
}; 