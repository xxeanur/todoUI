import React from 'react';
import { Drawer, Box, IconButton, Typography, List, ListItemButton, ListItemIcon, ListItemText, Button, TextField, Avatar } from '@mui/material';
import { styles } from '../styles/sidebarStyles';
import { useSidebar } from '../contexts/SidebarContext';
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Link from 'next/link';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StarIcon from '@mui/icons-material/Star';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import PersonIcon from '@mui/icons-material/Person';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function Sidebar() {
  const { mobileOpen, isDesktop, handleDrawerToggle } = useSidebar();

  const menuItems = [
    { text: 'Günüm', icon: <WbSunnyIcon sx={{ color: '#ff9800' }} />, path: '/home/today' },
    { text: 'Önemli', icon: <StarIcon sx={{ color: '#ff9800' }} />, path: '/home/important' },
    { text: 'Planlanan', icon: <ChecklistRtlIcon sx={{ color: '#FFFFFF' }} />, path: '/home/planned' },
    { text: 'Bana atanmış', icon: <PersonIcon sx={{ color: '#57AB79' }} />, path: '/home/assignedToMe' },
    { text: 'Bayrak eklenmiş e-postalar', icon: <SportsScoreIcon sx={{ color: '#AB5757' }} />, path: '/home/flaggedEmails' },
    { text: 'Görevler', icon: <HomeRoundedIcon sx={{ color: '#7757AB' }} />, path: '/home/tasks' },
  ];

  return (
    <Drawer
      variant={isDesktop ? 'permanent' : 'temporary'}
      open={isDesktop || mobileOpen} //drawerin açık mı kapalı mı onu belirler. Masaüstünde hep açık yani true, mobilde ise mobileOpen true ise açık
      onClose={handleDrawerToggle}//Bu fonksiyon, drawer dışına tıklanınca (veya ESC tuşuna basılınca) çalışır. Özellikle mobil görünümde, drawer’ı kapatmak için kullanılır.
      sx={styles.drawer}
    >
      <Box sx={styles.mainContent}>
        <Box sx={styles.userContainer}>
          {!isDesktop && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'white', marginLeft: 'auto', marginRight: 2 }}>
            </IconButton>
          )}
          <Box sx={styles.userInfo}>
            <Avatar sx={styles.avatar} />
            <Box>
              <Typography sx={styles.typography}>Esra Nur Çomak</Typography>
              <Typography sx={{ fontSize: '0.7rem', opacity: 0.7 }}>esranurcomak@hotmail.com</Typography>
            </Box>
          </Box>

          <Box sx={styles.searchContainer}>
            <TextField
              id="standard-search"
              label="Ara"
              type="search"
              variant="standard"
              size="small"
              sx={styles.textField}
            />
          </Box>
        </Box>

        <List sx={styles.list}>
          {menuItems.map((item) => (
            <Link href={item.path} key={item.text} passHref>
              <ListItemButton sx={styles.listItemButton} onClick={() => !isDesktop && handleDrawerToggle()}>
                <ListItemIcon sx={styles.listItemIcon}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Box>

      <Box sx={styles.bottomContainer}>
        <Button variant="contained" fullWidth startIcon={<AddIcon />} sx={styles.newListButton}>
          Yeni Liste
        </Button>
        <Button sx={styles.groupButton}>
          <PlaylistAddIcon />
        </Button>
      </Box>
    </Drawer>
  );
}
