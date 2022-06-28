import List from "@mui/material/List";
import * as React from "react";
import Game from "./Game";
import {CircularProgress, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import SportsBarTwoToneIcon from '@mui/icons-material/SportsBarTwoTone';

export default function GamesDisplay({ currentPlayer, setGames, games, gamesAreLoading }) {
  return (
    <React.Fragment>
      <Box sx={{m:2, mb: 0, mt: 2, fontSize: '24px', display: 'flex', alignItems: 'center'}} >
        <SportsBarTwoToneIcon sx={{color: '#ffdb00', fontSize: '48px'}} />
        <span style={{marginLeft: '10px', letterSpacing: '4px'}}>
          <div>PLINK AND A POINT!</div>
          <div style={{letterSpacing: '1px', fontSize: '12px', color: '#555', position: 'relative', top: '-5px'}}>
            Track your best beer die games.
          </div>
        </span>
      </Box>
      {gamesAreLoading ?
        <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress />
        </Box>
        :
        <List sx={{ mb: 2  }}>
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
      }
    </React.Fragment>
  );
}
