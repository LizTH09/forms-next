import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import PDFDesing from "./PdfDesing";
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

const PdfAmendment = ({ text, form, date }) => {
  const stylesPdf = StyleSheet.create({
    content: {
      width: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      // fontFamily: "Montserrat",
    },
    marginDecoration: {
      width: "7vw",
      height: "100vh",
      backgroundColor: "#2CAF95",
      position: "absolute",
      top: 0,
      left: 0,
    },
    desing: {
      backgroundColor: "#eaeaebd8",
      marginTop: "6vh",
      height: "9vh",
      width: "100%",
      position: "absolute",
    },
    contactInfoCard: {
      position: "absolute",
      right: "6vh",
      top: "6vh",
      width: "60vw",
    },
    image: {
      width: "30vw",
    },
    title: {
      width: "50vw",
      height: "9vh",
      position: "absolute",
      left: "7vh",
      top: "6vh",
      fontSize: 20,
      textAlign: "left",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
    },
    body: {
      position: "absolute",
      height: "70vh",
      width: "80vw",
      top: "17vh",
      left: "9vw",
    },
    subTitle: {
      fontSize: 16,
      fontWeight: "semibold",
      color: "#2CAF95",
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#e1e2e2d3",
      marginBottom: 20,
    },
  });
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER">
        <View style={stylesPdf.marginDecoration}>
          <View style={stylesPdf.desing}></View>
        </View>
        <View style={stylesPdf.content}>
          <View style={stylesPdf.contactInfoCard}>
            <Image
              style={stylesPdf.image}
              src="/assets/infoLogo.jpg"
              source="Info Logo"
            />
          </View>
          <View style={stylesPdf.title}>
            <Text>COMPANY AMENDMENT</Text>
          </View>
          <View style={stylesPdf.body}>
            <Text style={stylesPdf.subTitle}>{text.steps.step1.title}</Text>
            <View style={stylesPdf.line}></View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label1} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__company_name}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label2} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__tax_id}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label3} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__phone}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label4} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__email}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label5} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__document_number}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label6} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__type_organization}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label7} :{" "}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputValue}>
                {form.company_information__new_name}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label8} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__principal_address}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label9} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__principal_city}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label10} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__principal_state}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label11} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__principal_zip_code}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label12} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__secondary_address}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label9} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__secondary_city}
              </Text>
            </View>
          </View>
          <View style={stylesPdftwoColumn}>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label10} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__secondary_state}
              </Text>
            </View>
            <View style={stylesPdfcolumn}>
              <Text style={stylesPdfinputLabel}>
                {text.steps.step1.labels.label11} :{" "}
              </Text>
              <Text style={stylesPdfinputValue}>
                {form.company_information__secondary_zip_code}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
