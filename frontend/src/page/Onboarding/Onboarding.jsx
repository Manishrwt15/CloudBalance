import React,{useState} from "react";
import { stepsConfig } from "./utils/data";
import "./style/index.css";
import { useAccounts } from "../../hook/useAccounts";
import { showSuccess } from "../../utils/toast";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [isStepValid, setIsStepValid] = useState(false);
  const [formData, setFormData] = useState({
    arn: "",
    accountId: "",
    name: ""
  });

  const CurrentComponent = stepsConfig[step].component;
  const {addAccount} = useAccounts();

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    await addAccount(formData);
    showSuccess("Account created successfully");
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-screen bg-gray-200 h-[calc(100vh-70px)] overflow-y-auto">
      <main>
        <div className="mx-5 p-5">
          <div className="Info">
            <h1 className="font-extrabold text-2xl">{stepsConfig[step].title}</h1>
            <p className="mt-2 text-sm text-gray-600">
              {stepsConfig[step].desc}
            </p>
          </div>
          <CurrentComponent onValidate={setIsStepValid} formData={formData} setFormData={setFormData} />
        </div>
      </main>

      <footer className="flex justify-between p-12">
          <button className="btn">Cancel</button>
          <div className="flex gap-6">
            {step > 1 && (
              <button onClick={handleBack} className="btn">Back</button>
            )}
            <button onClick={handleNext} className={`btn-next ${!isStepValid ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isStepValid}>{step === 3 ? "Submit" : "Next"}</button>
          </div>
        </footer>
    </div>
  );
};

export default Onboarding;
