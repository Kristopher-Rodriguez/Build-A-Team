import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTeam = () => {
  const { id } = useParams();
  //Search Bar
  const [pokeDex, setPokeDex] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [teamError, setTeamError] = useState("");

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
    axios
      .get(`http://localhost:8000/api/teams/${id}`)
      .then((response) => {
        const { data } = response;
        setTeamName(data.teamName);
        setTrainerName(data.trainerName);
        setPokeOne(data.pokeOne);
        setPokeTwo(data.pokeTwo);
        setPokeThree(data.pokeThree);
        setPokeFour(data.pokeFour);
        setPokeFive(data.pokeFive);
        setPokeSix(data.pokeSix);
      })
      .catch((error) => console.log(error));
  }, [id]);

  //on form submit, the request to the server is made to edit Team
  const handleUpdateTeam = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/teams/${id}`, {
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

  //Function for search, shows user a search result
  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    pokeDex.map((pokemon, index) => {
      if (pokemon.name.includes(searchQuery)) {
        setFilteredName(pokemon);
      }
      return filteredName;
    });
  };

  const searchAndAdd = (e) => {
    handleSearch(e);
  };

  //Function to add a Pokemon to your team
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
      setTeamError("Team is full!");
      return teamError;
    }
  };

  return (
    <>
      <div className="bg-danger">
        <div className="container">
          <h1 className="text-light">Update Team</h1>
        </div>
      </div>
      <div className="card mx-auto my-3" style={{width:"322px"}}>
        <form onSubmit={handleUpdateTeam} className="">
          <div className="card-header bg-dark text-light">
            <div className="">
              <label htmlFor="team-name">Team Name:</label>
              <input
                className="m-1"
                type="text"
                id="team-name"
                onChange={(e) => setTeamName(e.target.value)}
                value={teamName}
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
                value={trainerName}
              />
            </div>
            {errors.trainerName && (
              <p className="mt-2" style={{ color: "red" }}>
                {errors.trainerName.message}
              </p>
            )}
          </div>
          <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
            <label className="mt-3" htmlFor="pokemon">
              Enter name of Pok??mon:{" "}
            </label>
            <div className="card-body">
              <input
                onChange={(e) => searchAndAdd(e.target.value.toLowerCase())}
                className="border border-solid border-black"
                type="text"
              />
              <button
                onClick={addPokemonToTeam}
                type="button"
                className="btn btn-dark p-1 m-2"
              >
                Add to team
              </button>
              {searchQuery && (
                <p className="text-capitalize">
                  <span className="fw-bold">Pok??mon to be added:</span>{" "}
                  {filteredName.name}
                </p>
              )}
            </div>
            <div>
              <div>
                <h5>Add up to six Pok??mon:</h5>
              </div>
              {pokeOne && (
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-capitalize mt-2">{pokeOne}</p>
                  <img
                    className="mb-2"
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeOne}.png`}
                    alt="pokemon-1"
                  />
                  <button
                    onClick={() => {
                      setPokeOne("");
                      setTeamError("");
                    }}
                    className="btn-small btn-danger ms-1"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
              {pokeTwo && (
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-capitalize mt-2">{pokeTwo}</p>
                  <img
                    className="mb-2"
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeTwo}.png`}
                    alt="pokemon-2"
                  />
                  <button
                    onClick={() => {
                      setPokeTwo("");
                      setTeamError("");
                    }}
                    className="btn-small btn-danger ms-1"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
              {pokeThree && (
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-capitalize mt-2">{pokeThree}</p>
                  <img
                    className="mb-2"
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeThree}.png`}
                    alt="pokemon-3"
                  />
                  <button
                    onClick={() => {
                      setPokeThree("");
                      setTeamError("");
                    }}
                    className="btn-small btn-danger ms-1"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
              {pokeFour && (
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-capitalize mt-2">{pokeFour}</p>
                  <img
                    className="mb-2"
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeFour}.png`}
                    alt="pokemon-4"
                  />
                  <button
                    onClick={() => {
                      setPokeFour("");
                      setTeamError("");
                    }}
                    className="btn-small btn-danger ms-1"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
              {pokeFive && (
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-capitalize mt-2">{pokeFive}</p>
                  <img
                    className="mb-2"
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeFive}.png`}
                    alt="pokemon-5"
                  />
                  <button
                    onClick={() => {
                      setPokeFive("");
                      setTeamError("");
                    }}
                    className="btn-small btn-danger ms-1"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
              {pokeSix && (
                <div className="d-flex justify-content-center align-items-center">
                  <p className="text-capitalize mt-2">{pokeSix}</p>
                  <img
                    className="mb-2"
                    src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokeSix}.png`}
                    alt="pokemon-6"
                  />
                  <button
                    onClick={() => {
                      setPokeSix("");
                      setTeamError("");
                    }}
                    className="btn-small btn-danger ms-1"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
              {teamError && <p className="team-error">{teamError}</p>}
            </div>
          </div>
          <div className="my-2">
            <button className="btn btn-primary" type="submit">
              &#128228; Update Team
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateTeam;
