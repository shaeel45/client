import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  firstPara: { type: String, required: true },
  secondPara: { type: String, required: true },
  thirdPara: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const About = mongoose.model("About", aboutSchema);
export default About;