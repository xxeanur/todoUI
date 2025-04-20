import {z} from 'zod';


export const emailSchema=z
.string()
.min(1,"E-posta alanı zorunludur.")
.email("Geçerli bir e-posta adresi giriniz.");

export const passwordSchema=z
.string()
.min(6,"Şifre en az 6 karakter uzunluğunda olmalıdır.")
.max(32,"Şifre en fazla 32 karakter olabilir.");

export const usernameSchema=z
.string()
.min(3,"Kullanıcı adı en az 3 karakter olmalıdır.")
.max(20,"Kullanıcı adı en az 20 karakter olabilir.");

