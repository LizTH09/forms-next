import NavBar from "/components/forms/NavBar";
import FormContainer from "/components/forms/FormContainer";
import { useEffect, useState } from "react";
import TitleMobile from "/components/forms/TitleMobile";
import StepIndicator from "/components/forms/StepIndicator";
import StepButtonsControlers from "/components/forms/StepButtonsControlers";
import Form from "/components/forms/Form";
import inputs from "/public/utils/amendment/inputs.config";
import FormHeader from "../../components/forms/formHeader";
import InputContainer from "../../components/forms/InputContainer";

const initialValues = {
  company_information__company_name: "",
  company_information__tax_id: "",
  company_information__phone: "",
  company_information__email: "",
  company_information__document_number: "",
  company_information__type_organization: "",
  company_information__new_name: "",
  company_information__principal_address: "",
  company_information__principal_city: "",
  company_information__principal_state: "",
  company_information__principal_zip_code: "",
  company_information__secondary_address: "",
  company_information__secondary_city: "",
  company_information__secondary_state: "",
  company_information__secondary_zip_code: "",
  change_officers__complete_name: "",
  change_officers__position: "",
  change_officers__action: "",
  change_officers__signature: "",
  agent_register__complete_name: "",
  agent_register__address: "",
  authorization__complete_name: "",
  authorization__position: "",
  authorization__signature: "",
};

const Amendment = () => {
  const date = new Date();
  const [language, setLanguage] = useState("en");
  const changeLanguage = () => {
    // fetch(`/utils/amendment/languages/${language}.json`)
    fetch(`/api/languages/${language}`)
      .then((response) => response.json())
      .then((data) => setText(data));
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [text, setText] = useState(changeLanguage());
  const [form, setForm] = useState(initialValues);
  const MAX_STEPS = 4;
  useEffect(() => {
    setText(changeLanguage());
  }, [language]);

  return (
    <FormContainer>
      <NavBar title={text?.title} setLanguage={setLanguage} />
      <TitleMobile title={text?.title} />
      <StepIndicator maxSteps={MAX_STEPS} currentStep={currentStep} />
      <InputContainer>
        <FormHeader
          title={text?.steps[`step${currentStep}`]?.title}
          description={text?.steps[`step${currentStep}`]?.description}
          date={date.toLocaleDateString()}
        />
        <Form
          inputs={inputs}
          text={text}
          currentStep={currentStep}
          form={form}
          setForm={setForm}
        />
        <StepButtonsControlers
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          maxSteps={MAX_STEPS}
          text={text}
        />
      </InputContainer>
    </FormContainer>
  );
};

export default Amendment;
