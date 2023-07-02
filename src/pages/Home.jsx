import { Box, Container, Grid, Skeleton } from "@mui/material";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Home = ( {setPokemonData}) => {

    const [pokemons, setpokemos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        pokemonRender()
    }, [])

    const pokemonRender = () => {

        var endpoints = []
        for (var i = 1; i <= 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }


        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((result) =>
            setpokemos(result))
    }
    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/infos");
      };
     
     
     

    const pokemonSearch = (name) => {
        var filterPkemon = []
        if (name === "") {
            pokemonRender()
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filterPkemon.push(pokemons[i])
            }
        }
        setpokemos(filterPkemon)
    }


    return (
        <div>
            <NavBar pokemonSearch={pokemonSearch} />
            <Container maxWidth="false">
                <Grid container spacing={4}>
                    {pokemons.length === 0 ? (
                        <Skeleton />
                    ) : (pokemons.map((pokemon, key) =>
                        <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                            <Box onClick={()=>pokemonPickHandler(pokemon.data)}>
                             <PokemonCard name={pokemon.data.name}
                                image={pokemon.data.sprites.front_default}
                                types={pokemon.data.types} />
                             </Box>
                        </Grid>)

                    )}

                </Grid>
                

            </Container>


        </div>

    )
}


export default Home;