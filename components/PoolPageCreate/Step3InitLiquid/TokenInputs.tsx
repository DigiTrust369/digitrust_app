import Image from "next/image";
import icon from "@/assets/images/crypto/bitcoin.svg";
import { useTypedForm } from "@/hooks/useTypedForm";
import { fetchTokens } from "../Step1TokenAndWeights/const";
import { useFieldArray } from "react-hook-form";
import { useFormatter } from "next-intl";

export default function TokenInputs() {
    const format = useFormatter();
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

    const totalAmount = fields.map(token => (+token?.amount * token?.price)).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    ).toFixed(2);

    return (
        <>
            <ul className="pt-2 ">
                {fields.map((token, tokenIdx) => <li key={token?.id} className="p-2 rounded-lg border mb-4">
                    <div className="flex justify-between p-1">
                        <div className="flex items-center h-10 px-3 gap-x-2 bg-[#EAF0F6] mr-2 rounded-lg">
                            {/*Symbol*/}
                            <img alt="" src={token?.logo_url} className="h-6" />
                            {/*Name*/}
                            <div className="text-base font-medium">{token?.symbol}</div>
                            {/*Weight*/}
                            <div className="text-sm	text-gray-700">{token?.percent}%</div>
                        </div>
                        <input
                        type="number"
                        className="h-10 text-xl text-right font-numeric"
                        placeholder="0"
                        defaultValue={token.amount}
                        {...register(`tokens.${tokenIdx}.amount`)}
                        onBlur={(e) => {
                            update(tokenIdx, {
                            ...token,
                            amount: e.target.value === '' ? '' : +e.target.value,
                            });
                        }}
                        />
                    </div>
                    {/* <div className="flex justify-between text-sm">
                        <div>Balance: <span>0</span></div>
                        <div>${(token?.amount * token?.price).toFixed(2)}</div>
                    </div> */}
                </li>)}
            </ul>

            <div className="px-3 py-4 border rounded-lg mb-5">
                <div className="flex justify-between text-base font-semibold">
                    <span>Total</span><span>${isNaN(+totalAmount) ? 0 : format.number(+totalAmount)}</span>
                </div>
            </div>
        </>
    );
}