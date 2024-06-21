const { default: mongoose } = require("mongoose");
const playerSchema = require("../models/player");
const Player = mongoose.model("Player", playerSchema);

module.exports = {
  data: {
    name: "action",
    description: "roll一次2d6",
  },

  run: async ({ interaction }) => {
    console.log(interaction.member);
    await Player.create({ name: "test" });
    interaction.reply(`${interaction.member.user} run create`);
  },

  options: {
    deleted: false,
  },
};
