'use client';
import Image from "next/image";

import bitcoin from "@/assets/images/crypto/bitcoin.svg";
import usdc from "@/assets/images/crypto/usdc.svg";
import ethereum from "@/assets/images/crypto/ethereum.svg";
import optimism from "@/assets/images/crypto/optimism.svg";
import tether from "@/assets/images/crypto/tether.svg";
import ripple from "@/assets/images/crypto/ripple.svg";
import bnb from "@/assets/images/crypto/bnb.svg";
import seeMore from "@/assets/images/icons/see-more-ic.png";
import downIc from "@/assets/images/icons/down-ic.png";
import chart from "@/assets/images/chart.png";
import depositIcon from "@/assets/images/icons/deposit-ic.png";
// import {copyVault,packageObjectId,moduleVault,moduleSocial,BASE_COIN_TYPE,QUOTE_COIN_TYPE,POOL_ID,ACCOUNT2_CAP,SUI_COIN_ID,CLOCK_OBJECT_ID} from "@/components/suiContract/suiSignTransaction";
import {copyVault,makeBaseDeposit,createDGTVault,placeBaseMarketOrder,managerAccount,client} from "@/components/suiContract/suiSignTransaction";
import { useWallet } from '@suiet/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useEffect,useState } from "react";
import { toast } from 'react-hot-toast';


