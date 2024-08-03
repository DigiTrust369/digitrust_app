"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import ProfileHeader from "@/components/Profile/ProfileHeader/ProfileHeaderGM";
import Header from "@/components/LandingPage/HomeHeader";
import Banner from "@/components/HomePage/Banner";

const HomeHeader = dynamic(
  () => import("@/components/HomePage/Layout/HomeHeader"),
  {
    ssr: false,
  }
);

const MainLayout = () => {
  const pathname = usePathname().replace("/", "");
  return (
    <>
      <Banner time={8000}><ProfileHeader isHome={true}></ProfileHeader></Banner>
      {/* {pathname != "" && pathname == "home" && (
        <Banner time={8000}><ProfileHeader isHome={true}></ProfileHeader></Banner>
      )}
      {pathname != "" && pathname != "home" && pathname == "detail" && (
        <ProfileHeader isDetail={true} isHome={false}></ProfileHeader>
      )}
      {pathname != "" && pathname != "home" && pathname != "detail" && (
        <ProfileHeader isHome={false}></ProfileHeader>
      )} */}
      {/* {pathname == "" && <Header></Header>} */}
    </>
  );
};
export default MainLayout;
