'use client'
import Image from "next/image";
import bitcoin from "@/assets/images/crypto/bitcoin.svg";
import usdc from "@/assets/images/crypto/usdc.svg";
import ethereum from "@/assets/images/crypto/ethereum.svg";
import optimism from "@/assets/images/crypto/optimism.svg";
import tether from "@/assets/images/crypto/tether.svg";
import ripple from "@/assets/images/crypto/ripple.svg";
import bnb from "@/assets/images/crypto/bnb.svg";
import depositIc from "@/assets/images/icons/deposit-icon.png";
import downIc from "@/assets/images/icons/down-ic.png";
import arrowDownUpIc from "@/assets/images/icons/arrow-up-down-ic.png";
import searchIc from "@/assets/images/icons/search-icon.svg";
import filterIc from "@/assets/images/icons/filter-icon.svg";
import downloadIc from "@/assets/images/icons/download-icon.svg";
import chartAPY1 from "@/assets/images/icons/chart-apy1.png";
import chartAPY2 from "@/assets/images/icons/chart-apy2.png";


const vaults = [
  {
    logo: bitcoin,
    asset: "Bitcoin",
    symbol: "BTC",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY1,
    return: "24,32%",
  },
  {
    logo: ethereum,
    asset: "Ethereum",
    symbol: "ETH",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY1,
    return: "24,32%",
  },
  {
    logo: bnb,
    asset: "BNB",
    symbol: "BNB",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY2,
    return: "-1.57%",
  },
  {
    logo: tether,
    asset: "Tether",
    symbol: "USDT",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY1,
    return: "24,32%",
  },
  {
    logo: usdc,
    asset: "USDC",
    symbol: "USDC",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY1,
    return: "24,32%",
  },
  {
    logo: ethereum,
    asset: "Ethereum",
    symbol: "ETH",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY2,
    return: "-1.57%",
  },
  {
    logo: bitcoin,
    asset: "Bitcoin",
    symbol: "BTC",
    price: "$2,000.00",
    tvl: "$118.42",
    apy: chartAPY2,
    return: "-1.57%",
  },
];

export default function VaultsList() {

  return (
    <div className="pt-[80px]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-semibold text-[#2563EB] text-[36px] leading-[54px]">
            All Vaults
          </h1>
          <p className="pt-1 text-[#90A3BF] leading-6">Overview</p>
        </div>
        <div className="flex items-center gap-3">
          <form className="flex items-center bg-white border border-[#ECEFF1] rounded-lg">
            <button type="submit" className="px-[17px] py-[14px]">
              {/* <FontAwesomeIcon
                icon={faSearch}
                width="1.25rem"
                height="1.25rem"
                color="#2563EB"
              /> */}
              <Image className="w-5 h-5" src={searchIc} alt="search-icon" />
            </button>
            <input type="text" placeholder="Search to a vault" name="search" />
          </form>

          <form className="flex items-center bg-white border border-[#ECEFF1] rounded-lg">
            <button type="submit" className="px-[17px] py-[14px]">
              {/* <FontAwesomeIcon
                icon={faFilter}
                width="1.25rem"
                height="1.25rem"
                color="#2563EB"
              /> */}
              <Image className="w-5 h-5" src={filterIc} alt="filter-icon" />
            </button>
            <input type="text" placeholder="Filter by: Newest" name="filter" />
            <Image className="mr-[9px]" src={downIc} alt="down-icon" />
          </form>

          <button className="rounded-[6px] bg-blue-600 px-5 py-2.5 text-white duration-200 hover:bg-blue-600/85 xl:px-6">
            <div className="flex gap-3">
              {/* <FontAwesomeIcon
                icon={faFileDownload}
                width="14px"
                height="17px"
                color="white"
              /> */}
              <Image
                className="w-3.5 h-auto"
                src={downloadIc}
                alt="download-icon"
              />
              <span className="leading-6">Export</span>
            </div>
          </button>
        </div>
      </div>
      <div>
        <table className="mt-[30px] w-full text-base text-left text-[#1F2937] border border-[#C3D4E9] rounded-lg">
          <thead>
            <tr className="border-b border-[#C3D4E9]">
              <th className="w-[20%] pl-6 py-6">Vault Name</th>
              <th className="w-[14%] py-6">Price</th>
              <th className="w-[13%] flex items-center gap-1 py-6">
                <span>TVL</span>
                <Image
                  className="w-[16px] h-[16px]"
                  src={arrowDownUpIc}
                  alt="arrow-icon"
                />
              </th>
              <th className="w-[14%] py-6">Asset</th>
              <th className="w-[13%] py-6">APY</th>
              <th className="w-[12%] py-6">Return</th>
              <th className="pr-6 py-6"></th>
            </tr>
          </thead>
          <tbody>
            {vaults.map((vault) => (
              <tr className="border-b border-[#C3D4E9]">
                <td className="w-[20%] pl-6 py-6">
                  <div className="flex items-center gap-4">
                    <Image
                      className="h-[32px] w-[32px]"
                      src={vault.logo}
                      alt="bitcoin"
                    />
                    <span>{vault.asset}</span>
                    <span className="text-[#90A3BF]">{vault.symbol}</span>
                  </div>
                </td>
                <td className="w-[14%] py-6">{vault.price}</td>
                <td className="w-[13%] py-6">{vault.tvl}</td>
                <td className="w-[14%] py-6">
                  <div className="w-full flex items-center">
                    <Image
                      className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white"
                      src={bitcoin}
                      alt="bitcoin"
                    />
                    <Image
                      className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
                      src={ethereum}
                      alt="ethereum"
                    />
                    <Image
                      className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
                      src={bitcoin}
                      alt="bitcoin"
                    />
                    <Image
                      className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
                      src={ethereum}
                      alt="ethereum"
                    />
                    <Image
                      className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
                      src={bitcoin}
                      alt="bitcoin"
                    />
                  </div>
                </td>
                <td className="w-[13%] py-6">
                  <Image src={vault.apy} alt="chart" />
                </td>
                <td className="w-[12%] py-6 text-[#10B981]">{vault.return}</td>
                <td className="pr-6 py-6">
                  <button className="border rounded-[10px] border-[#2563EB] tour-post">
                    <div className="flex items-center px-[26px] gap-2 py-[5px] text-[#2563EB]">
                      <Image
                        className="w-[18px] h-[18px]"
                        src={depositIc}
                        alt="deposit-icon"
                      />
                      <span className="font-normal">
                        <a href="/detail">Deposit</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
