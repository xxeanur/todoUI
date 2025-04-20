import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { styles } from '../styles/mainLayoutStyles';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from '../contexts/SidebarContext';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
   
      <Container disableGutters maxWidth={false} sx={styles.container}>
        <Sidebar />
        {children}
      </Container>
    
  );
};

export default MainLayout;
