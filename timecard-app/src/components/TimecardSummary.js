import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, Box } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const summaryData = [
  { projectCode: 'P-101', taskNumber: 'TSK-500', activity: 'Development', totalHours: 80.0 },
  { projectCode: 'P-203', taskNumber: 'TSK-501', activity: 'Meeting', totalHours: 40.0 },
  { projectCode: 'P-101', taskNumber: 'TSK-502', activity: 'Bug Fixing', totalHours: 45.0 },
];

const TimecardSummary = () => {
  const totalHours = summaryData.reduce((acc, item) => acc + item.totalHours, 0);

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: '10px', border: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SummarizeIcon color="primary" sx={{ mr: 1.5 }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: '600' }}>
          Timecard Summary
        </Typography>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="timecard summary table">
          <TableHead sx={{ bgcolor: 'grey.50' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: '600' }}>Project Code</TableCell>
              <TableCell sx={{ fontWeight: '600' }}>Task Number</TableCell>
              <TableCell sx={{ fontWeight: '600' }}>Activity</TableCell>
              <TableCell align="right" sx={{ fontWeight: '600' }}>Total Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summaryData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:nth-of-type(odd)': { backgroundColor: (theme) => theme.palette.action.hover } }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: '500' }}>
                  {row.projectCode}
                </TableCell>
                <TableCell>{row.taskNumber}</TableCell>
                <TableCell>{row.activity}</TableCell>
                <TableCell align="right">{row.totalHours.toFixed(1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter sx={{ bgcolor: 'grey.50' }}>
            <TableRow>
              <TableCell colSpan={3} align="right">
                <Typography variant="h6" sx={{ fontWeight: '600' }}>Total</Typography>
              </TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: 'warning.main' }}>
                  <WarningAmberIcon sx={{ mr: 0.5 }} />
                  <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                    {totalHours.toFixed(1)}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TimecardSummary;
