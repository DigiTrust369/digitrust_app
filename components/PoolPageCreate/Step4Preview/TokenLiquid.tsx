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
    const tokensValues = watch("tokens")?.filter(
        (x) => x?.name && x?.percent > 0
    );

    const { response: Tokens } = fetchTokens();

    const list = tokensValues?.map((x) => ({
        ...x,
        value: x?.percent,
        icon: Tokens?.find(y => y.name === x.name)?.logo,
        marketPrice: Tokens?.find(y => y.name === x.name)?.price,
    }));

    console.log(list)

    return (
        <div className="p-2 rounded-lg border border-white mb-4">
            <h6 className="text-white">Tokens and initial seed liquidity</h6>
            <ul className="pt-2 pb-4">
                {list.map((token, tokenIdx) => <li key={token?.id} className="p-2">
                    <div className="flex items-center p-1">
                        <img alt="logo" src={token?.icon} className="h-9 mr-4" />
                        <div className="w-full">
                            <div className="flex justify-between text-white font-semibold">
                                <div>{token?.percent}% {token?.name}</div>
                                <div>{token?.amount}</div>
                            </div>
                            <div className="flex justify-between text-sm text-white">
                                <div>Initial weight: <span>100%</span></div>
                                <div>${(token?.amount * token?.marketPrice).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    );
}