import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import EmployeeInformation from '../components/EmployeeInformation';
import TimecardStatus from '../components/TimecardStatus';
import TimecardSummary from '../components/TimecardSummary';
import TimecardCalendar from '../components/TimecardCalendar';
import AddEntryModal from '../components/modals/AddEntryModal';
import AdjustPreviousMonthModal from '../components/modals/AdjustPreviousMonthModal';
import BatchTimeEntryModal from '../components/modals/BatchTimeEntryModal';

const TimecardPage = () => {
  const [addEntryModalOpen, setAddEntryModalOpen] = useState(false);
  const [adjustModalOpen, setAdjustModalOpen] = useState(false);
  const [batchModalOpen, setBatchModalOpen] = useState(false);

  const handleOpenAddEntryModal = () => setAddEntryModalOpen(true);
  const handleCloseAddEntryModal = () => setAddEntryModalOpen(false);

  const handleOpenAdjustModal = () => setAdjustModalOpen(true);
  const handleCloseAdjustModal = () => setAdjustModalOpen(false);

  const handleOpenBatchModal = () => setBatchModalOpen(true);
  const handleCloseBatchModal = () => setBatchModalOpen(false);


  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Timecard Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Track your daily work hours and project allocations.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: '10px', border: '1px solid #e0e0e0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ flexGrow: 1, minWidth: '60%' }}>
              <EmployeeInformation />
            </Box>
            <Box sx={{ flexShrink: 0, minWidth: '35%' }}>
              <TimecardStatus />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TimecardSummary />
        </Grid>
        <Grid item xs={12}>
          <TimecardCalendar onDayClick={handleOpenAddEntryModal} onBatchAddClick={handleOpenBatchModal} />
        </Grid>
      </Grid>

      <AddEntryModal open={addEntryModalOpen} handleClose={handleCloseAddEntryModal} />
      <AdjustPreviousMonthModal open={adjustModalOpen} handleClose={handleCloseAdjustModal} />
      <BatchTimeEntryModal open={batchModalOpen} handleClose={handleCloseBatchModal} />
    </Container>
  );
};

export default TimecardPage;
