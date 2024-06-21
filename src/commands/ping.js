module.exports = {
  data: {
    name: "ping",
    description: "Pong!",
  },

  run: ({ interaction, client, handler, commandObj }) => {
    interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
    console.log(interaction);
  },

  options: {
    devOnly: true,
    userPermissions: ["Administrator"],
    botPermissions: ["Administrator"],
    deleted: false,
  },
};
