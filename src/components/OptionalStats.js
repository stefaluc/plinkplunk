import {Accordion, AccordionDetails, AccordionSummary, TextField} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";

export default function OptionalStats({ playerNumber, setPlinks, setDrinks, setPoints }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Optional {playerNumber} Statistics</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            Number of Plinks:
            <TextField
              size="small"
              type="number"
              sx={{m:1, width: '30%'}}
            />
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            Number of Drinks:
            <TextField
              size="small"
              type="number"
              sx={{m:1, width: '30%'}}
            />
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            Number of Points:
            <TextField
              size="small"
              type="number"
              sx={{m:1, width: '30%'}}
            />
          </Box>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
