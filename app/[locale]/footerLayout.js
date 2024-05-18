'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import ProfileHeader from '@/components/Profile/ProfileHeader/ProfileHeader';
import Footer from '@/components/LandingPage/HomeFooter';
import dynamic from 'next/dynamic';

const SecondFooter = dynamic(() => import('@/components/HomePage/Layout/HomeFooter'), {
    ssr: false,
  });

const FooterLayout = () => {
    const pathname = usePathname().replace('/','');
    console.log(pathname);
  return (
    <>
    {
       pathname != '' && <SecondFooter></SecondFooter>
    }
    {
       pathname == '' && <Footer></Footer>
    }
    </>
  );
};
export default FooterLayout;