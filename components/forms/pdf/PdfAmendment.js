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

const PdfAmendment = ({ text, form, date }) => {
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
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
      marginVertical: 15,
      marginBottom: 40,
    },
    title: {
      position: "absolute",
      left: 0,
      top: "-60px",
      fontSize: 20,
      width: "65%",
      textTransform: "uppercase",
      textAlign: "left",
      fontWeight: "bold",
      display: "flex",
      flexWrap: "wrap",
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#e1e2e2d3",
      marginBottom: 20,
    },
    contentStep: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "space-between",
      margin: 5,
      marginBottom: 20,
      fontSize: 12,
    },
    twoColumn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      width: "530px",
      gap: "8px",
    },
    inputLabel: {
      fontWeight: "semibold",
      paddingVertical: 5,
      width: "100%",
    },
    inputValue: {
      paddingTop: 5,
      paddingBottom: 10,
    },
  });
  console.log("on ta el pdf");
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER" style={styles.page}>
        <PdfDesing />
        <View style={styles.content}>
          <PdfHeader />
          <View style={styles.body}>
            <View style={styles.title}>
              <Text>{text.steps.step1.title}</Text>
            </View>
            <Text style={styles.subTitle}>{text.steps.step1.title}</Text>
            <View style={styles.line}></View>
            <View style={styles.contentStep}>
              <View style={styles.twoColumn}>
                <View style={styles.column}>
                  <Text style={styles.inputLabel}>
                    {text.steps.step1.labels.label1} :{" "}
                  </Text>
                  <Text style={styles.inputValue}>
                    {form.company_information__company_name}
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.inputLabel}>
                    {text.steps.step1.labels.label2} :{" "}
                  </Text>
                  <Text style={styles.inputValue}>
                    {form.company_information__tax_id}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
