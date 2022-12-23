import { View, StyleSheet } from "@react-pdf/renderer";

const PDFDesing = () => {
  const styles = StyleSheet.create({
    marginDecoration: {
      width: "7vw",
      height: "100vh",
      backgroundColor: "#2CAF95",
      position: "relative",
    },
    desing: {
      backgroundColor: "#eaeaebd8",
      marginTop: "6vh",
      height: "9vh",
      width: "100%",
      position: "absolute",
    },
  });
  return (
    <View style={styles.marginDecoration}>
      <View style={styles.desing}></View>
    </View>
  );
};

export default PDFDesing;
