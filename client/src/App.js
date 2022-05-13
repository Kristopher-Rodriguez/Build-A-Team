import "./App.css";
import DisplayAllPokemon from "./components/DisplayAllPokemon";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import PokemonProfile from "./components/PokemonProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";
import { useState } from "react";
import TeamForm from "./components/TeamForm";
import TeamDetails from "./components/TeamDetails";
import UpdateTeam from "./components/UpdateTeam";

function App() {
  const [loading, setLoading] = useState(false);
  const [allPokemon, setAllPokemon] = useState([]);

  return (
    <div className="container mx-auto App">
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
          <Route
            path="/buildteam"
            element={
              <TeamForm
                loading={loading}
                setLoading={setLoading}
                allPokemon={allPokemon}
                setAllPokemon={setAllPokemon}
              />
            }
          />
          <Route path="/teams/:id" element={<TeamDetails />} />
          <Route path="/teams/:id/edit" element={<UpdateTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
