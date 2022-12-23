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
        <Page>{text.steps.step2.title}</Page>
    </Document>
  )
}

export default PdfPrueba;