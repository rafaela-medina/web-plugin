import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  device: { type: String, required: true },
  os: { type: String, required: true },
  themeSwitchCount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("CollectedEvent", EventSchema, "collected_events");
