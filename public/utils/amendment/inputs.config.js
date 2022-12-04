const inputs = [
  {
    step1: [
      {
        id: "company-information--company-name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "company-information--tax-id",
        dataType: "number",
        dataAccept: "int",
        label: "label2",
      },
      {
        id: "company-information--phone",
        dataType: "tel",
        dataAccept: "int",
        label: "label3",
      },
      {
        id: "company-information--email",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
      {
        id: "company-information--document-number",
        dataType: "number",
        dataAccept: "int",
        label: "label5",
      },
      {
        id: "company-information--type-organization",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label6",
      },
      {
        id: "company-information--new-name",
        dataType: "text",
        dataAccept: "string",
        label: "label7",
      },
      {
        id: "company-information--principal-address",
        dataType: "text",
        dataAccept: "string",
        label: "label8",
      },
      {
        id: "company-information--principal-city",
        dataType: "text",
        dataAccept: "string",
        label: "label9",
      },
      {
        id: "company-information--principal-state",
        dataType: "text",
        dataAccept: "string",
        label: "label10",
      },
      {
        id: "company-information--principal-zip-code",
        dataType: "number",
        dataAccept: "int",
        label: "label11",
      },
      {
        id: "company-information--secondary-address",
        dataType: "text",
        dataAccept: "string",
        label: "label12",
      },
      {
        id: "company-information--secondary-city",
        dataType: "text",
        dataAccept: "string",
        label: "label9",
      },
      {
        id: "company-information--secondary-state",
        dataType: "text",
        dataAccept: "string",
        label: "label10",
      },
      {
        id: "company-information--secondary-zip-code",
        dataType: "number",
        dataAccept: "int",
        label: "label11",
      },
    ],
  },
  {
    step2: [
      {
        id: "change-officers--complete-name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "change-officers--position",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label2",
      },
      {
        id: "change-officers--action",
        dataType: "text",
        dataAccept: "string",
        label: "label3",
      },
      {
        id: "change-officers--signature",
        dataType: "text",
        dataAccept: "string",
        label: "label4",
      },
    ],
  },
  {
    step3: [
      {
        id: "agent-register--complete-name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "agent-register--address",
        dataType: "text",
        dataAccept: "string",
        label: "label2",
      },
    ],
  },
  {
    step4: [
      {
        id: "authorization--complete-name",
        dataType: "text",
        dataAccept: "string",
        label: "label1",
      },
      {
        id: "authorization--signature",
        dataType: "signature",
        dataAccept: "string",
        label: "label2"
      },
      {
        id: "authorization--position",
        dataType: "dropDown",
        dataAccept: "string",
        label: "label3"
      },
    ],
  },
]

export default inputs;
