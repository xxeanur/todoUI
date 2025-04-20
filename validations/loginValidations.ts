import { z } from 'zod';

export const loginSchema = z.object({
    username: z
        .string()
        .min(1, "Kullanıcı adı alanı zorunludur."),
    password: z
        .string()
        .min(1, "Şifre alanı zorunludur."),
});