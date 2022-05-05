const TeamController = require("../controllers/team.controller");

module.exports = (app) => {
  app.get("/api/teams", TeamController.findAllTeams);
  app.post("/api/teams", TeamController.createNewTeam);
  app.get("/api/teams/:id", TeamController.findOneTeam);
  app.delete("/api/teams/:id", TeamController.deleteOneTeam);
  app.put("/api/teams/:id", TeamController.updateTeam);
};
