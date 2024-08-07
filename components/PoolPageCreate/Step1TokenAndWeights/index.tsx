import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import TrashButton from "./TrashButton";
import AddMoreButton from "./AddMoreButton";
import AllowcatedInfo from "./AllowcatedInfo";
import LockButton from "./LockButton";
import Tokens from "./Tokens";
import { useTypedForm } from "@/hooks/useTypedForm";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { useWalletKit } from "@mysten/wallet-kit";
import SuiButton from "@/components/SuiButton";

type Props = {
  onNext?: () => void;
};

const Step1TokenAndWeights = (props: Props) => {
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { onNext } = { ...props };
  const { watch } = useTypedForm("CreateVaults");
  const watchTokens = watch("tokens");

  async function createPool(event: any) {
    // event.preventDefault();

    // const client = new SuiClient({ url: getFullnodeUrl("testnet") });
    // const txb = new TransactionBlock();
    // const contractAddress = "0xe733afcdbcd61f8a795342dfb3cf4ea8977b3426a0f1df7a2bd3c50d23d1c99c";
    // const contractModule = "book";
    // const contractMethod = "new_pool";
    // txb.moveCall({
    //   target: `${contractAddress}::${contractModule}::${contractMethod}`,
    //   arguments: [
    //     txb.pure("0x016b9a6e8e171665973eff12f701058ddb37c2dcaaf0e9616949b82d88521453")
    //   ],
    //   typeArguments: [
    //     "0x2::sui::SUI", //QUOTE_COIN_TYPE,
    //     "0xe733afcdbcd61f8a795342dfb3cf4ea8977b3426a0f1df7a2bd3c50d23d1c99c::dgt::DGT" //BASE_COIN_TYPE
    //   ]
    // });

    // await signAndExecuteTransactionBlock({
    //   transactionBlock: txb as any,
    // });

    // console.log(txb);
  }

  return (
    <div
      className={cn(
        "bal-card rounded-lg overflow-hidden bg-white shadow-xl content p-4",
        styles.root
      )}
    >
      <div className="flex flex-col">
        {/* title */}
        {/* <div className="flex flex-col mb-2">
          <span className="text-xs text-secondary mb-1 text-white">
            Polygon Mainnet
          </span>
          <h5 className="font-semibold dark:text-gray-300">
            Choose tokens &amp; weights
          </h5>
        </div> */}
        {/* title */}
        {/* card */}
        <div className="mb-2">
          {/* <span className="text-xs mb-1 text-slate-600">Polygon Mainnet</span> */}
          <h5 className="font-semibold mb-2">Choose tokens & weights</h5>
          <div className="flex flex-col border rounded-lg mb-4">
            {/* row */}
            <div className="flex justify-between p-2 px-4 w-full bg-gray-50 font-semibold rounded-lg">
              <span>Token</span>
              <span>Weight</span>
            </div>
            {/* row */}
            {/* row */}
            <Tokens />
            {/* row */}
            {/* row */}
            <AllowcatedInfo />
            {/* row */}
            {/* row */}

            {/* row */}
          </div>
          <button
            className="bal-btn px-4 h-12 text-base bg-gradient-to-tr from-leofired to-leofiorange hover:from-leofi hover:to-leofi transition-colors text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer"
            type="button"
            onClick={onNext}
            disabled={watchTokens.length < 1 || !watchTokens.every(token => token.name)}
          >
            Create Profile
          </button>
        </div>
        {/* card */}
      </div>
    </div>
  );
};

export default Step1TokenAndWeights;
