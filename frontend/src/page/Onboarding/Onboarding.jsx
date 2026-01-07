import React,{useState} from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3"

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const stepsConfig = {
    1: {
      title: "Create an IAM Role",
      desc: "Create an IAM Role by following these steps",
      component: <Page1 />
    },
    2: {
      title: "Add Customer Managed Policies",
      desc: "Create an Inline policy for the role by following these steps",
      component: <Page2 />
    },
    3: {
      title: "Create Cost & Usage Report",
      desc: "Create a Cost & Usage Report by following these steps",
      component: <Page3 />
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    
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
          {stepsConfig[step].component}
        </div>
      </main>

      <footer className="flex justify-between p-12">
          <button className="bg-white text-blue-800 border border-blue-800 rounded-md px-4 py-2">
            Cancel
          </button>

          <div className="flex gap-6">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="bg-white text-blue-800 border border-blue-800 rounded-md px-4 py-2">
                Back
              </button>
            )}
            <button
            onClick={handleNext}
            className="bg-blue-800 text-white rounded-md px-4 py-2">
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </footer>
    </div>
  );
};

export default Onboarding;
