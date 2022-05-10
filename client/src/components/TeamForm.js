import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TeamForm = (props) => {
  const { pokemonId, setpokemonId } = props;
  //Search Bar
  const [pokeDex, setPokeDex] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");

  //Team Info
  const [teamName, setTeamName] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [pokeOne, setPokeOne] = useState("");
  const [pokeTwo, setPokeTwo] = useState("");
  const [pokeThree, setPokeThree] = useState("");
  const [pokeFour, setPokeFour] = useState("");
  const [pokeFive, setPokeFive] = useState("");
  const [pokeSix, setPokeSix] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=897&offset=0")
      .then((res) => {
        console.log(res.data.results);
        setPokeDex(res.data.results);
      })
      .catch((err) => console.log(err.response));
  }, []);

  //on form submit, the request to the server is made to post a new Team
  const handleAddTeam = (e) => {
    e.preventDefault();
    console.log(teamName);
    axios
      .post("http://localhost:8000/api/teams", {
        teamName,
        trainerName,
        pokeOne,
        pokeTwo,
        pokeThree,
        pokeFour,
        pokeFive,
        pokeSix,
      })
      .then((res) => {
        console.log("success", res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err.response);
        setErrors(err.response.data.errors);
      });
  };

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    pokeDex.map((pokemon) => {
      if (pokemon.name.includes(searchQuery)) {
        setFilteredName(pokemon);
      }
      return filteredName;
    });
  };

  const searchAndAdd = (e) => {
    handleSearch(e);
  };

  const addPokemonToTeam = () => {
    if (pokeOne === "") {
      setPokeOne(filteredName.name);
      return pokeOne;
    } else if (pokeTwo === "") {
      setPokeTwo(filteredName.name);
      return pokeTwo;
    } else if (pokeThree === "") {
      setPokeThree(filteredName.name);
      return pokeThree;
    } else if (pokeFour === "") {
      setPokeFour(filteredName.name);
      return pokeFour;
    } else if (pokeFive === "") {
      setPokeFive(filteredName.name);
      return pokeFive;
    } else if (pokeSix === "") {
      setPokeSix(filteredName.name);
      return pokeSix;
    } else {
      return "Team is full!";
    }
  };

  return (
    <div>
      <div className="m-2">
        <h4>Create a Team</h4>
      </div>
      <form onSubmit={handleAddTeam} className="">
        <div>
          <div className="">
            <label htmlFor="team-name">Team Name:</label>
            <input
              className="m-1"
              type="text"
              id="team-name"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>
          {errors.teamName && (
            <p className="mt-2" style={{ color: "red" }}>
              {errors.teamName.message}
            </p>
          )}
          <div className="">
            <label htmlFor="trainer-name">Trainer Name:</label>
            <input
              className="m-1"
              type="text"
              id="trainer-name"
              onChange={(e) => setTrainerName(e.target.value)}
            />
          </div>
          {errors.trainerName && (
            <p className="mt-2" style={{ color: "red" }}>
              {errors.trainerName.message}
            </p>
          )}
        </div>
        <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <label className="m-2" htmlFor="pokemon">
            Enter name of Pokemon:{" "}
          </label>
          <div>
            <input
              onChange={(e) => searchAndAdd(e.target.value.toLowerCase())}
              className="border border-solid border-black"
              type="text"
            />
            <button
              onClick={addPokemonToTeam}
              type="button"
              className="btn btn-info p-1 m-2"
            >
              Add to team
            </button>
            {searchQuery && (
              <p className="text-capitalize">
                <span className="fw-bold">Search Result:</span>{" "}
                {filteredName.name}
              </p>
            )}
          </div>
          <div>
            <div>
              <h5>Add up to six Pokemon:</h5>
            </div>
            {pokeOne && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-capitalize mt-2">1. {pokeOne}</p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeOne}.png`}
                  alt="pokemon-1"
                />
              </div>
            )}
            {pokeTwo && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-capitalize mt-2">2. {pokeTwo}</p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeTwo}.png`}
                  alt="pokemon-2"
                />
              </div>
            )}
            {pokeThree && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-capitalize mt-2">3. {pokeThree}</p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeThree}.png`}
                  alt="pokemon-3"
                />
              </div>
            )}
            {pokeFour && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-capitalize mt-2">4. {pokeFour}</p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeFour}.png`}
                  alt="pokemon-4"
                />
              </div>
            )}
            {pokeFive && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-capitalize mt-2">5. {pokeFive}</p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeFive}.png`}
                  alt="pokemon-5"
                />
              </div>
            )}
            {pokeSix && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-capitalize mt-2">6. {pokeSix}</p>
                <img
                  className="mb-2"
                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeSix}.png`}
                  alt="pokemon-6"
                />
              </div>
            )}
          </div>
        </div>
        <div className="my-2">
          <button className="btn btn-primary" type="submit">
            &#128228; Add Team
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamForm;