import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import * as XLSX from "xlsx";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(req: Request) {
  const adminKey = req.headers.get("x-admin-key");
  if (!adminKey || adminKey !== process.env.ADMIN_SECRET) {
    return unauthorized();
  }

  try {
    const { searchParams } = new URL(req.url);
    const cls = searchParams.get("class") || "";

    const client = await clientPromise;
    const db     = client.db("scholarshipDB");

    const query: Record<string, any> = {};
    if (cls) query.class = cls;

    const docs = await db
      .collection("registrations")
      .find(query)
      .sort({ rollNumber: 1 })
      .toArray();

    const rows = docs.map((doc) => ({
      "Roll No":    doc.rollNumber,
      "Name":       doc.studentName,
      "Class":      doc.class,
      "School":     doc.school,
      "Village":    doc.village,
      "District":   doc.district,
      "Phone":      doc.phone,
      "Created At": doc.createdAt
        ? new Date(doc.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        : "",
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);

    // Auto column width
    const colKeys = ["Roll No", "Name", "Class", "School", "Village", "District", "Phone", "Created At"];
    const colWidths = colKeys.map((key) => {
      const maxLen = Math.max(
        key.length,
        ...docs.map((doc) => {
          const val = rows[docs.indexOf(doc)][key as keyof typeof rows[0]];
          return val ? String(val).length : 0;
        })
      );
      return { wch: Math.min(maxLen + 2, 50) };
    });
    ws["!cols"] = colWidths;

    // Style header row
    const range = XLSX.utils.decode_range(ws["!ref"] || "A1");
    for (let col = range.s.c; col <= range.e.c; col++) {
      const cellAddr = XLSX.utils.encode_cell({ r: 0, c: col });
      if (!ws[cellAddr]) continue;
      ws[cellAddr].s = {
        font:      { bold: true, color: { rgb: "FFFFFF" } },
        fill:      { fgColor: { rgb: "1A3A7A" } },
        alignment: { horizontal: "center" },
      };
    }

    const filename = cls
      ? `registrations_class_${cls.replace(/\s+/g, "_")}.xlsx`
      : "registrations_all.xlsx";

    XLSX.utils.book_append_sheet(wb, ws, "Registrations");

    const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx", cellStyles: true });

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}