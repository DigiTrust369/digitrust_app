"use client";
import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useTypedForm } from "@/hooks/useTypedForm";
// import Tokens from "../Step1TokenAndWeights/const";
import { useFieldArray } from "react-hook-form";
import TokenLiquid from "./TokenLiquid"
import Summary from "./Summary";
import toast from "react-hot-toast";
import { useGlobalContext } from "@/Context/store";
import { useRouter } from "next/navigation";

type Props = {
    onBack?: () => void;
    fee: number;
};

const Step4Preview = (props: Props) => {
    const router = useRouter();
    const { userEmail, walletAddress } = useGlobalContext();
    const { onBack, fee } = props;
    const { register, control, watch, reset } = useTypedForm("CreateVaults");
    const {
        fields,
        append,
        prepend,
        remove,
        swap,
        move,
        update,
        insert,
        replace,
    } = useFieldArray({
        control,
        name: "tokens",
    });

    const vaultName = fields.map(token => `${token.amount}${token.symbol}`).join('-');
    const vaultSymbols = fields.map(token => token.symbol);
    const portfolio = fields.map((token, index) => {
        return {
            "asset_id": `${token.asset_id}`,
            "amount": token.amount,
            "asset_type": 'token',
        }
    })

    const createVault = async () => {
        // const data = {
        //     "manager": sessionStorage.getItem("wallet"),
        //     "vault_symbol": vaultName,
        //     "symbols": vaultSymbols,
        //     "token_adrs": ["0x11", "0x1"],
        //     "created_at": Date.now(),
        //     "end_at": 34234,
        //     "manage_fee": fee,
        // }
        const data = {
            "profile_id": vaultName,
            "username": userEmail.split('@')[0],
            "email": userEmail,
            "management_fee": `${fee}`,
            "wallet_address": walletAddress,
            "asset_portfolio": portfolio,
            "created_at": Date.now(),
            "updated_at": 1626627600
        }
        // console.log(data)

        const url = `${process.env.NEXT_PUBLIC_PROFILE_URL}/v1/create_vault`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            if (result.success) {
                toast.success("Created Profile Successfully !");
                setTimeout(() => {
                    reset();
                    router.push('/home');
                }, 1000);
            } else {
                toast.error("Something went wrong! Try again!");
            }
        } else {
            toast.error("Something went wrong! Try again!");
        }
    }

    return (
        <div className={cn(styles.root, "bal-card content p-4 rounded-lg")}>
            <div className="flex flex-col">
                <div className="flex flex-col mb-4">
                    {/* <span className="text-xs mb-1 text-slate-600">Polygon Mainnet</span> */}
                    <div className="flex flex-row items-center">
                        <button className="flex text-leofi hover:text-leofiorange mr-1" type="button" onClick={onBack}>
                            <div className="inline-block bal-icon flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-chevron-left"
                                >
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </div>
                        </button>
                        <h5 className="font-semibold">Preview new weighted profile</h5>
                    </div>
                </div>

                <div className="flex flex-col border rounded-lg mb-4">
                    {/* row */}
                    <h6 className="flex justify-between p-2 px-4 w-full bg-gray-50 font-semibold rounded-lg">
                        Tokens and initial profile
                    </h6>
                    {/* row */}
                    {/* row */}
                    <TokenLiquid />
                    {/* row */}
                    {/* row */}
                </div>
                <div className="flex flex-col border rounded-lg mb-4">
                    <h6 className="flex justify-between p-2 px-4 w-full bg-gray-50 font-semibold rounded-lg">
                        Summary
                    </h6>
                    <Summary fee={props.fee} />

                </div>
                <button
                    className="bal-btn px-4 h-12 text-base bg-gradient-to-tr from-leofired to-leofiorange hover:from-leofi hover:to-leofi transition-colors text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer"
                    type="button"
                    onClick={createVault}
                >
                    <div className="content justify-center"> Approve for creating profile</div>
                </button>
            </div>
        </div>
    );
};

export default Step4Preview;
