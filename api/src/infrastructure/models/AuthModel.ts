import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});

export default mongoose.model("AuthToken", AuthSchema, "auth_tokens");
