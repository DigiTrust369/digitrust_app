"use client";
import dynamic from "next/dynamic";
import '@suiet/wallet-kit/style.css';
import ProfileLayout from "@/components/Profile/ProfileLayout";
import {NextUIProvider} from "@nextui-org/system";
import {
  WalletProvider,
  Chain,
  SuiDevnetChain,
  SuiTestnetChain,
  SuiMainnetChain,
  DefaultChains,
} from "@suiet/wallet-kit";
import Web3ModalProvider from './context';

const ProfileChild = dynamic(() => import("@/components/Profile/index"), {
  ssr: false,
});

const customChain: Chain = {
  id: "8217",
  name: "Klaytn",
  rpcUrl: "https://username.chainprtcl.net/klaytn/uid",
};


const SupportedChains: Chain[] = [
  // ...DefaultChains,
  SuiDevnetChain,
  SuiTestnetChain,
  SuiMainnetChain,
  // NOTE: you can add custom chain (network),
  // but make sure the connected wallet does support it
  customChain,
];

const fetchProfile = async () => {
  const response = await fetch(
    "https://dgt-dev.vercel.app/v1/user?user_id=user_v1"
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export default async function profile() {
  const profile = await fetchProfile();

  if (!profile || Object.keys(profile).length === 0) {
    return <div>User not found</div>;
  }
    return (
      <NextUIProvider>
         <Web3ModalProvider>
          <WalletProvider chains={SupportedChains}>
              <ProfileLayout>
                <main className="overflow-hidden flex flex-col min-h-screen">
                  <div className="container mx-auto px-4">
                    <ProfileChild
                        name={profile.name}
                        holdingAmount={profile.holding_amount}
                        managedAmount={profile.managed_amount}
                        description={profile.des}
                        wallet={profile.wallet}
                        logoUrl={profile.logo_url}
                        vaults={profile.vaults}
                        dgtAmount={profile.dgt_amount}
                      ></ProfileChild>
                  </div> 
                </main>
              </ProfileLayout>
          </WalletProvider>
        </Web3ModalProvider>
      </NextUIProvider>
    );
}
  