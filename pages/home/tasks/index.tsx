import React from 'react'
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import MainLayout from '@/layouts/MainLayout';
import { Box, Typography } from '@mui/material';
import DateHeader from '@/components/DateHeader';
import CustomTextField from '@/components/TextField';
import FlareIcon from '@mui/icons-material/Flare';
import Image from 'next/image';
import CenterContent from '@/components/CenterContent';
import { useSidebar } from '@/contexts/SidebarContext';
import MainContainer from '@/components/MainContainer';

export default function Tasks() {
    const today = format(new Date(), 'd MMMM EEEE', { locale: tr });
    const { handleDrawerToggle } = useSidebar();
    return (
        <MainLayout>
            <MainContainer>
                <DateHeader today={today} header="Görevler"  />

                <CenterContent image='/snowflake.png' description='Liste içinde bulunmayan görevleriniz burada görüntülenir.' />

                <CustomTextField />
            </MainContainer>
        </MainLayout>
    )
}

