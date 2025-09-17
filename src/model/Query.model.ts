import mongoose, { Schema, model, models } from "mongoose";

const QueryFormSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    age: { type: Number, required: true, min: 1, max: 120 },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    location: { type: String, required: true, maxlength: 200 },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    mobile: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Invalid mobile number"],
    },
    enquiry: {
      type: String,
      required: true,
      enum: ["General", "Appointment", "Request Callback"],
    },
  },
  { timestamps: true }
);

// Prevents overwriting model on hot-reload
const QueryForm = models.QueryForm || model("QueryForm", QueryFormSchema);
export default QueryForm;
