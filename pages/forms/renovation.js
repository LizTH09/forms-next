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
import en from "/public/utils/renovation/en";
import es from "/public/utils/renovation/es";
// import RenovationForm from "../../models/RenovationForm";
// import RenovationForm from "../../models/RenovationForm";

const initialValues = {
  renovation_company_information__company_name: "",
  renovation_company_information__tax_id: "",
  renovation_company_information__phone: "",
  renovation_company_information__email: "",
  renovation_company_information__document_number: "",
  renovation_company_information__type_organization: "",
  renovation_company_information__new_address: "",
  renovation_company_information__new_city: "",
  renovation_company_information__new_state: "",
  renovation_company_information__new_zip_code: "",
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

const Renovation = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const date = month + " / " + day + " / " + year;
  const [language, setLanguage] = useState("en");
  const [currentStep, setCurrentStep] = useState(1);
  const [text, setText] = useState(en);
  const [form, setForm] = useState(initialValues);
  const MAX_STEPS = 4;
  useEffect(() => {
    setText(language == "en" ? en : es);
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
          date={date}
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
          date={date}
        />
        {/* {currentStep == MAX_STEPS && (
          <PDFDownloadLink
            document={<PdfRenovation text={text} form={form} date={date} />}
            fileName={`renovation.pdf`}
          >
            <ButtonExport text={text?.buttons?.download} />
          </PDFDownloadLink>
        )} */}
      </InputContainer>
    </FormContainer>
  );
};

export default Renovation;

// export async function getServerSideProps() {
//   try {
//     await connectDB();
//     const res = await RenovationForm.find({});
//     const renovationForms = res.map((doc) => {
//       const renovationForm = doc.toObject();
//       renovationForm._id = `${renovationForm._id}`;
//       return renovationForm;
//     });
//     console.log(res);
//     return { props: { renovationForms } };
//   } catch (error) {
//     console.log(error);
//   }
// }
