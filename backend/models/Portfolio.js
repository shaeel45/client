import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  niche: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
}, { timestamps: true });

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio ;