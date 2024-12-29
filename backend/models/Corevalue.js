import mongoose from 'mongoose';

const corevalueSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Corevalue = mongoose.model("Corevalue", corevalueSchema);
export default Corevalue;