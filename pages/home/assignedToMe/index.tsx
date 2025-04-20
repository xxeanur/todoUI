import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Box, Typography } from '@mui/material';
import CustomTextField from '@/components/TextField';
import DateHeader from '@/components/DateHeader';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import CenterContent from '@/components/CenterContent';
import { useSidebar } from '@/contexts/SidebarContext';
import MainContainer from '@/components/MainContainer';

export default function AssignedToMe() {
    const today = format(new Date(), 'd MMMM EEEE', { locale: tr });
    const { handleDrawerToggle } = useSidebar();
    return (
        <MainLayout>
            <MainContainer>

                <DateHeader today={today} header="Bana atanmış" />
                <CenterContent image='/paper-plane.png' description='Size atanan görevler burada görüntülenir.' />

                <CustomTextField></CustomTextField>
            </MainContainer>
        </MainLayout>
    )
}

