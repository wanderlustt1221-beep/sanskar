import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

async function generateAdmitCardPDF(reg: any): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontNormal = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const navyDark = rgb(0.08, 0.17, 0.40);
  const navyMid = rgb(0.13, 0.26, 0.55);
  const navyLight = rgb(0.88, 0.91, 0.97);
  const gold = rgb(0.85, 0.68, 0.10);
  const white = rgb(1, 1, 1);
  const darkText = rgb(0.10, 0.12, 0.18);
  const midText = rgb(0.38, 0.42, 0.50);
  const lightBg = rgb(0.96, 0.97, 0.99);
  const borderGray = rgb(0.82, 0.85, 0.90);

  const W = 595;
  const H = 842;
  const ML = 40;
  const MR = 40;
  const IW = W - ML - MR;

  page.drawRectangle({ x: 12, y: 12, width: W - 24, height: H - 24, borderColor: navyDark, borderWidth: 2.5 });
  page.drawRectangle({ x: 18, y: 18, width: W - 36, height: H - 36, borderColor: gold, borderWidth: 0.7 });

  const headerH = 108;
  const headerY = H - 12 - headerH;

  page.drawRectangle({ x: 12, y: headerY, width: W - 24, height: headerH, color: navyDark });
  page.drawRectangle({ x: 12, y: headerY - 4, width: W - 24, height: 4, color: gold });

  const instText = "SANSKAR GROUP OF INSTITUTIONS";
  page.drawText(instText, {
    x: (W - fontBold.widthOfTextAtSize(instText, 15)) / 2,
    y: headerY + headerH - 30,
    size: 15,
    font: fontBold,
    color: white,
  });

  page.drawRectangle({
    x: ML + 40,
    y: headerY + headerH - 38,
    width: IW - 80,
    height: 0.6,
    color: gold,
  });

  const examText = "SCHOLARSHIP EXAMINATION 2026";
  page.drawText(examText, {
    x: (W - fontNormal.widthOfTextAtSize(examText, 10.5)) / 2,
    y: headerY + headerH - 52,
    size: 10.5,
    font: fontNormal,
    color: rgb(0.78, 0.83, 0.94),
  });

  const admitText = "ADMIT CARD";
  page.drawText(admitText, {
    x: (W - fontBold.widthOfTextAtSize(admitText, 22)) / 2,
    y: headerY + headerH - 82,
    size: 22,
    font: fontBold,
    color: gold,
  });

  const photoW = 108;
  const photoH = 130;
  const photoX = W - MR - photoW;
  const photoY = headerY - 4 - photoH - 16;

  page.drawRectangle({
    x: photoX,
    y: photoY,
    width: photoW,
    height: photoH,
    color: lightBg,
    borderColor: navyMid,
    borderWidth: 1.2,
  });

  page.drawRectangle({
    x: photoX + 6,
    y: photoY + 6,
    width: photoW - 12,
    height: photoH - 12,
    borderColor: borderGray,
    borderWidth: 0.5,
  });

  let photoLY = photoY + photoH / 2 + 8;
  for (const ln of ["STUDENT", "PHOTO"]) {
    const lW = fontOblique.widthOfTextAtSize(ln, 9.5);
    page.drawText(ln, {
      x: photoX + (photoW - lW) / 2,
      y: photoLY,
      size: 9.5,
      font: fontOblique,
      color: midText,
    });
    photoLY -= 14;
  }

  const affixText = "Affix Photograph";
  page.drawText(affixText, {
    x: photoX + (photoW - fontNormal.widthOfTextAtSize(affixText, 7)) / 2,
    y: photoY + 9,
    size: 7,
    font: fontNormal,
    color: borderGray,
  });

  const detailsX = ML;
  const detailsW = W - MR - photoW - 20 - ML;
  const detailsTopY = headerY - 4 - 20;

  page.drawText("CANDIDATE DETAILS", {
    x: detailsX,
    y: detailsTopY,
    size: 8.5,
    font: fontBold,
    color: navyMid,
  });

  page.drawRectangle({
    x: detailsX,
    y: detailsTopY - 5,
    width: detailsW,
    height: 1,
    color: navyMid,
  });

  const candidateFields: [string, string][] = [
    ["Name", reg.studentName],
    ["Father's Name", reg.fatherName],
    ["Mother's Name", reg.motherName],
    ["Gender", reg.gender],
    ["Date of Birth", reg.dob],
    ["School", reg.school],
    ["Class", reg.class],
  ];

  const rowH = 18;
  const labelX = detailsX + 6;
  const colonX = detailsX + 104;
  const valueX = detailsX + 114;
  let rowY = detailsTopY - 18;

  for (let i = 0; i < candidateFields.length; i++) {
    const [label, value] = candidateFields[i];
    if (i % 2 === 0) {
      page.drawRectangle({
        x: detailsX,
        y: rowY - 4,
        width: detailsW,
        height: rowH,
        color: lightBg,
      });
    }

    page.drawText(label, { x: labelX, y: rowY + 1, size: 8.5, font: fontBold, color: midText });
    page.drawText(":", { x: colonX, y: rowY + 1, size: 8.5, font: fontBold, color: midText });
    page.drawText(value || "—", { x: valueX, y: rowY + 1, size: 9, font: fontBold, color: darkText });

    rowY -= rowH + 1;
  }

  const rollBannerY = Math.min(rowY, photoY) - 16;

  page.drawRectangle({ x: ML, y: rollBannerY, width: IW, height: 30, color: navyDark });

  const rollLabelText = "ROLL NUMBER :";
  page.drawText(rollLabelText, {
    x: ML + 14,
    y: rollBannerY + 9,
    size: 9,
    font: fontBold,
    color: rgb(0.78, 0.83, 0.94),
  });

  const rollLabelW = fontBold.widthOfTextAtSize(rollLabelText, 9);
  page.drawText(reg.rollNumber, {
    x: ML + 14 + rollLabelW + 10,
    y: rollBannerY + 8,
    size: 13,
    font: fontBold,
    color: gold,
  });

  const div1Y = rollBannerY - 16;
  page.drawRectangle({ x: ML, y: div1Y, width: IW, height: 0.7, color: borderGray });

  const col2TopY = div1Y - 16;
  const colHalf = (IW - 16) / 2;

  page.drawText("EXAM DETAILS", { x: ML, y: col2TopY, size: 8.5, font: fontBold, color: navyMid });
  page.drawRectangle({ x: ML, y: col2TopY - 5, width: colHalf, height: 1, color: navyMid });

  const examFields: [string, string][] = [
    ["Date", "8 March 2026"],
    ["Duration", "2 Hours"],
    ["Mode", "Offline"],
    ["Reporting Time", "9:00 AM"],
    ["Syllabus", "Previous Class Curriculum"],
  ];

  let examRowY = col2TopY - 20;
  for (let i = 0; i < examFields.length; i++) {
    const [lbl, val] = examFields[i];
    if (i % 2 === 0) {
      page.drawRectangle({ x: ML, y: examRowY - 3, width: colHalf, height: 16, color: lightBg });
    }

    page.drawText(`${lbl}:`, { x: ML + 6, y: examRowY, size: 8.5, font: fontBold, color: midText });
    page.drawText(val, { x: ML + 105, y: examRowY, size: 8.5, font: fontBold, color: darkText });

    examRowY -= 17;
  }

  const rightX = ML + colHalf + 16;

  page.drawText("EXAMINATION CENTRE", { x: rightX, y: col2TopY, size: 8.5, font: fontBold, color: navyMid });
  page.drawRectangle({ x: rightX, y: col2TopY - 5, width: colHalf, height: 1, color: navyMid });

  const centreBoxH = 80;
  const centreBoxW = colHalf;
  const centreBoxY2 = col2TopY - 22;

  page.drawRectangle({
    x: rightX,
    y: centreBoxY2 - centreBoxH + 16,
    width: centreBoxW,
    height: centreBoxH,
    color: lightBg,
    borderColor: navyLight,
    borderWidth: 0.8,
  });

  let centreLY = centreBoxY2 - centreBoxH + 16 + centreBoxH - 18;

  for (const [txt, sz] of [
    ["Exam Centre", 9],
    ["Sanskar School", 11],
    ["Danta, Sikar", 9],
  ] as [string, number][]) {
    const font = sz >= 11 ? fontBold : fontNormal;
    const tw = font.widthOfTextAtSize(txt, sz);

    page.drawText(txt, {
      x: rightX + (centreBoxW - tw) / 2,
      y: centreLY,
      size: sz,
      font,
      color: sz >= 11 ? navyDark : midText,
    });

    centreLY -= sz + 7;
  }

  const div2Y = Math.min(examRowY, centreBoxY2 - centreBoxH + 10) - 10;
  page.drawRectangle({ x: ML, y: div2Y, width: IW, height: 0.7, color: borderGray });

  const instrTopY = div2Y - 16;

  page.drawText("IMPORTANT INSTRUCTIONS", { x: ML, y: instrTopY, size: 8.5, font: fontBold, color: navyMid });
  page.drawRectangle({ x: ML, y: instrTopY - 5, width: IW, height: 1, color: navyMid });

  let instrY = instrTopY - 22;

  for (const line of [
    "Bring this admit card to the examination centre without fail.",
    "Arrive at the centre at least 30 minutes before the scheduled reporting time.",
    "Carry a valid photo ID proof (Aadhar Card / School ID) on exam day.",
    "Electronic gadgets including mobile phones are strictly prohibited inside.",
    "Follow all instructions issued by the invigilator during the examination.",
  ]) {
    page.drawCircle({ x: ML + 7, y: instrY + 4, size: 2.2, color: navyMid });
    page.drawText(line, { x: ML + 17, y: instrY, size: 8.5, font: fontNormal, color: darkText });
    instrY -= 16;
  }

  const footerH = 44;
  const footerY = 22;

  page.drawRectangle({ x: 12, y: footerY, width: W - 24, height: footerH, color: navyDark });
  page.drawRectangle({ x: 12, y: footerY + footerH, width: W - 24, height: 3, color: gold });

  page.drawText("________________________", {
    x: W - MR - 160,
    y: footerY + 24,
    size: 8,
    font: fontNormal,
    color: rgb(0.55, 0.62, 0.78),
  });

  page.drawText("Authorized Signatory", {
    x: W - MR - 148,
    y: footerY + 10,
    size: 7.5,
    font: fontBold,
    color: white,
  });

  page.drawText(
    "This is a computer-generated document and does not require a physical signature.",
    { x: ML + 2, y: footerY + 10, size: 6.5, font: fontOblique, color: rgb(0.55, 0.62, 0.78) }
  );

  return pdfDoc.save();
}

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const adminKey = req.headers.get("x-admin-key");

  if (!adminKey || adminKey !== process.env.ADMIN_SECRET) {
    return unauthorized();
  }

  try {
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("scholarshipDB");

    const reg = await db
      .collection("registrations")
      .findOne({ _id: new ObjectId(id) });

    if (!reg) {
      return NextResponse.json(
        { error: "Registration not found" },
        { status: 404 }
      );
    }

    const pdfBytes = await generateAdmitCardPDF(reg);

    return new NextResponse(pdfBytes.buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${reg.rollNumber}.pdf`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
