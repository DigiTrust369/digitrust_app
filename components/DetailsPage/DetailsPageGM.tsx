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

const Info = dynamic(() => import("@/components/DetailsPage/Info"), {
  ssr: false,
});

const Overview = dynamic(() => import("@/components/DetailsPage/OverviewGM"), {
  ssr: false,
});

const Chart = dynamic(() => import("@/components/DetailsPage/Chart/Chart"), {
  ssr: false,
});


export default function DetailsPage() {
  const [chartData, setChartData] = useState<CandleData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=30'
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

    fetchData();
  }, []);


  return (
    <>
      <Info />
      <main className="px-5 sm:px-[50px] lg:px-[90px] pb-12 sm:pb-24">
        <div className="flex flex-col lg:flex-row bg-background text-foreground p-4">
          <div className="flex-1">
            {/* <Chart /> */}
            {/* <CoinPriceChart coinId="bitcoin" /> */}
            <div>
              <h1>Bitcoin Price</h1>
              {chartData.length > 0 && <CandlestickChart data={chartData} />}
            </div>
            <Overview />
          </div>    
          <div className="w-full lg:w-1/3 lg:pl-4">
            <Comment />
          </div>
        </div>
      </main>
    </>
  );
}
