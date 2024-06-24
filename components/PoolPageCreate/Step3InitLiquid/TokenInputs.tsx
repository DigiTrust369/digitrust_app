import Image from "next/image";
import icon from "@/assets/images/crypto/bitcoin.svg";
import { useTypedForm } from "@/hooks/useTypedForm";
import { fetchTokens } from "../Step1TokenAndWeights/const";
import { useFieldArray } from "react-hook-form";

export default function TokenInputs() {
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
        icon: Tokens?.find(y => y.name === x.name)?.logo_url,
        marketPrice: Tokens?.find(y => y.name === x.name)?.price,
        symbol: Tokens?.find(y => y.name === x.name)?.symbol,
    }));
    console.log("Step3: ", fields)
    return (
        <>
            <ul className="pt-2 ">
                {list.map((token, tokenIdx) => <li key={token?.id} className="p-2 rounded-lg border mb-4">
                    <div className="flex justify-between p-1">
                        <div className="flex items-center h-10 px-3 gap-x-2 bg-[#EAF0F6] mr-2 rounded-lg">
                            {/*Symbol*/}
                            <img alt="" src={token?.icon} className="h-6" />
                            {/*Name*/}
                            <div className="text-base font-medium">{token?.symbol}</div>
                            {/*Weight*/}
                            <div className="text-sm	text-gray-700">{token?.percent}%</div>
                        </div>
                        <input type="number"
                            className="h-10 text-xl text-right font-numeric"
                            placeholder="0"
                            {...register(`tokens.${tokenIdx}.amount`)}
                            onChange={(e) => {
                                update(tokenIdx, {
                                    ...token,
                                    amount: +(e?.target?.value),
                                });
                            }}
                        />
                    </div>
                    <div className="flex justify-between text-sm">
                        <div>Balance: <span>0</span></div>
                        <div>${(token?.amount * token?.marketPrice).toFixed(2)}</div>
                    </div>
                </li>)}
            </ul>

            <div className="px-3 py-4 border rounded-lg mb-5">
                <div className="flex justify-between text-base font-semibold">
                    <span>Total</span><span>${fields.map(token => (+token?.amount * token?.marketPrice)).reduce(
                        (accumulator, currentValue) => accumulator + currentValue,
                        0,
                    ).toFixed(2) || '-'}</span>
                </div>
            </div>
        </>
    );
}