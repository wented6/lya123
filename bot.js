const Discord = require('discord.js');
const meercy = new Discord.Client();

const adminprefix = "L";
const devs = ['577789848669126666','538676483455975431'];
meercy.on('message', message => {
    console.log("oNNN");
     

  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'pl')) {
  meercy.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setavatar')) {
meercy.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'ls')) {
   meercy.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(` تم تغير اللسننق ألى **${argresult} \** `)
} else        
if (message.content.startsWith(adminprefix + 'wt')) {
   meercy.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(` تم تغير الواتشنق ألى **${argresult} \** `)
}
});



meercy.on('ready', () => {
  meercy.user.setStatus("idle")
}); 


 meercy.login(process.env.B);
