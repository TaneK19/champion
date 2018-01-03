   const Discord = require("discord.js");

   var bot = new Discord.Client();

   bot.on("ready" , function () {
       bot.user.setGame("Champion, !help");
       console.log("Bot connected")
   });

   bot.login("MzQzNzA4MDI5OTY5MTA0ODk4.DS5RYg.2YDh_NK-gBXpIhKJ1stXFVXb1OE");
