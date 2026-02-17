import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

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
    const search  = searchParams.get("search")  || "";
    const cls     = searchParams.get("class")   || "";
    const page    = Math.max(1, parseInt(searchParams.get("page")  || "1"));
    const limit   = Math.max(1, parseInt(searchParams.get("limit") || "10"));
    const skip    = (page - 1) * limit;

    const client = await clientPromise;
    const db     = client.db("scholarshipDB");
    const col    = db.collection("registrations");

    const query: Record<string, any> = {};

    if (search) {
      query.$or = [
        { rollNumber:   { $regex: search, $options: "i" } },
        { studentName:  { $regex: search, $options: "i" } },
      ];
    }

    if (cls) {
      query.class = cls;
    }

    const [total, docs] = await Promise.all([
      col.countDocuments(query),
      col
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
    ]);

    const registrations = docs.map((doc) => ({
      id:          doc._id.toString(),
      rollNumber:  doc.rollNumber,
      studentName: doc.studentName,
      fatherName:  doc.fatherName,
      motherName:  doc.motherName,
      gender:      doc.gender,
      dob:         doc.dob,
      school:      doc.school,
      class:       doc.class,
      village:     doc.village,
      district:    doc.district,
      pincode:     doc.pincode,
      aadhar:      doc.aadhar,
      phone:       doc.phone,
      createdAt:   doc.createdAt,
    }));

    return NextResponse.json({
      registrations,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}