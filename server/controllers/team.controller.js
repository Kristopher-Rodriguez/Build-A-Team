const Team = require("../models/team.model");

module.exports = {
  findAllTeams: (req, res) => {
    Team.find({})
      .then((allTeams) => {
        console.log(allTeams);
        res.json(allTeams);
      })
      .catch((err) => {
        console.log("findAllTeams has failed!");
        console.log(err);
        res.json(err);
      });
  },

  createNewTeam: (req, res) => {
    console.log("Body", req.body);
    Team.create(req.body)
      .then((newTeam) => {
        console.log(newTeam);
        res.json(newTeam);
      })
      .catch((err) => {
        console.log("createNewTeam has failed!");
        res.status(400).json(err);
      });
  },

  findOneTeam: (req, res) => {
    Team.findOne({ _id: req.params.id })
      .then((oneTeam) => {
        console.log(oneTeam);
        res.json(oneTeam);
      })
      .catch((err) => {
        console.log(err);
        console.log("findOneTeam has failed!");
        res.json(err);
      });
  },

  deleteOneTeam: (req, res) => {
    Team.deleteOne({ _id: req.params.id })
      .then((deletedTeam) => {
        console.log(deletedTeam);
        res.json(deletedTeam);
      })
      .catch((err) => {
        console.log(err);
        console.log("deleteOneTeam has failed!");
        res.json(err);
      });
  },

  updateTeam: (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedTeam) => {
        console.log(updatedTeam);
        res.json(updatedTeam);
      })
      .catch((err) => {
        console.log(err);
        console.log("updateTeam has failed!");
        res.status(400).json(err);
      });
  },
};
