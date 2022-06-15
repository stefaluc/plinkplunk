import * as React from "react";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent
} from "@mui/material";
import {createGame, createStats, updateGame} from '../graphql/mutations';
import {API, graphqlOperation} from "aws-amplify";
import Box from "@mui/material/Box";
import TeamPlayerForm from "./TeamPlayerForm";

const player = {
  name: '',
  plunks: 0,
  plunksChecked: false,
  selfPlunk: false,
  plinks: null,
  drinks: null,
  points: null,
}

export default function GameForm({ currentPlayer, players, toggleGameDrawer, setGames, games, setGameDrawerIsOpen }) {
  const [player1, setPlayer1] = React.useState(player);
  const [player2, setPlayer2] = React.useState(player);
  const [player3, setPlayer3] = React.useState(player);
  const [player4, setPlayer4] = React.useState(player);

  const [score1, setScore1] = React.useState('');
  const [score2, setScore2] = React.useState('');

  const [activeStep, setActiveStep] = React.useState(0);
  const [isSubmittingForm, setIsSubmittingForm] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const resetState = () => {
    setPlayer1(player)
    setPlayer2(player)
    setPlayer3(player)
    setPlayer4(player)
    setScore1('');
    setScore2('');
    setActiveStep(0);
  }

  const handleCloseError = () => {
    setOpenError(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e) => {
    setIsSubmittingForm(true);
    const player1Db = players.find(player => player.fullName === player1.name);
    const player2Db = players.find(player => player.fullName === player2.name);
    const player3Db = players.find(player => player.fullName === player3.name);
    const player4Db = players.find(player => player.fullName === player4.name);

    const game = {
      gameCreatorId: currentPlayer.cognitoId,
      gamePlayer1Id: (!!player1Db) ? player1Db.cognitoId : null,
      gamePlayer2Id: (!!player2Db) ? player2Db.cognitoId : null,
      gamePlayer3Id: (!!player3Db) ? player3Db.cognitoId : null,
      gamePlayer4Id: (!!player4Db) ? player4Db.cognitoId : null,
      player1Name: player1.name,
      player2Name: player2.name,
      player3Name: player3.name,
      player4Name: player4.name,
      score1,
      score2,
    }
    console.log(game)

    API.graphql(graphqlOperation(createGame, { input: { ...game }})).then(resGame => {
      console.log('Create Game:');
      console.log(resGame);
      const statsGameId = resGame.data.createGame.id;

      const team1DidWin = (score1 > score2 && !player1.selfPlunk && !player2.selfPlunk) || player3.selfPlunk || player4.selfPlunk;
      const team2DidWin = (score2 > score1 && !player3.selfPlunk && !player4.selfPlunk) || player1.selfPlunk || player2.selfPlunk;

      const statsPlayer1 = { plunks: player1.plunks, selfPlunk: player1.selfPlunk, playerStatsId: (!!player1Db) ? player1Db.cognitoId : null, didWin: team1DidWin, plinks: player1.plinks, drinks: player1.drinks, points: player1.points };
      const statsPlayer2 = { plunks: player2.plunks, selfPlunk: player2.selfPlunk, playerStatsId: (!!player2Db) ? player2Db.cognitoId : null, didWin: team1DidWin, plinks: player2.plinks, drinks: player2.drinks, points: player2.points };
      const statsPlayer3 = { plunks: player3.plunks, selfPlunk: player3.selfPlunk, playerStatsId: (!!player3Db) ? player3Db.cognitoId : null, didWin: team2DidWin, plinks: player3.plinks, drinks: player3.drinks, points: player3.points };
      const statsPlayer4 = { plunks: player4.plunks, selfPlunk: player4.selfPlunk, playerStatsId: (!!player4Db) ? player4Db.cognitoId : null, didWin: team2DidWin, plinks: player4.plinks, drinks: player4.drinks, points: player4.points };

      const createStats1 = API.graphql(graphqlOperation(createStats, { input: { ...statsPlayer1 }}));
      const createStats2 = API.graphql(graphqlOperation(createStats, { input: { ...statsPlayer2 }}));
      const createStats3 = API.graphql(graphqlOperation(createStats, { input: { ...statsPlayer3 }}));
      const createStats4 = API.graphql(graphqlOperation(createStats, { input: { ...statsPlayer4 }}));

      Promise.all([createStats1, createStats2, createStats3, createStats4]).then(resStats => {
        console.log('Create Stats:');
        console.log(resStats);

        API.graphql(graphqlOperation(updateGame, { input: {
            id: statsGameId,
            gamePlayer1StatsId: resStats[0].data.createStats.id,
            gamePlayer2StatsId: resStats[1].data.createStats.id,
            gamePlayer3StatsId: resStats[2].data.createStats.id,
            gamePlayer4StatsId: resStats[3].data.createStats.id,
          }}))
          .then(resUpdateGame => {
            console.log('Update Game:');
            console.log(resUpdateGame);
            setIsSubmittingForm(false);
            toggleGameDrawer(false);
            setGameDrawerIsOpen(false);
            setGames([resUpdateGame.data.updateGame, ...games]);
            resetState();
          }).catch(error => {
            console.log(error);
            setIsSubmittingForm(false);
            setOpenError(true);
            const msg = !!error.message ? error.message : error.errors[0].message;
            setErrorMsg(msg);
        });
      }).catch(error => {
        console.log(error);
        setOpenError(true);
        setIsSubmittingForm(false);
        const msg = !!error.message ? error.message : error.errors[0].message;
        setErrorMsg(msg);
      });
    }).catch(error => {
      console.log(error);
      setOpenError(true);
      setIsSubmittingForm(false);
      const msg = !!error.message ? error.message : error.errors[0].message;
      setErrorMsg(msg);
    });

    toggleGameDrawer(false);
    e.preventDefault();
  }

  const isValidForm = () => {
    return (
      player1.name &&
      player2.name &&
      player3.name &&
      player4.name &&
      score1 &&
      score2
    );
  }

  return (
    <React.Fragment>
      <form id="game-form" onSubmit={handleSubmit}>
        <Stepper activeStep={activeStep} orientation="vertical" sx={{m:2}}>
          <Step key={1}>
            <StepLabel>
              TEAM 1 PLAYERS
            </StepLabel>
            <StepContent>

              <TeamPlayerForm
                options={players.map(player => player.fullName)}
                player={player1}
                setPlayer={setPlayer1}
                playerLabel={"Player 1"}
              />
              <TeamPlayerForm
                options={players.map(player => player.fullName)}
                player={player2}
                setPlayer={setPlayer2}
                playerLabel={"Player 2"}
              />


             <Box sx={{ mb: 2, mt: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={!(player1.name && player2.name)}
                  >
                    Continue
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step key={2}>
            <StepLabel>
              TEAM 2 PLAYERS
            </StepLabel>
            <StepContent>
              <TeamPlayerForm
                options={players.map(player => player.fullName)}
                player={player3}
                setPlayer={setPlayer3}
                playerLabel={"Player 3"}
              />
              <TeamPlayerForm
                options={players.map(player => player.fullName)}
                player={player4}
                setPlayer={setPlayer4}
                playerLabel={"Player 4"}
              />
              <Box sx={{ mb: 2, mt: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={!(player3.name && player4.name)}
                  >
                    Continue
                  </Button>
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
          <Step key={3}>
            <StepLabel>
              FINAL SCORE
            </StepLabel>
            <StepContent>
              <Box sx={{m:2}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    TEAM 1
                    <TextField
                      onChange={e => setScore1(e.target.value)}
                      variant="filled"
                      type="number"
                      value={score1}
                      sx={{width: '50px', m: 4}}
                      color="secondary"
                    />
                  </Box>
                  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    TEAM 2
                    <TextField
                      onChange={e => setScore2(e.target.value)}
                      variant="filled"
                      type="number"
                      value={score2}
                      sx={{width: '50px', m: 4}}
                      color="secondary"
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
        <Button
          sx={{width: '100%'}}
          onClick={handleSubmit}
          disabled={!isValidForm()}
          variant="contained"
          color="secondary"
          disableElevation
        >
          SUBMIT
        </Button>
      </form>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmittingForm}
      >
        <CircularProgress />
      </Backdrop>
      <Dialog
        open={openError}
        onClose={handleCloseError}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"A problem occurred while trying to submit your game"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseError} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
