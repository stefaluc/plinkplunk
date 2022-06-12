import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import styled from "@emotion/styled";
import {grey} from "@mui/material/colors";
import GameForm from "./GameForm";

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function GameDrawer({ gameDrawerIsOpen, toggleGameDrawer }) {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={gameDrawerIsOpen}
      onClose={toggleGameDrawer(false)}
      onOpen={toggleGameDrawer(true)}
      swipeAreaWidth={0}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}


    >
      <Box
        sx={{
          position: 'absolute',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: 'visible',
          right: 0,
          left: 0,
        }}
      >
        <Puller />
        <GameForm />
      </Box>
    </SwipeableDrawer>
  );
}
