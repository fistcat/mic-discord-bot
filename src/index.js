require("dotenv/config");
const { Client, GatewayIntentBits } = require("discord.js");
const { CommandKit } = require("commandkit");
const { default: mongoose } = require("mongoose");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    new CommandKit({
      client,
      devGuildIds: ["1247735960662183996"],
      devUserIds: ["257308275106643969"],
      eventsPath: `${__dirname}/events`,
      commandsPath: `${__dirname}/commands`,
      bulkRegister: true,
    });
    client.login(process.env.TOKEN);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();
