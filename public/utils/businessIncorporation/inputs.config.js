const inputs = [
  {
    step1: [
      {
        id: "personal_information__complete_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "personal_information__email",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "personal_information__phone",
        dataType: "tel",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "personal_information__address",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "personal_information__mail_address",
        dataType: "text",
        dataAccept: "string",
        label: "label5",
      },
      {
        id: "personal_information__zip_code",
        dataType: "number",
        dataAccept: "string",
        label: "label6",
      },
      {
        id: "personal_information__state",
        dataType: "text",
        dataAccept: "string",
        label: "label7",
      },
      {
        id: "personal_information__city",
        dataType: "text",
        dataAccept: "string",
        label: "label8",
      },
    ],
  },
  {
    step2: [
      {
        id: "corporate_name__corporate_name_option1",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "corporate_name__corporate_name_option2",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "corporate_name__corporate_name_option3",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "corporate_name__corporate_name_option4",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "corporate_name__corporate_name_option5",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      { dataType: "newSection" },
      {
        id: "corporate_name__type_organization",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "corporate_name__type_form",
        dataType: "radio",
        dataAccept: "string",
        label: "label3",
      },
    ],
  },
  {
    step3: [
      {
        id: "officers_information__complete_name_officer1",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "officers_information__email_officer1",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "officers_information__phone_officer1",
        dataType: "tel",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "officers_information__address_officer1",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "officers_information__position_officer1",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label5",
      },
      { dataType: "newSection" },
      {
        id: "officers_information__complete_name_officer2",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "officers_information__email_officer2",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "officers_information__phone_officer2",
        dataType: "tel",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "officers_information__address_officer2",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "officers_information__position_officer2",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label5",
      },
      { dataType: "newSection" },
      {
        id: "officers_information__complete_name_officer3",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "officers_information__email_officer3",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "officers_information__phone_officer3",
        dataType: "tel",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "officers_information__address_officer3",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "officers_information__position_officer3",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label5",
      },
      { dataType: "newSection" },
      {
        id: "officers_information__complete_name_officer4",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "officers_information__email_officer4",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "officers_information__phone_officer4",
        dataType: "tel",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "officers_information__address_officer4",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "officers_information__position_officer4",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label5",
      },
      { dataType: "newSection" },
      {
        id: "officers_information__complete_name_officer5",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "officers_information__email_officer5",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "officers_information__phone_officer5",
        dataType: "tel",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "officers_information__address_officer5",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "officers_information__position_officer5",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label5",
      }
    ],
  },
  {
    step4: [
      {
        id: "register_agent__complete_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "register_agent__address",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "register_agent__signature",
        dataType: "signature",
        dataAccept: "string",
        label: "label3",
      },
    ],
  },
  {
    step5: [
      {
        id: "applicant_information__complete_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "applicant_information__ssn_itin",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
    ],
  },
  {
    step6: [
      {
        id: "nature_business__company_activity",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      ,
      { dataType: "newSection" },
      {
        id: "nature_business__position_1",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "nature_business__signature_1",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "nature_business__position_2",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "nature_business__signature_2",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "nature_business__position_3",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "nature_business__signature_3",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
      },
    ],
  },
];

export default inputs;
