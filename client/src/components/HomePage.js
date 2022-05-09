import { useState } from "react";
import axios from "axios";

const HomePage = (props) => {
  const { loading, setLoading } = props;
  const [findPokemon, setFindPokemon] = useState("");
  const [pokemonSearchResult, setPokemonSearchResult] = useState("");
  const [pokemonId, setPokemonId] = useState("");
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
    setPokemonSearchResult("");
  };

  return (
    <div>
      <form onSubmit={searchForPokemon}>
        <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
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
      <div className="d-flex justify-content-center align-items-center p-1 rounded m-2 w-25 container mx-auto">
        {pokemonId && (
          <div>
            <p className="text-capitalize fw-bold">{`${pokemonSearchResult}`}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt="pokemon-sprite"
              className="w-75"
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
