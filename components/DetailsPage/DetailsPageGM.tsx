"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import detailBg from "@/assets/images/bg-detail.svg";
import useTab from "@/components/Tabbar/useTab";
import TabDetails from "./TabDetails";
import DepositWithdraw from "./DepositWithdraw";
import PieChart from "@/components/Chart/PieChart/PieChart";
import usdc from "@/assets/images/crypto/usdc.svg";
import btc from "@/assets/images/crypto/bitcoin.svg";
import Comment from "../DetailsPage/CommentCoinMarketCap/CommentCoinMarketCap";
import CoinPriceChart from "./NewChart/CoinPriceChart";

const CandlestickChart = dynamic(() => import('./NewChart/CanddleChart'), { ssr: false });

interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface Asset {
  asset: string;
  symbol: string;
  contract: string;
  chain: string;
  invest_amount: number;
  weight: string;
  holding: string;
  price_change: {
    "24h": string;
  };
  dgt_score: number;
  status: boolean;
  logo_url: string;
  asset_url: string;
}

interface PiePart {
  name: string;
  value: number;
  logo_url: string
}

const Info = dynamic(() => import("@/components/DetailsPage/Info/Info"), {
  ssr: false,
});

const Overview = dynamic(() => import("@/components/DetailsPage/OverviewGM"), {
  ssr: false,
});

const Chart = dynamic(() => import("@/components/DetailsPage/Chart/Chart"), {
  ssr: false,
});


export default function DetailsPage(Props:any) {
  const [chartData, setChartData] = useState<CandleData[]>([]);
  const [dataDetails, setDataDetails] = useState<any>();
  const [pieChartData, setPieChartData] = useState<PiePart[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${Props.coinID}/ohlc?vs_currency=usd&days=30`
        );
        const data: [number, number, number, number, number][] = await response.json();

        const formattedData: CandleData[] = data.map(item => ({
          time: new Date(item[0]).toISOString().split('T')[0],
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        }));

        // Sort the data by time in ascending order
        formattedData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

        // Remove any duplicate time entries
        const uniqueData = formattedData.filter((v, i, a) =>
          a.findIndex(t => t.time === v.time) === i
        );

        setChartData(uniqueData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataDetails = async () => {
      // Api Default
      const response = await fetch(
        "https://dgt-dev.vercel.app/v1/vault_allocation?vault_id=dgt1"
      );
      const data = await response.json();
      // console.log(data);
      setDataDetails(data);
    };

    fetchData();
    fetchDataDetails();
  }, []);

  useEffect(() => {
    const assets = dataDetails?.assets || [];
    const PieChartData: { name: string; value: number; logo_url: string }[] =
      dataDetails?.assets.map((asset: Asset) => {
        return {
          name: asset.symbol,
          value: parseFloat(asset.holding.slice(0, -1)),
          logo_url: asset.logo_url,
        };
      });
    setPieChartData(PieChartData)
  }, [dataDetails])




  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 md:w-1/4 h-screen md:h-auto p-4 overflow-y-auto border">
        <Info coinID={Props.coinID} />
        <div>
          <h1 className="mt-2 pb-5 font-semibold text-[#2563EB] text-2xl sm:text-3xl sm:text-[36px] sm:leading-[54px] text-center">
            Overview
          </h1>
        </div>
        <div className="flex items-center justify-center mt-2">
          <PieChart data={pieChartData} />
        </div>
      </div>
      <main className="flex-1 md:w-1/2 h-screen md:h-auto p-4 overflow-y-auto scrollbar-hide">
        <div>
          <h1 className="pb-5 font-semibold text-[#2563EB] text-2xl sm:text-3xl sm:text-[36px] sm:leading-[54px] text-center">
            {Props.coinID} Price
          </h1>
        </div>
        <div className="w-full">
          {chartData.length > 0 && <CandlestickChart data={chartData} />}
        </div>
        <Overview />
      </main>
      <div className="flex-1 md:w-1/4 h-screen md:h-auto p-4 overflow-y-auto border scrollbar-hide">
        <Comment coinID = {Props.coinID} />
      </div>
  </div>
  );
}
