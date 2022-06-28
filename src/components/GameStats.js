import {
  Backdrop,
  Button, CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody
} from "@mui/material";
import {API, graphqlOperation} from "aws-amplify";
import {deleteGame, deleteStats} from "../graphql/mutations";
import * as React from "react";
import Box from "@mui/material/Box";

export default function GameStats({ game, setGames, games, currentPlayer, handleCloseStats, isStatsOpen }) {
  const [isDeletingGame, setIsDeletingGame] = React.useState(false);

  const playerCanDelete = game.gameCreatorId === currentPlayer.cognitoId;

  const stats = [
    { ...game.player1Stats, name: game.player1Name },
    { ...game.player2Stats, name: game.player2Name },
    { ...game.player3Stats, name: game.player3Name },
    { ...game.player4Stats, name: game.player4Name },
  ];

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
      <Dialog
        sx={{ '.MuiPaper-root': { m: 1, }, }}
        open={isStatsOpen}
        onClose={handleCloseStats}
      >
        <DialogTitle>Game Statistics</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight: 'bold'}}>Player</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Plunks</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Plinks</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Drinks</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stats.map((stat) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {stat.name}
                    </TableCell>
                    <TableCell align="left">{stat.plunks}</TableCell>
                    <TableCell align="left">{stat.plinks === null ? 'N/A' : stat.plinks}</TableCell>
                    <TableCell align="left">{stat.drinks === null ? 'N/A' : stat.drinks}</TableCell>
                    <TableCell align="left">{stat.points === null ? 'N/A' : stat.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{mt: 3}}>
            <span style={{fontWeight: 'bold'}}>Location:&nbsp;</span>
            {game.location === null ? 'N/A' : game.location}
          </Box>
          <Box>
            <span style={{fontWeight: 'bold'}}>Notes:</span>
            <Box>
              {game.notes === null ? 'N/A' : game.notes}
            </Box>
          </Box>
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
