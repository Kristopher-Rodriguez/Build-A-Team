import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import pokeballs from "../assets/pokeballs.png"

const TeamDetails = () => {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [trainerName, setTrainerName] = useState("");
  // const [pokeOne, setPokeOne] = useState("");
  // const [pokeTwo, setPokeTwo] = useState("");
  // const [pokeThree, setPokeThree] = useState("");
  // const [pokeFour, setPokeFour] = useState("");
  // const [pokeFive, setPokeFive] = useState("");
  // const [pokeSix, setPokeSix] = useState("");
  const navigate = useNavigate();

  const [pokeArray, setPokeArray] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/teams/${id}`)
      .then((res) => {
        const { data } = res;
        setTeams(data);
        setTeamName(data.teamName);
        setTrainerName(data.trainerName);
        // setPokeOne(data.pokeOne);
        // setPokeTwo(data.pokeTwo);
        // setPokeThree(data.pokeThree);
        // setPokeFour(data.pokeFour);
        // setPokeFive(data.pokeFive);
        // setPokeSix(data.pokeSix);
        setPokeArray([
          data.pokeOne,
          data.pokeTwo,
          data.pokeThree,
          data.pokeFour,
          data.pokeFive,
          data.pokeSix,
        ]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(pokeArray);

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
    navigate("/");
  };

  return (
    <div>
      <div className="d-flex flex-wrap container justify-content-center mt-3">
        <div className="">
          <div className="">
          <img className="w-25" src={pokeballs} alt="" />
          <h2 className="team-name">{teamName}</h2>
          <img className="w-25" src={pokeballs} alt="" />
          </div>
          <div className="card mx-auto" style={{width: "20rem"}}>
            <h5 className="fw-bold card-header bg-dark text-light">
              Trainer Name: <span className="fw-normal">{trainerName}</span>
            </h5>
            {pokeArray.map((pokemon, index) => (
              <div className="d-flex justify-content-center mt-2">
                <p className="fw-bold mt-2">
                  Pokemon {index + 1}:{" "}
                  <span className="fw-normal text-capitalize">{pokemon}</span>
                </p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon}.png`}
                  alt="pokemon"
                />
              </div>
            ))}
            <div className="card-body">
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTeam(teams._id)}
              >
                {" "}
                Delete {teamName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