const TopVault = () => {

  const wallet = useWallet();
  const [vault,setVault] = useState('');
  const [chainValue,setChainValue] = useState('');
  const [trust,setTrust] = useState(false);
  const [addr,setAddr] = useState('');
  const [feeCoinID,setFeeCoinID] = useState('');
  const [walletCoinID,setwalletCoinID] = useState('');

  useEffect(() => {
    async function doWork() {
      const info:any = await client.call('suix_getAllCoins', [wallet.account?.address]);
      console.log(info.data[0].coinObjectId);
      setwalletCoinID(info.data[0].coinObjectId);
    }
    doWork();
  },[wallet.connected])

  // const place_base_market_order = async (value:any,trust:any) => {
  //   console.log(value,trust);
  //   const tx = new TransactionBlock();
  //   tx.moveCall({
  //     target: `${packageObjectId}::${moduleVault}::place_base_market_order`,
  //     typeArguments: [BASE_COIN_TYPE,QUOTE_COIN_TYPE],
  //     arguments: [tx.pure(POOL_ID),tx.pure(ACCOUNT2_CAP),tx.pure(SUI_COIN_ID),tx.pure(value),tx.pure(trust),tx.pure(CLOCK_OBJECT_ID)],
  //   });
  //   try{
  //     const res = await wallet.signAndExecuteTransactionBlock({
  //       transactionBlock: tx,
  //     });
  //     console.log(res);
  //   }
  //   catch{
  //     console.log('fail!!');
  //   }
  // };

  const goToCopyVault = async() => {
      setVault("1997");
      setAddr("0x4cc7eac61ace69d47b64b974b15d3dee7277e34abc57de69228106e393418dcd")
      const res = await copyVault(wallet,vault,addr);
      if(res != null)
        toast.success("Transaction Success!\n Hash transaction block is "+res,
        {style:{
          maxWidth: '800px',
          },
          duration:5000
        });
      else
        toast.error("Transaction fail!")
    };

  const gotoPlaceBaseMarketOrder = async() => {
    setVault("1997");
    setChainValue("942")
    setTrust(false);
    const res = await placeBaseMarketOrder(wallet,chainValue,trust);
    if(res != null)
      toast.success("Transaction Success!\n Hash transaction block is "+res,
      {style:{
        maxWidth: '800px',
        },
        duration:5000
      });
    else
      toast.error("Transaction fail!")
  };


  const goToMakeBaseDeposit = async() =>{
    setVault("1997");
    const res = await makeBaseDeposit(wallet,walletCoinID);
    if(res != null)
      toast.success("Transaction Success!\n Hash transaction block is "+res,
      {style:{
        maxWidth: '800px',
        },
        duration:5000
      });
    else
      toast.error("Transaction fail!")
  }

  const goToCreateDGTVault = async() =>{
    setVault("1997");
    setFeeCoinID("0x08152b3f3917b97d48a6623a9a9acd69352043de5664ea1027528d8bb5ba3166");
    const res = await createDGTVault(wallet,feeCoinID);
    if(res != null)
      toast.success("Transaction Success!\n Hash transaction block is "+res,
      {style:{
        maxWidth: '800px',
        },
        duration:5000
      });
    else
      toast.error("Transaction fail!")
  }

  const goToManagerAccount = async() =>{
    setVault("1997");
    const res = await managerAccount(wallet);
    if(res != null)
      toast.success("Transaction Success!\n Hash transaction block is "+res,
      {style:{
        maxWidth: '800px',
        },
        duration:5000
      });
    else
      toast.error("Transaction fail!")
  }

  const queryClient = async() =>{
    setVault("1997");
    const info:any = await client.call('suix_getAllCoins', [wallet.account?.address]);
    console.log(info.data[0].coinObjectId);
  }

  useEffect(() => {
    async function doWork() {

      //const result = await place_base_market_order('450',false);
      // const result2 = await copyVault('2411','0x4cc7eac61ace69d47b64b974b15d3dee7277e34abc57de69228106e393418dcd');
      await goToCopyVault();
      await goToMakeBaseDeposit();
      await goToCreateDGTVault();
      await gotoPlaceBaseMarketOrder();
      await goToManagerAccount();
      await queryClient();
    }
    doWork();
  }, [vault]);




  return (
    <div className="w-[22%] h-[360px] bg-white border border-[#C3D4E9] rounded-[10px]">
      <div className="px-3">
        <div>
          <div className="flex items-center pt-[18px]">
            <Image
              className="h-[50px] w-[50px]"
              src={bitcoin}
              alt="bitcoin-logo"
            />
            <div className="pl-3.5 w-[122px]">
              <h3 className="text-[#1F2937] font-semibold">Super Trend</h3>
              <p className="text-[#90A3BF] text-xs">By WISEVEST</p>
            </div>
            <Image
              className="h-12 w-12 ml-[21px]"
              src={seeMore}
              alt="see-more-icon"
            />
          </div>
          <div className="flex mt-[15px]">
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white"
              src={usdc}
              alt="usdc"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={ethereum}
              alt="ethereum"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={optimism}
              alt="optimism"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={tether}
              alt="tether"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={ripple}
              alt="ripple"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={bnb}
              alt="bnb"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={usdc}
              alt="usdc"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={tether}
              alt="tether"
            />
            <Image
              className="w-[26px] h-[26px] object-cover rounded-[50%] bg-white -ml-[8px]"
              src={ethereum}
              alt="ethereum"
            />
          </div>
          <div className="h-px bg-[#1F2937] opacity-[5%] my-[18px]" />
          <div className=" h-[51px] flex items-center justify-between">
            <div>
              <p className="text-xs text-[#90A3BF]">Return</p>
              <p className="text-xl text-[#16A34A]">24,32%</p>
            </div>
            <span className="flex items-center justify-between w-[112px] h-[35px] bg-[#FAFBFF] rounded border border-gray-45">
              <label className="mx-[16px] text-sm text-[#596780]">Month</label>
              <Image className="mr-[8.5px]" src={downIc} alt="down-icon" />
            </span>
          </div>
        </div>
        <div className="mt-[10px]">
          <Image src={chart} alt="chart" />
        </div>
        <button className="w-full h-14 mt-[14px] bg-blue-600 flex items-center justify-center rounded-[10px] gap-2" onClick={async()=> goToCreateDGTVault()}>
          <Image
            className="w-6 h-6 object-cover"
            src={depositIcon}
            alt="deposit-icon"
          />
          <span className="text-xl text-white">Deposit</span>
        </button>
      </div>
    </div>
  );
};

export default TopVault;
