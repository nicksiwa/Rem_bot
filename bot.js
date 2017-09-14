const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const text = require("./text.json");

client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "Sicbo",
      type: 0
    }
  });
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.author.bot) {
    message.channel.stopTyping();
  } else {
    if ((message.content.match("Emilia")) || (message.content.match("emilia"))) {
      message.channel.send("Emilia ส้นตีน");
    }
    if ((message.content.match("Rem")) || (message.content.match("rem"))) {
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
    if (message.content.match("เวล")) {
      message.channel.send("ตันแล้ว");
    }
  }
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "says") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }
  if (command === "dice") {

    function roll() {
      var i, value, output = '', diceCount = 3;
      for (i = 0; i < diceCount; i++) {
        value = Math.floor(Math.random() * 6) + 1;
        output += value + " ";
      }
      return output;
    }
    message.channel.send(roll());
  }
});

client.login(config.token);