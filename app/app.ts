import Discord from "discord.js";
import config from "./config.json";

const client = new Discord.Client();

const prefix = "!";

let coin = 0;

console.log('The bot is running!');
const timestamp = new Date();
console.log(timestamp.toLocaleString());

client.on("message", function (message) {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "coin") {

    message.channel.send('', {
      embed: {
        color: 'GREEN',
        title: `Gamogen Coin Game`,
        fields: [
          {
            name: `Tebrikler!`,
            value: `\`\`\`Coin: ${++coin}\`\`\``
          }
        ],
        footer: {
          text: 'gamogen'
        }
      }
    });

  }

});

client.login(config.token);