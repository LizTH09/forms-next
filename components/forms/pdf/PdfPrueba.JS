import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

const PdfPrueba = ({text, form, date}) => {
  return (
    <Document>
        <Page>
            <View>
                <Text>{text.steps.step2.title}</Text>
            </View>
        </Page>
    </Document>
  )
}

export default PdfPrueba;