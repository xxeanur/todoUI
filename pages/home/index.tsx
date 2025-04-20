// import MainLayout from '@/layouts/MainLayout'
// import React, { Children,useEffect } from 'react'
// import { useRouter } from 'next/router';

// import Calendar from '../../images/calendar.png'
// import { Box } from '@mui/material';
// import Sidebar from '@/components/Sidebar';


// function HomePage({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   return (
//     <MainLayout>
//       {children}
//     </MainLayout>

//   );
// }

// export default HomePage

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomeRedirect() {
  const router = useRouter();//sayfa yönlendirme hooku

  useEffect(() => {//bileşen render edilince 
    router.replace('/home/today');
  }, [router]);

  return null;
}

