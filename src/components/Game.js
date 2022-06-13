import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import * as React from "react";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import {Storage} from "aws-amplify";
import GameStats from "./GameStats";

const getNameInitials = (fullName) => {
  return fullName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
}

export default function Game({ currentPlayer, games, setGames, game }) {
  const [player1Pic, setPlayer1Pic] = React.useState(null);
  const [player2Pic, setPlayer2Pic] = React.useState(null);
  const [player3Pic, setPlayer3Pic] = React.useState(null);
  const [player4Pic, setPlayer4Pic] = React.useState(null);
  const [isStatsOpen, setIsStatsOpen] = React.useState(false);

  const handleOpenStats = () => {
    setIsStatsOpen(true);
  };

  const handleCloseStats = () => {
    setIsStatsOpen(false);
  };

  const date = new Date(game.createdAt);

  React.useEffect(() => {
    [[game.player1, setPlayer1Pic],
     [game.player2, setPlayer2Pic],
     [game.player3, setPlayer3Pic],
     [game.player4, setPlayer4Pic]
    ].forEach(args => {
      if (args[0] !== null && args[0].hasProfilePicture) {
        Storage.get('profile-picture', {
          level: 'protected',
          identityId: args[0].cognitoId,
        }).then(res => {
          args[1](res);
        });
      }
    });
  }, []);

  return (
    <React.Fragment>
      <ListSubheader sx={{ bgcolor: 'background.paper' }}>
        {date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
      </ListSubheader>
      <ListItem button onClick={handleOpenStats}>
        <Box sx={{ position: 'absolute', left: '40%', top: '25%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Box sx={{color: game.player1Stats.didWin ? '#4caf50' : '#ff1744', fontSize: '32px', marginRight: '10px'}}>
            {game.score1}
          </Box>
          <Avatar sx={{width: '20px', height: '20px', fontSize: '8px', bgcolor: '#263238'}}
                  variant="circle">
            VS
          </Avatar>
          <Box sx={{color: game.player3Stats.didWin ? '#4caf50' : '#ff1744', fontSize: '32px', marginLeft: '10px'}}>
            {game.score2}
          </Box>
        </Box>
        {/* --------PLAYER 1-------- */}
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} container direction="row">
            <Avatar
              sx={{ width: '30px', height: '30px', fontSize: '12px'}}
              alt="Profile Picture"
              src={player1Pic}
            >
              {getNameInitials(game.player1Name)}
            </Avatar>
            <Grid item sx={{marginLeft: '10px'}}>
              <Box sx={{fontSize: '14px'}}>
                {game.player1Name}
              </Box>
              {!!game.player1Stats.plunks &&
                <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#666'}}>
                  Plunks: {game.player1Stats.plunks}
                </Box>
              }
              {!!game.player1Stats.selfPlunk &&
                <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#FF1744'}}>
                  SELF PLUNK
                </Box>
              }
            </Grid>
          </Grid>
          {/* --------PLAYER 3-------- */}
          <Grid item xs={6} container direction="row" justifyContent="flex-end">
            <Grid item sx={{marginRight: '10px'}} justifyContent="flex-end">
              <Box sx={{fontSize: '14px', display: 'flex', justifyContent: 'flex-end'}}>
                {game.player3Name}
              </Box>
              {!!game.player3Stats.plunks &&
                <Box
                  sx={{fontWeight: 'bold', fontSize: '12px', color: '#666', display: 'flex', justifyContent: 'flex-end'}}>
                  Plunks: {game.player3Stats.plunks}
                </Box>
              }
              {!!game.player3Stats.selfPlunk &&
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#FF1744'}}>
                SELF PLUNK
              </Box>
              }
            </Grid>
            <Avatar
              sx={{ width: '30px', height: '30px', fontSize: '12px'}}
              alt="Profile Picture"
              src={player3Pic}
            >
              {getNameInitials(game.player3Name)}
            </Avatar>
          </Grid>
          {/* --------PLAYER 2-------- */}
          <Grid item xs={6} container direction="row">
            <Avatar
              sx={{ width: '30px', height: '30px', fontSize: '12px'}}
              alt="Profile Picture"
              src={player2Pic}
            >
              {getNameInitials(game.player2Name)}
            </Avatar>
            <Grid item sx={{marginLeft: '10px'}}>
              <Box sx={{fontSize: '14px'}}>
                {game.player2Name}
              </Box>
              {!!game.player2Stats.plunks &&
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#666'}}>
                Plunks: {game.player2Stats.plunks}
              </Box>
              }
              {!!game.player2Stats.selfPlunk &&
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#FF1744'}}>
                SELF PLUNK
              </Box>
              }
            </Grid>
          </Grid>
          {/* --------PLAYER 4-------- */}
          <Grid item xs={6} container direction="row" justifyContent="flex-end">
            <Grid item sx={{marginRight: '10px'}}>
              <Box sx={{fontSize: '14px', display: 'flex', justifyContent: 'flex-end'}}>
                {game.player4Name}
              </Box>
              {!!game.player4Stats.plunks &&
              <Box
                sx={{fontWeight: 'bold', fontSize: '12px', color: '#666', display: 'flex', justifyContent: 'flex-end'}}>
                Plunks: {game.player4Stats.plunks}
              </Box>
              }
              {!!game.player4Stats.selfPlunk &&
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#FF1744'}}>
                SELF PLUNK
              </Box>
              }
            </Grid>
            <Avatar
              sx={{ width: '30px', height: '30px', fontSize: '12px'}}
              alt="Profile Picture"
              src={player4Pic}
            >
              {getNameInitials(game.player4Name)}
            </Avatar>
          </Grid>
        </Grid>
      </ListItem>

      <GameStats
        game={game}
        games={games}
        setGames={setGames}
        currentPlayer={currentPlayer}
        handleCloseStats={handleCloseStats}
        isStatsOpen={isStatsOpen}
      />

    </React.Fragment>
  );
}
