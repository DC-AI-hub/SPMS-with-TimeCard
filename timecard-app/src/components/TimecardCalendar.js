import React from 'react';
import { Paper, Typography, Box, Button, Grid } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SendIcon from '@mui/icons-material/Send';

const calendarData = [
  // Mock data representing the days of the month.
  // A more robust implementation would use a date library.
  { day: 1, entry: 'FR-009: 8h', status: 'normal' },
  { day: 2, status: 'holiday', holidayName: 'Holiday' },
  { day: 3, status: 'holiday' },
  { day: 4, status: 'normal' },
  { day: 5, status: 'normal' },
  { day: 6, status: 'normal' },
  { day: 7, status: 'normal' },
  { day: 8, status: 'normal' },
  { day: 9, status: 'holiday' },
  { day: 10, status: 'holiday' },
  { day: 11, entry: 'FR-009: 9.5h', status: 'error' },
  { day: 12, status: 'normal' },
  { day: 13, status: 'normal' },
  { day: 14, status: 'normal' },
  { day: 15, status: 'normal' },
  { day: 16, status: 'holiday' },
  { day: 17, status: 'holiday' },
  { day: 18, status: 'normal' },
  { day: 19, status: 'normal' },
  { day: 20, status: 'normal' },
  { day: 21, status: 'normal' },
  { day: 22, status: 'normal' },
  { day: 23, entry: 'FR-013: 4h', status: 'warning' },
  { day: 24, status: 'holiday' },
  { day: 25, status: 'normal' },
  { day: 26, status: 'normal' },
  { day: 27, status: 'normal' },
  { day: 28, status: 'normal' },
  { day: 29, status: 'normal' },
  { day: 30, status: 'holiday' },
];

const Day = ({ dayInfo, onClick }) => {
  let backgroundColor = 'background.paper';
  let color = 'text.primary';
  if (dayInfo.status === 'holiday') {
    backgroundColor = 'success.light';
    color = 'success.dark';
  } else if (dayInfo.status === 'error') {
    backgroundColor = 'error.light';
    color = 'error.dark';
  } else if (dayInfo.status === 'warning') {
    backgroundColor = 'warning.light';
    color = 'warning.dark';
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        height: 120,
        p: 1,
        border: '1px solid #e0e0e0',
        backgroundColor,
        color,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'action.hover'
        }
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>{dayInfo.day}</Typography>
      {dayInfo.entry && <Typography variant="caption">{dayInfo.entry}</Typography>}
      {dayInfo.holidayName && <Typography variant="caption" sx={{ position: 'absolute', bottom: 8, left: 8 }}>{dayInfo.holidayName}</Typography>}
    </Box>
  );
};

const TimecardCalendar = ({ onDayClick, onBatchAddClick }) => {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: '10px', border: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CalendarMonthIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6" component="h2">
              Timecard Calendar
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">
            November 2024
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={onBatchAddClick}>
            Batch Add
          </Button>
          <Button variant="contained" startIcon={<SendIcon />}>
            Submit Timecard
          </Button>
        </Box>
      </Box>
      <Grid container columns={7}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <Grid item xs={1} key={day} sx={{ textAlign: 'center', fontWeight: 'bold', py: 1, backgroundColor: 'grey.100' }}>
            <Typography variant="body2">{day}</Typography>
          </Grid>
        ))}
        {Array.from({ length: 5 }).map((_, i) => ( // Placeholder for empty days
          <Grid item xs={1} key={`empty-${i}`} sx={{ height: 120, border: '1px solid #e0e0e0', backgroundColor: 'grey.50' }} />
        ))}
        {calendarData.map(day => (
          <Grid item xs={1} key={day.day}>
            <Day dayInfo={day} onClick={() => onDayClick(day)} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TimecardCalendar;
