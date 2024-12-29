import mongoose from 'mongoose';

const visionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Vision = mongoose.model("Vision", visionSchema);
export default Vision;