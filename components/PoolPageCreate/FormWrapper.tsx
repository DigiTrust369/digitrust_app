"use client";

import cn from "classnames";
import { useState } from "react";

import PoolSteps from "./PoolSteps";
import PoolSummary from "./PoolSummary";
import Step1TokenAndWeights from "./Step1TokenAndWeights";
import styles from "./styles.module.scss";
import Step2PoolFee from "./Step2PoolFee";
import Step3InitLiquid from "./Step3InitLiquid";
import Step4Preview from "./Step4Preview";

type Props = {};

const FormWrapper = (props: Props) => {
  const [step, setStep] = useState(0);
  const [fee, setFee] = useState(0);

  return (
    <form>
      <div className="layout-container mt-8">
        <div className="flex justify-center	">
          <div className="flex-none w-64">
            <PoolSteps active={step} onChangeStep={(step) => setStep(step)} />
          </div>
          <div className={cn("flex-initial w-80 mx-5", styles.center)}>
            {step === 0 && <Step1TokenAndWeights onNext={() => setStep(1)} />}
            {step === 1 && (
              <Step2PoolFee
                onNext={() => setStep(2)}
                onBack={() => setStep(0)}
                setFee={setFee}
                fee={fee}
              />
            )}
            {step === 2 && (
              <Step3InitLiquid
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <Step4Preview
                onBack={() => setStep(2)}
                fee={fee}
              />
            )}
          </div>
          <div className="flex-initial w-64">
            <PoolSummary />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormWrapper;
