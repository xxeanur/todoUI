//Ana sayfa
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


export default function index() {
  const router=useRouter();

  useEffect(()=>{
    router.replace('/login')//replace:metodu, geçmişe kayıt eklemez (yani kullanıcı "Geri" butonuna basınca ana sayfaya dönemez).
  },[router])


  return null;
}
