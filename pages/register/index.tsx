/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Container, Input, InputAdornment, Typography } from "@mui/material";
import { styles } from '../../styles/register.module'
import { JSX } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import MainLayout from "@/layouts/MainLayout";
import InputField from "@/components/InputField";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { registerSchema } from '../../validations/registerValidations';

export default function Register() {
  //zod validasyon
  type RegisterFormData = z.infer<typeof registerSchema>

  const {
    register,
    handleSubmit,
    formState:{errors}
   } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  //bu bölüm APIye gidecek ve kayıt işlemi olacak
  const onSubmit=(data:RegisterFormData)=>{
    console.log("Kayıt verileri: ",);
  }

  return (
    <Box sx={styles.container}>

      <Box sx={styles.wrapper}>

        <Box sx={styles.closeButtonContainer}>
          <Button sx={styles.closeButton}>
            <CloseIcon sx={{ fontSize: 20 }} />
          </Button>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box>
          <InputField label="Email :" type="text" icon={<EmailIcon />} register={register("email")} />
        </Box>

        <Box>
          <InputField label="Username :" type="text" icon={<AccountBoxIcon />} register={register("username")} />
        </Box>

        <Box>
          <InputField label="Password : " type="password" icon={<LockIcon />} register={register("password")}/>
        </Box>

        <Box>
          <InputField label="Password Again :" type="password" icon={<LockIcon />} register={register("confirmPassword")} />
        </Box>

        <Box>
          <Button variant="contained" sx={styles.registerButton} type="submit">
            Kayıt ol
          </Button>
        </Box>
        </form>
      </Box>
    </Box>


  );
}
