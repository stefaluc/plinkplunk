import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import * as React from "react";
import Game from "./Game";


export default function GamesDisplay({ currentPlayer, setGames, games }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        Plink and a point!
      </Typography>
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
    </React.Fragment>
  );
}
