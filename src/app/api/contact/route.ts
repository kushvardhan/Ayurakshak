import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for consultation form
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  location: z
    .string()
    .min(1, "Location is required")
    .max(200, "Location too long"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Invalid mobile number"),
  enquiry: z.string().min(1, "Enquiry type is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    // For now, we'll just log the data and return success
    console.log("Contact form submission:", validatedData);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your consultation request. Our medical team will contact you within 24 hours.",
        consultationId: `AYU-${Date.now()}`, // Generate a reference ID
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint is working" },
    { status: 200 }
  );
}
