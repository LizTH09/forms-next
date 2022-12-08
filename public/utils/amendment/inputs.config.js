const inputs = [
  {
    step1: [
      {
        id: "company_information__company_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "company_information__tax_id",
        dataType: "number",
        dataAccept: "int",
        label: "label2",
      },
      {
        id: "company_information__phone",
        dataType: "tel",
        dataAccept: "int",
        label: "label3",
      },
      {
        id: "company_information__email",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "company_information__document_number",
        dataType: "number",
        dataAccept: "int",
        label: "label5",
      },
      {
        id: "company_information__type_organization",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label6",
      },
      { dataType: "newSection" },
      {
        id: "company_information__new_name",
        dataType: "text",
        dataAccept: "string",
        label: "label7",
      },
      { dataType: "newSection" },
      {
        id: "company_information__principal_address",
        dataType: "text",
        dataAccept: "string",
        label: "label8",
      },
      {
        id: "company_information__principal_city",
        dataType: "text",
        dataAccept: "string",
        label: "label9",
      },
      {
        id: "company_information__principal_state",
        dataType: "text",
        dataAccept: "string",
        label: "label10",
      },
      {
        id: "company_information__principal_zip_code",
        dataType: "number",
        dataAccept: "int",
        label: "label11",
      },
      { dataType: "newSection" },
      {
        id: "company_information__secondary_address",
        dataType: "text",
        dataAccept: "string",
        label: "label12",
      },
      {
        id: "company_information__secondary_city",
        dataType: "text",
        dataAccept: "string",
        label: "label9",
      },
      {
        id: "company_information__secondary_state",
        dataType: "text",
        dataAccept: "string",
        label: "label10",
      },
      {
        id: "company_information__secondary_zip_code",
        dataType: "number",
        dataAccept: "int",
        label: "label11",
      },
    ],
  },
  {
    step2: [
      {
        id: "change_officers__complete_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "change_officers__position",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "change_officers__action",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "change_officers__signature",
        dataType: "signature",
        dataAccept: "string",
      },
    ],
  },
  {
    step3: [
      {
        id: "agent_register__complete_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "agent_register__address",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
    ],
  },
  {
    step4: [
      {
        id: "authorization__complete_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "authorization__position",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "authorization__signature",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
      },
    ],
  },
];

export default inputs;
