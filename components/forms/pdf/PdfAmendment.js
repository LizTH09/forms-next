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
    content: {
      width: "100vh",
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
    subTitle: {
      fontSize: 16,
      fontWeight: "semibold",
      color: "#2CAF95",
    },
  });
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER">
        <PDFDesing />
        <View style={stylesPdf.content}>
          <PdfHeader />
          <View style={stylesPdf.title}>
            <Text>COMPANY AMENDMENT</Text>
            <Text style={stylesPdf.subTitle}>{text.steps.step1.title}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
