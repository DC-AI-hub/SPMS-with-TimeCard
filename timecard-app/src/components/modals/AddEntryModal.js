import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid,
  MenuItem, Box, IconButton, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddEntryModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add Entry for 2024-07-26</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField select label="Project Code" defaultValue="FR-015" fullWidth>
              <MenuItem value="FR-015">FR-015</MenuItem>
              <MenuItem value="PROJ-101">PROJ-101</MenuItem>
              <MenuItem value="DEV-002">DEV-002</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Project Name"
              defaultValue="Fintech Solutions"
              fullWidth
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: (theme) => theme.palette.action.disabledBackground }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Task Number" defaultValue="TSK-004" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Activity"
              defaultValue="Development"
              fullWidth
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: (theme) => theme.palette.action.disabledBackground }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select label="Claim Type" defaultValue="Normal" fullWidth>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Leave">Leave</MenuItem>
              <MenuItem value="OT (Working Days)">OT (Working Days)</MenuItem>
              <MenuItem value="OT (Holidays)">OT (Holidays)</MenuItem>
              <MenuItem value="OT (Statutory Holidays)">OT (Statutory Holidays)</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Hours" type="number" defaultValue="8" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Remark"
              multiline
              rows={3}
              placeholder="Add a comment..."
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} variant="outlined">Cancel</Button>
        <Button onClick={handleClose} variant="contained">Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEntryModal;
