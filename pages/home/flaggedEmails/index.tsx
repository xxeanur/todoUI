import DateHeader from '@/components/DateHeader';
import CustomTextField from '@/components/TextField';
import MainLayout from '@/layouts/MainLayout';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
color: '#57AB79'
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import Image from 'next/image'
import CenterContent from '@/components/CenterContent';
import { useSidebar } from '@/contexts/SidebarContext';
import MainContainer from '@/components/MainContainer';

export default function FlaggedEmails() {
    const today = format(new Date(), 'd MMMM EEEE', { locale: tr });
    const { handleDrawerToggle } = useSidebar();
    return (
        <MainLayout>
            <MainContainer>
                <DateHeader today={today} header="Bayrak eklenmiş e-postalar" />

                <CenterContent image='/finish.png' description='Son tarihleri veya hatırlatıcıları olan görevler burada görüntülenir.' />

                <CustomTextField></CustomTextField>
            </MainContainer>
        </MainLayout>
    )
}

