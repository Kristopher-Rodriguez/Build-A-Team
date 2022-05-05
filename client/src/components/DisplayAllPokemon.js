import { useState, useEffect } from "react";
import axios from "axios";

const DisplayAllPokemon = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=807";
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setAllPokemon(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <h2>Here are all the Pokemon:</h2>
      <h3 className="text-xs">(Click photo for more information)</h3>
      <div>
        {allPokemon.map((pokemon, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <p className="capitalize font-semibold">
              {index + 1}. {pokemon.name}
            </p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt="pokemon-sprite"
              className="w-25"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllPokemon;