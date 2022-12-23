import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { useEffect } from "react";
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
  useEffect(() => {
    console.log("on ta el pdf");
  }, []);

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
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#e1e2e2d3",
      marginBottom: 20,
    },
    blueLetter: {
      color: "#2CAF95",
      fontWeight: "semibold",
    },
    blackLetter: {
      fontWeight: "semibold",
      textAlign: "center",
    },
    personalInformation: {
      display: "flex",
      flexDirection: "row",
      fontSize: 11,
      marginBottom: 15,
    },
    subTitle: {
      fontSize: 16,
      fontWeight: "semibold",
      color: "#2CAF95",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      width: "530px",
      gap: "8px",
    },
    textColumn: {
      paddingTop: 5,
      paddingBottom: 10,
    },
    twoColumn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    inputInformation: {
      fontWeight: "semibold",
      paddingVertical: 5,
      width: "100%",
    },
    text: {
      fontSize: 12,
      margin: 5,
      marginBottom: 20,
    },
    counterDesign: {
      border: "1px solid #9f9f9f",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: "20px",
      color: "#9f9f9f",
    },
    textElement: {
      paddingVertical: 10,
    },
    lineBlue: {
      width: "30%",
      height: 2,
      borderRadius: 5,
      backgroundColor: "#2CAF95",
      marginTop: 15,
    },
    signatureContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: "30px",
      height: "80px",
      width: "60px",
    },
    signatureLine: {
      height: 1,
      width: 100,
      backgroundColor: "black",
      marginVertical: 5,
    },
    photoContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "80px",
      height: "60px",
      marginRight: "10px",
    },
    photo: {
      borderRadius: "15px",
      height: "100%",
      // maxWidth: "120px",
    },
    image: {
      width: 80,
      height: 60,
    },
  });
  return (
    <Document title="PDFAmendment">
      <Page></Page>
    </Document>
  );
};

export default PdfAmendment;
