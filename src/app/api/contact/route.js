import { connectDB } from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    await connectDB();
    await Contact.create({ name, email, phone, message });

    return Response.json(
      { success: true, message: "Form submitted" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
