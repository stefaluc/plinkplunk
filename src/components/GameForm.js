import * as React from "react";
import {Autocomplete, Chip, TextField, Divider, Checkbox, Button, FormControlLabel} from "@mui/material";
// import {createGame, createUser, createUserGames} from '../graphql/mutations';
// import {getUser, listUsers, listUserGames} from '../graphql/queries';
import {API, Auth, graphqlOperation} from "aws-amplify";
import Box from "@mui/material/Box";
import TeamForm from "./TeamForm";

export default function GameForm() {
  const [cognitoId, setCognitoId] = React.useState('');
  const [player1, setPlayer1] = React.useState('');
  const [player2, setPlayer2] = React.useState('');
  const [player3, setPlayer3] = React.useState('');
  const [player4, setPlayer4] = React.useState('');
  const [score1, setScore1] = React.useState('');
  const [score2, setScore2] = React.useState('');

  React.useEffect(() => {
    Auth.currentUserCredentials()
      .then(res => {
        setCognitoId(res?.identityId);
        // API.graphql(graphqlOperation(getUser, {cognitoId: 'us-est-1:e165b07a-5f47-4d2c-98c5-d6ebc78bcb37'}));
        // API.graphql(graphqlOperation(listUserGames));
      });
  }, []);

  const handleSubmit = async (e) => {
    const game = {
      score1,
      score2,
    }
    //const userRes = await API.graphql(graphqlOperation(createUser, {input: {cognitoId, firstName: 'Lucas', lastName: 'Stefanski'}}));
    // const gameRes = await API.graphql(graphqlOperation(createGame, {input: game}));
    // const userGamesRes1 = await API.graphql(graphqlOperation(createUserGames, {input: {userID: cognitoId, gameID: gameRes.data.createGame.id}}));
    // const userGamesRes2 = await API.graphql(graphqlOperation(createUserGames, {input: {userID: cognitoId, gameID: gameRes.data.createGame.id}}));
    // const userGamesRes3 = await API.graphql(graphqlOperation(createUserGames, {input: {userID: cognitoId, gameID: gameRes.data.createGame.id}}));
    // const userGamesRes4 = await API.graphql(graphqlOperation(createUserGames, {input: {userID: cognitoId, gameID: gameRes.data.createGame.id}}));
    e.preventDefault();
  }

  return (
    <React.Fragment>
        <form id="game-form" onSubmit={handleSubmit}>
          <TeamForm number={1} />
          <TeamForm number={2} />
          <Box sx={{m:2}}>
            <Divider sx={{ mb: 1 }}>
              FINAL SCORE
            </Divider>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                TEAM 1
                <TextField
                  onChange={e => setScore1(e.target.value)}
                  variant="filled"
                  sx={{width: '50px', m: 2}}
                  color="secondary"
                />
              </Box>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                TEAM 2
                <TextField
                  onChange={e => setScore2(e.target.value)}
                  variant="filled"
                  sx={{width: '50px', m: 2}}
                  color="secondary"
                />
              </Box>
            </Box>
            <Button sx={{width: '100%'}} onClick={handleSubmit} variant="contained" color="secondary" disableElevation>
              SUBMIT
            </Button>
          </Box>
        </form>
    </React.Fragment>
  );
}
