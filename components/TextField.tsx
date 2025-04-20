import { Box, TextField } from '@mui/material'; // Takma ad (alias) kullanın
import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function CustomTextField() { // İsim değişikliği
  return (
    <Box sx={{
        display: "flex",
        padding: '5px',
        borderRadius: 1,
        backgroundColor: 'action.hover',
        '&:hover': {
          backgroundColor: 'action.selected'
        },
        marginTop: 'auto', // Yukarıdaki tüm içeriği itmek için
        width: '100%'
      }}>
        <RadioButtonUncheckedIcon sx={{ marginRight: 1, opacity: 0.8, }} />
        <TextField
          autoFocus
          fullWidth
          variant="standard"
          placeholder="Görev ekle"
          size="small"
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
              fontSize: '0.875rem'
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: "whitesmoke"
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white'
            }
          }}
        />

      </Box>
  );
}