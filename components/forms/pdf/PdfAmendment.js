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

const PdfAmendment = ({ text, form, date }) => {
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
    subtitle: {
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
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
