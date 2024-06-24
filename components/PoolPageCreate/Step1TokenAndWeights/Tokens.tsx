import _isEmpty from "lodash/isEmpty";
import { useFieldArray } from "react-hook-form";
import "./styles.module.scss";
import Dropdown from "@/components/Common/Dropdown";
import { useTypedForm } from "@/hooks/useTypedForm";
import AddMoreButton from "./AddMoreButton";
import LockButton from "./LockButton";
import TrashButton from "./TrashButton";
import { fetchTokens } from "./const";

type Props = {};

const TokensFields = (props: Props) => {
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

  const watchTokens = watch("tokens");

  const { response: Tokens } = fetchTokens();

  function handleAddMoreToken() {
    if (_isEmpty(fields)) {
      append({
        percent: 100,
      });
    } else {
      const lockedTokens = fields?.filter((x) => x?.isLocked);
      const totalPercentLocked = lockedTokens.reduce((acc, currentValue) => {
        return acc + currentValue.percent;
      }, 0);

      const remain = Math.max(0, 100 - totalPercentLocked);

      const unlockedTokens = fields?.filter((x) => !x?.isLocked);
      const percentPerToken = Math.floor(remain / (unlockedTokens.length + 1));

      fields.forEach((token, tokenIdx) => {
        if (!token?.isLocked) {
          update(tokenIdx, {
            ...token,
            percent: percentPerToken,
          });
        }
      });
      append({
        percent: percentPerToken,
      });
    }
  }

  function handleRemoveToken(tokenIdx: number) {
    const lockedTokens = fields?.filter((x) => x?.isLocked);
    const totalPercentLocked = lockedTokens.reduce((acc, currentValue) => {
      return acc + currentValue.percent;
    }, 0);

    const remain = Math.max(0, 100 - totalPercentLocked);

    const unlockedTokens = fields?.filter((x) => !x?.isLocked);
    const percentPerToken = Math.floor(remain / (unlockedTokens.length - 1));

    fields.forEach((token, tokenIdx) => {
      if (!token?.isLocked) {
        update(tokenIdx, {
          ...token,
          percent: percentPerToken,
        });
      }
    });
    remove(tokenIdx);
  }

  return (
    <div className="w-full my-4 px-4">
      {fields.map((token, tokenIdx) => {
        const excludeFields = watchTokens
          .filter((_, idx) => idx !== tokenIdx)
          .map((x) => x.name)
          .filter(Boolean);
        const tokenOptions = Tokens?.filter(
          (x) => !excludeFields.includes(x.name) || token.name === x.name
        );

        return (
          <div className="input-group p-1 flex items-center" key={tokenIdx}>
            {/* button */}
            <div className="w-1/3">
              <Dropdown
                placeholder="Select token"
                list={tokenOptions}
                onChange={(value) => {
                  update(tokenIdx, {
                    ...token,
                    name: value,
                  });
                }}
              />
            </div>
            {/* input number */}
            <input
              type="number"
              className="input h-10 text-xl text-right font-numeric ml-4 mr-1 w-1/2 pl-2"
              value={+token?.percent}
              {...register(`tokens.${tokenIdx}.percent`)}
              onChange={(e) => {
                update(tokenIdx, {
                  ...token,
                  percent: +e?.target?.value,
                });
              }}
            />%
            {/* input number */}
            {/* buttons */}
            <div className="flex flex-row items-center">
              {/* lock */}
              <LockButton
                name={`tokens.${tokenIdx}.isLocked`}
                value={token?.isLocked}
                onClick={() => {
                  update(tokenIdx, {
                    ...token,
                    isLocked: !token?.isLocked,
                  });
                }}
              />
              {/* lock */}
              {/* trash */}
              <TrashButton onClick={() => handleRemoveToken(tokenIdx)} />
              {/* trash */}
            </div>
            {/* buttons */}
          </div>
        );
      })}
      {/* row */}
      <div className="mt-2">
        <AddMoreButton onClick={handleAddMoreToken} />
      </div>
      {/* row */}
    </div>
  );
};

export default TokensFields;
