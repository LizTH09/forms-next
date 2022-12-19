const inputs = [
  {
    step1: [
      {
        id: "company_information__company_name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
        required: true,
      },
      {
        id: "company_information__tax_id",
        dataType: "number",
        dataAccept: "int",
        label: "label2",
        required: true,
      },
      {
        id: "company_information__phone",
        dataType: "tel",
        dataAccept: "int",
        label: "label3",
        required: true,
      },
      {
        id: "company_information__email",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
        required: true,
      },
      {
        id: "company_information__document_number",
        dataType: "number",
        dataAccept: "int",
        label: "label5",
        required: true,
      },
      {
        id: "company_information__type_organization",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label6",
        required: true,
      },
      { dataType: "newSection" },
      {
        id: "company_information__new_name",
        dataType: "text",
        dataAccept: "string",
        label: "label7",
        required: true,
      },
      { dataType: "newSection" },
      {
        id: "company_information__principal_address",
        dataType: "text",
        dataAccept: "string",
        label: "label8",
        required: true,
      },
      {
        id: "company_information__principal_city",
        dataType: "text",
        dataAccept: "string",
        label: "label9",
        required: true,
      },
      {
        id: "company_information__principal_state",
        dataType: "text",
        dataAccept: "string",
        label: "label10",
        required: true,
      },
      {
        id: "company_information__principal_zip_code",
        dataType: "number",
        dataAccept: "int",
        label: "label11",
        required: true,
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
        id: "change_officers__complete_name_officer1",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
        required: true,
      },
      {
        id: "change_officers__position_officer1",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
        required: true,
      },
      {
        id: "change_officers__action_officer1",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
        required: true,
      },
      {
        id: "change_officers__photo_officer1",
        dataType: "attachment",
        dataAccept: "image/*",
        required: true,
      },
      {
        id: "change_officers__signature_officer1",
        dataType: "signature",
        dataAccept: "string",
        required: true,
      },

      { dataType: "newSection" },
      {
        id: "change_officers__complete_name_officer2",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "change_officers__position_officer2",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "change_officers__action_officer2",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "change_officers__photo_officer2",
        dataType: "attachment",
        dataAccept: "image/*",
        required: true,
      },
      {
        id: "change_officers__signature_officer2",
        dataType: "signature",
        dataAccept: "string",
      },
      { dataType: "newSection" },
      {
        id: "change_officers__complete_name_officer3",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "change_officers__position_officer3",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "change_officers__action_officer3",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "change_officers__photo_officer3",
        dataType: "attachment",
        dataAccept: "image/*",
        required: true,
      },
      {
        id: "change_officers__signature_officer3",
        dataType: "signature",
        dataAccept: "string",
      },
      { dataType: "newSection" },
      {
        id: "change_officers__complete_name_officer4",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "change_officers__position_officer4",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "change_officers__action_officer4",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "change_officers__photo_officer4",
        dataType: "attachment",
        dataAccept: "image/*",
        required: true,
      },
      {
        id: "change_officers__signature_officer4",
        dataType: "signature",
        dataAccept: "string",
      },
      { dataType: "newSection" },
      {
        id: "change_officers__complete_name_officer5",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "change_officers__position_officer5",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "change_officers__action_officer5",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "change_officers__photo_officer5",
        dataType: "attachment",
        dataAccept: "image/*",
        label: "label5",
        required: true,
      },
      {
        id: "change_officers__signature_officer5",
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
        required: true,
      },
      {
        id: "agent_register__address",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
        required: true,
      },
    ],
  },
  {
    step4: [
      {
        id: "authorization__complete_name_1",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
        required: true,
      },
      // {
      //   id: "authorization__document_1",
      //   dataType: "number",
      //   dataAccept: "string",
      //   label: "label4",
      // },
      {
        id: "authorization__position_1",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
        required: true,
      },
      // {
      //   id: "authorization__photo_1",
      //   dataType: "attachment",
      //   dataAccept: "string",
      //   label: "label5",
      //   required: true,
      // },
      {
        id: "authorization__signature_1",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
        required: true,
      },
      { dataType: "newSection" },
      {
        id: "authorization__complete_name_2",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      // {
      //   id: "authorization__document_2",
      //   dataType: "number",
      //   dataAccept: "string",
      //   label: "label4",
      // },
      {
        id: "authorization__position_2",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      // {
      //   id: "authorization__photo_2",
      //   dataType: "attachment",
      //   dataAccept: "string",
      //   label: "label5",
      //   required: true,
      // },
      {
        id: "authorization__signature_2",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
      },
      { dataType: "newSection" },
      {
        id: "authorization__complete_name_3",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      // {
      //   id: "authorization__document_3",
      //   dataType: "number",
      //   dataAccept: "string",
      //   label: "label4",
      // },
      {
        id: "authorization__position_3",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3",
      },
      // {
      //   id: "authorization__photo_3",
      //   dataType: "attachment",
      //   dataAccept: "string",
      //   label: "label5",
      //   required: true,
      // },
      {
        id: "authorization__signature_3",
        dataType: "signature",
        dataAccept: "string",
        label: "label2",
      },
    ],
  },
];

export default inputs;
