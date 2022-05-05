import "./App.css";
import DisplayAllPokemon from "./components/DisplayAllPokemon";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";

function App() {
  return (
    <div className="container mx-auto bg-slate-100 App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon" element={<DisplayAllPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
