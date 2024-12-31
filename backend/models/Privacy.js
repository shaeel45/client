import mongoose from 'mongoose';

const privacySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Privacy = mongoose.model("Privacy", privacySchema);
export default Privacy;