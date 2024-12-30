import mongoose from 'mongoose';

const emailCardSchema = new mongoose.Schema({
  emailHeading: { type: String, required: true },
  email: { type: String, required: true },
  emailImage: { type: String, required: true },

  // phoneHeading: { type: String, required: true },
  // phone: { type: String, required: true },
  // phoneImage: { type: String, required: true },

  // addressHeading: { type: String, required: true },
  // address: { type: String, required: true },
  // addressImage: { type: String, required: true },
}, { timestamps: true });

const Emailcard = mongoose.model("Emailcard", emailCardSchema);
export default Emailcard;