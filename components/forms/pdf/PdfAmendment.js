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
  console.log("on ta el pdf");
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER">
        <View>
          <Text>Hola</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
