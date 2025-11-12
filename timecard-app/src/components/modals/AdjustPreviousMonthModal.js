import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid,
  MenuItem, Box, IconButton, Typography, InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AdjustPreviousMonthModal = ({ open, handleClose }) => {
  const [hours, setHours] = React.useState(4.5);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6">Adjust Previous Month's Time Entry</Typography>
            <Typography variant="body2" color="text.secondary">Make changes to your locked timesheet.</Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: 2, backgroundColor: 'warning.light', color: 'warning.dark', display: 'flex', alignItems: 'center', borderRadius: 1, mb: 3 }}>
          <InfoOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="body2">
            Note: These changes are for the locked timesheet of the previous month and may require manager approval.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField select label="Project Code" defaultValue="PRJ-00125" fullWidth>
              <MenuItem value="PRJ-00125">PRJ-00125</MenuItem>
              <MenuItem value="PRJ-00126">PRJ-00126</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Task Number" defaultValue="TSK-987" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Date"
              type="date"
              defaultValue="2023-10-15"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField select label="Claim Type" defaultValue="Normal" fullWidth>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Leave">Leave</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField select label="Activity" defaultValue="Development" fullWidth>
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Meeting">Meeting</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Hours</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="outlined" onClick={() => setHours(h => Math.max(0, h - 0.25))}><RemoveIcon /></Button>
              <TextField value={hours.toFixed(2)} type="number" sx={{ mx: 1, width: '80px', textAlign: 'center' }} inputProps={{ style: { textAlign: 'center' }}} />
              <Button variant="outlined" onClick={() => setHours(h => h + 0.25)}><AddIcon /></Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0', mt:2 }}>
        <Button onClick={handleClose} variant="outlined">Cancel</Button>
        <Button onClick={handleClose} variant="contained">Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdjustPreviousMonthModal;
