import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

const PdfAmendment = ({ text, form, date }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: "30px",
    },
  });
  console.log("on ta el pdf");
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER">
        <View style={styles.title}>
          <Text>{text.steps.step1.title}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
