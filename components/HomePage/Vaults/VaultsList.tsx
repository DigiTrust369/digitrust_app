"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useFormatter } from "next-intl";
import bitcoin from "@/assets/images/crypto/bitcoin.svg";
import ethereum from "@/assets/images/crypto/ethereum.svg";
import bnb from "@/assets/images/crypto/bnb.svg";
import tether from "@/assets/images/crypto/tether.svg";
import usdc from "@/assets/images/crypto/usdc.svg";
import optimism from "@/assets/images/crypto/optimism.svg";
import dot from "@/assets/images/crypto/dot.svg";
import yfi from "@/assets/images/crypto/yfi.svg";
import bat from "@/assets/images/crypto/bat.svg";
import btt from "@/assets/images/crypto/btt.svg";
import dash from "@/assets/images/crypto/dash.svg";
import doge from "@/assets/images/crypto/doge.svg";
import uma from "@/assets/images/crypto/uma.svg";
import uni from "@/assets/images/crypto/uni.svg";
import sushi from "@/assets/images/crypto/sushi.svg";
import xtz from "@/assets/images/crypto/xtz.svg";
import sys from "@/assets/images/crypto/sys.svg";
import stx from "@/assets/images/crypto/stx.svg";
import ripple from "@/assets/images/crypto/ripple.svg";
import ont from "@/assets/images/crypto/ont.svg";
import eos from "@/assets/images/crypto/eos.svg";
import chz from "@/assets/images/crypto/chz.svg";
import enj from "@/assets/images/crypto/enj.svg";
import sol from "@/assets/images/crypto/solana.png";
import ton from "@/assets/images/crypto/ton.svg";
import base from "@/assets/images/crypto/base.svg";
import blast from "@/assets/images/crypto/blast.svg";
import depositIc from "@/assets/images/icons/deposit-icon.png";
import downIc from "@/assets/images/icons/down-ic.png";
import arrowDownUpIc from "@/assets/images/icons/arrow-up-down-ic.png";
import searchIc from "@/assets/images/icons/search-icon.svg";
import filterIc from "@/assets/images/icons/filter-icon.svg";
import downloadIc from "@/assets/images/icons/download-icon.svg";
import chartAPY1 from "@/assets/images/icons/chart-apy1.png";
import chartAPY2 from "@/assets/images/icons/chart-apy2.png";
import leofiNotextLogo from "@/assets/images/leofi_notext.png";
import RightArrowIcon from "@/icons/RightArrowIcon";

interface Vault {
  url: string;
  vault_id: string;
  vault_name: string;
  symbol: string;
  price: string;
  return: number;
  tvl: number;
  monthly_return: string;
  daily_return: string;
  manager: string;
  des: string;
  timestamp: number;
  chain: {
    name: string;
    logo: string;
  }[];
  period: any;
  asset?: string[];
  assets: {
    name: string;
    img: string;
  }[];
}

const logos = {
  eth: ethereum,
  sol: sol,
  ton: ton,
  base: base,
  bnb: bnb,
  blasr: blast
}

const table_head = [
  'Chain',
  'Profile Name',
  'Asset',
  'Return',
  ''
];

const vaults = [
  {
    assets: [
      {
        name: "bitcoin",
        img: "https://dd.dexscreener.com/ds-data/tokens/sui/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::fud.png",
      },
      {
        name: "yfi",
        img: yfi,
      },
      {
        name: "bat",
        img: bat,
      },
      {
        name: "btt",
        img: btt,
      },
      {
        name: "solana",
        img: sol,
      },
    ],
    apy: chartAPY1,
  },
  {
    assets: [
      {
        name: "ethereum",
        img: ethereum,
      },
      {
        name: "uni",
        img: uni,
      },
      {
        name: "doge",
        img: doge,
      },
      {
        name: "uma",
        img: uma,
      },
      {
        name: "sushi",
        img: sushi,
      },
    ],
    apy: chartAPY1,
  },
  {
    assets: [
      {
        name: "bnb",
        img: bnb,
      },
      {
        name: "sys",
        img: sys,
      },
      {
        name: "ripple",
        img: ripple,
      },
      {
        name: "xtz",
        img: xtz,
      },
      {
        name: "stx",
        img: stx,
      },
    ],
    apy: chartAPY2,
  },
];

