import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientPosition: { type: String, required: true },
  clientImgPath: { type: String, required: true },
  clientComment: { type: String, required: true },
}, { timestamps: true });

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;