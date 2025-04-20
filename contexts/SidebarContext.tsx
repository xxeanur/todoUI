import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';

interface SidebarContextProps {
  mobileOpen: boolean;//sidebarın açılma kapanma durumu
  isDesktop: boolean;//mobil mi masaüstü mü
  handleDrawerToggle: () => void;//sidebarı açıp kapatma fonksiyonu
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);
//r. Bu context nesnesi, verilerin sağlayıcısı (Provider) ve tüketicisi (useContext) arasında veri paylaşımını sağlar.

export const useSidebar = () => {//Bu hook, context'ten değerleri almak için kullanılır. useContext(SidebarContext) ile context'e bağlanıyoruz ve context'i döndürüyoruz. Custum Hook
  const context = useContext(SidebarContext);
  if (!context) throw new Error("SidebarContext kullanılmadan önce SidebarProvider ile sarmalanmalı.");
  return context;
};
// Burada, SidebarProvider ile tüm sayfalarınızda SidebarContext'e erişebilmenizi sağlıyorum
//SidebarProvider, Context'in sağlayıcısıdır. Bu bileşen, alt bileşenlere SidebarContext'in değerlerini sağlar. children prop'u ile, alt bileşenleri sarmalar ve onlara context verilerini geçeriz.
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width:960px)');//kullanarak, cihazın masaüstü mü yoksa mobil mi olduğunu kontrol ediyoruz.Bu, Sidebar bileşeninin nasıl görünmesi gerektiğini belirler.
  const [mobileOpen, setMobileOpen] = useState(false);//ilk başta sidebar kapalıdır.

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);//açıkken kapat kapalıyken aç
  };//handleDrawerToggle fonksiyonu, mobileOpen durumunu tersine çevirir, yani sidebar'ın açılıp kapanmasını sağlar.

  return (
    <SidebarContext.Provider value={{ mobileOpen, isDesktop, handleDrawerToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
