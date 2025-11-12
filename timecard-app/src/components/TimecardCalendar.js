import React from 'react';
import { Paper, Typography, Box, Button, Grid } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SendIcon from '@mui/icons-material/Send';

const calendarData = [
  { day: 1, entry: 'FR-009: 8h', status: 'normal' },
  { day: 2, status: 'holiday' },
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
  let backgroundColor = 'transparent';
  if (dayInfo.status === 'holiday') {
    backgroundColor = 'success.main';
  } else if (dayInfo.status === 'error') {
    backgroundColor = 'error.main';
  } else if (dayInfo.status === 'warning') {
    backgroundColor = 'warning.main';
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        height: '100%',
        p: 1,
        backgroundColor,
        color: 'text.primary',
        cursor: 'pointer',
        border: '1px solid #334155',
        '&:hover': {
          backgroundColor: 'action.hover'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>{dayInfo.day}</Typography>
      {dayInfo.entry && <Typography variant="caption" sx={{ alignSelf: 'flex-end' }}>{dayInfo.entry}</Typography>}
    </Box>
  );
};

const TimecardCalendar = ({ onDayClick, onBatchAddClick }) => {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '10px', backgroundColor: 'background.paper', border: '1px solid #334155' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CalendarMonthIcon sx={{ mr: 1.5, color: 'primary.main' }} />
            <Typography variant="h6" component="h2" sx={{ fontWeight: '600' }}>
              Timecard Calendar
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">
            November 2024
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ mr: 1, textTransform: 'none', color: 'text.primary', borderColor: '#334155' }} onClick={onBatchAddClick}>
            Batch Add
          </Button>
          <Button variant="contained" startIcon={<SendIcon />} sx={{ textTransform: 'none' }}>
            Submit Timecard
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', height: '100px', gap: '2px' }}>
        {/* Simplified grid */}
        {calendarData.slice(0, 30).map(day => (
            <Day key={day.day} dayInfo={day} onClick={() => onDayClick(day)} />
        ))}
      </Box>
    </Paper>
  );
};

export default TimecardCalendar;
