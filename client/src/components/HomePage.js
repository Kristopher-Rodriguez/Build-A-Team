import { useState } from "react";
import axios from "axios";

const HomePage = (props) => {
  const { pokemonId, setPokemonId, loading, setLoading } = props;
  const [findPokemon, setFindPokemon] = useState("");
  const [pokemonSearchResult, setPokemonSearchResult] = useState("");
  // const [pokemonId, setPokemonId] = useState("");
  const [error, setError] = useState("");
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const searchForPokemon = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(findPokemon);
    axios
      .get(url + findPokemon)
      .then((res) => {
        console.log(res.data.name);
        setPokemonSearchResult(res.data.name);
        setPokemonId(res.data.id);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
        setLoading(false);
      });
    setError("");
    setPokemonId("");
  };

  return (
    <div>
      <form onSubmit={searchForPokemon}>
        <div className="container mx-auto flex flex-col m-2">
          <label htmlFor="pokemon">Enter number or name of Pokemon: </label>
          <div>
            <input
              onChange={(e) => setFindPokemon(e.target.value.toLowerCase())}
              className="border border-solid border-black"
              type="text"
            />
            <button type="submit" className="btn btn-info p-1 m-2">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center align-items-center">
        {pokemonId && (
          <div>
            <p className="text-capitalize fw-bold">{`${pokemonSearchResult}`}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt="pokemon-sprite"
              className=""
            />
          </div>
        )}
        {error ? (
          <p style={{ color: "red" }}>Pokemon {error.toLowerCase()}!</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
