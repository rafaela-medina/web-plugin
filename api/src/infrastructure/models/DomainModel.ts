import mongoose from "mongoose";

const DomainSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  apiKey: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Domain", DomainSchema);
