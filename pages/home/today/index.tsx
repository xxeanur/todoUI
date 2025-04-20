import { Box } from '@mui/material';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import CenterContent from '@/components/CenterContent';
import DateHeader from '@/components/DateHeader';
import CustomTextField from '@/components/TextField';
import MainLayout from '@/layouts/MainLayout';
import { useSidebar } from '../../../contexts/SidebarContext';
import MainContainer from '@/components/MainContainer';

export default function TodayPage() {
  const today = format(new Date(), 'd MMMM EEEE', { locale: tr });
  const { handleDrawerToggle } = useSidebar();
  return (
    <MainLayout>

      <MainContainer>        
        <DateHeader today={today} header="Günüm" />

        <CenterContent
          image='/calendars.png'
          title='Gününüze odaklanın'
          description='Her gün yenilenen Günüm listesiyle görevlerinizi tamamlayın.'
        />

        <CustomTextField />
        </MainContainer>


    </MainLayout>
  );
}
