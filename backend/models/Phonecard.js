import mongoose from 'mongoose';

const phoneCardSchema = new mongoose.Schema({

  phoneHeading: { type: String, required: true },
  phone: { type: String, required: true },
  phoneImage: { type: String, required: true },
  
}, { timestamps: true });

const Phonecard = mongoose.model("Phonecard", phoneCardSchema);
export default Phonecard;