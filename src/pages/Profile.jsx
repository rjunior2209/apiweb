import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";

const Profile = (pokemonData) => {
    const { name, sprites, moves } = pokemonData || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!pokemonData) {
          navigate("/");
        }
      }, []);

      if (!pokemonData) {
        return null;
      }
    return (
    <>
       <NavBar hideSearch/>
       <Container maxWidth="md">
         <Paper elevation={3}>
         <Box display="flex" flexDirection="column" alignItems="center" p={5}>
         <Typography variant="h4">{name}</Typography>
         <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
             <Box component="img" src={sprites.front_default} width="50%" height="100%" />
              <Box component="img" src={sprites.front_female} width="50%" height="100%" />
              </Box>
              <Divider>Ataques disponiveis</Divider>
              <Box textAlign="center" marginTop="15px" flex>
                {moves.map((moveData, key) => (
                  <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
                ))}
            </Box>
            </Box>
        </Paper>
         </Container>
     </>
    )
}

export default Profile;