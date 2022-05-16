import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAllTeams = () => {
  const [teams, setteams] = useState([]);

  useEffect(() => {
    console.log("useEffectFired");
    axios
      .get("http://localhost:8000/api/teams")
      .then((res) => {
        console.log(res);
        setteams(res.data);
      })
      .catch((err) => console.log(err.res));
  }, []);

  return (
    <div className="mx-auto">
      <div className="pb-2">
        <h4 className="current-teams">Current Teams:</h4>
      </div>
      <table className="mx-auto table table-hover table-secondary table-striped table-bordered border-dark w-75">
        <thead>
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Trainer Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => {
            return (
              <tr key={team._id}>
                <td className="align-middle">{team.teamName}</td>
                <td className="align-middle">{team.trainerName}</td>
                <td>
                  <Link to={`/teams/${team._id}`}>Details</Link>
                  <span> | </span>
                  <Link to={`/teams/${team._id}/edit`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllTeams;