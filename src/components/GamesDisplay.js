import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import * as React from "react";
import Game from "./Game";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";


export default function GamesDisplay({ currentPlayer, setGames, games, gamesAreLoading }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        Plink and a point!
      </Typography>
      {gamesAreLoading ?
        <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress />
        </Box>
        :
        <List sx={{ mb: 2, mt: 1 }}>
          {games.map(game => (
            <React.Fragment key={game.id}>
              <Game
                currentPlayer={currentPlayer}
                games={games}
                setGames={setGames}
                game={game}
              />
            </React.Fragment>
          ))}
        </List>
      }
    </React.Fragment>
  );
}
