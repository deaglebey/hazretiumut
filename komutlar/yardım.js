const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("` ⸘ Space Realm: Mars`")
  .setColor('ORANGE')
  .addField("**⸘ Mars Kayıt Komutları**", `**m/ra** = @Kişiyi Etiketle - @Martian Man, @Martian Lady \n**m/rv** = @Kişiyi Etiketle - @YeniYolcu`)
  .addField("**⸘ Kullanıcı Komutları**", `**m/rapor** = İstediğiniz Kullanıcıyı Reportlarsınız. \n**m/sunucubilgi** = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n**m/sunucuresmi** = Bulunduğunuz Sunucunun Resmin Gösterir. \n**m/kullanıcıbilgim** = Sizin Hakkınızda Bilgi Verir. \n**m/av** = Avatarınınızı Gösterir. `)
  .addField("**⸘ Sunucu Yetkilisi Komutları**", `**m/ban** = İstediğiniz Kişiyi Sunucudan Banlar. \n**m/at**  = İstediğiniz Kişiyi Sunucudan Atar. \n**m/unban** = İstediğiniz Kişinin Yasağını Açar. \n**m/sustur** = İstediğiniz Kişiyi Susturur. \n**m/sil** = Belirtilen Miktarda Mesajı Silir. \n**m/oylama** = Oylama Açar. \n**m/duyuru** = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**⸘ Botun Ana Komutları**", "**m/yardım** = Komutlarını Atar. \n**m/bilgi** = Bot Hakkında Bilgi Verir. \n**m/ping** = Gecikme Süresini Söyler. \n**m/davet** = Davet Linkini Atar. \n**m/istatistik** = İstatistiklerini Gösterir.")
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setFooter('⸘ Space Realm: Mars')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'halp', 'help', 'y'],
  permLevel: 2
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
