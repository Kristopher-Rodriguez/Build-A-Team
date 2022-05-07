import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const PokemonProfile = (props) => {
  const { allPokemon } = props;
  const { id } = useParams();
  console.log(allPokemon);
  return (
    <div>
      {allPokemon
        .filter((pokemon) => pokemon.id === id)
        .map((pokemon, index) => (
          <div key={index}>
            <h1>
              {pokemon.id}. {pokemon.name}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default PokemonProfile;
