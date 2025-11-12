import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableRow, TableFooter, Box } from '@mui/material';
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
    <Paper elevation={0} sx={{ p: 3, borderRadius: '10px', backgroundColor: 'background.paper', border: '1px solid #334155' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SummarizeIcon sx={{ mr: 1.5, color: 'primary.main' }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: '600' }}>
          Timecard Summary
        </Typography>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '0 8px' }} aria-label="timecard summary table">
          <TableBody>
            {summaryData.map((row, index) => (
              <TableRow key={index} sx={{ '& td': { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ fontWeight: '500', color: 'text.primary', p: 1 }}>
                  {row.projectCode}
                </TableCell>
                <TableCell sx={{ color: 'text.secondary', p: 1 }}>{row.taskNumber}</TableCell>
                <TableCell sx={{ color: 'text.secondary', p: 1 }}>{row.activity}</TableCell>
                <TableCell align="right" sx={{ color: 'text.primary', fontWeight: '500', p: 1 }}>{row.totalHours.toFixed(1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow sx={{ '& td': { border: 0 } }}>
              <TableCell colSpan={3} align="right" sx={{ p: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: '600', color: 'text.secondary' }}>Total</Typography>
              </TableCell>
              <TableCell align="right" sx={{ p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: 'warning.main' }}>
                  <WarningAmberIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                  <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
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
