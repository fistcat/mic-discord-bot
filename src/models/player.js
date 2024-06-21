const { Schema } = require("mongoose");

const tagSchema = new Schema({
  tagName: String,
  isBurued: {
    type: Boolean,
    default: false,
  },
  question: String,
  questionTag: String,
  tagType: String,
});

const themeSchema = new Schema({
  themeName: String,
  themeType: String,
  powerTags: [tagSchema],
  wakenessTags: [tagSchema],
  mysteryOrIdentity: String,
  attention: Number,
  fade: Number,
});

const playerSchema = new Schema({
  name: String,
  mythos: String,
  logos: String,
  storyTags: [tagSchema],
  themes: [themeSchema],
  buildUp: Number,
  evolution: [String],
  nemeses: [String],
});

module.exports = playerSchema;
