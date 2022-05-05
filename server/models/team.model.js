const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: [true, "A team name is required!"],
      minlength: [3, "Team name must be at least 3 characters long!"],
    },
    trainerName: {
      type: String,
      required: [true, "Trainer name is required!"],
      minlength: [3, "Trainer name must be at least 3 characters long!"],
    },
    pokeOne: {
      type: String,
    },
    pokeTwo: {
      type: String,
    },
    pokeThree: {
      type: String,
    },
    pokeFour: {
      type: String,
    },
    pokeFive: {
      type: String,
    },
    pokeSix: {
      type: String,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
