import NavBar from "/components/forms/NavBar";
import FormContainer from "/components/forms/FormContainer";
import { useEffect, useState } from "react";
import TitleMobile from "/components/forms/TitleMobile";
import StepIndicator from "/components/forms/StepIndicator";
import StepButtonsControlers from "/components/forms/StepButtonsControlers";
import Form from "/components/forms/Form";
import inputs from "/public/utils/amendment/inputs.config";
import FormHeader from "../../components/forms/FormHeader";
import InputContainer from "../../components/forms/InputContainer";
import { PDFDownloadLink, Text } from "@react-pdf/renderer";
import ButtonExport from "../../components/forms/pdf/ButtonExport";
import PdfAmendment from "../../components/forms/pdf/PdfAmendment";

const initialValues = {
  company_information__company_name: "Lizbeth Selena Aldana Tarifeño",
  company_information__tax_id: "10738846236",
  company_information__phone: "+51942287153",
  company_information__email: "sele99na@gmail.com",
  company_information__document_number: "73884623",
  company_information__type_organization: "",
  company_information__new_name: "Devs 2",
  company_information__principal_address: "Las Margaritas 373",
  company_information__principal_city: "Chiclayo",
  company_information__principal_state: "Lambayeque",
  company_information__principal_zip_code: "14011",
  company_information__secondary_address: "",
  company_information__secondary_city: "",
  company_information__secondary_state: "",
  company_information__secondary_zip_code: "",
  change_officers__complete_name_officer1: "",
  change_officers__position_officer1: "",
  change_officers__action_officer1: "",
  change_officers__photo_officer1: "",
  change_officers__signature_officer1: "",
  change_officers__complete_name_officer2: "",
  change_officers__position_officer2: "",
  change_officers__action_officer2: "",
  change_officers__photo_officer2: "",
  change_officers__signature_officer2: "",
  change_officers__complete_name_officer3: "",
  change_officers__position_officer3: "",
  change_officers__action_officer3: "",
  change_officers__photo_officer3: "",
  change_officers__signature_officer3: "",
  change_officers__complete_name_officer4: "",
  change_officers__position_officer4: "",
  change_officers__action_officer4: "",
  change_officers__photo_officer4: "",
  change_officers__signature_officer4: "",
  change_officers__complete_name_officer5: "",
  change_officers__position_officer5: "",
  change_officers__action_officer5: "",
  change_officers__photo_officer5: "",
  change_officers__signature_officer5: "",
  agent_register__complete_name: "",
  agent_register__address: "",
  authorization__complete_name_1: "",
  // authorization__document_1: "",
  authorization__position_1: "",
  // authorization__photo_1: "",
  authorization__signature_1: "",
  authorization__complete_name_2: "",
  // authorization__document_2: "",
  authorization__position_2: "",
  // authorization__photo_2: "",
  authorization__signature_2: "",
  authorization__complete_name_3: "",
  // authorization__document_3: "",
  authorization__position_3: "",
  // authorization__photo_3: "",
  authorization__signature_3: "",
};

const Amendment = () => {
  const date = new Date();
  const [language, setLanguage] = useState("en");
  const changeLanguage = () => {
    // fetch(`/utils/amendment/languages/${language}.json`)
    fetch(`/api/amendment/languages/${language}`)
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
          form={form}
          template="template_z06210s"
          date={date.toLocaleDateString()}
        />
        {currentStep == MAX_STEPS && (
          <PDFDownloadLink
            document={
              <PdfAmendment
                text={text}
                form={form}
                date={date}
              />
            }
            fileName={`amendment.pdf`}
          >
            <ButtonExport text={text?.buttons?.download} />
          </PDFDownloadLink>
        )}
      </InputContainer>
    </FormContainer>
  );
};

export default Amendment;
