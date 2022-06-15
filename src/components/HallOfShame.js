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

export default function HallOfShame({ handleCloseShame, isShameOpen, games }) {
  const losses = new Map();
  const selfPlunks = new Map();
  games.forEach(game => {
    const stats = [game.player1Stats, game.player2Stats, game.player3Stats, game.player4Stats];
    const names = [game.player1Name, game.player2Name, game.player3Name, game.player4Name];
    for (let i = 0; i < 4; i++) {
      const stat = (stats[i]) ? stats[i] : { true: false, selfPlunk: false};
      const name = names[i];
      if (isNaN(losses.get(name))) losses.set(name, 0)
      if (!stat.didWin) losses.set(name, losses.get(name) + 1);
      if (isNaN(selfPlunks.get(name))) selfPlunks.set(name, 0)
      if (stat.selfPlunk) selfPlunks.set(name, selfPlunks.get(name) + 1);
    }
  });
  const lossesRender = [];
  losses.forEach((number, name) => {
    lossesRender.push(<li>{name}: {number}</li>)
  })

  const selfPlunksRender = [];
  selfPlunks.forEach((number, name) => {
    selfPlunksRender.push(<li>{name}: {number}</li>)
  })

  return (
    <>
      <Dialog
        sx={{ '.MuiPaper-root': { m: 1, width: '100%'}, }}
        open={isShameOpen}
        onClose={handleCloseShame}
      >
        <DialogTitle>Hall of Shame</DialogTitle>
        <DialogContent>
          <DialogContentText>Most Losses:</DialogContentText>
          <ol>
            {lossesRender}
          </ol>
        </DialogContent>
        <DialogContent>
          <DialogContentText>Most Self Plunks:</DialogContentText>
          <ol>
            {selfPlunksRender}
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShame}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
