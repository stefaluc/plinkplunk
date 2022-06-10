import Box from "@mui/material/Box";
import {Autocomplete, Checkbox, Divider, FormControlLabel, TextField} from "@mui/material";
import * as React from "react";

const options = ['Lucas Stefanski', 'Walter Schemel', 'Justin Gabriel', 'Alec Huggins', 'Brett Wilson'];

export default function TeamForm({ number }) {
  const [plunk1Checked, setPlunk1Checked] = React.useState(false);
  const [plunk2Checked, setPlunk2Checked] = React.useState(false);

  return (
    <Box sx={{ m: 2, mt: 4, mb: 0 }}>
      <Divider sx={{ mb: 1 }}>
        TEAM {number}
      </Divider>
      <Autocomplete
        disablePortal
        options={options}
        size="small"
        renderInput={(params) => <TextField {...params} label="Player 1" />}
        color="secondary"
      />
      <Box sx={{ mt: 1, mb: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              checked={plunk1Checked}
              onChange={(e) => {setPlunk1Checked(e.target.checked)}}
              color="secondary"
            />}
          label="Plunks?" />
        {plunk1Checked &&
          <TextField
            label="#"
            type="number"
            id="outlined-size-small"
            size="small"
            sx={{width: '50px'}}
            color="secondary"
          />
        }
      </Box>
      <Autocomplete
        disablePortal
        options={options}
        size="small"
        renderInput={(params) => <TextField {...params} label="Player 2" />}
        color="secondary"
      />
      <Box sx={{ mt: 1, mb: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              checked={plunk2Checked}
              onChange={(e) => {setPlunk2Checked(e.target.checked)}}
              color="secondary"
            />}
          label="Plunks?" />
        {plunk2Checked &&
          <TextField
            label="#"
            type="number"
            id="outlined-size-small"
            size="small"
            sx={{width: '50px'}}
            color="secondary"
          />
        }
      </Box>
    </Box>
  );
}
