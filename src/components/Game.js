import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import * as React from "react";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";

const getNameInitials = (fullName) => {
  return fullName.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
}

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
            <Avatar sx={{ width: '30px', height: '30px', fontSize: '12px'}} alt="Profile Picture">
              {getNameInitials('Justin Gabriel')}
            </Avatar>
            <Grid item sx={{marginLeft: '10px'}}>
              <Box sx={{fontSize: '14px'}}>Justin Gabriel</Box>
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#666'}}>Plunks: 1</Box>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="row" justifyContent="flex-end">
            <Grid item sx={{marginRight: '10px'}} justifyContent="flex-end">
              <Box sx={{fontSize: '14px', display: 'flex', justifyContent: 'flex-end'}}>Alec Huggins</Box>
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#666', display: 'flex', justifyContent: 'flex-end'}}>Plunks: 1</Box>
            </Grid>
            <Avatar sx={{ width: '30px', height: '30px', fontSize: '12px'}} alt="Profile Picture">
              {getNameInitials('Alec Huggins')}
            </Avatar>
          </Grid>
          <Grid item xs={6} container direction="row">
            <Avatar sx={{ width: '30px', height: '30px', fontSize: '12px'}} alt="Profile Picture">
              {getNameInitials('Brett Wilson')}
            </Avatar>
            <Grid item sx={{marginLeft: '10px'}}>
              <Box sx={{fontSize: '14px'}}>Brett Wilson</Box>
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#666'}}>Plunks: 1</Box>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="row" justifyContent="flex-end">
            <Grid item sx={{marginRight: '10px'}}>
              <Box sx={{fontSize: '14px', display: 'flex', justifyContent: 'flex-end'}}>Walter Schemel</Box>
              <Box sx={{fontWeight: 'bold', fontSize: '12px', color: '#666', display: 'flex', justifyContent: 'flex-end'}}>Plunks: 1</Box>
            </Grid>
            <Avatar sx={{ width: '30px', height: '30px', fontSize: '12px'}} alt="Profile Picture">
              {getNameInitials('Walter Schemel')}
            </Avatar>
          </Grid>
        </Grid>
      </ListItem>
    </React.Fragment>
  );
}
