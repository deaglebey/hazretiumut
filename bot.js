const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
client.guilds.get('<id>');
const db = require('quick.db');
client.on('message', message => {'<role name>'});
const moment = require('moment');
require('./util/eventLoader')(client);

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

var prefix = ayarlar.prefix;
var Long = require("long");

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("guildMemberAdd", (member) => {
let guild = member.guild; // Reading property `guild` of guildmember object.
let server = member.count;
let user = member.user
let username = member.user.username; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send('Space Realm: Marsa, Hoş Geldin \n \n **'+(user)+'**, Oksijenin olduğu bir marsa giriş yaptın. :rocket:');
}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@605010232426364941>') {
    msg.reply('SAHİBİMİ LÜTFEN ETİKETLEME. :rocket:');
  }
});
        
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('608755856934305821').send("Hoş Geldin"); 
});

client.on('ready', () => {
  let channel = client.channels.get('616673418888216586');
  channel.join()
});

client.on('message', msg => {
  if (msg.content === 'amk') {
    client.channels.get(616673367558324254)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');

    exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: ['amk'],
      permLevel: 2
    };
  }
});


client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});

client.on('message', msg => {
  if (msg.content === 'aq') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === '!p https://discord.gg') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === '!p') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'orospu cocugu') {
    client.channels.get(616673367558324254)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'ana skm') {
    client.channels.get(616673367558324254)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan sikim') {
    client.channels.get(597360780605652998)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
//selamün aleyküm
client.on('message', msg => {
  if (msg.content === 'discord.gg') {
    client.channels.get(597360780605652998)
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
//ᴀᴍᴋ
client.on('message', msg => {
  if (msg.content === 'ᴀᴍᴋ') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
          if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
          msg.react("🇦");
          msg.react("🇸");           
          } else {
          msg.react("🇦");       
          msg.react("🇸");
          }
      }
  });

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'Selam') {
          if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
          msg.react("🇦");
          msg.react("🇸");           
          } else {
          msg.react("🇦");       
          msg.react("🇸");
          }
      }
  });

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'slm') {
          if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
          msg.react("🇦");
          msg.react("🇸");           
          } else {
          msg.react("🇦");       
          msg.react("🇸");
          }
      }
  });

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'Selamun Aleküm') {
          if (!msg.guild.member(msg.author).hasPermission("SEND_MESSAGES")) {
          msg.react("🇦");
          msg.react("🇸");           
          } else {
          msg.react("🇦");       
          msg.react("🇸");
          }
      }
  });
//ᴀǫ
client.on('message', msg => {
  if (msg.content === 'ᴀǫ') {
    msg.delete(5)
    msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
  }
});
client.on('message', msg => {
  if (msg.content === 'Selamun aleküm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'selamün aleküm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamün aleküm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "beynim") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`**IQ Seviyen💡**`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

client.on('message', msg => {
  if (msg.content === '!tag') {
    msg.channel.send('⸘');
  }
});

client.on('message', msg => {
  if (msg.content === '!link') {
    msg.channel.send('`Sınırsız Mars Seyehat Bileti:`https://discord.gg/SgjTD5c 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'slm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Slm') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
    setTimeout(function(){
}, 1000);
  }
});

client.on('message', msg => {
  if (msg.content === 'Sea') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'SEA') {
    msg.reply(' `Aleyküm Selam Hoş Geldin🚀`');
  }
});

client.on('message', msg => {
  if (msg.content === 'Selamm') {
      msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
}
});

client.on('message', msg => {
  if (msg.content === 'sᴇʟᴀᴍᴜɴ ᴀʟᴇʏᴋᴜᴍ') {
      msg.reply('**Aleyküm Selam Hoş Geldin** 🚀');
}
});
//sᴀʟᴀᴋ
client.on('message', msg => {
  if (msg.content === 'sᴀʟᴀᴋ') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'Salak') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'Salak') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'SALAK') {
    msg.reply('**Sende MALSIN** ! 💡');
  }
});
//ᴍᴀʟ
client.on('message', msg => {
  if (msg.content === 'Mal') {
    msg.reply('**Sende Salaksın** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'ᴍᴀʟ') {
    msg.reply('**Sende Salaksın** ! 💡');
  }
});

client.on('message', msg => {
  if (msg.content === 'Günaydın') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});
//ɢᴜɴᴀʏᴅɪɴ
client.on('message', msg => {
  if (msg.content === 'ɢᴜɴᴀʏᴅɪɴ') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'günaydın') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Gunaydn') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'GÜNAYDIN') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'GUNAYDIN') {
    msg.reply('**Günaydın Kaptan** ! `Hoş Geldin` 🚀');
  }
});

client.on('message', msg => {
  if (msg.content === 'Tünaydın') {
      msg.reply('**Tünaydın Kaptan** ! `Hoş Geldin` 🚀');
}
});

client.on('message', msg => {
  if (msg.content === 'tünaydın') {
      msg.reply('**Tünaydın Kaptan** ! `Hoş Geldin` 🚀');
}
});
//bot naber
client.on('message', msg => {
  if (msg.content === 'bot naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'Bot naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'Bot Naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});


client.on('message', msg => {
  if (msg.content === 'Nasılsın') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'Sen nasılsın') {
      msg.reply(' `Çok iyiyim burası çok yalnız hissetiriyor..` 🎈');
}
});

client.on('message', msg => {
  if (msg.content === 'sen nasılsın') {
      msg.reply(' `Çok iyiyim burası çok yalnız hissetiriyor..` 🎈');
}
});

client.on('message', msg => {
  if (msg.content === 'Sen Nasılsın') {
      msg.reply(' `Çok iyiyim burası çok yalnız hissetiriyor..` 🎈');
}
});

client.on('message', msg => {
  if (msg.content === 'Naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'naber') {
      msg.reply(' `İyiyim siz nasılsınız?` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'iyi') {
      msg.reply(' `İyi olmana sevidim!` 😍');
}
});

client.on('message', msg => {
  if (msg.content === 'kötü') {
      msg.reply(' `Kötü olmana üzüldüm kaptan.` 🤔');
}
});

client.on('message', msg => {
  if (msg.content === 'napıyon') {
      msg.reply(' `İyidir Sunucuya Bakıyorum.` 🖤');
}
});

client.on('message', msg => {
  if (msg.content === 'Oc') {
    client.channels.get(616673367558324254)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.on('message', msg => {
  if (msg.content === '!p discord.gg') {
    client.channels.get(616673367558324254)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.on('message', msg => {
  if (msg.content === '!p https://discord.gg') {
    client.channels.get(616673367558324254)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.on('message', msg => {
  if (msg.content === '!phttps://discord.gg') {
    client.channels.get(616673367558324254)
    msg.delete(5)
      msg.reply(' `Lütfen şunu kes! Başka işler ile ilgilenir misin?` ');
}
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply(' `Aleyküm Selam Hoş Geldin!`🚀');
}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 1
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
