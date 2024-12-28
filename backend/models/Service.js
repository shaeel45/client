import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  service: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);
export default Service;