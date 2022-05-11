import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const TeamDetails = () => {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [pokeOne, setPokeOne] = useState("");
  const [pokeTwo, setPokeTwo] = useState("");
  const [pokeThree, setPokeThree] = useState("");
  const [pokeFour, setPokeFour] = useState("");
  const [pokeFive, setPokeFive] = useState("");
  const [pokeSix, setPokeSix] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/teams/${id}`)
      .then((res) => {
        const { data } = res;
        setTeams(data);
        setTeamName(data.teamName);
        setTrainerName(data.trainerName);
        setPokeOne(data.pokeOne);
        setPokeTwo(data.pokeTwo);
        setPokeThree(data.pokeThree);
        setPokeFour(data.pokeFour);
        setPokeFive(data.pokeFive);
        setPokeSix(data.pokeSix);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDeleteTeam = (id) => {
    axios
      .delete(`http://localhost:8000/api/teams/${id}`)
      .then((res) => {
        console.log(res);
        const filteredTeams = teams.filter((team, index) => {
          return team._id !== id;
        });
        console.log(filteredTeams);
        setTeams(filteredTeams);
      })
      .catch((err) => console.log(err));
      navigate("/")
  };

  return (
    <div>
      <div className="container mt-3">
        <h4>{teamName}</h4>
      </div>
      <div className="d-flex flex-wrap container justify-content-center mt-3">
        <div className="mt-2">
          <p className="fw-bold">
            Trainer Name: <span className="fw-normal">{trainerName}</span>
          </p>
          <p className="fw-bold">
            Pokemon 1: <span className="fw-normal text-capitalize">{pokeOne}</span>
          </p>
          <p className="fw-bold">
            Pokemon 2: <span className="fw-normal text-capitalize">{pokeTwo}</span>
          </p>
          <p className="fw-bold">
            Pokemon 3: <span className="fw-normal text-capitalize">{pokeThree}</span>
          </p>
          <p className="fw-bold">
            Pokemon 4: <span className="fw-normal text-capitalize">{pokeFour}</span>
          </p>
          <p className="fw-bold">
            Pokemon 5: <span className="fw-normal text-capitalize">{pokeFive}</span>
          </p>
          <p className="fw-bold">
            Pokemon 6: <span className="fw-normal text-capitalize">{pokeSix}</span>
          </p>
        </div>
      </div>
      <div>
      <button
          className="btn btn-danger"
          onClick={() => handleDeleteTeam(teams._id)}
        >
          &#127968; Delete {teamName}
        </button>
      </div>
    </div>
  );
};

export default TeamDetails;
