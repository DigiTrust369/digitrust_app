import React from "react";
import cn from "classnames";
import TokenInputs from "./TokenInputs"
import styles from "./styles.module.scss";

type Props = {
  onNext?: () => void;
  onBack?: () => void;
};

const Step3InitLiquid = (props: Props) => {
  const { onNext, onBack } = props;

  return (
    <div className={cn(styles.root, "bal-card content p-4")}>
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
            <h5 className="font-semibold">Set initial liquidity</h5>
          </div>
        </div>

        <TokenInputs />

        <button
          className="bal-btn px-4 h-12 text-base bg-gradient-to-tr from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-colors text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer"
          type="button"
          onClick={onNext}
        >
          <div className="content justify-center">Preview</div>
        </button>
      </div>
    </div>
  );
};

export default Step3InitLiquid;
