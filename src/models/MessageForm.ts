import { Schema, model, models } from "mongoose";

const MessageFormSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    message: { type: String, required: true, maxlength: 1000 }, 
  },
  { timestamps: true }
);

const MessageForm =
  models.MessageForm || model("MessageForm", MessageFormSchema);
export default MessageForm;
