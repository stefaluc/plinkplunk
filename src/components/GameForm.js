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
import TeamForm from "./TeamForm";

const team = {
  player1: {
    name: '',
    plunks: 0,
    plunksChecked: false,
    plinks: 0,
    drinks: 0,
    points: 0,
  },
  player2: {
    name: '',
    plunks: 0,
    plunksChecked: false,
    selfPlunk: false,
    plinks: 0,
    drinks: 0,
    points: 0,
  }
}

export default function GameForm({ currentPlayer, players, toggleGameDrawer, setGames, games, setGameDrawerIsOpen }) {
  const [team1, setTeam1] = React.useState(team);
  const [player1Name, setPlayer1Name] = React.useState('');
  const [player2Name, setPlayer2Name] = React.useState('');
  const [player3Name, setPlayer3Name] = React.useState('');
  const [player4Name, setPlayer4Name] = React.useState('');
  const [plunk1Checked, setPlunk1Checked] = React.useState(false);
  const [plunk2Checked, setPlunk2Checked] = React.useState(false);
  const [plunk3Checked, setPlunk3Checked] = React.useState(false);
  const [plunk4Checked, setPlunk4Checked] = React.useState(false);
  const [player1Plunks, setPlayer1Plunks] = React.useState(0);
  const [player2Plunks, setPlayer2Plunks] = React.useState(0);
  const [player3Plunks, setPlayer3Plunks] = React.useState(0);
  const [player4Plunks, setPlayer4Plunks] = React.useState(0);
  const [player1SelfPlunk, setPlayer1SelfPlunk] = React.useState(false);
  const [player2SelfPlunk, setPlayer2SelfPlunk] = React.useState(false);
  const [player3SelfPlunk, setPlayer3SelfPlunk] = React.useState(false);
  const [player4SelfPlunk, setPlayer4SelfPlunk] = React.useState(false);
  const [player1Plinks, setPlayer1Plinks] = React.useState(0);
  const [player2Plinks, setPlayer2Plinks] = React.useState(0);
  const [player3Plinks, setPlayer3Plinks] = React.useState(0);
  const [player4Plinks, setPlayer4Plinks] = React.useState(0);
  const [player1Drinks, setPlayer1Drinks] = React.useState(0);
  const [player2Drinks, setPlayer2Drinks] = React.useState(0);
  const [player3Drinks, setPlayer3Drinks] = React.useState(0);
  const [player4Drinks, setPlayer4Drinks] = React.useState(0);

  const [score1, setScore1] = React.useState('');
  const [score2, setScore2] = React.useState('');

  const [activeStep, setActiveStep] = React.useState(0);
  const [isSubmittingForm, setIsSubmittingForm] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const resetState = () => {
    setPlayer1Name(''); setPlayer2Name(''); setPlayer3Name(''); setPlayer4Name('');
    setPlunk1Checked(false); setPlunk2Checked(false); setPlunk3Checked(false); setPlunk4Checked(false);
    setPlayer1Plunks(0); setPlayer2Plunks(0); setPlayer3Plunks(0); setPlayer4Plunks(0);
    setPlayer1SelfPlunk(false); setPlayer2SelfPlunk(false); setPlayer3SelfPlunk(false); setPlayer4SelfPlunk(false);
    setScore1(''); setScore2('');
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
    const player1 = players.find(player => player.fullName === player1Name);
    const player2 = players.find(player => player.fullName === player1Name);
    const player3 = players.find(player => player.fullName === player1Name);
    const player4 = players.find(player => player.fullName === player1Name);

    const game = {
      gameCreatorId: currentPlayer.cognitoId,
      gamePlayer1Id: (!!player1) ? player1.cognitoId : null,
      gamePlayer2Id: (!!player2) ? player2.cognitoId : null,
      gamePlayer3Id: (!!player3) ? player3.cognitoId : null,
      gamePlayer4Id: (!!player4) ? player4.cognitoId : null,
      player1Name,
      player2Name,
      player3Name,
      player4Name,
      score1,
      score2,
    }
    console.log(game)

    API.graphql(graphqlOperation(createGame, { input: { ...game }})).then(resGame => {
      console.log('Create Game:');
      console.log(resGame);
      const statsGameId = resGame.data.createGame.id;
      const team1DidWin = (score1 > score2 && !player1SelfPlunk && !player2SelfPlunk) || player3SelfPlunk || player4SelfPlunk;
      const team2DidWin = (score2 > score1 && !player3SelfPlunk && !player4SelfPlunk) || player1SelfPlunk || player2SelfPlunk;
      const statsPlayer1 = { plunks: player1Plunks, selfPlunk: player1SelfPlunk, playerStatsId: (!!player1) ? player1.cognitoId : null, didWin: team1DidWin };
      const statsPlayer2 = { plunks: player2Plunks, selfPlunk: player2SelfPlunk, playerStatsId: (!!player2) ? player2.cognitoId : null, didWin: team1DidWin };
      const statsPlayer3 = { plunks: player3Plunks, selfPlunk: player3SelfPlunk, playerStatsId: (!!player3) ? player3.cognitoId : null, didWin: team2DidWin };
      const statsPlayer4 = { plunks: player4Plunks, selfPlunk: player4SelfPlunk, playerStatsId: (!!player4) ? player4.cognitoId : null, didWin: team2DidWin };
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
    return player1Name && player2Name && player3Name && player4Name &&
      score1 && score2;
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
              <TeamForm
                number={1}
                options={players.map(player => player.fullName)}
                player1Name={player1Name}
                player2Name={player2Name}
                setPlayer1Name={setPlayer1Name}
                setPlayer2Name={setPlayer2Name}
                player1Plunks={player1Plunks}
                player2Plunks={player2Plunks}
                setPlayer1Plunks={setPlayer1Plunks}
                setPlayer2Plunks={setPlayer2Plunks}
                player1SelfPlunk={player1SelfPlunk}
                player2SelfPlunk={player2SelfPlunk}
                setPlayer1SelfPlunk={setPlayer1SelfPlunk}
                setPlayer2SelfPlunk={setPlayer2SelfPlunk}
                plunk1Checked={plunk1Checked}
                plunk2Checked={plunk2Checked}
                setPlunk1Checked={setPlunk1Checked}
                setPlunk2Checked={setPlunk2Checked}
              />
              <Box sx={{ mb: 2, mt: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={!(player1Name && player2Name)}
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
              <TeamForm
                number={2}
                options={players.map(player => player.fullName)}
                player3Name={player3Name}
                player4Name={player4Name}
                setPlayer3Name={setPlayer3Name}
                setPlayer4Name={setPlayer4Name}
                player3Plunks={player3Plunks}
                player4Plunks={player4Plunks}
                setPlayer3Plunks={setPlayer3Plunks}
                setPlayer4Plunks={setPlayer4Plunks}
                player3SelfPlunk={player3SelfPlunk}
                player4SelfPlunk={player4SelfPlunk}
                setPlayer3SelfPlunk={setPlayer3SelfPlunk}
                setPlayer4SelfPlunk={setPlayer4SelfPlunk}
                plunk3Checked={plunk3Checked}
                plunk4Checked={plunk4Checked}
                setPlunk3Checked={setPlunk3Checked}
                setPlunk4Checked={setPlunk4Checked}
              />
              <Box sx={{ mb: 2, mt: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={!(player2Name && player4Name)}
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
