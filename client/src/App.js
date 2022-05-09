import "./App.css";
import DisplayAllPokemon from "./components/DisplayAllPokemon";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import PokemonProfile from "./components/PokemonProfile";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "@fontsource/roboto";
import { useState } from "react";

function App() {
  // const [pokemonId, setPokemonId] = useState("");
  const [loading, setLoading] = useState(true);
  const [allPokemon, setAllPokemon] = useState([]);
  const { id } = useParams();

  return (
    <div className="container mx-auto bg-slate-100 App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                loading={loading}
                setLoading={setLoading}
                allPokemon={allPokemon}
                setAllPokemon={setAllPokemon}
              />
            }
          />
          <Route
            path="/pokemon"
            element={
              <DisplayAllPokemon
                loading={loading}
                setLoading={setLoading}
                allPokemon={allPokemon}
                setAllPokemon={setAllPokemon}
              />
            }
          />
          <Route
            path="/pokemon/:id"
            element={
              <PokemonProfile
                loading={loading}
                setLoading={setLoading}
                allPokemon={allPokemon}
                setAllPokemon={setAllPokemon}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
