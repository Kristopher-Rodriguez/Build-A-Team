import { useState, useEffect } from "react";
import axios from "axios";

const DisplayAllPokemon = (props) => {
  const {loading, setLoading, allPokemon, setAllPokemon} = props;
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const updatePokemon = async () => {
    setLoading(true);
    const res = await axios.get(currentUrl);
    setNext(res.data.next);
    setPrevious(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    console.log(allPokemon);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      console.log(item.url);
      const result = await axios.get(item.url);
      setAllPokemon((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    console.log("useEffect fired");
    updatePokemon();
  }, [currentUrl]);

  const goToNextPage = () => {
    setAllPokemon([]);
    setCurrentUrl(next);
  };

  const goToPrevPage = () => {
    setAllPokemon([]);
    setCurrentUrl(previous);
  };

  return (
    <div className="container mx-auto">
      <h2>Browse Pokemon:</h2>
      <h3 className="text-xs">(Click for more information)</h3>
      {loading && (
        <>
          <h1>Loading...</h1>
        </>
      )}
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {allPokemon.map((pokemon, index) => (
          <div
            key={index}
            className="shadow-sm d-flex justify-content-center align-items-center border border-dark bg-primary bg-gradient p-1 rounded m-2"
          >
            <p className="text-capitalize fw-bold m-1">
              {pokemon.id}. {pokemon.name}
            </p>
            <img
              src={pokemon.sprites.front_default}
              alt="pokemon-sprite"
              className="h-25"
            />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-around align-items-center">
        {previous && (
          <button onClick={goToPrevPage} className="m-2 btn btn-success">
            {" "}
            Previous
          </button>
        )}
        <button onClick={goToNextPage} className="m-2 btn btn-success">
          Next
        </button>
      </div>
    </div>
  );
};

export default DisplayAllPokemon;
