import { Document, Page, Image, pdf } from "@react-pdf/renderer";
import html2canvas from "html2canvas";

export async function renderDivToBlob(divElement: HTMLDivElement) {
  const canvas = await html2canvas(divElement);
  const dataUrl = canvas.toDataURL("image/png");

  return await pdf(
    <Document>
      <Page size="A4" style={{ padding: "0.5in" }}>
        <Image src={dataUrl} />
      </Page>
    </Document>
  ).toBlob();
}
