const en = {
  title: "Company Amendment",
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
        label7: "New Company Name",
        label8: "Principal Address",
        label9: "City",
        label10: "State",
        label11: "Zip Code",
        label12: "Address #2",
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
      title: "Change Officers",
      description: "Update Officers Information ....",
      labels: {
        label1: "Complete Name",
        label2: "Position",
        label3: "Action",
        label4: "Signature",
        label5: "Add Photo",
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
        label3: ["Select One", "Add", "Remove"],
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
        lable2: "Authorization Signature",
        label3: "Position",
        label4: "Document #",
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
