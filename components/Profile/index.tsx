"use client";
// import { formatNumberByCurrency } from "@/utils";
import React, { useEffect, useState } from "react";
// import BlockBalance from "./BlockBalance";
import GeneralInfo from "./GeneralInfo";
import SkeletonProfile from "./SkeletonProfile/SkeletonProfile";
// import Strategy from "@/components/HistoryPage/Strategy";
import { useGlobalContext } from "@/Context/store";
import AssetCard from "./AssetCard";
import AssetWatchList from "./AssetWatchList";
import { string } from "yup";

type TVault = {
  name: string;
  balance: number;
  list_price: string;
  current_price: string;
  manager: string;
  tvl: number;
  monthly_return: string;
  daily_return: string;
  logo_url: string;
};

interface IAllTimeProfit{
  amount : string,
  profitloss: string
}

type IBestPerformer = {
  coinID: string,
  amount: number,
  profitloss: string
}

type IWorstPerformer = {
  coinID: string,
  amount: number,
  profitloss: string
}

type TProfileContainerProps = {
  name: string,
  wallet: string,
  adrUrl: string,
  description: string,
  balance: string, 
  twitter: string,
  allTimeProfit: IAllTimeProfit,
  bestPerformer: IBestPerformer, 
  worstPerformer: IWorstPerformer,
  assets: IAsset[], 
  logo_url: string
};

interface IPriceChange{
  "24h": number
}

interface IAsset{
  asset: string,
  symbol: string,
  contract: string,
  chain: string,
  invest_amount: number,
  weight: string,
  holding: string,
  price_change: IPriceChange,
  dgt_score: number,
  status: boolean,
  total_usd: string,
  token_amount: number,
  price: string,
  profit: string,
  logo_url: string,
  asset_url: string,
  created_at: string
}


const ProfileContainer = (props: TProfileContainerProps) => {
  const {
    name,
    wallet,
    adrUrl,
    description,
    balance, 
    twitter,
    allTimeProfit,
    bestPerformer, 
    worstPerformer,
    assets, 
    logo_url
  } = props;


  const { userEmail, setUserEmail } = useGlobalContext();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail && (!userEmail || userEmail === "")) {
      setUserEmail(storedEmail);
    }
  }, []);



  return (
    <div>
      {userEmail  != "" ? (
        <div>
          <div className="mt-5">
            <GeneralInfo
              name={name}
              userAddress={wallet}
              description={description}
              avatar={logo_url}
              addressUrl={adrUrl}
              twitter={twitter}
              balance={balance}
            />
          </div>
          <AssetCard AllTimeProfit={allTimeProfit} bestPerformer={bestPerformer} worstPerformer={worstPerformer}  />
          <div className="mt-4">
            <AssetWatchList  data={assets} />    
          </div>

        </div>
      ) : (
        <div>
          <SkeletonProfile />
        </div>
      )}
    </div>
  );
};

export default ProfileContainer;
