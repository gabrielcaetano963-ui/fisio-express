import type { Exercise } from "@/data/exercises";
import { createClientOnlyFn } from "@tanstack/react-start";

export type PrescriptionItem = {
  exercise: Exercise;
  series: string;
  repetitions: string;
  duration: string;
  frequency: string;
  observation: string;
};

export type Prescription = {
  professional: string;
  patient: string;
  items: PrescriptionItem[];
};

type PdfDocument = InstanceType<(typeof import("jspdf"))["jsPDF"]>;

function cleanFileName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function drawPerson(doc: PdfDocument, x: number, y: number, variant: number) {
  doc.setDrawColor(18, 56, 82);
  doc.setLineWidth(1.3);
  doc.circle(x + 19, y + 8, 4);
  doc.line(x + 19, y + 12, x + 19, y + 28);
  doc.line(x + 19, y + 28, x + 12, y + 40);
  doc.line(x + 19, y + 28, x + 27, y + 40);
  if (variant % 4 === 0) {
    doc.line(x + 19, y + 16, x + 9, y + 5);
    doc.line(x + 19, y + 16, x + 30, y + 5);
  } else if (variant % 4 === 1) {
    doc.line(x + 19, y + 16, x + 8, y + 20);
    doc.line(x + 8, y + 20, x + 3, y + 14);
    doc.line(x + 19, y + 16, x + 30, y + 20);
    doc.line(x + 30, y + 20, x + 35, y + 14);
  } else if (variant % 4 === 2) {
    doc.line(x + 19, y + 16, x + 8, y + 29);
    doc.line(x + 19, y + 16, x + 31, y + 20);
  } else {
    doc.line(x + 19, y + 16, x + 6, y + 15);
    doc.line(x + 19, y + 16, x + 32, y + 15);
  }
  doc.setDrawColor(57, 168, 142);
  doc.setLineWidth(1.8);
  doc.line(x + 15, y + 17, x + 23, y + 17);
}

function addHeader(doc: PdfDocument, professional: string, patient: string) {
  doc.setFillColor(18, 56, 82);
  doc.rect(0, 0, 210, 31, "F");
  doc.setFillColor(57, 168, 142);
  doc.circle(18, 15, 7, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("FisioExercícios", 29, 13);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text("ORIENTAÇÕES DE EXERCÍCIOS", 29, 20);
  doc.setTextColor(18, 56, 82);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text(patient ? `Paciente: ${patient}` : "Orientação personalizada", 15, 41);
  doc.setFont("helvetica", "normal");
  const date = new Intl.DateTimeFormat("pt-BR").format(new Date());
  doc.text(`Data: ${date}`, 195, 41, { align: "right" });
  if (professional) doc.text(`Profissional: ${professional}`, 15, 47);
}

function addFooter(doc: PdfDocument, page: number) {
  doc.setDrawColor(219, 229, 232);
  doc.line(15, 283, 195, 283);
  doc.setTextColor(99, 115, 122);
  doc.setFontSize(7);
  doc.text(
    "Material personalizado pelo profissional responsável. Siga somente as orientações recebidas.",
    15,
    289,
  );
  doc.text(`${page}`, 195, 289, { align: "right" });
}

export const createExercisePdf = createClientOnlyFn(async (prescription: Prescription) => {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const blockHeight = 72;
  let page = 1;
  let y = 54;

  addHeader(doc, prescription.professional, prescription.patient);

  prescription.items.forEach((item, index) => {
    if (y + blockHeight > 278) {
      addFooter(doc, page);
      doc.addPage();
      page += 1;
      y = 45;
      addHeader(doc, prescription.professional, prescription.patient);
      y = 54;
    }

    doc.setFillColor(247, 250, 250);
    doc.setDrawColor(220, 231, 233);
    doc.roundedRect(15, y, 180, 65, 3, 3, "FD");
    doc.setFillColor(232, 247, 242);
    doc.roundedRect(20, y + 6, 42, 48, 2, 2, "F");
    drawPerson(doc, 22, y + 8, index);

    doc.setTextColor(18, 56, 82);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(`${index + 1}. ${item.exercise.name}`, 68, y + 10);
    doc.setFontSize(7.5);
    doc.setTextColor(57, 140, 119);
    doc.text(
      `${item.exercise.region.toUpperCase()}  •  ${item.exercise.category.toUpperCase()}`,
      68,
      y + 16,
    );

    doc.setTextColor(53, 65, 70);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    const instructions = item.exercise.instructions.join(" ");
    doc.text(doc.splitTextToSize(instructions, 118).slice(0, 3), 68, y + 23, {
      lineHeightFactor: 1.35,
    });

    doc.setFont("helvetica", "bold");
    doc.setTextColor(18, 56, 82);
    doc.text("Prescrição", 68, y + 39);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(53, 65, 70);
    const prescriptionLine = [
      item.series && `${item.series} séries`,
      item.repetitions && `${item.repetitions} repetições`,
      item.duration && `Tempo: ${item.duration}`,
      item.frequency && `Frequência: ${item.frequency}`,
    ]
      .filter(Boolean)
      .join("  •  ");
    doc.text(prescriptionLine || "Conforme orientação do profissional", 68, y + 45);

    if (item.observation) {
      doc.setFont("helvetica", "bold");
      doc.text("Observação:", 68, y + 52);
      doc.setFont("helvetica", "normal");
      doc.text(doc.splitTextToSize(item.observation, 96).slice(0, 2), 86, y + 52, {
        lineHeightFactor: 1.25,
      });
    }
    y += blockHeight;
  });

  addFooter(doc, page);
  const suffix = cleanFileName(prescription.patient || "exercicios");
  const fileName = `orientacoes-${suffix || "exercicios"}.pdf`;
  const blob = doc.output("blob");
  return { blob, fileName };
});

export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
}
