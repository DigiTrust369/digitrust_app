"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormatter } from "next-intl";
import dynamic from "next/dynamic";
import detailBg from "@/assets/images/bg-detail.svg";
import useTab from "@/components/Tabbar/useTab";
import TabDetails from "./TabDetails";
import DepositWithdraw from "./DepositWithdraw";
import PieChart from "@/components/Chart/PieChart/ActivePieChart";
import usdc from "@/assets/images/crypto/usdc.svg";
import btc from "@/assets/images/crypto/bitcoin.svg";
import digitrustNoTextLogo from "@/assets/images/digitrust_notext.png";
import Link from "next/link";
// import CommentSection from "./Comment/CommentSection";
import CommentSection from "./Comment/Comments";
import { TelegramShareButton, TelegramIcon } from "react-share";

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

export default function Overview() {
  const format = useFormatter();
  let assets: Asset[];

  // Call Api
  const [datas, setDatas] = useState<any[]>([]);
  const [dataDetails, setDataDetails] = useState<any>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isUnFollowedDisplayed, setIsUnFollowedDisplayed] = useState(false);

  function clickHandler() {
    setIsFollowing((prevState) => !prevState);
  }

  useEffect(() => {
    const fetchData = async () => {
      // Api Default
      const response = await fetch(
        "https://dgt-dev.vercel.app/v1/vault_detail?vault_id=dgt1"
      );
      const data = await response.json();

      setDatas(data);
    };

    const fetchDataDetails = async () => {
      // Api Default
      const response = await fetch(
        "https://dgt-dev.vercel.app/v1/vault_allocation?vault_id=dgt1"
      );
      const data = await response.json();

      setDataDetails(data);
    };

    fetchData();
    fetchDataDetails();
  }, []);
  // End call api

  assets = dataDetails?.assets || [];
  const chartData: { name: string; value: number; logo_url: string }[] =
    dataDetails?.assets.map((asset: Asset) => {
      return {
        name: asset.symbol,
        value: parseFloat(asset.holding.slice(0, -1)),
        logo_url: asset.logo_url,
      };
    });

  return (
    <div className="mt-11">
      <div>
        <h1 className="pb-5 font-semibold text-leofi text-2xl sm:text-3xl sm:text-[36px] sm:leading-[54px] text-center">
          History
        </h1>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
          {/* Balance */}
          {/* <div className="sm:grid sm:grid-cols-3 sm:gap-x-4">
            <div className="sm:space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
              <div className="text-base font-medium leading-7 text-gray-800">
                Price
              </div>
              {datas.map((data) => (
                <div
                  key={data.vault_id}
                  className="flex items-center text-2xl sm:text-3xl font-semibold leading-7 text-gray-800"
                >
                  <span>{data.currency}</span>
                  <p>{format.number(data.price)} DGT</p>
                </div>
              ))}
            </div>

            <div className="my-2 sm:my-0 sm:space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
              <div className="text-base font-medium leading-7 text-gray-800">
                TVL
              </div>
              {datas.map((data) => (
                <div
                  key={data.vault_id}
                  className="flex items-center text-2xl sm:text-3xl font-semibold leading-7 text-gray-800"
                >
                  <span>{data.currency}</span>
                  <p>{format.number(data.tvl)} DGT</p>
                </div>
              ))}
            </div>
            <div className="my-2 sm:my-0 sm:space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
              <div className="text-base font-medium leading-7 text-gray-800">
                Return
              </div>
              {datas.map((data) => (
                <div
                  key={data.vault_id}
                  className="flex items-center text-2xl sm:text-3xl font-semibold leading-7 text-gray-800"
                >
                  <span>{data.currency}</span>
                  <p>{data.return} DGT</p>
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="mx-auto w-full text-bold text-xl">
            <PieChart data={chartData} />
          </div> */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white min-w-full border border-[#C3D4E9]">
              <thead>
                <tr className="">
                 <th className="w-1/5 px-6 py-6 border-b border-b-[#C3D4E9] text-left text-base leading-4 text-gray-800 tracking-wider">
                    Asset
                  </th>
                 <th className="w-1/5 px-6 py-6 border-b border-b-[#C3D4E9] text-left text-base leading-4 text-gray-800 tracking-wider">
                    Weight
                  </th>
                 <th className="w-1/5 px-6 py-6 border-b border-b-[#C3D4E9] text-left text-base leading-4 text-gray-800 tracking-wider">
                    Holding
                  </th>
                 <th className="w-1/5 px-6 py-6 border-b border-b-[#C3D4E9] text-left text-base leading-4 text-gray-800 tracking-wider">
                    Price 24h
                  </th>
                 <th className="w-1/5 px-6 py-6 border-b border-b-[#C3D4E9] text-left text-base leading-4 text-gray-800 tracking-wider">
                    Explore
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr className="border-b border-b-[#C3D4E9] text-sm sm:text-base text-gray-800 font-medium leading-normal">
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-b border-b-[#C3D4E9]">
                      <div className="flex items-center">
                        <Image
                          src={asset.logo_url}
                          alt="logo"
                          width={32}
                          height={32}
                        />
                        <span className="ml-2 sm:ml-4">{asset.symbol}</span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-b border-b-[#C3D4E9]">
                      {asset.weight}
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-b border-b-[#C3D4E9]">
                      {format.number(+asset.holding.slice(0, -1))} DGT
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-b border-b-[#C3D4E9]">
                      <div className="text-green-500">
                        {format.number(+asset.price_change["24h"])}%
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-b border-b-[#C3D4E9]">
                      <Link href={asset.asset_url}>LINK</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* <div className="hidden h-fit sm:block py-10 sm:py-0 sm:w-[30%] rounded-[10px] ">
          <div className="flex items-center gap-5 justify-between">
            <div className="flex items-center gap-5">
              <Image width={48} src={digitrustNoTextLogo} alt='logo' />
              <h1 className="text-xl	">A NEW VAULT</h1>
            </div>
            <button
              className={`p-3 rounded-[10px] border ${isFollowing && !isUnFollowedDisplayed
                ? "border-blue-600 text-blue-600"
                : "bg-blue-600 text-white"
                } ${isFollowing && isUnFollowedDisplayed
                  ? "bg-red-300 text-white"
                  : ""
                } text-base leading-normal font-medium tracking-tight`}
              onClick={clickHandler}
              onMouseEnter={() => setIsUnFollowedDisplayed(true)}
              onMouseLeave={() => setIsUnFollowedDisplayed(false)}
            >
              {isFollowing && !isUnFollowedDisplayed && "Following"}
              {isFollowing && isUnFollowedDisplayed && "Unfollow"}
              {!isFollowing && "Follow"}
            </button>
          </div>
          <TelegramShareButton url="Digitrust" title='Join with us' className="mt-5 flex gap-2 items-center">
            Share <TelegramIcon size={30} />
          </TelegramShareButton>
          <CommentSection />
        </div> */}

      </div>
    </div>
  );
}
