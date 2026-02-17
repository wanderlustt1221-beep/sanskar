import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("scholarshipDB");

    // Duplicate check
    const existing = await db
      .collection("registrations")
      .findOne({ aadhar: body.aadhar });

    if (existing) {
      return NextResponse.json(
        { error: "Aadhar already registered" },
        { status: 400 }
      );
    }

    // ===== CLASS CODE =====
    const classRaw = body.class.replace("th", "").replace("rd", "");
    const classCode = classRaw.padStart(2, "0");

    const lastStudent = await db
      .collection("registrations")
      .find({ class: body.class })
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    let sequence = 1;

    if (lastStudent.length > 0) {
      const lastRoll = lastStudent[0].rollNumber;
      const lastSeq = parseInt(lastRoll.slice(-3));
      sequence = lastSeq + 1;
    }

    const rollNumber = `6720${classCode}${sequence.toString().padStart(3, "0")}`;

    // ===== SAVE REGISTRATION (NO PDF BINARY) =====
    await db.collection("registrations").insertOne({
      studentName: body.studentName,
      fatherName: body.fatherName,
      motherName: body.motherName,
      gender: body.gender,
      dob: body.dob,
      school: body.school,
      class: body.class,
      village: body.village,
      district: body.district,
      pincode: body.pincode,
      aadhar: body.aadhar,
      phone: body.phone,
      rollNumber,
      createdAt: new Date(),
    });

    // ===== CREATE PDF =====
    const pdfDoc = await PDFDocument.create();

    // A4: 595 x 842 pts
    const page = pdfDoc.addPage([595, 842]);

    const fontBold    = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontNormal  = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    // ===== COLOR PALETTE =====
    const navyDark  = rgb(0.08, 0.17, 0.40);
    const navyMid   = rgb(0.13, 0.26, 0.55);
    const navyLight = rgb(0.88, 0.91, 0.97);
    const gold      = rgb(0.85, 0.68, 0.10);
    const white     = rgb(1, 1, 1);
    const darkText  = rgb(0.10, 0.12, 0.18);
    const midText   = rgb(0.38, 0.42, 0.50);
    const lightBg   = rgb(0.96, 0.97, 0.99);
    const borderGray = rgb(0.82, 0.85, 0.90);

    const W  = 595;
    const H  = 842;
    const ML = 40;
    const MR = 40;
    const IW = W - ML - MR; // 515

    // ===== OUTER BORDER =====
    page.drawRectangle({
      x: 12,
      y: 12,
      width: W - 24,
      height: H - 24,
      borderColor: navyDark,
      borderWidth: 2.5,
    });

    // Inner accent border
    page.drawRectangle({
      x: 18,
      y: 18,
      width: W - 36,
      height: H - 36,
      borderColor: gold,
      borderWidth: 0.7,
    });

    // ===== HEADER BAND =====
    const headerH = 108;
    const headerY = H - 12 - headerH;

    page.drawRectangle({
      x: 12,
      y: headerY,
      width: W - 24,
      height: headerH,
      color: navyDark,
    });

    // Gold accent stripe below header
    page.drawRectangle({
      x: 12,
      y: headerY - 4,
      width: W - 24,
      height: 4,
      color: gold,
    });

    // Institution name
    const instText = "SANSKAR GROUP OF INSTITUTIONS";
    const instW = fontBold.widthOfTextAtSize(instText, 15);
    page.drawText(instText, {
      x: (W - instW) / 2,
      y: headerY + headerH - 30,
      size: 15,
      font: fontBold,
      color: white,
    });

    // Thin gold separator line in header
    page.drawRectangle({
      x: ML + 40,
      y: headerY + headerH - 38,
      width: IW - 80,
      height: 0.6,
      color: gold,
    });

    // Exam title
    const examText = "SCHOLARSHIP EXAMINATION 2026";
    const examW = fontNormal.widthOfTextAtSize(examText, 10.5);
    page.drawText(examText, {
      x: (W - examW) / 2,
      y: headerY + headerH - 52,
      size: 10.5,
      font: fontNormal,
      color: rgb(0.78, 0.83, 0.94),
    });

    // ADMIT CARD
    const admitText = "ADMIT CARD";
    const admitW = fontBold.widthOfTextAtSize(admitText, 22);
    page.drawText(admitText, {
      x: (W - admitW) / 2,
      y: headerY + headerH - 82,
      size: 22,
      font: fontBold,
      color: gold,
    });

    // ===== PHOTO BOX (top-right, below header) =====
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

    // Dashed inner box visual hint
    page.drawRectangle({
      x: photoX + 6,
      y: photoY + 6,
      width: photoW - 12,
      height: photoH - 12,
      borderColor: borderGray,
      borderWidth: 0.5,
    });

    const photoLines = ["STUDENT", "PHOTO"];
    let photoLY = photoY + photoH / 2 + 8;
    for (const ln of photoLines) {
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
    const affixW = fontNormal.widthOfTextAtSize(affixText, 7);
    page.drawText(affixText, {
      x: photoX + (photoW - affixW) / 2,
      y: photoY + 9,
      size: 7,
      font: fontNormal,
      color: borderGray,
    });

    // ===== CANDIDATE DETAILS SECTION =====
    const detailsX = ML;
    const detailsW = W - MR - photoW - 20 - ML;
    const detailsTopY = headerY - 4 - 20;

    // Section label
    page.drawText("CANDIDATE DETAILS", {
      x: detailsX,
      y: detailsTopY,
      size: 8.5,
      font: fontBold,
      color: navyMid,
    });

    // Underline
    page.drawRectangle({
      x: detailsX,
      y: detailsTopY - 5,
      width: detailsW,
      height: 1,
      color: navyMid,
    });

    const candidateFields: [string, string][] = [
      ["Name",          body.studentName],
      ["Father's Name", body.fatherName],
      ["Mother's Name", body.motherName],
      ["Gender",        body.gender],
      ["Date of Birth", body.dob],
      ["School",        body.school],
      ["Class",         body.class],
    ];

    const rowH   = 18;
    const labelX = detailsX + 6;
    const colonX = detailsX + 104;
    const valueX = detailsX + 114;
    let   rowY   = detailsTopY - 18;

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

      page.drawText(label, {
        x: labelX,
        y: rowY + 1,
        size: 8.5,
        font: fontBold,
        color: midText,
      });

      page.drawText(":", {
        x: colonX,
        y: rowY + 1,
        size: 8.5,
        font: fontBold,
        color: midText,
      });

      page.drawText(value || "—", {
        x: valueX,
        y: rowY + 1,
        size: 9,
        font: fontBold,
        color: darkText,
      });

      rowY -= rowH + 1;
    }

    // ===== ROLL NUMBER BANNER =====
    const rollBannerY = Math.min(rowY, photoY) - 16;

    page.drawRectangle({
      x: ML,
      y: rollBannerY,
      width: IW,
      height: 30,
      color: navyDark,
    });

    const rollLabelText = "ROLL NUMBER :";
    page.drawText(rollLabelText, {
      x: ML + 14,
      y: rollBannerY + 9,
      size: 9,
      font: fontBold,
      color: rgb(0.78, 0.83, 0.94),
    });

    const rollLabelW = fontBold.widthOfTextAtSize(rollLabelText, 9);
    page.drawText(rollNumber, {
      x: ML + 14 + rollLabelW + 10,
      y: rollBannerY + 8,
      size: 13,
      font: fontBold,
      color: gold,
    });

    // ===== FULL DIVIDER 1 =====
    const div1Y = rollBannerY - 16;
    page.drawRectangle({
      x: ML,
      y: div1Y,
      width: IW,
      height: 0.7,
      color: borderGray,
    });

    // ===== EXAM DETAILS + EXAM CENTRE (two-column) =====
    const col2TopY = div1Y - 16;
    const colHalf  = (IW - 16) / 2;

    // Left: Exam Details
    page.drawText("EXAM DETAILS", {
      x: ML,
      y: col2TopY,
      size: 8.5,
      font: fontBold,
      color: navyMid,
    });
    page.drawRectangle({
      x: ML,
      y: col2TopY - 5,
      width: colHalf,
      height: 1,
      color: navyMid,
    });

    const examFields: [string, string][] = [
      ["Date",           "8 March 2026"],
      ["Duration",       "2 Hours"],
      ["Mode",           "Offline"],
      ["Reporting Time", "9:00 AM"],
      ["Syllabus",       "Previous Class Curriculum"],
    ];

    let examRowY = col2TopY - 20;
    for (let i = 0; i < examFields.length; i++) {
      const [lbl, val] = examFields[i];
      if (i % 2 === 0) {
        page.drawRectangle({
          x: ML,
          y: examRowY - 3,
          width: colHalf,
          height: 16,
          color: lightBg,
        });
      }
      page.drawText(`${lbl}:`, {
        x: ML + 6,
        y: examRowY,
        size: 8.5,
        font: fontBold,
        color: midText,
      });
      page.drawText(val, {
        x: ML + 105,
        y: examRowY,
        size: 8.5,
        font: fontBold,
        color: darkText,
      });
      examRowY -= 17;
    }

    // Right: Exam Centre
    const rightX = ML + colHalf + 16;

    page.drawText("EXAMINATION CENTRE", {
      x: rightX,
      y: col2TopY,
      size: 8.5,
      font: fontBold,
      color: navyMid,
    });
    page.drawRectangle({
      x: rightX,
      y: col2TopY - 5,
      width: colHalf,
      height: 1,
      color: navyMid,
    });

    // Centered centre box
    const centreBoxH  = 80;
    const centreBoxW  = colHalf;
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

    const centreLines: [string, number][] = [
      ["Exam Centre",    9],
      ["Sanskar School", 11],
      ["Danta, Sikar",   9],
    ];

    let centreLY = centreBoxY2 - centreBoxH + 16 + centreBoxH - 18;
    for (const [txt, sz] of centreLines) {
      const font = sz >= 11 ? fontBold : fontNormal;
      const tw   = font.widthOfTextAtSize(txt, sz);
      page.drawText(txt, {
        x: rightX + (centreBoxW - tw) / 2,
        y: centreLY,
        size: sz,
        font,
        color: sz >= 11 ? navyDark : midText,
      });
      centreLY -= sz + 7;
    }

    // ===== DIVIDER 2 =====
    const div2Y = Math.min(examRowY, centreBoxY2 - centreBoxH + 10) - 10;
    page.drawRectangle({
      x: ML,
      y: div2Y,
      width: IW,
      height: 0.7,
      color: borderGray,
    });

    // ===== IMPORTANT INSTRUCTIONS =====
    const instrTopY = div2Y - 16;

    page.drawText("IMPORTANT INSTRUCTIONS", {
      x: ML,
      y: instrTopY,
      size: 8.5,
      font: fontBold,
      color: navyMid,
    });
    page.drawRectangle({
      x: ML,
      y: instrTopY - 5,
      width: IW,
      height: 1,
      color: navyMid,
    });

    const instructions: string[] = [
      "Bring this admit card to the examination centre without fail.",
      "Arrive at the centre at least 30 minutes before the scheduled reporting time.",
      "Carry a valid photo ID proof (Aadhar Card / School ID) on exam day.",
      "Electronic gadgets including mobile phones are strictly prohibited inside.",
      "Follow all instructions issued by the invigilator during the examination.",
    ];

    let instrY = instrTopY - 22;
    for (const line of instructions) {
      page.drawCircle({
        x: ML + 7,
        y: instrY + 4,
        size: 2.2,
        color: navyMid,
      });
      page.drawText(line, {
        x: ML + 17,
        y: instrY,
        size: 8.5,
        font: fontNormal,
        color: darkText,
      });
      instrY -= 16;
    }

    // ===== FOOTER BAND =====
    const footerH = 44;
    const footerY = 22;

    page.drawRectangle({
      x: 12,
      y: footerY,
      width: W - 24,
      height: footerH,
      color: navyDark,
    });

    // Gold stripe above footer
    page.drawRectangle({
      x: 12,
      y: footerY + footerH,
      width: W - 24,
      height: 3,
      color: gold,
    });

    // Signature (right)
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

    // Footer note (left)
    page.drawText(
      "This is a computer-generated document and does not require a physical signature.",
      {
        x: ML + 2,
        y: footerY + 10,
        size: 6.5,
        font: fontOblique,
        color: rgb(0.55, 0.62, 0.78),
      }
    );

    // ===== GENERATE & RETURN PDF =====
    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${rollNumber}.pdf`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}