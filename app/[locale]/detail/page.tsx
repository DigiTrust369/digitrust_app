"use client";
import dynamic from "next/dynamic";
import { WalletKitProvider } from "@mysten/wallet-kit";
import LayoutSecond from "@/components/DetailsPage/LayoutSecond";
import DetailsPage from "@/components/DetailsPage/DetailsPageGM";
import AppProvider from '@atlaskit/app-provider';

export default function Details() {
  return (

    // <WalletKitProvider>
    //   <LayoutSecond>
    <AppProvider>
      <DetailsPage />
    </AppProvider>
    //   </LayoutSecond>
    // </WalletKitProvider>
  );
}
