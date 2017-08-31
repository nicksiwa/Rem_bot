const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const text = require("./text.json");

client.on("ready", () => {
  client.user.setPresence({ game: { name: "Tree of Savior", type: 0 } });
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.author.bot) {
    message.channel.stopTyping();
  } else {
    if ((message.content.match("Emilia")) || (message.content.match("emilia"))){
      message.channel.send("Emilia ส้นตีน");
    } 
    if ((message.content.match("Rem")) || (message.content.match("rem"))){
      message.channel.send("Hai (─‿‿─)♡");
    }
    if (message.content.match("55")) {
      message.channel.send("ขำไรวะ");
    } 
    if (message.content.match("ควย")) {
      message.channel.send(":middle_finger:");
    } 
    if (message.content.match("ซุ่ม")) {
      message.channel.send("┴┬┴┤( ͡° ͜ʖ├┬┴┬");
    } 
  }
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "rem") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    message.channel.send(sayMessage);
  }
});

client.login(config.token);
