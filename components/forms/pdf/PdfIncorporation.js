import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
  Svg,
  Path,
} from "@react-pdf/renderer";
import PdfDesing from "./PdfDesing";
import PdfHeader from "./PdfHeader";
// Font.register({
//   family: "Montserrat",
//   fonts: [
//     {
//       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
//     },
//     {
//       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
//       fontWeight: "semibold",
//     },
//     {
//       src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf",
//       fontWeight: "bold",
//     },
//   ],
// });
const PdfIncorporation = ({
  text,
  form,
  counterCorporateName,
  officerInformation,
  newSignature,
}) => {
  const tel =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04LjI2IDEuMjg5bC0xLjU2NC43NzJjLTUuNzkzIDMuMDIgMi43OTggMjAuOTQ0IDkuMzEgMjAuOTQ0LjQ2IDAgLjkwNC0uMDk0IDEuMzE3LS4yODRsMS41NDItLjc1NS0yLjg5OC01LjU5NC0xLjU0Ljc1NGMtLjE4MS4wODctLjM4NC4xMzQtLjU5Ny4xMzQtMi41NjEgMC02Ljg0MS04LjIwNC00LjI0MS05LjU5NmwxLjU0Ni0uNzYzLTIuODc1LTUuNjEyem03Ljc0NiAyMi43MTFjLTUuNjggMC0xMi4yMjEtMTEuMTE0LTEyLjIyMS0xNy44MzIgMC0yLjQxOS44MzMtNC4xNDYgMi40NTctNC45OTJsMi4zODItMS4xNzYgMy44NTcgNy4zNDctMi40MzcgMS4yMDFjLTEuNDM5Ljc3MiAyLjQwOSA4LjQyNCAzLjk1NiA3LjY4bDIuMzk5LTEuMTc5IDMuODE2IDcuMzZzLTIuMzYgMS4xNjItMi40NzYgMS4yMTVjLS41NDcuMjUxLTEuMTI5LjM3Ni0xLjczMy4zNzYiLz48L3N2Zz4=";
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
      // fontFamily: "Montserrat",
    },
    content: {
      width: "90vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    body: {
      marginLeft: 61,
      marginRight: 80,
      marginTop: 130,
      marginBottom: 40,
    },
    title: {
      width: "50vw",
      height: "9vh",
      position: "absolute",
      left: "4vh",
      top: "9vh",
      fontSize: 24,
      textAlign: "left",
      fontWeight: "medium",
      display: "flex",
      justifyContent: "center",
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#e1e2e2d3",
      marginBottom: 20,
    },
    blueLetter: {
      color: "#2CAF95",
      fontWeight: "semibold",
    },
    blackLetter: {
      fontWeight: "semibold",
      textAlign: "center",
    },
    personalInformation: {
      display: "flex",
      flexDirection: "row",
      fontSize: 11,
      marginBottom: 15,
    },
    subTitle: {
      fontSize: 16,
      fontWeight: "semibold",
      color: "#2CAF95",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      width: "530px",
      gap: "8px",
    },
    textColumn: {
      // marginLeft: "20px",
      paddingTop: 5,
      paddingBottom: 10,
    },
    twoColumn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inputInformation: {
      fontWeight: "semibold",
      paddingVertical: 5,
      width: "100%",
    },
    text: {
      fontSize: 12,
      margin: 5,
      marginBottom: 20,
    },
    counterDesign: {
      border: "1px solid #9f9f9f",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: "20px",
      color: "#9f9f9f",
    },
    textElement: {
      paddingVertical: 10,
    },
    lineBlue: {
      width: "30%",
      height: 2,
      borderRadius: 5,
      backgroundColor: "#2CAF95",
      marginTop: 15,
    },
    signatureContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margingTop: "30px",
      height: "80px",
      width: "100px",
    },
    signatureLine: {
      height: 1,
      width: 100,
      backgroundColor: "black",
      marginVertical: 5,
    },
    photoContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "80px",
      height: "60px",
      marginRight: "10px",
    },
    photo: {
      borderRadius: "15px",
      height: "100%",
      // maxWidth: "120px",
    },
    image: {
      width: 80,
      height: 60,
      alignSelf: "center",
    },
  });

  return (
    <Document title={text.title}>
      <Page size="LETTER" style={styles.page}>
        <PdfDesing />
        <View style={styles.content}>
          <PdfHeader />
          <Text style={styles.title}>Business Information</Text>
          <View style={styles.body}>
            <Text style={styles.subTitle}>{text.steps.step1.title}</Text>
            <View style={styles.line}></View>
            {/* //----------------------- PERSONAL INFORMATION ---------------------------- */}
            <View style={styles.personalInformation}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "#2CAF95",
                    fontWeight: "semibold",
                    fontSize: 11,
                  }}
                >
                  {form.personal_information__complete_name}
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.blackLetter}>E: </Text>
                  <Text>{form.personal_information__email}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.blueLetter}>P: </Text>
                  <Text style={{color:"#2CAF95"}}>{form.personal_information__phone}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.blackLetter}>A: </Text>
                  <Text>
                    {form.personal_information__address} -{" "}
                    {form.personal_information__city},{" "}
                    {form.personal_information__state}
                  </Text>
                </View>
              </View>
            </View>
            {/* //----------------------- CORPORATE NAME ---------------------------- */}
            <Text style={styles.subTitle}>{text.steps.step2.title}</Text>
            <View style={styles.line}></View>
            <View style={styles.text}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <View style={styles.counterDesign}>
                  <Text>1</Text>
                </View>
                <Text style={styles.textElement}>
                  {form.corporate_name__corporate_name_option1}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <View style={styles.counterDesign}>
                  <Text>2</Text>
                </View>
                <Text style={styles.textElement}>
                  {form.corporate_name__corporate_name_option2}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <View style={styles.counterDesign}>
                  <Text>3</Text>
                </View>
                <Text style={styles.textElement}>
                  {form.corporate_name__corporate_name_option3}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <View style={styles.counterDesign}>
                  <Text>4</Text>
                </View>
                <Text style={styles.textElement}>
                  {form.corporate_name__corporate_name_option4}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 20,
                }}
              >
                <View style={styles.counterDesign}>
                  <Text>5</Text>
                </View>
                <Text style={styles.textElement}>
                  {form.corporate_name__corporate_name_option5}
                </Text>
              </View>
              <View>
                <Text style={[styles.textElement, {fontSize: 14}]}>
                  {text.steps.step2.labels.label2} :
                  <Text style={{fontSize: 12}}>
                  {form.corporate_name__type_organization}
                  </Text>
                </Text>
                <Text style={[styles.textElement, {fontSize: 14}]}>
                  {text.steps.step2.labels.label3} :
                </Text>
                <Text style={{fontSize: 12}}>
                  {form.corporate_name__type_form}
                  </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      {/* //----------------------- OFFICERS INFORMATION  ---------------------------- */}
      <Page size="LETTER" style={styles.page}>
        <PdfDesing />
        <View style={styles.content}>
          <PdfHeader />
          <View style={styles.body}>
            <Text style={styles.subTitle}>{text.steps.step3.title}</Text>
            <View style={styles.line}></View>
            <View
              style={[
                styles.text,
                {
                  fontSize: 11,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "semibold",
                      fontSize: 12,
                    }}
                  >
                    {form.officers_information__complete_name_officer1}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__email_officer1}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blackLetter}>P: </Text>
                    <Text>{form.officers_information__phone_officer1}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__address_officer1}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.blackLetter,
                        { fontSize: 12, fontWeight: "semibold" },
                      ]}
                    >
                      {form.officers_information__position_officer1}
                    </Text>
                  </View>
                </View>
                <View style={styles.lineBlue}></View>
              </View>
              {form.officers_information__photo_officer1 && (
                <View style={styles.photoContainer}>
                  <Image
                    src={form.officers_information__photo_officer1}
                    style={styles.photo}
                  />
                </View>
              )}
            </View>
            //////////////////////////////
            <View
              style={[
                styles.text,
                {
                  fontSize: 11,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "semibold",
                      fontSize: 12,
                    }}
                  >
                    {form.officers_information__complete_name_officer2}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__email_officer2}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blackLetter}>P: </Text>
                    <Text>{form.officers_information__phone_officer2}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__address_officer2}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.blackLetter,
                        { fontSize: 12, fontWeight: "semibold" },
                      ]}
                    >
                      {form.officers_information__position_officer2}
                    </Text>
                  </View>
                </View>
                <View style={styles.lineBlue}></View>
              </View>
              {form.officers_information__photo_officer2 && (
                <View style={styles.photoContainer}>
                  <Image
                    src={form.officers_information__photo_officer2}
                    style={styles.photo}
                  />
                </View>
              )}
            </View>
            /////////////////////////////
            <View
              style={[
                styles.text,
                {
                  fontSize: 11,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "semibold",
                      fontSize: 12,
                    }}
                  >
                    {form.officers_information__complete_name_officer3}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__email_officer3}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blackLetter}>P: </Text>
                    <Text>{form.officers_information__phone_officer3}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__address_officer3}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.blackLetter,
                        { fontSize: 12, fontWeight: "semibold" },
                      ]}
                    >
                      {form.officers_information__position_officer3}
                    </Text>
                  </View>
                </View>
                <View style={styles.lineBlue}></View>
              </View>
              {form.officers_information__photo_officer3 && (
                <View style={styles.photoContainer}>
                  <Image
                    src={form.officers_information__photo_officer3}
                    style={styles.photo}
                  />
                </View>
              )}
            </View>
            /////////////////////////////
            <View
              style={[
                styles.text,
                {
                  fontSize: 11,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "semibold",
                      fontSize: 12,
                    }}
                  >
                    {form.officers_information__complete_name_officer4}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__email_officer4}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blackLetter}>P: </Text>
                    <Text>{form.officers_information__phone_officer4}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__address_officer4}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.blackLetter,
                        { fontSize: 12, fontWeight: "semibold" },
                      ]}
                    >
                      {form.officers_information__position_officer4}
                    </Text>
                  </View>
                </View>
                <View style={styles.lineBlue}></View>
              </View>
              {form.officers_information__photo_officer4 && (
                <View style={styles.photoContainer}>
                  <Image
                    src={form.officers_information__photo_officer4}
                    style={styles.photo}
                  />
                </View>
              )}
            </View>
            /////////////////////////////
            <View
              style={[
                styles.text,
                {
                  fontSize: 11,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "semibold",
                      fontSize: 12,
                    }}
                  >
                    {form.officers_information__complete_name_officer5}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__email_officer5}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blackLetter}>P: </Text>
                    <Text>{form.officers_information__phone_officer5}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.blueLetter}>E: </Text>
                    <Text>{form.officers_information__address_officer5}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.blackLetter,
                        { fontSize: 12, fontWeight: "semibold" },
                      ]}
                    >
                      {form.officers_information__position_officer5}
                    </Text>
                  </View>
                </View>
                <View style={styles.lineBlue}></View>
              </View>
              {form.officers_information__photo_officer5 && (
                <View style={styles.photoContainer}>
                  <Image
                    src={form.officers_information__photo_officer5}
                    style={styles.photo}
                  />
                </View>
              )}
            </View>
            /////////////////////////////
          </View>
        </View>
      </Page>
      {/* -----------------------REGISTER AGENT------------------------------- */}
      <Page size="LETTER" style={styles.page}>
        <PdfDesing />
        <View style={styles.content}>
          <PdfHeader />
          <View style={styles.body}>
            <Text style={styles.subTitle}>{text.steps.step4.title}</Text>
            <View style={styles.line}></View>
            <View
              style={[
                styles.text,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View>
                <Text style={{ fontWeight: "semibold", paddingVertical: 5, fontSize: 14 }}>
                  {text.steps.step4.labels.label1} :{" "}
                </Text>
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 10,
                    paddingHorizontal: 15,
                  }}
                >
                  {form.register_agent__complete_name}
                </Text>
                <Text style={{ fontWeight: "semibold", paddingVertical: 5, fontSize: 14 }}>
                  {text.steps.step4.labels.label2} :{" "}
                </Text>
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 10,
                    paddingHorizontal: 15,
                  }}
                >
                  {form.register_agent__address}
                </Text>
              </View>
              {form.register_agent__signature && (
                <View
                  style={[
                    styles.signatureContainer,
                    {
                      alignItems: "center",
                    },
                  ]}
                >
                  <Image
                    src={form.register_agent__signature}
                    style={styles.image}
                  />
                  <View style={styles.signatureLine}></View>
                  <Text>{text.steps.step4.labels.label3}</Text>
                </View>
              )}
            </View>
            {/* --------------------------- APPLICANT INFORMATION ----------------------- */}
            <Text style={styles.subTitle}>{text.steps.step5.title}</Text>
            <View style={styles.line}></View>
            <View style={styles.text}>
              <View>
                <Text style={{ fontWeight: "semibold", paddingVertical: 5, fontSize: 14 }}>
                  {text.steps.step5.labels.label1} :{" "}
                </Text>
                <Text style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
                  {form.applicant_information__complete_name}
                </Text>
                <Text style={{ fontWeight: "semibold", paddingVertical: 5, fontSize: 14 }}>
                  {text.steps.step5.labels.label2} :{" "}
                </Text>
                <Text style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
                  {form.applicant_information__ssn_itin}
                </Text>
              </View>
            </View>
            {/* -----------------------NATURE OF BUSINESS------------------------------- */}
            <Text style={styles.subTitle}>{text.steps.step6.title}</Text>
            <View style={styles.line}></View>
            <View style={styles.text}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{ fontWeight: "semibold", paddingVertical: 5, fontSize: 14 }}
                  break
                >
                  {text.steps.step6.labels.label1} :
                </Text>
                <Text
                  style={{
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    marginBottom: 5,
                  }}
                >
                  {form.nature_business__company_activity}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "100px",
                  paddingLeft: "20px",
                  marginTop: 30,
                }}
              >
                ////////////////////////////////////////////
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "120px",
                  }}
                >
                  <View style={styles.signatureContainer}>
                    <Image
                      src={form?.nature_business__signature_1}
                      style={styles.image}
                    />
                    <View style={styles.signatureLine}></View>
                  </View>
                  <Text style={{ fontSize: 10 }}>
                    {form?.nature_business__position_1}
                  </Text>
                </View>
                ////////////////////////////////////////////
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: "20px",
                    width: "120px",
                  }}
                >
                  {form.nature_business__signature_2 && (
                    <View style={styles.signatureContainer}>
                      <Image
                        src={form?.nature_business__signature_2}
                        style={styles.image}
                      />
                      <View style={styles.signatureLine}></View>
                    </View>
                  )}
                  <Text style={{ fontSize: 10 }}>
                    {form?.nature_business__position_2}
                  </Text>
                </View>
                ////////////////////////////////////////////
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: "20px",
                    width: "120px",
                  }}
                >
                  {form.nature_business__signature_3 && (
                    <View style={styles.signatureContainer}>
                      <Image
                        src={form?.nature_business__signature_3}
                        style={styles.image}
                      />
                      <View style={styles.signatureLine}></View>
                    </View>
                  )}
                  <Text style={{ fontSize: 10 }}>
                    {form?.nature_business__position_3}
                  </Text>
                </View>
                ////////////////////////////////////////////
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfIncorporation;
