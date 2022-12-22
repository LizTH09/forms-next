// import connectDB from "../../lib/dbConnection";
import NavBar from "/components/forms/NavBar";
import FormContainer from "/components/forms/FormContainer";
import { useEffect, useState } from "react";
import TitleMobile from "/components/forms/TitleMobile";
import StepIndicator from "/components/forms/StepIndicator";
import StepButtonsControlers from "/components/forms/StepButtonsControlers";
import Form from "/components/forms/Form";
import inputs from "/public/utils/renovation/inputs.config";
import FormHeader from "../../components/forms/FormHeader";
import InputContainer from "../../components/forms/InputContainer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfRenovation from "../../components/forms/pdf/PdfRenovation";
import ButtonExport from "../../components/forms/pdf/ButtonExport";

const initialValues = {
  renovation_company_information__company_name: "Lizbeth Selena Aldana Tarifeño",
  renovation_company_information__tax_id: "10738846236",
  renovation_company_information__phone: "+51942287153",
  renovation_company_information__email: "10738846236",
  renovation_company_information__document_number: "73884623",
  renovation_company_information__type_organization: "",
  renovation_company_information__new_address: "Las Margaritas 373",
  renovation_company_information__new_city: "Chiclayo",
  renovation_company_information__new_state: "Lambayeque",
  renovation_company_information__new_zip_code: "14011",
  renovation_company_information__reference_address: "",
  renovation_company_information__reference_city: "",
  renovation_company_information__reference_state: "",
  renovation_company_information__reference_zip_code: "",
  officers_update__complete_name_officer1: "",
  officers_update__phone_officer1: "",
  officers_update__position_officer1: "",
  officers_update__action_officer1: "",
  officers_update__photo_officer1: "",
  officers_update__signature_officer1: "",
  officers_update__complete_name_officer2: "",
  officers_update__phone_officer2: "",
  officers_update__position_officer2: "",
  officers_update__action_officer2: "",
  officers_update__photo_officer2: "",
  officers_update__signature_officer2: "",
  officers_update__complete_name_officer3: "",
  officers_update__phone_officer3: "",
  officers_update__position_officer3: "",
  officers_update__action_officer3: "",
  officers_update__photo_officer3: "",
  officers_update__signature_officer3: "",
  officers_update__complete_name_officer4: "",
  officers_update__phone_officer4: "",
  officers_update__position_officer4: "",
  officers_update__action_officer4: "",
  officers_update__photo_officer4: "",
  officers_update__signature_officer4: "",
  officers_update__complete_name_officer5: "",
  officers_update__phone_officer5: "",
  officers_update__position_officer5: "",
  officers_update__action_officer5: "",
  officers_update__photo_officer5: "",
  officers_update__signature_officer5: "",
  renovation_agent_register__complete_name: "",
  renovation_agent_register__address: "",
  renovation_authorization__complete_name_1: "",
  renovation_authorization__position_1: "",
  renovation_authorization__signature_1: "",
  renovation_authorization__complete_name_2: "",
  renovation_authorization__position_2: "",
  renovation_authorization__signature_2: "",
  renovation_authorization__complete_name_3: "",
  renovation_authorization__position_3: "",
  renovation_authorization__signature_3: "",
};

const  Renovation = () => {
  const date = new Date();
  const [language, setLanguage] = useState("en");
  const changeLanguage = () => {
    // fetch(`/utils/renovation/languages/${language}.json`)
    fetch(`/api/renovation/languages/${language}`)
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
          template="template_4yy2zfw"
        />
        {currentStep == MAX_STEPS && (
          <PDFDownloadLink
            document={<PdfRenovation text={text} form={form} date={date} />}
            fileName={`renovation.pdf`}
          >
            <ButtonExport text={text?.buttons?.download} />
          </PDFDownloadLink>
        )}
      </InputContainer>
    </FormContainer>
  );
};

export default Renovation;

// export async function getServerSideProps() {
//   try {
//     await connectDB();
//     return { props: { renovationForms: 123 } };
//   } catch (error) {
//     console.log(error);
//   }
// }
