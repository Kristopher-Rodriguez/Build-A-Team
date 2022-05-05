import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [findPokemon, setFindPokemon] = useState("");
  const [pokemonSearchResult, setPokemonSearchResult] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [error, setError] = useState("");
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const searchForPokemon = (e) => {
    e.preventDefault();
    console.log(findPokemon);
    axios
      .get(url + findPokemon)
      .then((res) => {
        console.log(res.data.name);
        setPokemonSearchResult(res.data.name);
        setPokemonId(res.data.id);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
      });
  };

  console.log(pokemonSearchResult);
  console.log(pokemonId);

  return (
    <div>
      <h1>Welcome to the PokeDex!</h1>
      <form onSubmit={searchForPokemon}>
        <div className="container mx-auto flex flex-col m-2">
          <label htmlFor="pokemon">Enter number or name of Pokemon: </label>
          <div>
            <input
              onChange={(e) => setFindPokemon(e.target.value.toLowerCase())}
              className="border border-solid border-black"
              type="text"
            />
            <button
              type="submit"
              className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center">
        <p className="capitalize font-bold">{`${pokemonSearchResult}`}</p>
        {pokemonId && (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt="pokemon-sprite"
            className="w-25"
          />
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default HomePage;
