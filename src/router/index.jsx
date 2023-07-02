import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { useState } from "react";

const Router = () => {
    const [pokemonData, setPokemonData] = useState()
    return (
        <BrowserRouter>
        <Routes>
        <Route 
        path="/"
        element = {<Home  setPokemonData = {setPokemonData}/>}
        />

        <Route 
        path="/profile"
        element = {<Profile pokemonData = {pokemonData}/>}
        />
        </Routes>
        </BrowserRouter>
        
    );
}

export default Router;