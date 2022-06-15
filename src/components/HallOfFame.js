import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import {API, graphqlOperation} from "aws-amplify";
import * as React from "react";
import {listStats} from "../graphql/queries";

export default function HallOfFame({ handleCloseFame, isFameOpen, games }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const wins = new Map();
  const plunks = new Map();
  games.forEach(game => {
    const stats = [game.player1Stats, game.player2Stats, game.player3Stats, game.player4Stats];
    const names = [game.player1Name, game.player2Name, game.player3Name, game.player4Name];
    for (let i = 0; i < 4; i++) {
      const stat = (stats[i]) ? stats[i] : { didWin: false, plunks: 0};
      const name = names[i];
      if (isNaN(wins.get(name))) wins.set(name, 0)
      if (stat.didWin) wins.set(name, wins.get(name) + 1);
      if (isNaN(plunks.get(name))) plunks.set(name, 0)
      plunks.set(name, plunks.get(name) + stat.plunks);
    }
  });
  const winRender = [];
  wins.forEach((number, name) => {
    winRender.push(<li>{name}: {number}</li>)
  })

  const plunksRender = [];
  plunks.forEach((number, name) => {
    plunksRender.push(<li>{name}: {number}</li>)
  })

  return (
    <>
      <Dialog
        sx={{ '.MuiPaper-root': { m: 1, width: '100%'}, }}
        open={isFameOpen}
        onClose={handleCloseFame}
      >
        <DialogTitle>Hall of Fame</DialogTitle>
        <DialogContent>
          <DialogContentText>Most Wins:</DialogContentText>
          <ol>
            {winRender}
          </ol>
        </DialogContent>
        <DialogContent>
          <DialogContentText>Most Plunks:</DialogContentText>
          <ol>
            {plunksRender}
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFame}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
