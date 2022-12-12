const handlerEnglish = (required, response) => {
  response.status(200).json({
    title: "Business Incorporation",
    steps: {
      step1: {
        title: "Personal description",
        description:
          "This section must be completed with your personal description. IMPORTANT ! All fields must be filled out to continue with the next step.",
        labels: {
          label1: "Complete Name",
          label2: "Email",
          label3: "Phone",
          label4: "Address",
          label5: "Mail Address",
          label6: "Zip Code",
          label7: "State",
          label8: "City",
        },
      },
      step2: {
        title: "Corporate Name",
        description:
          "This section must be completed with your personal description. IMPORTANT ! All fields shown must be filled out to continue with the next step.",
        labels: {
          label1: "Corporate Name",
          label2: "Type Of Organization",
          label3: "Type Of Form",
        },
        options: {
          label2: [
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
          label3: ["Form 8832", "Form 2553"],
        },
      },
      step3: {
        title: "Officer(s) Information",
        description: "Officer(s) Information extra",
        labels: {
          label1: "Complete Name",
          label2: "Email",
          label3: "Phone",
          label4: "Address",
          label5: "Position",
        },
        options: {
          label5: [
            "Select One",
            "President",
            "Vice-President",
            "Secretary",
            "Director",
            "Manager (LLC)",
            "Appointed Member (AMBR)",
            "Member (MBR)",
            "Shareholder",
          ],
        },
      },
      step4: {
        title: "Register Agent",
        description: "Register Agent extra",
        labels: {
          label1: "Complete Name",
          label2: "Address",
          label3: "Signature",
        },
      },
      step5: {
        title: "EIN Applicant description",
        description: "EIN Applicant description extra",
        labels: {
          label1: "Complete Name",
          label2: "SSN / ITIN",
        },
      },
      step6: {
        title: "Nature Of Business",
        description: "Nature Of Business extra",
        labels: {
          label1: "Company Activity",
          label2: "Signature",
          label3: "Position",
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
  });
};

export default handlerEnglish;
