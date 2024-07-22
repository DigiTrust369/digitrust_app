import { useTypedForm } from "@/hooks/useTypedForm";
import { useFieldArray } from "react-hook-form";

export default function Summary() {
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

    const vaultName = fields.map(token => `${token.amount}${token.symbol}`).join('-')
    {/* amount
icon: 
marketPrice : 
name
percent
symbol
value
*/}
    console.log(vaultName)
    return <div className="my-4 px-4">
        <div className="flex justify-between mb-1">
            <span>Profile name:</span>
            <span>{vaultName}</span>
        </div>
        <div className="flex justify-between mb-1">
            <span>Profile symbol:</span>
            <span>{vaultName}</span>
        </div>
        <div className="flex justify-between mb-1">
            <span>Profile management fee:</span>
            <span>0%</span>
        </div>
        {/* <div className="flex justify-between">
            <span>Vault fee manager:</span>
            <span>0%</span>
        </div> */}
    </div>
}