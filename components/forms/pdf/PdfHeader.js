import { Text, View, StyleSheet, Svg, Path, Image } from "@react-pdf/renderer";
// import logo from "../../../public/infoLogo.jpg";
const styles = StyleSheet.create({
  contactBox: {
    marginTop: "6vh",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginRight: "4vw",
    justifyContent: "flex-end",
  },
  contactInfoCard: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 10,
    fontSize: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    // height: "50px",
    width: "40%",
  },
  contactInfo: {
    height: "3vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  contactInfoCardDesign: {
    display: "flex",
    flexDirection: "column",
    height: "9vh",
  },
  contactInfoCardDesignIcons: {
    height: "3vh",
    width: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PdfHeader = () => {
  return (
    <View style={styles.contactBox} wrap={false}>
      <View style={styles.contactInfoCard} wrap={false}>
        <Image src="/assets/infoLogo.jpg" source="Info Logo" />

        {/* <View style={styles.contactInfo}>
          <Text>Tel: 754-333-1797</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>Fax: 954-301-0210</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>Email: INREP101 @OUTLOOK .COM </Text>
        </View> */}
      </View>
      {/* <View style={styles.contactInfoCardDesign} wrap={false}>
        <View
          style={[
            styles.contactInfoCardDesignIcons,
            { backgroundColor: "#2CAF95" },
          ]}
        >
          {" "}
          <Svg width={16} height={16}>
            <Path
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              stroke="#F6F7EB"
              strokeWidth={0.1}
            />
          </Svg>
        </View>
        <View
          style={[
            styles.contactInfoCardDesignIcons,
            { backgroundColor: "#259881" },
          ]}
        >
          <Svg width={16} height={16}>
            <Path
              d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
              stroke="#F6F7EB"
              strokeWidth={0.1}
            />
            <Path
              d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"
              stroke="#F6F7EB"
              strokeWidth={0.1}
            />
          </Svg>
        </View>
        <View
          style={[
            styles.contactInfoCardDesignIcons,
            { backgroundColor: "#196858" },
          ]}
        >
          <Svg width={16} height={16}>
            <Path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
              stroke="#F6F7EB"
              strokeWidth={0.1}
            />
          </Svg>
        </View>
      </View> */}
    </View>
  );
};

export default PdfHeader;
