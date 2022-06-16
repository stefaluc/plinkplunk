import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import Avatar from "@mui/material/Avatar";
import AppBarMenu from "./AppBarMenu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const getNameInitials = (fullName) => {
  return fullName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
}

export default function BottomAppBar({ signOut, toggleGameDrawer, toggleSideDrawer, cognitoId, profilePic, currentPlayer, setProfilePic }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={toggleSideDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add" onClick={toggleGameDrawer(true)}>
            <CasinoOutlinedIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <AppBarMenu
            signOut={signOut}
            cognitoId={cognitoId}
            setProfilePic={setProfilePic}
          />
          <Avatar
            sx={{ width: '30px', height: '30px', fontSize: '12px'}}
            alt="Profile Picture"
            src={profilePic}
          >
            {!!currentPlayer.fullName && getNameInitials(currentPlayer.fullName)}
          </Avatar>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
