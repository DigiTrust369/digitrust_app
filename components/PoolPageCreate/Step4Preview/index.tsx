import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useTypedForm } from "@/hooks/useTypedForm";
// import Tokens from "../Step1TokenAndWeights/const";
import { useFieldArray } from "react-hook-form";
import TokenLiquid from "./TokenLiquid"
import Summary from "./Summary";

type Props = {
    onBack?: () => void;
};

const Step4Preview = (props: Props) => {
    const { onBack } = props;
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
    console.log(fields)

    return (
        <div className={cn(styles.root, "bal-card content p-4 rounded-lg")}>
            <div className="flex flex-col">
                <div className="flex flex-col mb-4">
                    <span className="text-xs mb-1 text-slate-600">Polygon Mainnet</span>
                    <div className="flex flex-row items-center">
                        <button className="flex text-blue-500 hover:text-blue-700 mr-1" type="button" onClick={onBack}>
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
                        <h5 className="font-semibold">Preview new weighted pool</h5>
                    </div>
                </div>

                <div className="flex flex-col border rounded-lg mb-4">
                    {/* row */}
                    <h6 className="flex justify-between p-2 px-4 w-full bg-gray-50 font-semibold rounded-lg">
                        Tokens and initial seed liquidity
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
                    <Summary />

                </div>
                <button
                    className="bal-btn px-4 h-12 text-base bg-gradient-to-tr from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-colors text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer"
                    type="button"
                >
                    <div className="content justify-center"> Approve for creating vault</div>
                </button>
            </div>
        </div>
    );
};

export default Step4Preview;
