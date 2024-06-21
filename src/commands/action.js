const { SlashCommandBuilder } = require("discord.js");
const coreActions = require("../data/coreActions.json");

const data = new SlashCommandBuilder()
  .setName("核心动作")
  .setDescription("选择你一个核心动作执行")
  .addStringOption((option) =>
    option
      .setName("动作")
      .setDescription("选择一个核心动作来执行")
      .setRequired(true)
      .setAutocomplete(true)
  );

const run = ({ interaction }) => {
  const targetActionId = interaction.options.getString("动作");
  const action = coreActions.find((a) => a.id === targetActionId);

  interaction.reply(`核心动作：${action.actionName}`);
};

module.exports = { data, run };
