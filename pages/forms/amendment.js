import NavBar from "/components/forms/NavBar";
import FormContainer from "/components/forms/FormContainer";
import { useEffect, useState } from "react";
import TitleMobile from "/components/forms/TitleMobile";
import StepIndicator from "/components/forms/StepIndicator";
import StepButtonsControlers from "/components/forms/StepButtonsControlers";
import Form from "/components/forms/Form";
import inputs from "/public/utils/amendment/inputs.config";
const Amendment = () => {
  const [language, setLanguage] = useState("en");
  const changeLanguage = async () => {
    await fetch(`/utils/amendment/languages/${language}.json`)
      .then((response) => response.json())
      .then((data) => setText(data));
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [text, setText] = useState(changeLanguage());
  const MAX_STEPS = 4;
  useEffect(() => {
    setText(changeLanguage());
  }, [language]);
  return (
    <FormContainer>
      <NavBar title={text?.title} setLanguage={setLanguage} />
      <TitleMobile title={text?.title} />
      <StepIndicator maxSteps={MAX_STEPS} currentStep={currentStep} />
      <Form inputs={inputs} text={text} currentStep={currentStep} />
      <StepButtonsControlers
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        maxSteps={MAX_STEPS}
        text={text}
      />
    </FormContainer>
  );
};

export default Amendment;
