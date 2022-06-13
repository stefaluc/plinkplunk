import {
  Backdrop,
  Button, CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {API, graphqlOperation} from "aws-amplify";
import {deleteGame, deleteStats} from "../graphql/mutations";
import * as React from "react";

export default function GameStats({ game, setGames, games, currentPlayer, handleCloseStats, isStatsOpen }) {
  const [isDeletingGame, setIsDeletingGame] = React.useState(false);

  const playerCanDelete = game.gameCreatorId === currentPlayer.cognitoId;

  const deleteCurrentGame = () => {
    setIsDeletingGame(true);
    const deleteStats1 = API.graphql(graphqlOperation(deleteStats, { input: { id: game.gamePlayer1StatsId }}));
    const deleteStats2 = API.graphql(graphqlOperation(deleteStats, { input: { id: game.gamePlayer2StatsId }}));
    const deleteStats3 = API.graphql(graphqlOperation(deleteStats, { input: { id: game.gamePlayer3StatsId }}));
    const deleteStats4 = API.graphql(graphqlOperation(deleteStats, { input: { id: game.gamePlayer4StatsId }}));

    Promise.all([deleteStats1, deleteStats2, deleteStats3, deleteStats4]).then(resStats => {
      console.log('Delete Stats:');
      console.log(resStats);

      console.log('GAME.ID')
      console.log(game.id)
      API.graphql(graphqlOperation(deleteGame, {input: {id: game.id}})).then(res => {
        console.log('deleteGame: ');
        console.log(res);
        setIsDeletingGame(false);
        setGames(games.filter(g => g.id !== game.id)); // keep current state up to date with backend
        handleCloseStats();
      })
    });
  }

  return (
    <>
      <Dialog open={isStatsOpen} onClose={handleCloseStats}>
        <DialogTitle>Game Statistics</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Work in Progress
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {playerCanDelete &&
          <Button onClick={deleteCurrentGame} color="error">Delete Game</Button>
          }
          <Button onClick={handleCloseStats}>Close</Button>
        </DialogActions>
      </Dialog>

      <Backdrop
        sx={{ color: '#fff', zIndex: 99999 }}
        open={isDeletingGame}
      >
        <CircularProgress />
      </Backdrop>
    </>
  );
}
