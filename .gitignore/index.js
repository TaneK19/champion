   const Discord = require("discord.js");

   var bot = new Discord.Client();

   bot.on("ready" , function () {
       bot.user.setGame("Champion, !help");
       console.log("Bot connected")
   });

   bot.login(process.env.TOKEN);
