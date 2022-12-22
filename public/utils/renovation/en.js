const en = {
  title: "Company Renovation",
  steps: {
    step1: {
      title: "Company Information",
      description: "Company Information....",
      labels: {
        label1: "Company Name",
        label2: "TAX ID",
        label3: "Phone",
        label4: "Email",
        label5: "Document Number",
        label6: "Type Of Organization",
        label7: "New Address",
        label8: "City",
        label9: "State",
        label10: "Zip Code",
        label11: "Reference Address",
      },
      options: {
        label6: [
          "Select One",
          "Corporation (C - CORP)",
          "Corporation (S - CORP)",
          "Corporation (Partnership)",
          "Corporation (Single Member)",
          "Limited Liability Company",
          "Limited Liability Company (C - CORP)",
          "Limited Liability Company (S - CORP)",
          "Other (TBD)",
        ],
      },
    },
    step2: {
      title: "Officers Updating",
      description: "Officers Updating Information ....",
      labels: {
        label1: "Complete Name",
        label2: "Phone",
        label3: "Position",
        label4: "Action",
        label5: "Signature",
      },
      options: {
        label3: [
          "Select One",
          "President",
          "Vice-President",
          "Secretary",
          "Director",
          "Manager (LLC)",
          "Appointet Member (AMBR)",
          "Member (MBR)",
          "Shareholder",
        ],
        label4: ["Select One", "Add", "Remove"],
      },
    },
    step3: {
      title: "New Registrar Agent",
      description: "Update Agent Information ....",
      labels: {
        label1: "Complete Name",
        label2: "Address",
      },
    },
    step4: {
      title: "Authorization",
      description: "Information of the person authorizing these changes ....",
      labels: {
        label1: "Complete Name",
        label2: "Position",
        lable3: "Authorization Signature",
      },
      options: {
        label2: [
          "Select One",
          "President",
          "Vice-President",
          "Secretary",
          "Director",
          "Manager (LLC)",
          "Appointet Member (AMBR)",
          "Member (MBR)",
          "Shareholder",
        ],
      },
    },
  },
  buttons: {
    continue: "Next",
    back: "Back",
    send: "Send",
    download: "Download",
  },
};

export default en;