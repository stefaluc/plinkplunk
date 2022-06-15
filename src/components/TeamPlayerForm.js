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

export default function TeamPlayerForm({ options, player, setPlayer, playerLabel }) {
  return (
    <Box>
      <Autocomplete
        options={options}
        size="small"
        onChange={(e, v) => {
          setPlayer(prev => ({ ...prev, name: v }))
        }}
        value={player.name === '' ? null : player.name}
        clearOnBlur={false}
        renderInput={(params) =>
          <TextField
            {...params}
            onChange={(e) => { setPlayer(prev => ({ ...prev, name: e.target.value })) }}
            label={playerLabel}
          />}
        color="secondary"
      />
      <Box sx={{ mt: 1, mb: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              checked={player.plunksChecked}
              onChange={(e) => { setPlayer(prev => ({ ...prev, plunksChecked: e.target.checked })) }}
              color="secondary"
            />}
          label="Plunks?" />
        {(player.plunksChecked) &&
        <>
          <TextField
            label="#"
            type="number"
            id="outlined-size-small"
            size="small"
            sx={{width: '50px'}}
            color="secondary"
            value={player.plunks}
            onChange={(e) => { setPlayer(prev => ({ ...prev, plunks: e.target.value })) }}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ml:3}}
                size="medium"
                color="secondary"
                checked={player.selfPlunk}
                onChange={(e) => { setPlayer(prev => ({ ...prev, selfPlunk: e.target.checked })) }}
              />}
            label="Self Plunk?!" />
        </>
        }
      </Box>

      <OptionalStats
        player={player}
        setPlayer={setPlayer}
        playerLabel={playerLabel}
      />

      <Divider sx={{mb: 4, mt: 4}} />
    </Box>
  );
}
