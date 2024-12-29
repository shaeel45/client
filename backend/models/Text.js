import mongoose from 'mongoose';

const textSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  firstPoint: { type: String, required: true },
  secondPoint: { type: String, default: "" },
  thirdPoint: { type: String, default: "" },
}, { timestamps: true });

const Text = mongoose.model("Text", textSchema);
export default Text;