import React from 'react';
import {
  Container, Typography, Button, Box, Paper, Grid, Chip, List, ListItem, ListItemIcon, ListItemText, Avatar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UploadIcon from '@mui/icons-material/Upload';
import CheckIcon from '@mui/icons-material/Check';

// Simplified calendar data for demonstration
const calendarDays = Array.from({ length: 31 }, (_, i) => ({ day: i + 1, hours: (i<9 && i%2 === 0) ? '8h' : null, project: (i<9 && i%2 === 0) ? `Project ${i%2 === 0 ? 'A' : 'B'}` : null }));

const TimecardDetailsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Button startIcon={<ArrowBackIcon />}>Back to History</Button>
        <Box>
          <Button startIcon={<PrintIcon />} variant="outlined" sx={{ mr: 1 }}>Print</Button>
          <Button startIcon={<DownloadIcon />} variant="contained">Export to PDF</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h4" component="h1">Timecard Details</Typography>
          <Typography variant="subtitle1" color="text.secondary">August 1, 2024 - August 31, 2024</Typography>
        </Box>
        <Chip label="Approved" color="success" />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 2, borderRadius: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Button startIcon={<ChevronLeftIcon />}>Prev</Button>
              <Typography variant="h6">August 2024</Typography>
              <Button endIcon={<ChevronRightIcon />}>Next</Button>
            </Box>
            <Grid container columns={7} spacing={1}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <Grid item xs={1} key={day} sx={{ textAlign: 'center', fontWeight: 'bold' }}>{day}</Grid>
              ))}
              {calendarDays.map(day => (
                <Grid item xs={1} key={day.day} sx={{ height: 100, border: '1px solid #eee', p: 1, borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{day.day}</Typography>
                  {day.hours && <Typography variant="caption">{day.hours}</Typography>}
                  {day.project && <Typography variant="caption" color="text.secondary">{day.project}</Typography>}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
            <Paper sx={{ p: 2, borderRadius: '10px', mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 2}}>Timecard Summary</Typography>
                {/* Simplified Summary Table */}
            </Paper>
            <Paper sx={{ p: 2, borderRadius: '10px' }}>
                <Typography variant="h6" sx={{ mb: 2}}>Approval Flow</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon><Avatar><UploadIcon/></Avatar></ListItemIcon>
                        <ListItemText primary="Submitted" secondary="by Eleanor Vance on Sep 1, 2024" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><Avatar sx={{ bgcolor: 'success.main' }}><CheckIcon/></Avatar></ListItemIcon>
                        <ListItemText primary="Approved" secondary="by Marcus Holloway on Sep 2, 2024" />
                    </ListItem>
                </List>
            </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TimecardDetailsPage;
