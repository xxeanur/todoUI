import { Box } from '@mui/material';
import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;//props interface childrenin tipi
}

//react.FC component tipi olarak kullanılır prop tipi değil
const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: "100%",
      padding: 2,
      position: 'relative'
    }}>
      {children}
    </Box>
  );
};

export default MainContainer;