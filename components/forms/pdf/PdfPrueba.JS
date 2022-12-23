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
  return (
    <Document>
      <Page styles={styles.page}>
        <View style={styles.content}>
          <Text>Hola</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfPrueba;
