import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import {Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {Warning} from "@mui/icons-material";
import Box from "@mui/material/Box";

export default function SideDrawer({ sideDrawerIsOpen, toggleSideDrawer, handleOpenFame, handleOpenShame }) {
  return (
    <SwipeableDrawer
      anchor='left'
      open={sideDrawerIsOpen}
      onClose={toggleSideDrawer(false)}
      onOpen={toggleSideDrawer(true)}
    >
      <Box
        role="presentation"
        onClick={toggleSideDrawer(false)}
        onKeyDown={toggleSideDrawer(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenFame}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText primary="Hall of Fame" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenShame}>
              <ListItemIcon>
                <Warning />
              </ListItemIcon>
              <ListItemText primary="Hall of Shame" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
