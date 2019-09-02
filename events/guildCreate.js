const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

let defaultChannel = "";
guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
//defaultChannel will be the channel object that it first finds the bot has permissions for
defaultChannel.send(`Hello, I'm LMAOBOT. Thanks for inviting me, here are a list of all my commands! :alien:`, {
embed:{
    title: ':x: Prefix',
    color: 0x2471a3, 
    description: "The prefix for all my commands is \'lmao\', e.g: \'lmao help\'.",
    fields:[
        {
            name: ':tada: Fun',
            value: 'agree, dankrate, gayrate, 8ball, meme, pun, roll, coinflip, doge, kappa, lenny, lol, megusta, pepe, sanic, spiderman, spooderman, troll, wat, dolan, notsure, alone, pupper, kitty'
        },     
        {
            name: ':tools: Utilities',
            value: 'help, ping, invite'
        },
        {
            name: ':loud_sound: Sound Board - WARNING (EARRAPE)',
            value: 'reee, airhorn, momgetthecamera, 20thcenturyfox, dedotatedwam, friendzoned, gofuckyourself, gottagofast, illuminati, ohmygod, pussy, sadviolin, smokeweed, ohbabyatriple, wombocombo, wow'
        } 
    ],

    footer: {
        text: 'LMAOBot created and developed by Pete#4164.'
    }
}
});

