import DateHeader from '@/components/DateHeader';
import CustomTextField from '@/components/TextField';
import MainLayout from '@/layouts/MainLayout'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import BallotIcon from '@mui/icons-material/Ballot';
import Image from 'next/image';
import CenterContent from '@/components/CenterContent';
import { useSidebar } from '@/contexts/SidebarContext';
import MainContainer from '@/components/MainContainer';

export default function Planned() {
  const today = format(new Date(), 'd MMMM EEEE', { locale: tr });
  const { handleDrawerToggle } = useSidebar();

  return (
    <MainLayout>
      <MainContainer>
        <DateHeader today={today} header="Planlanan" />
        <CenterContent image='/work-plan.png' description='Son tarihleri veya hatırlatıcıları olan görevler burada görüntülenir.' />
        <CustomTextField></CustomTextField>
      </MainContainer>
    </MainLayout>
  )
}

