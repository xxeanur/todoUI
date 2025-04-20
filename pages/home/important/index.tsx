import MainLayout from '@/layouts/MainLayout'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import CustomTextField from '@/components/TextField';
import DateHeader from '@/components/DateHeader';
import DescriptionIcon from '@mui/icons-material/Description';
import Image from 'next/image';
import CenterContent from '@/components/CenterContent';
import { useSidebar } from '@/contexts/SidebarContext';
import MainContainer from '@/components/MainContainer';

export default function Important() {
    const today = format(new Date(), 'd MMMM EEEE', { locale: tr });
    const { handleDrawerToggle } = useSidebar();
    return (
        <MainLayout>
            <MainContainer>
                <DateHeader today={today} header="Önemli"  />

                <CenterContent image='/task.png' description=' Burada görüntülemek için görevlerinize yıldız ekleyin.' />

                <CustomTextField></CustomTextField>
            </MainContainer>
        </MainLayout>
    )
}

