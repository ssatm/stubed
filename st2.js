const Discord = require ('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


  client.on('ready', async () => {
      let ToRnEdO  = ["hi","spam","nigga"]
  setInterval(() => {
client.channels.get("489081550835548201").send(`${ToRnEdO [Math.floor(Math.random() *ToRnEdO .length)]}`)
},100);
});
  



client.on('message', message => {
  if(message.author.bot) return;  

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

let rank = message.guild.member(message.author).roles.find('name', 'say -_+');
if (!rank) return message.reply('-_- go out ')
  message.channel.send(args.join("  "))
    message.delete();
  }


});
  
  

client.login(process.env.BOT_TOKEN);
