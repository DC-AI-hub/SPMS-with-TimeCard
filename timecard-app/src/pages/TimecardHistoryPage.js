import React from 'react';
import {
  Container, Typography, Button, Box, Paper, TextField, InputAdornment, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Chip, Pagination, Select, MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const historyData = [
  { month: 'November 2023', submissionDate: 'Dec 01, 2023', hours: 160.00, status: 'Approved' },
  { month: 'October 2023', submissionDate: 'Nov 01, 2023', hours: 168.00, status: 'In Approval' },
  { month: 'September 2023', submissionDate: 'Oct 01, 2023', hours: 152.50, status: 'Draft' },
  { month: 'August 2023', submissionDate: 'Sep 01, 2023', hours: 160.00, status: 'Approved' },
  { month: 'July 2023', submissionDate: 'Aug 01, 2023', hours: 140.00, status: 'Rejected' },
];

const statusColors = {
  Approved: 'success',
  'In Approval': 'warning',
  Draft: 'default',
  Rejected: 'error',
};

const TimecardHistoryPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Timecard Submission History
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create New Timecard
        </Button>
      </Box>

      <Paper sx={{ p: 2, borderRadius: '10px' }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            placeholder="Search by project or description"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <Select defaultValue="all" sx={{ minWidth: 200 }}>
            <MenuItem value="all">Status: All</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="in-approval">In Approval</MenuItem>
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
          <Button variant="outlined" startIcon={<CalendarMonthIcon />}>
            Select Date Range
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Timecard Month</TableCell>
                <TableCell>Submission Date</TableCell>
                <TableCell>Total Hours</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historyData.map((row) => (
                <TableRow key={row.month} hover>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.submissionDate}</TableCell>
                  <TableCell>{row.hours.toFixed(2)}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={statusColors[row.status]} size="small" />
                  </TableCell>
                  <TableCell align="right">
                    <Button component={Link} to="/details/1" size="small">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, p: 2 }}>
            <Typography variant="body2" color="text.secondary">
                Showing 1 to 5 of 24 results
            </Typography>
            <Pagination count={5} page={1} color="primary" />
        </Box>
      </Paper>
    </Container>
  );
};

export default TimecardHistoryPage;
