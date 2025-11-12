import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const EmployeeInformation = () => {
  const employeeData = {
    staffName: '张三 / Zhang San',
    staffId: 'EMP001',
    department: '技术部',
    currentMonth: '2024-11',
    departmentHead: '李四',
    finalApprover: '王五',
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PersonIcon color="primary" sx={{ mr: 1.5 }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: '600' }}>
          Employee Information
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Staff Name</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>{employeeData.staffName}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Staff ID</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>{employeeData.staffId}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Department</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>{employeeData.department}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Current Month</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>{employeeData.currentMonth}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Department Head</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>{employeeData.departmentHead}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Final Approver</Typography>
          <Typography variant="body1" sx={{ fontWeight: '500' }}>{employeeData.finalApprover}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeInformation;
