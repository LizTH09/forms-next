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
  const stylesPdf = StyleSheet.create({
    completePage: {
      display: "flex",
      flexDirection: "row",
      fontFamily: "Montserrat",
      width: "100vw",
      height: "100vh",
    },
    content: {
      width: "93vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
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
    },
  });
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER">
        <View style={stylesPdf.completePage}>
          <PDFDesing />
          <View style={stylesPdf.content}>
            <Text style={stylesPdf.title}>COMPANY AMENDMENT</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
