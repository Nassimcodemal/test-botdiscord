const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "?ip") msg.channel.send("L'ip du serveur arrive bientot");
  if (msg.content === "") msg.channel.send("");
  if (msg.content === "") msg.channel.send("");
});

client.login("Njg4MDAzMTY2MzkzOTkxMjYy.Xm0RSA.ai1WsN6pxkwSgu28DHaK681fM-Q");
