import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

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

const stylesPdf = StyleSheet.create({
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
});
const PdfAmendment = ({ text, form, date }) => {
  return (
    <Document title="PDFAmendment">
      <Page size="LETTER">
        <View style={stylesPdf.title}>
          <Text>COMPANY AMENDMENT</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfAmendment;
