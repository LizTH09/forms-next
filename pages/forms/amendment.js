import NavBar from "../../components/forms/NavBar";
import FormContainer from "../../components/forms/FormContainer";
import { useState } from "react";
import TitleMobile from "../../components/forms/TitleMobile";
import StepIndicator from "../../components/forms/StepIndicator";
import StepButtonsControlers from "../../components/forms/StepButtonsControlers";
const Amendment = () => {
  const [language, setLanguage] = useState("en");
  const [currentStep, setCurrentStep] = useState(1);
  const MAX_STEPS = 4;
  return (
    <FormContainer>
      <NavBar title="Amendment" setLanguage={setLanguage} />
      <TitleMobile title="Amendment" />
      <StepIndicator maxSteps={MAX_STEPS} currentStep={currentStep} />
      {/* <Form></Form> */}
      <StepButtonsControlers
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        maxSteps={MAX_STEPS}
      ></StepButtonsControlers>
    </FormContainer>
  );
};

export default Amendment;
