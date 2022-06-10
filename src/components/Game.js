import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from '@mui/material/Grid';
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";

export default function Game({ primary, person, secondary }) {
  return (
    <React.Fragment>
      <ListSubheader sx={{ bgcolor: 'background.paper' }}>
        Today
      </ListSubheader>
      <ListItem button>
        <Box sx={{ position: 'absolute', left: '40%', top: '25%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Box sx={{color: '#ff1744', fontSize: '32px', marginRight: '10px'}}>5</Box>
          <Avatar sx={{width: '20px', height: '20px', fontSize: '8px', bgcolor: '#263238'}}
                  variant="circle">
            VS
          </Avatar>
          <Box sx={{color: '#4caf50', fontSize: '32px', marginLeft: '10px'}}>8</Box>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} container direction="row">
            <Avatar sx={{ width: '30px', height: '30px'}} alt="Profile Picture" src={person} />
            <Grid item sx={{marginLeft: '10px'}}>
              <Box sx={{fontSize: '14px'}}>Justin Gabriel</Box>
              <Box sx={{fontSize: '12px', color: '#333'}}>Plunks: 1</Box>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="row" justifyContent="flex-end">
            <Grid item sx={{marginRight: '10px'}} justifyContent="flex-end">
              <Box sx={{fontSize: '14px', display: 'flex', justifyContent: 'flex-end'}}>Alec Huggins</Box>
              <Box sx={{fontSize: '12px', color: '#333', display: 'flex', justifyContent: 'flex-end'}}>Plunks: 1</Box>
            </Grid>
            <Avatar sx={{ width: '30px', height: '30px' }} alt="Profile Picture" src={person} />
          </Grid>
          <Grid item xs={6} container direction="row">
            <Avatar sx={{ width: '30px', height: '30px' }} alt="Profile Picture" src={person} />
            <Grid item sx={{marginLeft: '10px'}}>
              <Box sx={{fontSize: '14px'}}>Brett Wilson</Box>
              <Box sx={{fontSize: '12px', color: '#333'}}>Plunks: 1</Box>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="row" justifyContent="flex-end">
            <Grid item sx={{marginRight: '10px'}}>
              <Box sx={{fontSize: '14px', display: 'flex', justifyContent: 'flex-end'}}>Walter Schemel</Box>
              <Box sx={{fontSize: '12px', color: '#333', display: 'flex', justifyContent: 'flex-end'}}>Plunks: 1</Box>
            </Grid>
            <Avatar sx={{ width: '30px', height: '30px' }} alt="Profile Picture" src={person} />
          </Grid>
        </Grid>
      </ListItem>
    </React.Fragment>
  );
}