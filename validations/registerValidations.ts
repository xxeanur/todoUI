import { z } from 'zod'

export const registerSchema = z.object({
    username: z
        .string()
        .min(3, "Kullanıcı adı en az 3 karakter olmalıdır.")
        .max(20, "Kullanıcı adı en az 20 karakter olabilir."),
    email: z
        .string()
        .min(1, "E-posta alanı zorunludur.")
        .email("Geçerli bir e-posta adresi giriniz."),
    password: z
        .string()
        .min(6, "Şifre en az 6 karakter uzunluğunda olmalıdır.")
        .max(32, "Şifre en fazla 32 karakter olabilir."),
    confirmPassword: z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Şifreler eşleşmiyor.",
        path: ["confirmPassword"],//Uİ da hatanın düşeceği alan
    })


//.refine(...) → bu, zod’un bir objenin içinde "iki alan arasında ilişki kontrolü" yapmasına olanak sağlar.