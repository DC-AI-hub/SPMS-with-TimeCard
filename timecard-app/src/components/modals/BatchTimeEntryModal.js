import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid, Radio,
  RadioGroup, FormControlLabel, FormControl, FormLabel, Box, Typography, Table, TableBody,
  TableCell, TableHead, TableRow, IconButton, Paper, MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BatchTimeEntryModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Typography variant="h6">Batch Time Entry</Typography>
        <Typography variant="body2" color="text.secondary">
          Quickly fill in time for multiple days based on selected criteria.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Apply to</FormLabel>
              <RadioGroup row defaultValue="this-week">
                <FormControlLabel value="this-week" control={<Radio />} label="This Week" />
                <FormControlLabel value="all-working-days" control={<Radio />} label="All Working Days" />
                <FormControlLabel value="blank-days" control={<Radio />} label="Blank Days" />
              </RadioGroup>
            </FormControl>
            <Typography variant="h6" sx={{ mb: 2 }}>Entry Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Project Code"
                        defaultValue="FR-020"
                        fullWidth
                        InputProps={{
                            endAdornment: <SearchIcon />
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Project Name" defaultValue="Phoenix Project" fullWidth InputProps={{ readOnly: true }} sx={{ backgroundColor: 'action.disabledBackground' }}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Task Number" defaultValue="TSK-004" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Activity" defaultValue="Development" fullWidth InputProps={{ readOnly: true }} sx={{ backgroundColor: 'action.disabledBackground' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField select label="Claim Type" defaultValue="Normal" fullWidth>
                        <MenuItem value="Normal">Normal</MenuItem>
                        <MenuItem value="Leave">Leave</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Hours" type="number" defaultValue="8" fullWidth />
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <IconButton size="small"><ChevronLeftIcon /></IconButton>
                <Typography variant="subtitle1" component="p">October 2023</Typography>
                <IconButton size="small"><ChevronRightIcon /></IconButton>
              </Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <TableCell key={day} align="center" sx={{ p: 1, border: 0 }}>{day}</TableCell>)}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* This is a simplified representation of the calendar */}
                  <TableRow>
                    {[24, 25, 26, 27, 28, 29, 30].map(day => <TableCell key={day} align="center" sx={{ p: 1, border: 0, color: 'text.disabled' }}>{day}</TableCell>)}
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" sx={{ p: 1, border: 0 }}>1</TableCell>
                    {[2,3,4,5,6].map(day => <TableCell key={day} align="center" sx={{ p: 1, border: 0, bgcolor: 'primary.light', color: 'primary.contrastText', borderRadius: 1 }}>{day}</TableCell>)}
                    <TableCell align="center" sx={{ p: 1, border: 0 }}>7</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0', mt: 2 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Reset</Button>
        <Button variant="contained">Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BatchTimeEntryModal;
