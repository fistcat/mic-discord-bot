module.exports = {
  data: {
    name: "roll",
    description: "roll一次2d6",
  },

  run: ({ client, interaction }) => {
    console.log(interaction.member);
    interaction.reply(
      `${interaction.client.user.displayName}:点数结果-> ${
        2 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6)
      }`
    );
  },

  options: {
    deleted: false,
  },
};
