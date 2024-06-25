import Image from "next/image";
import icon from "@/assets/images/crypto/bitcoin.svg";
import { useTypedForm } from "@/hooks/useTypedForm";
import { fetchTokens } from "../Step1TokenAndWeights/const";
import { useFieldArray } from "react-hook-form";

export default function TokenLiquid() {
    const { register, control, watch } = useTypedForm("CreateVaults");
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

    return (
        <>
            <ul className="my-4 px-4">
                {fields.map((token, tokenIdx) => <li key={token?.id} className="p-2">
                    <div className="flex items-center p-1">
                        <img alt="logo" src={token?.logo_url} className="h-9 mr-4" />
                        <div className="w-full">
                            <div className="flex justify-between font-semibold">
                                <div>{token?.percent}% {token?.symbol}</div>
                                <div>{token?.amount}</div>
                            </div>
                            <div className="flex justify-between text-sm text-slate-600	">
                                <div>Initial weight: <span>100%</span></div>
                                <div>${(token?.amount * token?.price).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </li>)}
            </ul>
            <div className="px-3 py-4 border-t rounded-lg ">
                <div className="flex justify-between text-base font-semibold">
                    <span>Total</span><span>${fields.map(token => (+token?.amount * token?.price)).reduce(
                        (accumulator, currentValue) => accumulator + currentValue,
                        0,
                    ).toFixed(2) || '-'}</span>
                </div>
            </div>
        </>
    );
}