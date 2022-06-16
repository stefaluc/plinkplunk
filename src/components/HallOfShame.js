import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import * as React from "react";

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
            {[...losses].sort((a, b) => b[1] - a[1]).map(loss =>
              <li key={loss[0]}>{loss[0]}: {loss[1]}</li>
            )}
          </ol>
        </DialogContent>
        <DialogContent>
          <DialogContentText>Most Self Plunks:</DialogContentText>
          <ol>
            {[...selfPlunks].sort((a, b) => b[1] - a[1]).map(plunk =>
              <li key={plunk[0]}>{plunk[0]}: {plunk[1]}</li>
            )}
          </ol>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShame}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
