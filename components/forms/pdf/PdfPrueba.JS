import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

const PdfPrueba = ({ text, form, date }) => {
//   const title = text.steps.step1.title;
  return (
    <Document>
      <Page>
        <View>
          <Text>{text.steps.step1.title}</Text>
          <Text>{form.company_information__company_name}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfPrueba;
