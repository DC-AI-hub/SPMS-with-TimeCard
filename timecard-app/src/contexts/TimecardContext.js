import React, { createContext, useState } from 'react';

const TimecardContext = createContext();

export const TimecardProvider = ({ children }) => {
  const [timecardData, setTimecardData] = useState({
    // Mock data for the timecard
    entries: [
      { date: '2024-11-01', project: 'P-101', task: 'TSK-500', hours: 8.0 },
      { date: '2024-11-02', project: 'P-203', task: 'TSK-501', hours: 8.0 },
    ],
    status: 'Draft',
  });

  const addTimecardEntry = (newEntry) => {
    setTimecardData((prevData) => ({
      ...prevData,
      entries: [...prevData.entries, newEntry],
    }));
  };

  const submitTimecard = () => {
    setTimecardData((prevData) => ({ ...prevData, status: 'Submitted' }));
  };

  return (
    <TimecardContext.Provider
      value={{
        timecardData,
        addTimecardEntry,
        submitTimecard,
      }}
    >
      {children}
    </TimecardContext.Provider>
  );
};

export default TimecardContext;
