'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import ProfileHeader from '@/components/Profile/ProfileHeader/ProfileHeader';
import Header from '@/components/LandingPage/HomeHeader';

const MainLayout = () => {
    const pathname = usePathname().replace('/','');
    console.log(pathname);
  return (
    <>
    {
       pathname != '' && <ProfileHeader></ProfileHeader>
    }
    {
       pathname == '' && <Header></Header>
    }
    </>
  );
};
export default MainLayout;