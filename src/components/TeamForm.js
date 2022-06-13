import Box from "@mui/material/Box";
import {
  Autocomplete,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField
} from "@mui/material";
import * as React from "react";
import OptionalStats from "./OptionalStats";

export default function TeamForm(props) {
  return (
    <Box>
      <Autocomplete
        options={props.options}
        size="small"
        onChange={(e, v) => {
          props.number === 1 ? props.setPlayer1Name(v) : props.setPlayer3Name(v)
        }}
        value={props.number === 1 ?
          (props.player1Name === '' ? null : props.player1Name) :
          (props.player3Name === '' ? null : props.player3Name)
        }
        clearOnBlur={false}
        renderInput={(params) =>
          <TextField
            {...params}
            onChange={(e) => {
              props.number === 1 ? props.setPlayer1Name(e.target.value) : props.setPlayer3Name(e.target.value)
            }}
            label={props.number === 1 ? "Player 1" : "Player 3"}
          />}
        color="secondary"
      />
      <Box sx={{ mt: 1, mb: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              checked={props.number === 1 ? props.plunk1Checked : props.plunk3Checked}
              onChange={(e) => {props.number === 1 ? props.setPlunk1Checked(e.target.checked) : props.setPlunk3Checked(e.target.checked)}}
              color="secondary"
            />}
          label="Plunks?" />
        {(props.number === 1 ? props.plunk1Checked : props.plunk3Checked) &&
        <>
          <TextField
            label="#"
            type="number"
            id="outlined-size-small"
            size="small"
            sx={{width: '50px'}}
            color="secondary"
            value={props.number === 1 ? props.player1Plunks : props.player3Plunks}
            onChange={(e) => {
              props.number === 1 ? props.setPlayer1Plunks(e.target.value) : props.setPlayer3Plunks(e.target.value)
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ml:3}}
                size="medium"
                checked={props.number === 1 ? props.player1SelfPlunk : props.player3SelfPlunk}
                onChange={(e) => {
                  props.number === 1 ? props.setPlayer1SelfPlunk(e.target.checked) : props.setPlayer3SelfPlunk(e.target.checked)
                }}
                color="secondary"
              />}
            label="Self Plunk?!" />
        </>
        }
      </Box>

      <OptionalStats
        playerNumber={props.number === 1 ? 'player1' : 'player3'}
        setPoints={props.setPoints}
      />

      <Divider sx={{mb: 4, mt: 4}} />

      {/* --------------PLAYER 2/4-------------- */}

      <Autocomplete
        disablePortal
        options={props.options}
        size="small"
        value={props.number === 1 ?
          (props.player2Name === '' ? null : props.player2Name) :
          (props.player4Name === '' ? null : props.player4Name)
        }
        onChange={(e, v) => {
          props.number === 1 ? props.setPlayer2Name(v) : props.setPlayer4Name(v)
        }}
        renderInput={(params) =>
          <TextField
            {...params}
            onChange={(e) => {
              props.number === 1 ? props.setPlayer2Name(e.target.value) : props.setPlayer4Name(e.target.value)
            }}
            label={props.number === 1 ? "Player 2" : "Player 4"}
          />
        }
        color="secondary"
      />
      <Box sx={{ mt: 1, mb: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              checked={props.number === 1 ? props.plunk2Checked : props.plunk4Checked}
              onChange={(e) => {props.number === 1 ? props.setPlunk2Checked(e.target.checked) : props.setPlunk4Checked(e.target.checked)}}
              color="secondary"
            />}
          label="Plunks?" />
        {(props.number === 1 ? props.plunk2Checked : props.plunk4Checked) &&
        <>
          <TextField
            label="#"
            type="number"
            id="outlined-size-small"
            size="small"
            sx={{width: '50px'}}
            color="secondary"
            value={props.number === 1 ? props.player2Plunks : props.player4Plunks}
            onChange={(e) => {
              props.number === 1 ? props.setPlayer2Plunks(e.target.value) : props.setPlayer4Plunks(e.target.value)
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ml:3}}
                size="medium"
                checked={props.number === 1 ? props.player2SelfPlunk : props.player4SelfPlunk}
                onChange={(e) => {
                  props.number === 1 ? props.setPlayer2SelfPlunk(e.target.checked) : props.setPlayer4SelfPlunk(e.target.checked)
                }}
                color="secondary"
              />}
            label="Self Plunk?!" />
        </>
        }
      </Box>

      <OptionalStats
        playerNumber={props.number === 1 ? 'Player 2' : 'Player 4'}
        setPlinks={props.number === 1 ? props.setPlayer2Plinks : props.setPlayer4Plinks}
        setDrinks={props.number === 1 ? props.setPlayer2Drinks : props.setPlayer4Plinks}
        setPoints={props.number === 1 ? props.setPlayer2Points : props.setPlayer4Plinks}
      />

    </Box>
  );
}
