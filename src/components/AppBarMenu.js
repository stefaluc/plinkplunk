import {API, graphqlOperation, Storage} from 'aws-amplify';
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Backdrop, CircularProgress, ListItemIcon, ListItemText} from "@mui/material";
import {Logout, PhotoCamera} from "@mui/icons-material";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {updatePlayer} from "../graphql/mutations";

export default function AppBarMenu({ cognitoId, signOut }) {
  const [imageFile, setImageFile] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(null);
  const [progressLoaded, setProgressLoaded] = React.useState(0);
  const [progressTotal, setProgressTotal] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const uploadRef = React.useRef(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFileUpload = (e) => {
    const file = uploadRef.current.files[0];
    const type = `${file.type.split('/')[1]}`;
    setImageFile(file);
    Storage.put(`profile-picture`, file, {
      progressCallback(progress) {
        setIsUploading(progress.loaded !== progress.total);
        setProgressLoaded(progress.loaded);
        setProgressTotal(progress.total);
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
      level: 'protected',
      contentType: file.type,
    }).then(res => {
      console.log(res);
      API.graphql(graphqlOperation(updatePlayer, {
        input: {
          cognitoId,
          hasProfilePicture: true,
        }
      })).then(res => {
        console.log(res);
      });
    });
  }

  return (
    <div>
      <IconButton
        color="inherit"
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <label htmlFor="icon-button-file" style={{display: 'flex'}}>
            <input
              hidden
              accept="image/*"
              id="icon-button-file"
              type="file"
              ref={uploadRef}
              onChange={e => {handleFileUpload(e)}}
            />
            <ListItemIcon aria-label="upload picture" >
              <PhotoCamera fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add Profile Picture</ListItemText>
          </label>
        </MenuItem>
        <MenuItem onClick={signOut}>
          <ListItemIcon aria-label="logout" >
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </MenuItem>
      </Menu>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isUploading}
      >
        <CircularProgress value={progressLoaded/progressTotal} color="secondary" />
        <Box sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round((progressLoaded/progressTotal) * 100 )}%`}
          </Typography>
        </Box>
      </Backdrop>
    </div>
  );
}
