import { Button, Typography, Box, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "../../styles/login.module";
import InputField from "@/components/InputField";
//Zod validasyon
import { useForm } from 'react-hook-form';//form yönetimi sağlıyor
import { zodResolver } from '@hookform/resolvers/zod'//react-hook-form'a Zod şeması tanıtmak için köprü.
import { z } from 'zod';
import { loginSchema } from '../../validations/loginValidations'

export default function LoginPage() {
  //zod validations
  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,// Inputları react-hook-form'a bağlar//inputlara bağlanır
    handleSubmit,//handleSubmit: Form gönderildiğinde çalışacak onSubmit fonksiyonunu çağırır.
    formState: { errors }//Eğer validasyon hatası varsa buraya düşer.
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)//Zod ile oluşturduğumuz loginSchema'yı react-hook-form'a tanıtırız.
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Giriş verileri:", data);//Form başarıyla geçerse bu fonksiyon çağrılır ve verileri console'a basar.//burada backende istek göndereceğim sonra
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        {/* Close Button */}
        <Box sx={styles.closeButtonContainer}>
          <Button sx={styles.closeButton}>
            <CloseIcon sx={{ fontSize: 20 }} />
          </Button>
        </Box>

        {/* Header */}
        <Typography variant="h4" sx={styles.title}>
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Email Input */}
        <InputField label="Username" type="text" icon={<AccountBoxIcon />} register={register("username")} />
        {errors.username && (
          <Typography color="error" fontSize={12}>
            {errors.username.message}
          </Typography>
        )}

        {/* Password Input */}
        <InputField label="Password" type="password" icon={<LockIcon />}  register={register("password")} />
        {errors.password && (
          <Typography color="error" fontSize={12}>
            {errors.password.message}
          </Typography>
        )}

        {/* Actions (Remember me - Forgot password) */}
        <Box sx={styles.formActions}>
          <Typography>Remember me</Typography>
          <Typography>Forgot password?</Typography>
        </Box>

        {/* Login Button */}
        <Button variant="contained" endIcon={<LoginIcon />}  sx={styles.loginButton} type="submit">
          Login
        </Button>
        </form>

        {/* Register Link */}
        <Box sx={styles.registerText}>
          <Typography>
            Don't have an account?{" "}
            <Link color="#2F85ED">
              Register.
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
 
  );
}


//1.	loginSchema ile kuralları tanımladık
// 2.	useForm ile formu Zod'a bağladık
// 3.	register() ile inputları bağladık
// 4.	errors ile hata mesajlarını aldık ve gösterdik
// 5.	onSubmit ile geçerli verileri işledik