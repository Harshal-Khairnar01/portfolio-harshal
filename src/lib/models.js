import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    max: 50,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Message=mongoose.models?.Message || mongoose.model("Message",msgSchema);