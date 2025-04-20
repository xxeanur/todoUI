import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JssProvider } from 'react-jss';
import { SidebarProvider } from '@/contexts/SidebarContext'; // SidebarProvider'ı içe aktar

//sayfa bileşenlerini saran üst düzey bileşendir app.tsx. Buradaki component her bir sayfanın içeriği olarak render edilir

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JssProvider>
      <SidebarProvider>  {/* SidebarProvider'ı burada sarmalıyoruz */}
        <Component {...pageProps} />
      </SidebarProvider>
    </JssProvider>
  );
}
