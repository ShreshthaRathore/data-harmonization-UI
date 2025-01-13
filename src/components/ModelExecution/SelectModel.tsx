import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { RootState, AppDispatch } from '../utils/store.ts';
import { setDropdownValue, postDropdownValue } from '../utils/redux/applymodel/applyModelAction.ts';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DropdownComponent = () => {
  const dispatch: AppDispatch = useDispatch(); // Typed dispatch
  const { dropdownValue, isLoading, apiData, error } = useSelector((state: RootState) => state);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDropdownValue(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dropdownValue) {
      dispatch(postDropdownValue(dropdownValue));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Age"
        value={dropdownValue} onChange={handleDropdownChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
        </Grid>
        <Grid item xs={6} md={4}>
        <Button variant="contained" color="success" style={{ background: '#5C76B8' }}>
  Apply Model
</Button>
        </Grid>
        
      </Grid>
      </form>
    </Box>
  );
}

export default DropdownComponent;