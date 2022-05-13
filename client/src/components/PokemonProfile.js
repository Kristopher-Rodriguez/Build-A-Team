import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const PokemonProfile = (props) => {
  const { loading, setLoading } = props;
  const { id } = useParams();
  const [pokeInfo, setPokeInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setLoading(false);
        setPokeInfo(res.data);
        console.log(res.data);
        console.log(pokeInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="m-2 p-2 container mx-auto">
        <div className="container mx-auto mt-2 d-flex justify-content-around">
          <Link to={`/pokemon/${parseInt(pokeInfo.id) - 1}`}>
            <button className="btn btn-danger">Previous</button>
          </Link>
          <Link to={`/pokemon/${parseInt(pokeInfo.id) + 1}`}>
            <button className="btn btn-danger">Next</button>
          </Link>
        </div>
      </div>
      {loading ? (
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="card bg-light w-50 mx-auto">
          <h1 className="text-capitalize card-header bg-dark text-light mb-2">
            {pokeInfo.id}. {pokeInfo.name}
          </h1>
          <img
            className="w-50 p-2 card-img-top mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo.id}.png`}
            alt={`${pokeInfo.name}`}
          />
          <div className="d-lg-flex justify-content-around card-body">
            <div>
              <h2>Type(s):</h2>
              {pokeInfo.types?.map((type, index) => (
                <div className="text-capitalize" key={index}>
                  {type.type.name}
                </div>
              ))}
            </div>
            <div>
              <h2>Abilities:</h2>
              {pokeInfo.abilities?.map((ability, index) => (
                <div className="text-capitalize" key={index}>
                  {ability.ability.name}
                </div>
              ))}
            </div>
            <div>
              <h2>Base Stats: </h2>
              {pokeInfo.stats?.map((stat, index) => (
                <div className="text-capitalize" key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonProfile;
