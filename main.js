const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ip`))
    msg.channel.send("L'ip du serveur arrive bientot");
  if (msg.content.startsWith(`${PREFIX}serveur`))
    msg.channel.send("le serveur est en cours de build");
});

client.login(TOKEN);
