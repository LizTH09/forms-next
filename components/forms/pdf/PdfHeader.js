import { Text, View, StyleSheet, Svg, Path, Image } from "@react-pdf/renderer";
// import logo from "../../../public/infoLogo.jpg";
const styles = StyleSheet.create({
  contactInfoCard: {
    position: "absolute",
    right: "20px",
    top: "6vh",
    width: "30vw",
  },
});

const PdfHeader = () => {
  return (
    <View style={styles.contactInfoCard} wrap={false}>
        <Image src="/assets/infoLogo.jpg" source="Info Logo" />
    </View>
  );
};

export default PdfHeader;
