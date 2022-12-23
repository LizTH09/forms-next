import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Image,
  } from "@react-pdf/renderer";
  import PdfDesing from "./PdfDesing";
  import PdfHeader from "./PdfHeader";
  Font.register({
    family: "Montserrat",
    fonts: [
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf",
      },
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf",
        fontWeight: "semibold",
      },
      {
        src: "http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-Y3tcoqK5.ttf",
        fontWeight: "bold",
      },
    ],
  });
  const PdfPrueba = ({ text, form, date }) => {
    console.log("on ta el pdf");
    // const styles = StyleSheet.create({
    //   page: {
    //     display: "flex",
    //     flexDirection: "row",
    //     fontFamily: "Montserrat",
    //   },
    //   content: {
    //     width: "90vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     // backgroundColor: "red",
    //     position: "relative",
    //   },
    //   body: {
    //     marginLeft: 61,
    //     marginRight: 80,
    //     marginVertical: 15,
    //     marginBottom: 40,
    //   },
    //   title: {
    //     // backgroundColor: "blue",
    //     position: "absolute",
    //     left: 0,
    //     top: "-60px",
    //     fontSize: 20,
    //     width: "65%",
    //     textTransform: "uppercase",
    //     textAlign: "left",
    //     fontWeight: "bold",
    //     display: "flex",
    //     flexWrap: "wrap",
    //   },
    //   line: {
    //     width: "100%",
    //     height: 1,
    //     backgroundColor: "#e1e2e2d3",
    //     marginBottom: 20,
    //   },
    //   blueLetter: {
    //     color: "#2CAF95",
    //     fontWeight: "semibold",
    //   },
    //   blackLetter: {
    //     fontWeight: "semibold",
    //     textAlign: "center",
    //   },
    //   personalInformation: {
    //     display: "flex",
    //     flexDirection: "row",
    //     fontSize: 11,
    //     marginBottom: 15,
    //   },
    //   subTitle: {
    //     fontSize: 16,
    //     fontWeight: "semibold",
    //     color: "#2CAF95",
    //   },
    //   column: {
    //     display: "flex",
    //     flexDirection: "column",
    //     width: "530px",
    //     gap: "8px",
    //   },
    //   textColumn: {
    //     // marginLeft: "20px",
    //     paddingTop: 5,
    //     paddingBottom: 10,
    //   },
    //   twoColumn: {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //   },
    //   inputInformation: {
    //     fontWeight: "semibold",
    //     paddingVertical: 5,
    //     width: "100%",
    //   },
    //   text: {
    //     fontSize: 12,
    //     margin: 5,
    //     marginBottom: 20,
    //   },
    //   counterDesign: {
    //     border: "1px solid #9f9f9f",
    //     borderRadius: "50%",
    //     width: "20px",
    //     height: "20px",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginHorizontal: "20px",
    //     color: "#9f9f9f",
    //   },
    //   textElement: {
    //     paddingVertical: 10,
    //   },
    //   lineBlue: {
    //     width: "30%",
    //     height: 2,
    //     borderRadius: 5,
    //     backgroundColor: "#2CAF95",
    //     marginTop: 15,
    //   },
    //   signatureContainer: {
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     marginRight: "30px",
    //     height: "80px",
    //     width: "60px",
    //   },
    //   signatureLine: {
    //     height: 1,
    //     width: 100,
    //     backgroundColor: "black",
    //     marginVertical: 5,
    //   },
    //   photoContainer: {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignContent: "center",
    //     width: "80px",
    //     height: "60px",
    //     marginRight: "10px",
    //   },
    //   photo: {
    //     borderRadius: "15px",
    //     height: "100%",
    //     // maxWidth: "120px",
    //   },
    //   image: {
    //     width: 80,
    //     height: 60,
    //   },
    // });
    return (
      <Document title="PDFAmendment">
        <Page size="LETTER" style={styles.page}>
          <PdfDesing />
          <View style={styles.content}>
            <PdfHeader />
            <View style={styles.body}>
              <View style={styles.title}>
                <Text>COMPANY AMENDMENT</Text>
              </View>
              <Text style={styles.subTitle}>{text.steps.step1.title}</Text>
              <View style={styles.line}></View>
              <View
                style={[
                  styles.text,
                  {
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label1} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__company_name}
                    </Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label2} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__tax_id}
                    </Text>
                  </View>
                </View>
                //////////////////////////
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label3} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__phone}
                    </Text>
                  </View>
                  /////////////////////////
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label4} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__email}
                    </Text>
                  </View>
                </View>
                /////////////////////////
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label5} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__document_number}
                    </Text>
                  </View>
                  /////////////////////////
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label6} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__type_organization}
                    </Text>
                  </View>
                </View>
                /////////////////////////
                <View style={styles.column}>
                  <Text style={styles.inputInformation}>
                    {text.steps.step1.labels.label7} :{" "}
                  </Text>
                </View>
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.textColumn}>
                      {form.company_information__new_name}
                    </Text>
                  </View>
                </View>
                /////////////////////////
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label8} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__principal_address}
                    </Text>
                  </View>
                </View>
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label9} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__principal_city}
                    </Text>
                  </View>
                  /////////////////////////
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label10} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__principal_state}
                    </Text>
                  </View>
                </View>
                /////////////////////////
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label11} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__principal_zip_code}
                    </Text>
                  </View>
                </View>
                /////////////////////////
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label12} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__secondary_address}
                    </Text>
                  </View>
                  /////////////////////////
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label9} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__secondary_city}
                    </Text>
                  </View>
                </View>
                /////////////////////////
                <View style={styles.twoColumn}>
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label10} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__secondary_state}
                    </Text>
                  </View>
                  /////////////////////////
                  <View style={styles.column}>
                    <Text style={styles.inputInformation}>
                      {text.steps.step1.labels.label11} :{" "}
                    </Text>
                    <Text style={styles.textColumn}>
                      {form.company_information__secondary_zip_code}
                    </Text>
                  </View>
                </View>
                /////////////////////////
              </View>
            </View>
          </View>
        </Page>
        //////////////////////////////////STEP2/////////////////////////////////////
        <Page size="LETTER" style={styles.page}>
          <PdfDesing />
          <View style={styles.content}>
            <PdfHeader />
            <View style={styles.body}>
              <Text style={styles.subTitle}>{text.steps.step2.title}</Text>
              <View style={styles.line}></View>
              <View
                style={[
                  styles.text,
                  {
                    display: "flex",
                  },
                ]}
              >
                {form.change_officers__signature_officer1 && (
                  <View
                    style={[
                      styles.text,
                      {
                        display: "flex",
                        flexDirection: "column",
                        height: "70px",
                        gap: "10px",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.text,
                        {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignContent: "center",
                          gap: "10px",
                          // maxWidth: "50%",
                        },
                      ]}
                    >
                      {form.change_officers__photo_officer1 && (
                        <View style={styles.photoContainer}>
                          <Image
                            src={form.change_officers__photo_officer1}
                            style={styles.photo}
                          />
                        </View>
                      )}
                      /////////////////////////
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "semibold",
                            fontSize: 10,
                          }}
                        >
                          {form.change_officers__complete_name_officer1}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.blueLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__action_officer1}
                          </Text>
                        </View>
                        {/* -------------------- SIGNATURE--------------------------- */}
                        <View
                          style={[
                            styles.signatureContainer,
                            { width: "auto", height: 30 },
                          ]}
                        >
                          <Image
                            src={form.change_officers__signature_officer1}
                            style={styles.image}
                          />
                          <View style={styles.signatureLine}></View>
                          <Text
                            style={[
                              styles.blackLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__position_officer1}
                          </Text>
                        </View>
                      </View>
                    </View>
                    /////////////////////////
                  </View>
                )}
                ///////////////////////////////////////////
                {form.change_officers__signature_officer2 && (
                  <View
                    style={[
                      styles.text,
                      {
                        display: "flex",
                        flexDirection: "column",
                        height: "70px",
                        gap: "10px",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.text,
                        {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignContent: "center",
                          gap: "10px",
                          // maxWidth: "50%",
                        },
                      ]}
                    >
                      {form.change_officers__photo_officer2 && (
                        <View style={styles.photoContainer}>
                          <Image
                            src={form.change_officers__photo_officer2}
                            style={styles.photo}
                          />
                        </View>
                      )}
                      /////////////////////////
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "semibold",
                            fontSize: 10,
                          }}
                        >
                          {form.change_officers__complete_name_officer2}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.blueLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__action_officer2}
                          </Text>
                        </View>
                        {/* -------------------- SIGNATURE--------------------------- */}
                        <View
                          style={[
                            styles.signatureContainer,
                            { width: "auto", height: 30 },
                          ]}
                        >
                          <Image
                            src={form.change_officers__signature_officer2}
                            style={styles.image}
                          />
                          <View style={styles.signatureLine}></View>
                          <Text
                            style={[
                              styles.blackLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__position_officer2}
                          </Text>
                        </View>
                      </View>
                    </View>
                    /////////////////////////
                  </View>
                )}
                ////////////////////////////////////////////
                {form.change_officers__signature_officer3 && (
                  <View
                    style={[
                      styles.text,
                      {
                        display: "flex",
                        flexDirection: "column",
                        height: "70px",
                        gap: "10px",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.text,
                        {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignContent: "center",
                          gap: "10px",
                          // maxWidth: "50%",
                        },
                      ]}
                    >
                      {form.change_officers__photo_officer3 && (
                        <View style={styles.photoContainer}>
                          <Image
                            src={form.change_officers__photo_officer3}
                            style={styles.photo}
                          />
                        </View>
                      )}
                      /////////////////////////
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "semibold",
                            fontSize: 10,
                          }}
                        >
                          {form.change_officers__complete_name_officer3}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.blueLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__action_officer3}
                          </Text>
                        </View>
                        {/* -------------------- SIGNATURE--------------------------- */}
                        <View
                          style={[
                            styles.signatureContainer,
                            { width: "auto", height: 30 },
                          ]}
                        >
                          <Image
                            src={form.change_officers__signature_officer3}
                            style={styles.image}
                          />
                          <View style={styles.signatureLine}></View>
                          <Text
                            style={[
                              styles.blackLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__position_officer3}
                          </Text>
                        </View>
                      </View>
                    </View>
                    /////////////////////////
                  </View>
                )}
                ////////////////////////////////////////////
                {form.change_officers__signature_officer4 && (
                  <View
                    style={[
                      styles.text,
                      {
                        display: "flex",
                        flexDirection: "column",
                        height: "70px",
                        gap: "10px",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.text,
                        {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignContent: "center",
                          gap: "10px",
                          // maxWidth: "50%",
                        },
                      ]}
                    >
                      {form.change_officers__photo_officer4 && (
                        <View style={styles.photoContainer}>
                          <Image
                            src={form.change_officers__photo_officer4}
                            style={styles.photo}
                          />
                        </View>
                      )}
                      /////////////////////////
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "semibold",
                            fontSize: 10,
                          }}
                        >
                          {form.change_officers__complete_name_officer4}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.blueLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__action_officer4}
                          </Text>
                        </View>
                        {/* -------------------- SIGNATURE--------------------------- */}
                        <View
                          style={[
                            styles.signatureContainer,
                            { width: "auto", height: 30 },
                          ]}
                        >
                          <Image
                            src={form.change_officers__signature_officer4}
                            style={styles.image}
                          />
                          <View style={styles.signatureLine}></View>
                          <Text
                            style={[
                              styles.blackLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__position_officer4}
                          </Text>
                        </View>
                      </View>
                    </View>
                    /////////////////////////
                  </View>
                )}
                ////////////////////////////////////////////
                {form.change_officers__signature_officer5 && (
                  <View
                    style={[
                      styles.text,
                      {
                        display: "flex",
                        flexDirection: "column",
                        height: "70px",
                        gap: "10px",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.text,
                        {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignContent: "center",
                          gap: "10px",
                          // maxWidth: "50%",
                        },
                      ]}
                    >
                      {form.change_officers__photo_officer5 && (
                        <View style={styles.photoContainer}>
                          <Image
                            src={form.change_officers__photo_officer5}
                            style={styles.photo}
                          />
                        </View>
                      )}
                      /////////////////////////
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "semibold",
                            fontSize: 10,
                          }}
                        >
                          {form.change_officers__complete_name_officer5}
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.blueLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__action_officer5}
                          </Text>
                        </View>
                        {/* -------------------- SIGNATURE--------------------------- */}
                        <View
                          style={[
                            styles.signatureContainer,
                            { width: "auto", height: 30 },
                          ]}
                        >
                          <Image
                            src={form.change_officers__signature_officer5}
                            style={styles.image}
                          />
                          <View style={styles.signatureLine}></View>
                          <Text
                            style={[
                              styles.blackLetter,
                              { fontSize: 10, fontWeight: "semibold" },
                            ]}
                          >
                            {form.change_officers__position_officer5}
                          </Text>
                        </View>
                      </View>
                    </View>
                    /////////////////////////
                  </View>
                )}
                ////////////////////////////////////////////
              </View>
            </View>
          </View>
        </Page>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <View
                  style={[
                    styles.text,
                    {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text style={styles.inputInformation}>
                    {text.steps.step3.labels.label1} :{" "}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 5,
                      paddingBottom: 10,
                      paddingHorizontal: 15,
                    }}
                  >
                    {form.agent_register__complete_name}
                  </Text>
                  <Text style={styles.inputInformation}>
                    {text.steps.step3.labels.label2} :{" "}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 5,
                      paddingBottom: 10,
                      paddingHorizontal: 15,
                    }}
                  >
                    {form.agent_register__address}
                  </Text>
                </View>
                <Text style={styles.subTitle}>{text.steps.step4.title}</Text>
                <View style={styles.line}></View>
                <View
                  style={{
                    width: "100%",
                    marginLeft: 30,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {form.authorization__signature_1 && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={[
                          styles.signatureContainer,
                          { width: 90, height: 70, marginBottom: 30 },
                        ]}
                      >
                        <Image
                          src={form.authorization__signature_1}
                          style={styles.image}
                        />
                        <View style={styles.signatureLine}></View>
                        <Text style={{ fontSize: 10 }}>
                          {form.authorization__position_1}
                        </Text>
                      </View>
                      <Text style={styles.inputInformation}>
                        {form.authorization__complete_name_1}
                      </Text>
                    </View>
                  )}
                  <Text></Text>
                  {form.authorization__signature_2 && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={[
                          styles.signatureContainer,
                          { width: 90, height: 70, marginBottom: 30 },
                        ]}
                      >
                        <Image
                          src={form.authorization__signature_2}
                          style={styles.image}
                        />
                        <View style={styles.signatureLine}></View>
                        <Text style={{ fontSize: 10 }}>
                          {form.authorization__position_2}
                        </Text>
                      </View>
                      <Text style={styles.inputInformation}>
                        {form.authorization__complete_name_2}
                      </Text>
                    </View>
                  )}
                  <Text></Text>
                  {form.authorization__signature_3 && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={[
                          styles.signatureContainer,
                          { width: 90, height: 70, marginBottom: 30 },
                        ]}
                      >
                        <Image
                          src={form.authorization__signature_3}
                          style={styles.image}
                        />
                        <View style={styles.signatureLine}></View>
                        <Text style={{ fontSize: 10 }}>
                          {form.authorization__position_3}
                        </Text>
                      </View>
                      <Text style={styles.inputInformation}>
                        {form.authorization__complete_name_3}
                      </Text>
                    </View>
                  )}
                </View>
                <Text></Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  };
  
  export default PdfPrueba;
  