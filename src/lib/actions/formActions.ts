"use server";

import { connectDB } from "@/db/db.connection";
import { z } from "zod";
import MessageForm from "@/models/MessageForm";
import QueryForm from "@/models/QueryForm";

// ==========================
// Validation Schemas
// ==========================
const querySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  age: z.coerce.number().min(1, "Age is required").max(120, "Invalid age"),
  gender: z.enum(["Male", "Female", "Other"]),
  location: z.string().trim().min(1, "Location is required").max(200),
  email: z.string().email("Invalid email format"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Invalid mobile number"),
  enquiry: z.enum([
    "Kidney Disease",
    "Liver Disease",
    "Cancer",
    "Heart Disease",
    "Blood Pressure",
    "Diabetes",
    "Others",
  ]),
});

const messageSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email format"),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

// ==========================
// Query Form Submission
// ==========================
export async function submitQueryForm(rawData: unknown) {
  try {
    await connectDB();

    // Validate input
    const data = querySchema.parse(rawData);

    // Save to DB
    await QueryForm.create(data);

    return {
      success: true,
      message:
        "Query submitted successfully! Our medical team will contact you within 24 hours.",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("QueryForm Error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.issues,
      };
    }

    return {
      success: false,
      message: "Something went wrong. Try again later.",
    };
  }
}

// ==========================
// Message Form Submission
// ==========================
export async function submitMessageForm(rawData: unknown) {
  try {
    await connectDB();

    // Validate input
    const data = messageSchema.parse(rawData);

    // Save to DB
    await MessageForm.create(data);

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("MessageForm Error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.issues,
      };
    }

    return {
      success: false,
      message: "Something went wrong. Try again later.",
    };
  }
}
