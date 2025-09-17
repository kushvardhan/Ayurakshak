"use server";

import { connectDB } from "@/db/db.connection";
import MessageForm from "@/model/Message.Model";
import QueryForm from "@/model/Query.Model";
import { z } from "zod";

// ==========================
// Validation Schemas
// ==========================
const querySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  age: z.string().min(1, "Age is required"),
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
    const form = await QueryForm.create(data);

    // Convert Mongoose document to plain object
    const plainForm = {
      _id: form._id.toString(),
      name: form.name,
      age: form.age,
      gender: form.gender,
      location: form.location,
      email: form.email,
      mobile: form.mobile,
      enquiry: form.enquiry,
      createdAt: form.createdAt,
      updatedAt: form.updatedAt,
    };

    return {
      success: true,
      message: "Query submitted successfully!",
      form: plainForm,
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
    const form = await MessageForm.create(data);

    return { success: true, message: "Message sent successfully!", form };
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
