import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ApprovalIcon from '@mui/icons-material/Approval';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const StatusStep = ({ icon, label, active, completed }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: active || completed ? 1 : 0.4 }}>
    <Avatar sx={{
        width: 40,
        height: 40,
        bgcolor: completed ? 'success.main' : active ? 'warning.main' : 'grey.400'
    }}>
      {icon}
    </Avatar>
    <Typography variant="caption" sx={{ mt: 1 }}>{label}</Typography>
  </Box>
);

const Connector = () => (
    <Box sx={{ flex: 1, height: '4px', bgcolor: 'grey.300', mx: -1, alignSelf: 'center', position: 'relative', top: '-8px' }} />
);

const TimecardStatus = () => {
  return (
    <Box>
      <Typography variant="h6" component="h3" sx={{ mb: 4, fontWeight: '600' }}>
        Timecard Status
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <StatusStep icon={<CheckIcon />} label="Draft" completed />
        <Connector />
        <StatusStep icon={<HourglassTopIcon />} label="Submitted" active />
        <Connector />
        <StatusStep icon={<ApprovalIcon />} label="In Approval" />
        <Connector />
        <StatusStep icon={<ThumbUpIcon />} label="Approved" />
      </Box>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Current status:
        </Typography>
        <Typography variant="h5" component="p" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
          Submitted
        </Typography>
      </Box>
    </Box>
  );
};

export default TimecardStatus;
