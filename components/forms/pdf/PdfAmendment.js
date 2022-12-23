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
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Montserrat",
  },
  content: {
    width: "90vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
});
const PdfAmendment = ({ text, form, date }) => {
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER" style={styles.page}>
        <PdfDesing />
        <View style={styles.content}>
          <PdfHeader />
          <View>
            <View>
              <Text>{text.steps.step1.title}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
