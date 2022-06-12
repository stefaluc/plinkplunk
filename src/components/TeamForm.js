import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from "react";
import Typography from "@mui/material/Typography";

const options = ['Lucas Stefanski', 'Walter Schemel', 'Justin Gabriel', 'Alec Huggins', 'Brett Wilson'];

export default function TeamForm(props) {
  const [plunk1Checked, setPlunk1Checked] = React.useState(false);
  const [plunk2Checked, setPlunk2Checked] = React.useState(false);

  return (
    <Box sx={{ m: 2, mt: 4, mb: 0 }}>
      <Divider sx={{ mb: 1 }}>
        TEAM {props.number}
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Optional Statistics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