export default function VaultsList() {
  const format = useFormatter();
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [vaultId, setVaultId] = useState<any>();

  let vaultsList: Vault[];

  // Call Api
  useEffect(() => {
    const fetchDataDetails = async () => {
      setIsLoading(true);
      // Api Default
      const response = await fetch("https://dgt-dev.vercel.app/v1/vaults");
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    };

    fetchDataDetails();
  }, []);
  // End call api

  vaultsList = data || [];

  const mergedData = vaults.map((obj1, index) => {
    return { ...obj1, ...vaultsList[index] };
  });
  console.log(mergedData)

  const clickDepositHandler = async (value: string) => {
    setVaultId(value);
    const url = `https://dgt-dev.vercel.app/v1/vault_detail?vault_id=${value}`;
    const response = await fetch(url);
    const data = await response.json();
  };

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between mb-4">
        <div>
          <h1 className="font-semibold text-leofi text-3xl sm:text-[36px] sm:leading-[54px]">
            All Profiles
          </h1>
        </div>
      </div>
      {/* <div className="align-middle inline-block min-w-full shadow overflow-x-auto bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg"> */}
      <div className="overflow-x-auto overflow-y-auto table-container">
        {isLoading && (
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
            <div className="h-4 bg-gray-300 mb-6 rounded"></div>
            <div className="h-4 bg-gray-200 mb-6 rounded"></div>
            <div className="h-4 bg-gray-300 mb-6 rounded"></div>
            <div className="h-4 bg-gray-200 mb-6 rounded"></div>
          </div>
        )}
        {!isLoading && (
          <table className="min-w-full table">
            <thead className="table-head">
              <tr>
                {
                  table_head.map(header => (
                    <th className="px-6 py-6 text-nowrap text-left text-base leading-4 text-gray-800 tracking-wider">
                      {header}
                    </th>))
                }
              </tr>
            </thead>
            <tbody className="table-body">
              {mergedData.map((vault) => (
                <tr>
                  <td className="px-6 py-6 whitespace-no-wrap text-nowrap overflow-hidden">
                    <div className="w-full flex items-center">
                      {vault.chain.map((c) => {
                        const name: string = c?.name;
                        return (
                          <Image
                            className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white [&:not(:first-child)]:-ml-[8px]"
                            src={logos[name]}
                            alt={name}
                            width={26}
                            height={26}
                          />
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-no-wrap text-nowrap">
                    <div className="flex items-center gap-4">
                      <Image
                        className="h-[32px] w-[32px]"
                        src={leofiNotextLogo}
                        alt={vault.vault_name}
                        width={32}
                        height={32}
                      />
                      <span>{vault.vault_name}</span>
                      <span className="text-[#90A3BF]">{vault.symbol}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-no-wrap text-nowrap overflow-hidden">
                    <div className="w-full flex items-center">
                      {vault.assets.map((asset) => (
                        <Image
                          className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white [&:not(:first-child)]:-ml-[8px]"
                          src={asset.img}
                          alt={asset.name}
                          width={26}
                          height={26}
                        />
                      ))}
                    </div>
                  </td>
                  <td className={`px-6 py-6 whitespace-no-wrap text-nowrap ${+vault.monthly_return.split('%')[0] > 0 ? "text-green-500" : "text-[#DC2626]"}`}>
                    {vault.monthly_return}
                  </td>
                  <td className="px-6 py-6 whitespace-no-wrap">
                    <button
                      className="border rounded-full bg-[#ee4d2d]"
                      id="onborda-step1"
                      onClick={() => clickDepositHandler(vault.vault_id)}
                    >
                      <Link href={`/detail/${vault.vault_id}`}>
                        <div className="flex items-center p-1 gap-2 text-white">
                          {/* <span className="font-normal text-sm">Go</span> */}
                          <RightArrowIcon />
                        </div>
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
