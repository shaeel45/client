import mongoose from 'mongoose';

const addressCardSchema = new mongoose.Schema({
  addressHeading: { type: String, required: true },
  address: { type: String, required: true },
  addressImage: { type: String, required: true },
}, { timestamps: true });

const Addresscard = mongoose.model("Addresscard", addressCardSchema);
export default Addresscard;