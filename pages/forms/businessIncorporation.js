import NavBar from "/components/forms/NavBar";
import FormContainer from "/components/forms/FormContainer";
import { useEffect, useState } from "react";
import TitleMobile from "/components/forms/TitleMobile";
import StepIndicator from "/components/forms/StepIndicator";
import StepButtonsControlers from "/components/forms/StepButtonsControlers";
import Form from "/components/forms/Form";
import inputs from "/public/utils/businessIncorporation/inputs.config";
import FormHeader from "../../components/forms/formHeader";
import InputContainer from "../../components/forms/InputContainer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ButtonExport from "../../components/forms/pdf/ButtonExport";
import PdfIncorporation from "../../components/forms/pdf/PdfIncorporation";

const initialValues = {
  personal_information__complete_name: "Lizbeth Selena Aldana Tarifeño",
  personal_information__email: "sele99na@gmail.com",
  personal_information__phone: "942287153",
  personal_information__address: "Las Margaritas 373",
  personal_information__mail_address: "Las Margaritas 373",
  personal_information__zip_code: "14011",
  personal_information__state: "Lambayeque",
  personal_information__city: "Chiclayo",
  corporate_name__corporate_name_option1: "Dev1",
  corporate_name__corporate_name_option2: "Dev2",
  corporate_name__corporate_name_option3: "Dev3",
  corporate_name__corporate_name_option4: "",
  corporate_name__corporate_name_option5: "",
  corporate_name__type_organization: "",
  corporate_name__type_form: "",
  officers_information__complete_name_officer1: "Lizbeth Selena Aldana Tarifeño",
  officers_information__email_officer1: "sele99na@gmail.com",
  officers_information__phone_officer1: "942287153",
  officers_information__address_officer1: "Las Margaritas 373",
  officers_information__position_officer1: "",
  officers_information__complete_name_officer2: "Tania Aldana",
  officers_information__email_officer2: "tania@gmail.com",
  officers_information__phone_officer2: "951582107",
  officers_information__address_officer2: "Las Margaritas",
  officers_information__position_officer2: "",
  officers_information__complete_name_officer3: "Maribel Tarifeño",
  officers_information__email_officer3: "maribel@gmail.com",
  officers_information__phone_officer3: "979684583",
  officers_information__address_officer3: "Las Margaritas 373",
  officers_information__position_officer3: "",
  officers_information__complete_name_officer4: "",
  officers_information__email_officer4: "",
  officers_information__phone_officer4: "",
  officers_information__address_officer4: "",
  officers_information__position_officer4: "",
  officers_information__complete_name_officer5: "",
  officers_information__email_officer5: "",
  officers_information__phone_officer5: "",
  officers_information__address_officer5: "",
  officers_information__position_officer5: "",
  register_agent__complete_name: "Lizbeth Selena Aldana Tarifeño",
  register_agent__address: "Las Margaritas 373",
  register_agent__signature: "",
  applicant_information__complete_name: "Lizbeth Selena Aldana Tarifeño",
  applicant_information__ssn_itin: "73884623",
  nature_business__company_activity: "Development",
  nature_business__position_1: "",
  nature_business__signature_1: "",
  nature_business__position_2: "",
  nature_business__signature_2: "",
  nature_business__position_3: "",
  nature_business__signature_3: "",
};

const BusinessIncorporation = () => {
  const date = new Date();
  const [language, setLanguage] = useState("en");
  const changeLanguage = () => {
    // fetch(`/utils/businessIncorporation/languages/${language}.json`)
    fetch(`/api/incorporation/languages/${language}`)
      .then((response) => response.json())
      .then((data) => setText(data));
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [text, setText] = useState(changeLanguage());
  const [form, setForm] = useState(initialValues);
  const MAX_STEPS = 6;
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
          template="template_4yy2zfw"
        />
        {currentStep == MAX_STEPS && (
          <PDFDownloadLink
            document={
              <PdfIncorporation
                text={text}
                form={form}
                date={date}
              />
            }
            fileName={`business-Incorporation.pdf`}
          >
            <ButtonExport text={text?.buttons?.download} />
          </PDFDownloadLink>
        )}
      </InputContainer>
    </FormContainer>
  );
};

export default BusinessIncorporation;
